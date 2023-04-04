const { Sessiondb } = require("../model/model");
const { populateFind, populateSave } = require("../helpers/populate");
const { messageCRUD } = require("../helpers/messages");
exports.create = async (req, res) => {
  try {
    if (Object.keys(req.body).length === 0) {
      res.status(400).send(messageCRUD("error", "create", "session", "empty-body"));
      return;
    }
    const session = new Sessiondb({
      _id: req.body._id,
      subject: req.body.subject,
      lesson: req.body.lesson,
      room: req.body.room,
      volunteer: req.body.volunteer,
      start: req.body.start,
      end: req.body.end,
    });
    const data = await populateSave(await session.save(), "session");
    res.send(messageCRUD("success", "create", "session", data));
  } catch (err) {
    console.log(err.message);
    res.status(500).send(messageCRUD("error", "create", "session", err.message));
  }
};
exports.find = async (req, res) => {
  if (req.query.id) {
    const id = req.query.id;
    try {
      const data = await populateFind(Sessiondb.findById(id), "session");
      if (!data) {
        res.status(404).send(messageCRUD("error", "read", "session", id));
      } else {
        res.send(messageCRUD("success", "read", "session", data));
      }
    } catch (err) {
      res.status(500).send(messageCRUD("error", "read", "session", err.message));
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
      const data = await populateFind(Sessiondb.find(), "session");
      res.send(messageCRUD("success", "read", "session", data));
    } catch (err) {
      res.status(500).send(messageCRUD("error", "read", "session", err.message));
    }
  }
};
exports.update = async (req, res) => {
  try {
    if (Object.keys(req.body).length === 0) {
      return res.status(400).send(messageCRUD("error", "update", "session", "empty-body"));
    }
    const id = req.params.id;
    const data = await populateFind(Sessiondb.findByIdAndUpdate(id, req.body, { new: true, useFindAndModify: false }), "session");
    if (!data) {
      res.status(404).send(messageCRUD("error", "update", "session", id));
    } else {
      res.send(messageCRUD("success", "update", "session", data));
    }
  } catch (err) {
    console.log(err.message);
    res.status(500).send(messageCRUD("error", "update", "session", err.message));
  }
};
exports.delete = async (req, res) => {
  const id = req.params.id;
  try {
    const data = await populateFind(Sessiondb.findByIdAndDelete(id), "session");
    if (!data) {
      res.status(404).send(messageCRUD("error", "delete", "session", id));
    } else {
      res.send(messageCRUD("success", "delete", "session", data));
    }
  } catch (err) {
    console.log(err.message);
    res.status(500).send(messageCRUD("error", "delete", "session", err.message));
  }
};
