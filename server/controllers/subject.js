const { Subjectdb, Lessondb } = require("../model/model");
const { messageCRUD } = require("../helpers/messages");
// create and save new subject
exports.create = async (req, res) => {
  try {
    if (Object.keys(req.body).length === 0) {
      res.status(400).send(messageCRUD("error", "create", "subject", "empty-body"));
      return;
    }
    const subject = new Subjectdb({
      _id: req.body._id,
      code: req.body.code,
      name: req.body.name,
      description: req.body.description,
    });
    const data = await subject.save();
    res.send(messageCRUD("success", "create", "subject", data));
  } catch (err) {
    console.log(err.message);
    res.status(500).send(messageCRUD("error", "create", "subject", err.message));
  }
};
// return all subjects / single subject
exports.find = async (req, res) => {
  if (req.query.id) {
    const id = req.query.id;
    try {
      const data = await Subjectdb.findById(id);
      if (!data) {
        res.status(404).send(messageCRUD("error", "read", "subject", id));
      } else {
        res.send(messageCRUD("success", "read", "subject", data));
      }
    } catch (err) {
      console.log(err.message);
      res.status(500).send(messageCRUD("error", "read", "subject", err.message));
    }
  } else {
    try {
      let searchOptions = {};
      if (req.body.searchOptions != null && req.body.searchOptions !== "") {
        searchOptions.name = new RegExp(req.body.searchOptions, "i");
      }
      let order = 1;
      if (req.body.order != null && req.body.order !== "") {
        order = req.body.order;
      }
      const data = await Subjectdb.find(searchOptions);
      res.send(messageCRUD("success", "read", "subject", data));
    } catch (err) {
      console.log(err.message);
      res.status(500).send(messageCRUD("error", "read", "subject", err.message));
    }
  }
};
// update subject wih specified id
exports.update = async (req, res) => {
  try {
    if (Object.keys(req.body).length === 0) {
      return res.status(400).send(messageCRUD("error", "update", "subject", "empty-body"));
    }
    const id = req.params.id;
    const data = await Subjectdb.findByIdAndUpdate(id, req.body, { new: true, useFindAndModify: false });
    if (!data) {
      res.status(404).send(messageCRUD("error", "update", "subject", id));
    } else {
      res.send(messageCRUD("success", "update", "subject", data));
    }
  } catch (err) {
    console.log(err.message);
    res.status(500).send(messageCRUD("error", "update", "subject", err.message));
  }
};
// delete subject wih specified id
exports.delete = async (req, res) => {
  try {
    const id = req.params.id;
    let data = await Subjectdb.findOneAndDelete({ _id: id });
    if (!data) {
      res.status(404).send(messageCRUD("error", "delete", "subject", id));
    } else {
      res.send(messageCRUD("success", "delete", "subject", data));
    }
  } catch (err) {
    if (err.message === "cannot delete this document it has refrencing") {
      console.log(err.message);
      console.log(err.message);
      console.log(err.message);
      console.log(err.message);
      res.status(500).send(messageCRUD("warning", "delete", "subject", err.message));
    } else {
      res.status(500).send(messageCRUD("error", "delete", "subject", err.message));
    }
  }
};
