var { Studentdb } = require("../model/model");
// create and save new student
exports.create = async (req, res) => {
  if (!req.body) {
    res.status(400).send({ message: "request body can't be empty" });
    return;
  }
  const student = new Studentdb({
    _id: req.body._id,
    name: req.body.name,
    age: req.body.age,
    address: req.body.address,
    phone: req.body.phone,
  });
  student
    .save(student)
    .then((data) => {
      res.send("student Added successfully");
      // res.redirect("/students/new");
    })
    .catch((err) => {
      res.status(500).send({ message: err.message || "Some error occured while performing a create operation" });
    });
};
// return all students / single student
exports.find = (req, res) => {
  if (req.query.id) {
    const id = req.query.id;
    Studentdb.findById(id)
      .then((data) => {
        if (!data) {
          res.status(404).send({ message: `Error student with id ${id} Not found` });
        } else {
          res.send(data);
        }
      })
      .catch((err) => {
        res.status(500).send({ message: `Error occured while rettriving student with id ${id}` });
      });
  } else {
    Studentdb.find()
      .then((student) => {
        res.send(student);
      })
      .catch((err) => {
        res.status(500).send({ message: err.message || "Error occured while retriving student information" });
      });
  }
};
// update student wih specified id
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({ message: "Data to update can not be empty" });
  }
  const id = req.params.id;
  Studentdb.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({ message: `Can't update student with id ${id}, maybe student doesn't exist` });
      } else {
        res.send(data);
      }
    })
    .catch((err) => {
      res.status(500).send({ message: "Error update student information" });
    });
};
// delete student wih specified id
exports.delete = (req, res) => {
  const id = req.params.id;
  Studentdb.findByIdAndDelete(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({ message: `Can't delete student with id ${id}. Maybe student doesn't exist` });
      } else {
        res.send({ message: "student Deleted successfully" });
      }
    })
    .catch((err) => {
      res.status(500).send({ message: "Couldn't delete student with id " + id });
    });
};
