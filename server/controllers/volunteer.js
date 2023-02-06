var { Volunteerdb } = require("../model/model");
// create and save new volunteer
exports.create = (req, res) => {
  if (!req.body) {
    res.status(400).send({ message: "request body can't be empty" });
    return;
  }
  const volunteer = new Volunteerdb({
    name: req.body.name,
    email: req.body.email,
    address: req.body.address,
    phone: req.body.phone,
    subject: req.body.subject,
  });
  volunteer
    .save(volunteer)
    .then((data) => {
      res.send("Volunteer Added successfully");
    })
    .catch((err) => {
      res.status(500).send({ message: err.message || "Some error occured while performing a create operation" });
    });
};
// return all volunteers / single volunteer
exports.find = (req, res) => {
  if (req.query.id) {
    const id = req.query.id;
    Volunteerdb.findById(id)
      .then((data) => {
        if (!data) {
          res.status(404).send({ message: `Error volunteer with id ${id} Not found` });
        } else {
          res.send(data);
        }
      })
      .catch((err) => {
        res.status(500).send({ message: `Error occured while rettriving volunteer with id ${id}` });
      });
  } else {
    Volunteerdb.find()
      .then((volunteer) => {
        res.send(volunteer);
      })
      .catch((err) => {
        res.status(500).send({ message: err.message || "Error occured while retriving volunteer information" });
      });
  }
};
// update volunteer wih specified id
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({ message: "Data to update can not be empty" });
  }
  const id = req.params.id;
  Volunteerdb.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({ message: `Can't update volunteer with id ${id}, maybe volunteer doesn't exist` });
      } else {
        res.send(data);
      }
    })
    .catch((err) => {
      res.status(500).send({ message: "Error update volunteer information" });
    });
};
// delete volunteer wih specified id
exports.delete = (req, res) => {
  const id = req.params.id;
  Volunteerdb.findByIdAndDelete(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({ message: `Can't delete volunteer with id ${id}. Maybe volunteer doesn't exist` });
      } else {
        res.send({ message: "Volunteer Deleted successfully" });
      }
    })
    .catch((err) => {
      res.status(500).send({ message: "Couldn't delete volunteer with id " + id });
    });
};
