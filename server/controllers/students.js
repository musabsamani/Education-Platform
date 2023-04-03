const { Studentdb } = require("../model/model");
const { messageCRUD } = require("../helpers/messages");
// create and save new student
exports.create = async (req, res) => {
  try {
    if (Object.keys(req.body).length === 0) {
      res.status(400).send(messageCRUD("error", "create", "student", "empty-body"));
      return;
    }
    const student = new Studentdb({
      _id: req.body._id,
      name: req.body.name,
      age: req.body.age,
      address: req.body.address,
      phone: req.body.phone,
    });
    const data = await student.save();
    res.send(messageCRUD("success", "create", "student", data));
  } catch (err) {
    console.log(err.message);
    res.status(500).send(messageCRUD("error", "create", "student", err.message));
  }
};
// return all students / single student
exports.find = async (req, res) => {
  if (req.query.id) {
    const id = req.query.id;
    try {
      const data = await Studentdb.findById(id);
      if (!data) {
        res.status(404).send(messageCRUD("error", "read", "student", id));
      } else {
        res.send(messageCRUD("success", "read", "student", data));
      }
    } catch (err) {
      res.status(500).send(messageCRUD("error", "read", "student", err.message));
    }
  } else {
    try {
      const data = await Studentdb.find();
      res.send(messageCRUD("success", "read", "student", data));
    } catch (err) {
      res.status(500).send(messageCRUD("error", "read", "student", err.message));
    }
  }
};
// update student wih specified id
exports.update = async (req, res) => {
  try {
    if (Object.keys(req.body).length === 0) {
      return res.status(400).send(messageCRUD("error", "update", "student", "empty-body"));
    }
    const id = req.params.id;
    const data = await Studentdb.findByIdAndUpdate(id, req.body, { new: true, useFindAndModify: false });
    if (!data) {
      res.status(404).send(messageCRUD("error", "update", "student", id));
    } else {
      res.send(messageCRUD("success", "update", "student", data));
    }
  } catch (err) {
    console.log(err.message);
    res.status(500).send(messageCRUD("error", "update", "student", err.message));
  }
};
// delete student wih specified id
exports.delete = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await Studentdb.findByIdAndDelete(id);
    if (!data) {
      res.status(404).send(messageCRUD("error", "delete", "student", id));
    } else {
      res.send(messageCRUD("success", "delete", "student", data));
    }
  } catch (err) {
    console.log(err.message);
    res.status(500).send(messageCRUD("error", "delete", "student", err.message));
  }
};
