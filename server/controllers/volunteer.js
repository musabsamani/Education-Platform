const { Volunteerdb } = require("../model/model");
const { removeFile } = require("../helpers/helpersFunction");
// create and save new volunteer
exports.create = async (req, res) => {
  try {
    if (!req.body) {
      res.status(400).send({ message: "request body can't be empty" });
      return;
    }
    const volunteer = new Volunteerdb({
      _id: req.body._id,
      name: req.body.name,
      time: req.body.time,
      age: req.body.age,
      email: req.body.email,
      address: req.body.address,
      phone: req.body.phone,
      subject: req.body.subject,
      profileCover: req.fileName,
    });
    const data = await volunteer.save();
    res.send(data);
  } catch (err) {
    if (req.fileName) {
      removeFile(req.fileName);
    }
    console.error(err.message);
    res.status(500).send({ message: err.message || "Some error occured while performing a create operation" });
  }
};
// return all volunteers / single volunteer
exports.find = async (req, res) => {
  if (req.query.id) {
    const id = req.query.id;
    try {
      const data = await Volunteerdb.findById(id);
      if (!data) {
        res.status(404).send({ message: `Error volunteer with id ${id} Not found` });
      } else {
        res.send(data);
      }
    } catch (err) {
      console.error(err.message);
      res.status(500).send({ message: `Error occured while rettriving volunteer with id ${id}` });
    }
  } else {
    try {
      const data = await Volunteerdb.find();
      res.send(data);
    } catch (err) {
      if (req.fileName) {
        removeFile(req.fileName);
      }
      console.error(err.message);
      res.status(500).send({ message: err.message || "Error occured while retriving volunteer information" });
    }
  }
};
// update volunteer wih specified id
exports.update = async (req, res) => {
  const id = req.params.id;
  try {
    if (!req.body) {
      if (req.fileName) {
        removeFile(req.fileName);
      }
      return res.status(400).send({ message: "Data to update can not be empty" });
    }
    req.fileName ? (req.body["profileCover"] = req.fileName) : "";
    const old = await Volunteerdb.findById(req.body._id);
    const data = Volunteerdb.findByIdAndUpdate(id, req.body, { new: true, useFindAndModify: false });
    if (!data) {
      if (req.fileName) {
        removeFile(req.fileName);
      }
      res.status(404).send({ message: `Can't update volunteer with id ${id}, maybe volunteer doesn't exist` });
    } else {
      if (req.fileName) {
        removeFile(old.profileCover);
      }
      res.send(data);
    }
  } catch (err) {
    if (req.fileName) {
      removeFile(req.fileName);
    }
    console.error(err.message);
    res.status(500).send({ message: "Error update volunteer information" });
  }
};
// delete volunteer wih specified id
exports.delete = async (req, res) => {
  const id = req.params.id;
  try {
    const data = await Volunteerdb.findByIdAndDelete(id);
    if (!data) {
      res.status(404).send({ message: `Can't delete volunteer with id ${id}. Maybe volunteer doesn't exist` });
    } else {
      if (data.profileCover) {
        removeFile(data.profileCover);
      }
      res.send(data);
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send({ message: "Couldn't delete volunteer with id " + id });
  }
};
