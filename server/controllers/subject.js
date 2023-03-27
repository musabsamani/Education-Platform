var { Subjectdb } = require("../model/model");
// create and save new subject
exports.create = (req, res) => {
  if (!req.body) {
    res.status(400).send({ message: "request body can't be empty" });
    return;
  }
  const subject = new Subjectdb({
    _id: req.body._id,
    code: req.body.code,
    name: req.body.name,
    description: req.body.description,
  });
  subject
    .save(subject)
    .then((data) => {
      res.send("Subject Added successfully");
      // res.redirect("/subjects/new");
    })
    .catch((err) => {
      res.status(500).send({ message: err.message || "Some error occured while performing a create operation" });
    });
};
// return all subjects / single subject
exports.find = (req, res) => {
  if (req.query.id) {
    const id = req.query.id;
    Subjectdb.findById(id)
      .then((data) => {
        if (!data) {
          res.status(404).send({ message: `Error subject with id ${id} Not found` });
        } else {
          res.send(data);
        }
      })
      .catch((err) => {
        res.status(500).send({ message: `Error occured while rettriving subject with id ${id}` });
      });
  } else {
    Subjectdb.find()
      .then((subject) => {
        res.send(subject);
      })
      .catch((err) => {
        res.status(500).send({ message: err.message || "Error occured while retriving subject information" });
      });
  }
};
// update subject wih specified id
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({ message: "Data to update can not be empty" });
  }
  const id = req.params.id;
  Subjectdb.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({ message: `Can't update subject with id ${id}, maybe subject doesn't exist` });
      } else {
        res.send(data);
      }
    })
    .catch((err) => {
      res.status(500).send({ message: "Error update subject information" });
    });
};
// delete subject wih specified id
exports.delete = (req, res) => {
  const id = req.params.id;
  Subjectdb.findByIdAndDelete(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({ message: `Can't delete subject with id ${id}. Maybe subject doesn't exist` });
      } else {
        res.send({ message: "subject Deleted successfully" });
      }
    })
    .catch((err) => {
      res.status(500).send({ message: "Couldn't delete subject with id " + id });
    });
};
