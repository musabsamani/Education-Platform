const { Lessondb } = require("../model/model");
const { lessonUploadPath } = require("../middleware/multer/lesson");
const { removeFile } = require("../helpers/helpersFunction");
// create and save new lesson
exports.create = (req, res) => {
  if (!req.body) {
    res.status(400).send({ message: "request body can't be empty" });
    return;
  }
  const lesson = new Lessondb({
    _id: req.body._id,
    subject: req.body.subject,
    name: req.body.name,
    content: req.body.content,
    file: req.fileName,
  });
  lesson
    .save()
    .then(async (data) => {
      await data.populate("subject");
      data.file = data.filePath;
      res.send(data);
    })
    .catch((err) => {
      if (lesson.file) {
        removeFile(lessonUploadPath, lesson.file);
      }
      console.error(err.message);
      res.status(500).send({ message: err.message || "Some error occured while performing a create operation" });
    });
};
// return all lessons / single lesson
exports.find = (req, res) => {
  if (req.query.id) {
    const id = req.query.id;
    Lessondb.findById(id)
      .populate("subject")
      .then((data) => {
        if (!data) {
          res.status(404).send({ message: `Error lesson with id ${id} Not found` });
        } else {
          data.file = data.filePath;
          res.send(data);
        }
      })
      .catch((err) => {
        res.status(500).send({ message: `Error occured while rettriving lesson with id ${id}` });
      });
  } else {
    Lessondb.find()
      .populate("subject")
      .then((lessons) => {
        lessons.forEach((lesson) => {
          lesson.file = lesson.filePath;
        });
        res.send(lessons);
      })
      .catch((err) => {
        res.status(500).send({ message: err.message || "Error occured while retriving lesson information" });
      });
  }
};
// update lesson wih specified id
exports.update = async (req, res) => {
  try {
    if (!req.body) {
      if (req.fileName) {
        removeFile(lessonUploadPath, req.body.file);
      }
      return res.status(400).send({ message: "Data to update can not be empty" });
    }
    const id = req.params.id;
    const old = await Lessondb.findById(req.body._id);
    req.fileName ? (req.body["file"] = req.fileName) : "";
    const data = await Lessondb.findByIdAndUpdate(id, req.body, { new: true, useFindAndModify: false }).populate("subject");
    if (!data) {
      if (req.fileName) {
        removeFile(lessonUploadPath, data.file);
      }
      res.status(404).send({ message: `Can't update lesson with id ${id}, maybe lesson doesn't exist` });
    } else {
      if (req.fileName) {
        removeFile(lessonUploadPath, old.file);
      }
      data.file = data.filePath;
      res.send(data);
    }
  } catch (err) {
    if (req.fileName) {
      removeFile(lessonUploadPath, req.fileName);
    }
    console.error(err.message);
    res.status(500).send({ message: "Error update lesson information" });
  }
};
// delete lesson wih specified id
exports.delete = (req, res) => {
  const id = req.params.id;
  Lessondb.findByIdAndDelete(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({ message: `Can't delete lesson with id ${id}. Maybe lesson doesn't exist` });
      } else {
        if (data.file) {
          removeFile(lessonUploadPath, data.file);
        }
        res.send({ message: "lesson Deleted successfully" });
      }
    })
    .catch((err) => {
      console.log(err.message);
      res.status(500).send({ message: "Couldn't delete lesson with id " + id });
    });
};
