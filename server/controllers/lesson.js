var { Lessondb } = require("../model/model");
// create and save new class
exports.create = (req, res) => {
  if (!req.body) {
    res.status(400).send({ message: "request body can't be empty" });
    return;
  }
  const lesson = new Lessondb({
    subject: req.body.subject,
    volunteer: req.body.volunteer,
    date: req.body.date
  });
  lesson
    .save(lesson)
    .then((data) => {
      res.send("Lesson Added Successfully");
    })
    .catch((err) => {
      res.status(500).send({ message: err.message || "Some error occured while performing a create operation" });
    });
};
// return all lessons / single lesson
exports.find = (req, res) => {
  if (req.query.id) {
    const id = req.query.id;
    Lessondb.findById(id)
      .then((data) => {
        if (!data) {
          res.status(404).send({ message: `Error lesson with id ${id} Not found` });
        } else {
          res.send(data);
        }
      })
      .catch((err) => {
        res.status(500).send({ message: `Error occured while rettriving lesson with id ${id}` });
      });
  } else {
    Lessondb.find()
      .then((lesson) => {
        res.send(lesson);
      })
      .catch((err) => {
        res.status(500).send({ message: err.message || "Error occured while retriving lesson information" });
      });
  }
};
// update lesson wih specified id
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({ message: "Data to update can not be empty" });
  }
  const id = req.params.id;
  Lessondb.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({ message: `Can't update lesson with id ${id}, maybe lesson doesn't exist` });
      } else {
        res.send(data);
      }
    })
    .catch((err) => {
      res.status(500).send({ message: "Error update lesson information" });
    });
};
// delete lesson wih specified id
exports.delete = (req, res) => {
  const id = req.params.id;
  Lessondb.findByIdAndDelete(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({ message: `Can't delete lesson with id ${id}. Maybe lesson doesn't exist` });
      } else {
        res.send({ message: "lesson Deleted successfully" });
      }
    })
    .catch((err) => {
      res.status(500).send({ message: "Couldn't delete lesson with id " + id });
    });
};
