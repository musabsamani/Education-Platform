const { Roomdb } = require("../model/model");
const { messageCRUD } = require("../helpers/messages");
// create and save new room
exports.create = async (req, res) => {
  try {
    if (Object.keys(req.body).length === 0) {
      res.status(400).send(messageCRUD("error", "create", "room", "empty-body"));
      return;
    }
    const room = new Roomdb({
      _id: req.body._id,
      name: req.body.name,
    });
    const data = await room.save();
    res.send(messageCRUD("success", "create", "room", data));
  } catch (err) {
    console.log(err.message);
    res.status(500).send(messageCRUD("error", "create", "room", err.message));
  }
};
// return all roomss / single room
exports.find = async (req, res) => {
  if (req.query.id) {
    const id = req.query.id;
    try {
      const data = await Roomdb.findById(id);
      if (!data) {
        res.status(404).send(messageCRUD("error", "read", "room", id));
      } else {
        res.send(messageCRUD("success", "read", "room", data));
      }
    } catch (err) {
      console.log(err.message);
      res.status(500).send(messageCRUD("error", "read", "room", err.message));
    }
  } else {
    try {
      const data = await Roomdb.find();
      res.send(messageCRUD("success", "read", "room", data));
    } catch (err) {
      console.log(err.message);
      res.status(500).send(messageCRUD("error", "read", "room", err.message));
    }
  }
};
// update room wih specified id
exports.update = async (req, res) => {
  try {
    if (Object.keys(req.body).length === 0) {
      return res.status(400).send(messageCRUD("error", "update", "room", "empty-body"));
    }
    const id = req.params.id;
    const data = await Roomdb.findByIdAndUpdate(id, req.body, { new: true, useFindAndModify: false });
    if (!data) {
      res.status(404).send(messageCRUD("error", "update", "room", id));
    } else {
      res.send(messageCRUD("success", "update", "room", data));
    }
  } catch (err) {
    console.log(err.message);
    res.status(500).send(messageCRUD("error", "update", "room", err.message));
  }
};
// delete room wih specified id
exports.delete = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await Roomdb.findByIdAndDelete(id);
    if (!data) {
      res.status(404).send(messageCRUD("error", "delete", "room", id));
    } else {
      res.send(messageCRUD("success", "delete", "room", data));
    }
  } catch (err) {
    console.log(err.message);
    res.status(500).send(messageCRUD("error", "delete", "room", err.message));
  }
};
