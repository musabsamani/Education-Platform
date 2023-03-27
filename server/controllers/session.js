const { Sessiondb } = require("../model/model");
exports.create = (req, res) => {
  if (!req.body) {
    res.status(400).send({ message: "request bodu can't be empty" });
    return;
  }
  const session = new Sessiondb({
    _id: req.body._id,
    subjectCode: req.body.subjectCode,
    lesson: req.body.lesson,
    room: req.body.room,
    volunteer: req.body.volunteer,
    start: req.body.start,
    end: req.body.end,
  });
  session
    .save(session)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({ message: err.message || "Some Error occured while performing a create operation" });
    });
};
exports.find = (req, res) => {
  if (req.query.id) {
    const id = req.query.id;
    Sessiondb.findById(id)
      .then((data) => {
        if (!data) {
          res.status(404).send({ message: `Error Session with id ${id} Not Found` });
        } else {
          res.send(data);
        }
      })
      .catch((err) => {
        res.status(500).send({ message: `Error occured while retriving session with id ${id}` });
      });
  } else {
    Sessiondb.find()
      .then((sessions) => {
        res.send(sessions);
      })
      .catch((err) => {
        res.status(500).send({ message: err.message || "Error occured while retriving sessions information" });
      });
  }
};
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({ message: "Data to update can not be empty" });
  }
  const id = req.params.id;
  Sessiondb.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({ message: `Can't update session with id ${id}, maybe session doesn't exist` });
      } else {
        res.send(req.body);
      }
    })
    .catch((err) => {
      res.status(500).send({ message: "Error update lesson information" });
    });
};
exports.delete = (req, res) => {
  const id = req.params.id;
  Sessiondb.findByIdAndDelete(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({ message: `Can't delete session with id ${id}. Maybe session doesn't exist` });
      } else {
        res.send({ message: "session Deleted successfully" });
      }
    })
    .catch((err) => {
      res.status(500).send({ message: "Couldn't delete lesson with id " + id });
    });
};