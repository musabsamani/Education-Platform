const { Eventdb } = require("../model/model");
// create and save new event
exports.create = (req, res) => {
  if (!req.body) {
    res.status(400).send({ message: "request body can't be empty" });
    return;
  }
  const event = new Eventdb({
    _id: req.body._id,
    title: req.body.title,
    start: req.body.start,
    end: req.body.end,
  });
  event
    .save(event)
    .then((data) => {
      // res.send("Event Added successfully")
      res.send(event);
    })
    .catch((err) => {
      res.status(500).send({ message: err.message || "Some error occured while performing a create operation" });
    });
};
// return all events / single event
exports.find = (req, res) => {
  if (req.query.id) {
    const id = req.query.id;
    Eventdb.findById(id)
      .then((data) => {
        if (!data) {
          res.status(404).send({ message: `Error event with id ${id} Not found` });
        } else {
          res.send(data);
        }
      })
      .catch((err) => {
        res.status(500).send({ message: `Error occured while rettriving event with id ${id}` });
      });
  } else {
    Eventdb.find()
      .then((event) => {
        res.send(event);
      })
      .catch((err) => {
        res.status(500).send({ message: err.message || "Error occured while retriving event information" });
      });
  }
};
// update event wih specified id
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({ message: "Data to update can not be empty" });
  }
  const id = req.params.id;
  Eventdb.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({ message: `Can't update event with id ${id}, maybe event doesn't exist` });
      } else {
        res.send(data);
      }
    })
    .catch((err) => {
      res.status(500).send({ message: "Error update event information" });
    });
};
// delete event wih specified id
exports.delete = (req, res) => {
  const id = req.params.id;
  Eventdb.findByIdAndDelete(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({ message: `Can't delete event with id ${id}. Maybe event doesn't exist` });
      } else {
        res.send({ message: "event Deleted successfully" });
      }
    })
    .catch((err) => {
      res.status(500).send({ message: "Couldn't delete event with id " + id });
    });
};
