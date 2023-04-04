const { Lessondb } = require("../model/model");
const { removeFile } = require("../helpers/helpersFunction");
const { messageCRUD } = require("../helpers/messages");
// create and save new lesson
exports.create = async (req, res) => {
  try {
    if (Object.keys(req.body).length === 0) {
      res.status(400).send(messageCRUD("error", "create", "lesson", "empty-body"));
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
    await data.populate("subject");
    res.send(messageCRUD("success", "create", "lesson", data));
  } catch (err) {
    if (req.fileName) {
      removeFile(req.fileName);
    }
    console.error(err.message);
    res.status(500).send(messageCRUD("error", "create", "lesson", err.message));
  }
};
// return all lessons / single lesson
exports.find = async (req, res) => {
  if (req.query.id) {
    const id = req.query.id;
    try {
      const data = await Lessondb.findById(id).populate("subject");
      if (!data) {
        res.status(404).send(messageCRUD("error", "read", "lesson", id));
      } else {
        res.send(messageCRUD("success", "read", "lesson", data));
      }
    } catch (err) {
      console.error(err.message);
      res.status(500).send(messageCRUD("error", "read", "lesson", err.message));
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
      const data = await Lessondb.find(searchOptions).sort({ name: order }).populate("subject");
      res.send(messageCRUD("success", "read", "lesson", data));
    } catch (err) {
      console.log(err.message);
      res.status(500).send(messageCRUD("error", "read", "lesson", err.message));
    }
  }
};
// update lesson wih specified id
exports.update = async (req, res) => {
  try {
    if (Object.keys(req.body).length === 0) {
      if (req.fileName) {
        removeFile(req.fileName);
      }
      return res.status(400).send(messageCRUD("error", "update", "lesson", "empty-body"));
    }
    const id = req.params.id;
    const old = await Lessondb.findById(req.body._id);
    req.fileName ? (req.body["file"] = req.fileName) : "";
    const data = await Lessondb.findByIdAndUpdate(id, req.body, { new: true, useFindAndModify: false }).populate("subject");
    if (!data) {
      if (req.fileName) {
        removeFile(req.fileName);
      }
      res.status(404).send(messageCRUD("error", "update", "lesson", id));
    } else {
      if (req.fileName) {
        removeFile(old.file);
      }
      res.send(messageCRUD("success", "update", "lesson", data));
    }
  } catch (err) {
    if (req.fileName) {
      removeFile(req.fileName);
    }
    console.error(err.message);
    res.status(500).send(messageCRUD("error", "update", "lesson", err.message));
  }
};
// delete lesson wih specified id
exports.delete = async (req, res) => {
  const id = req.params.id;
  try {
    const data = await Lessondb.findByIdAndDelete(id);
    if (!data) {
      res.status(404).send(messageCRUD("error", "delete", "lesson", id));
    } else {
      if (data.file) {
        removeFile(data.file);
      }
      res.send(messageCRUD("success", "delete", "lesson", data));
    }
  } catch (err) {
    console.log(err.message);
    res.status(500).send(messageCRUD("error", "delete", "lesson", err.message));
  }
};
