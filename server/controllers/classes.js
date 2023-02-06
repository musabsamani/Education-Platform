var { Userdb, Volunteerdb, Tabledb } = require("../model/model");
// create and save new user
exports.create = (req, res) => {
  if (!req.body) {
    res.status(400).send({ message: "request body can't be empty" });
    return;
  }
  const user = new Userdb({
    name: req.body.name,
    age: req.body.age,
    address: req.body.address,
    phone: req.body.phone,
  });
  user
    .save(user)
    .then((data) => {
      res.redirect("/add_user");
    })
    .catch((err) => {
      res.status(500).send({ message: err.message || "Some error occured while performing a create operation" });
    });
};
// return all users / single user
exports.find = (req, res) => {
  if (req.query.id) {
    const id = req.query.id;
    Userdb.findById(id)
      .then((data) => {
        if (!data) {
          res.status(404).send({ message: `Error user with id ${id} Not found` });
        } else {
          res.send(data);
        }
      })
      .catch((err) => {
        res.status(500).send({ message: `Error occured while rettriving user with id ${id}` });
      });
  } else {
    Userdb.find()
      .then((user) => {
        res.send(user);
      })
      .catch((err) => {
        res.status(500).send({ message: err.message || "Error occured while retriving user information" });
      });
  }
};
// update user wih specified id
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({ message: "Data to update can not be empty" });
  }
  const id = req.params.id;
  Userdb.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({ message: `Can't update user with id ${id}, maybe user doesn't exist` });
      } else {
        res.send(data);
      }
    })
    .catch((err) => {
      res.status(500).send({ message: "Error update user information" });
    });
};
// delete user wih specified id
exports.delete = (req, res) => {
  const id = req.params.id;
  Userdb.findByIdAndDelete(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({ message: `Can't delete user with id ${id}. Maybe user doesn't exist` });
      } else {
        res.send({ message: "User Deleted successfully" });
      }
    })
    .catch((err) => {
      res.status(500).send({ message: "Couldn't delete user with id " + id });
    });
};
