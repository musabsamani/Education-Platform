const { Lessondb } = require("../model/model");
const { removeFile } = require("../helpers/helpersFunction");
// create and save new lesson
exports.create = async (req, res) => {
  try {
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
    const data = await lesson.save();
    res.send(await data.populate("subject"));
  } catch (err) {
    if (req.fileName) {
      removeFile(req.fileName);
    }
    console.error(err.message);
    res.status(500).send({ message: err.message || "Some error occured while performing a create operation" });
  }
};
// return all lessons / single lesson
exports.find = async (req, res) => {
  if (req.query.id) {
    const id = req.query.id;
    try {
      const data = await Lessondb.findById(id).populate("subject");
      if (!data) {
        res.status(404).send({ message: `Error lesson with id ${id} Not found` });
      } else {
        res.send(data);
      }
    } catch (err) {
      console.error(err.message);
      res.status(500).send({ message: `Error occured while retriving lesson with id ${id}` });
    }
  } else {
    try {
      const data = await Lessondb.find().populate("subject");
      res.send(data);
    } catch (err) {
      console.log(err.message);
      res.status(500).send({ message: err.message || "Error occured while retriving lesson information" });
    }
  }
};
// update lesson wih specified id
exports.update = async (req, res) => {
  try {
    if (!req.body) {
      if (req.fileName) {
        removeFile(req.fileName);
      }
      return res.status(400).send({ message: "Data to update can not be empty" });
    }
    const id = req.params.id;
    const old = await Lessondb.findById(req.body._id);
    req.fileName ? (req.body["file"] = req.fileName) : "";
    const data = await Lessondb.findByIdAndUpdate(id, req.body, { new: true, useFindAndModify: false }).populate("subject");
    if (!data) {
      if (req.fileName) {
        removeFile(req.fileName);
      }
      res.status(404).send({ message: `Can't update lesson with id ${id}, maybe lesson doesn't exist` });
    } else {
      if (req.fileName) {
        removeFile(old.file);
      }
      res.send(data);
    }
  } catch (err) {
    if (req.fileName) {
      removeFile(req.fileName);
    }
    console.error(err.message);
    res.status(500).send({ message: "Error update lesson information" });
  }
};
// delete lesson wih specified id
exports.delete = async (req, res) => {
  const id = req.params.id;
  try {
    const data = await Lessondb.findByIdAndDelete(id);
    if (!data) {
      res.status(404).send({ message: `Can't delete lesson with id ${id}. Maybe lesson doesn't exist` });
    } else {
      if (data.file) {
        removeFile(data.file);
      }
      res.send(data);
    }
  } catch (err) {
    console.log(err.message);
    res.status(500).send({ message: "Couldn't delete lesson with id " + id });
  }
};
