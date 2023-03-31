const { Sessiondb } = require("../model/model");
exports.create = async (req, res) => {
  try {
    if (!req.body) {
      res.status(400).send({ message: "request bodu can't be empty" });
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
    const data = await session.save();
    await data.populate("subject");
    await data.populate("lesson");
    await data.populate("room");
    await data.populate("volunteer");
    res.send(data);
  } catch (err) {
    console.log(err.message);
    res.status(500).send({ message: err.message || "Some Error occured while performing a create operation" });
  }
};
exports.find = async (req, res) => {
  if (req.query.id) {
    const id = req.query.id;
    try {
      const data = await Sessiondb.findById(id).populate("subject").populate("lesson").populate("room").populate("volunteer");
      if (!data) {
        res.status(404).send({ message: `Error Session with id ${id} Not Found` });
      } else {
        res.send(data);
      }
    } catch (err) {
      res.status(500).send({ message: `Error occured while retriving session with id ${id}` });
    }
  } else {
    try {
      const data = Sessiondb.find().populate("subject").populate("lesson").populate("room").populate("volunteer");
      res.send(data);
    } catch (err) {
      res.status(500).send({ message: err.message || "Error occured while retriving sessions information" });
    }
  }
};
exports.update = async (req, res) => {
  try {
    if (!req.body) {
      return res.status(400).send({ message: "Data to update can not be empty" });
    }
    const id = req.params.id;
    const data = await Sessiondb.findByIdAndUpdate(id, req.body, { new: true, useFindAndModify: false }).populate("subject").populate("lesson").populate("room").populate("volunteer");
    if (!data) {
      res.status(404).send({ message: `Can't update session with id ${id}, maybe session doesn't exist` });
    } else {
      res.send(data);
    }
  } catch (err) {
    console.log(err.message);
    res.status(500).send({ message: "Error update lesson information" });
  }
};
exports.delete = async (req, res) => {
  const id = req.params.id;
  try {
    const data = await Sessiondb.findByIdAndDelete(id);
    if (!data) {
      res.status(404).send({ message: `Can't delete session with id ${id}. Maybe session doesn't exist` });
    } else {
      res.send({ message: "session Deleted successfully" });
    }
  } catch (err) {
    console.log(err.message);
    res.status(500).send({ message: "Couldn't delete lesson with id " + id });
  }
};
