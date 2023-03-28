var { Roomdb } = require("../model/model");
// create and save new room
exports.create = (req, res) => {
  if (!req.body) {
    res.status(400).send({ message: "request body can't be empty" });
    return;
  }
  const room = new Roomdb({
    _id: req.body._id,
    name: req.body.name,
  });
  room
    .save(room)
    .then((data) => {
      res.send("Room Added Successfully");
    })
    .catch((err) => {
      console.log(err.message);
      res.status(500).send({ message: err.message || "Some error occured while performing a create operation" });
    });
};
// return all roomss / single room
exports.find = (req, res) => {
  if (req.query.id) {
    const id = req.query.id;
    Roomdb.findById(id)
      .then((data) => {
        if (!data) {
          res.status(404).send({ message: `Error room with id ${id} Not found` });
        } else {
          res.send(data);
        }
      })
      .catch((err) => {
        res.status(500).send({ message: `Error occured while retriving room with id ${id}` });
      });
  } else {
    Roomdb.find()
      .then((room) => {
        res.send(room);
      })
      .catch((err) => {
        res.status(500).send({ message: err.message || "Error occured while retriving room information" });
      });
  }
};
// update room wih specified id
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({ message: "Data to update can not be empty" });
  }
  const id = req.params.id;
  Roomdb.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({ message: `Can't update room with id ${id}, maybe room doesn't exist` });
      } else {
        res.send(data);
      }
    })
    .catch((err) => {
      console.log(err.message);
      res.status(500).send({ message: "Error update room information" });
    });
};
// delete room wih specified id
exports.delete = (req, res) => {
  const id = req.params.id;
  Roomdb.findByIdAndDelete(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({ message: `Can't delete room with id ${id}. Maybe room doesn't exist` });
      } else {
        res.send({ message: "room Deleted successfully" });
      }
    })
    .catch((err) => {
      console.log(err.message);
      res.status(500).send({ message: "Couldn't delete room with id " + id });
    });
};
