const { Volunteerdb } = require("../model/model");
const { removeFile } = require("../helpers/helpersFunction");
const { messageCRUD } = require("../helpers/messages");
// create and save new volunteer
exports.create = async (req, res) => {
  try {
    if (Object.keys(req.body).length === 0) {
      res.status(400).send(messageCRUD("error", "create", "volunteer", "empty-body"));
      return;
    }
    const volunteer = new Volunteerdb({
      name: req.body.name,
      age: req.body.age,
      email: req.body.email,
      address: req.body.address,
      phone: req.body.phone,
      subject: req.body.subject,
      profileCover: req.fileName,
    });
    const data = await volunteer.save();
    await data.populate("subject");
    res.send(messageCRUD("success", "create", "volunteer", data));
  } catch (err) {
    if (req.fileName) {
      removeFile(req.fileName);
    }
    console.error(err.message);
    res.status(500).send(messageCRUD("error", "create", "volunteer", err.message));
  }
};
// return all volunteers / single volunteer
exports.find = async (req, res) => {
  if (req.query.id) {
    const id = req.query.id;
    try {
      const data = await Volunteerdb.findById(id).populate("subject");
      if (!data) {
        res.status(404).send(messageCRUD("error", "read", "volunteer", id));
      } else {
        res.send(messageCRUD("success", "read", "volunteer", data));
      }
    } catch (err) {
      console.error(err.message);
      res.status(500).send(messageCRUD("error", "read", "volunteer", err.message));
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
      const data = await Volunteerdb.find(searchOptions).populate("subject");
      res.send(messageCRUD("success", "read", "volunteer", data));
    } catch (err) {
      if (req.fileName) {
        removeFile(req.fileName);
      }
      console.error(err.message);
      res.status(500).send(messageCRUD("error", "read", "volunteer", err.message));
    }
  }
};
// update volunteer wih specified id
exports.update = async (req, res) => {
  const id = req.params.id;
  try {
    if (Object.keys(req.body).length === 0) {
      if (req.fileName) {
        removeFile(req.fileName);
      }
      return res.status(400).send(messageCRUD("error", "update", "volunteer", "empty-body"));
    }
    req.fileName ? (req.body["profileCover"] = req.fileName) : "";
    const old = await Volunteerdb.findById(req.body._id);
    const data = await Volunteerdb.findByIdAndUpdate(id, req.body, { new: true, useFindAndModify: false }).populate("subject");
    if (!data) {
      if (req.fileName) {
        removeFile(req.fileName);
      }
      res.status(404).send(messageCRUD("error", "update", "volunteer", id));
    } else {
      if (req.fileName) {
        removeFile(old.profileCover);
      }
      res.send(messageCRUD("success", "update", "volunteer", data));
    }
  } catch (err) {
    if (req.fileName) {
      removeFile(req.fileName);
    }
    console.error(err.message);
    res.status(500).send(messageCRUD("error", "update", "volunteer", err.message));
  }
};
// delete volunteer wih specified id
exports.delete = async (req, res) => {
  const id = req.params.id;
  try {
    const data = await Volunteerdb.findOneAndDelete({ _id: id }).populate("subject");
    if (!data) {
      res.status(404).send(messageCRUD("error", "delete", "volunteer", id));
    } else {
      if (data.profileCover) {
        removeFile(data.profileCover);
      }
      res.send(messageCRUD("success", "delete", "volunteer", data));
    }
  } catch (err) {
    if (err.message === "cannot delete this document it has refrencing") {
      res.status(500).send(messageCRUD("warning", "delete", "volunteer", err.message));
    } else {
      res.status(500).send(messageCRUD("error", "delete", "volunteer", err.message));
    }
  }
};
