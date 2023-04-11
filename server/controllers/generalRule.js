const { GeneralRuledb } = require("../model/model");
const { messageCRUD } = require("../helpers/messages");
exports.create = async (req, res) => {
  try {
    if (Object.keys(req.body).length === 0) {
      res.status(400).send(messageCRUD("error", "create", "generalRule", "empty-body"));
      return;
    }
    const generalRule = new GeneralRuledb({
      name: req.body.name,
      value: req.body.value,
      description: req.body.description,
    });
    const data = await generalRule.save();
    res.send(messageCRUD("success", "create", "generalRule", data));
  } catch (err) {
    console.log(err.message);
    res.status(500).send(messageCRUD("error", "create", "generalRule", err.message));
  }
};
exports.find = async (req, res) => {
  if (req.query.id) {
    const id = req.query.id;
    try {
      const data = await GeneralRuledb.findById(id);
      if (!data) {
        res.status(404).send(messageCRUD("error", "read", "generalRule", id));
      } else {
        res.send(messageCRUD("success", "read", "generalRule", data));
      }
    } catch (err) {
      console.log(err.message);
      res.status(500).send(messageCRUD("error", "read", "generalRule", err.message));
    }
  } else {
    try {
      let data = await GeneralRuledb.find();
      res.send(messageCRUD("success", "read", "generalRule", data));
    } catch (err) {
      console.log(err.message);
      res.status(500).send(messageCRUD("error", "read", "generalRule", err.message));
    }
  }
};
exports.update = async (req, res) => {
  try {
    if (Object.keys(req.body).length === 0) {
      return res.status(400).send(messageCRUD("error", "update", "generalRule", "empty-body"));
    }
    const id = req.params.id;
    const data = await GeneralRuledb.findByIdAndUpdate(id, req.body, { new: true, useFindAndModify: false });
    if (!data) {
      res.status(404).send(messageCRUD("error", "update", "generalRule", id));
    } else {
      res.send(messageCRUD("success", "update", "generalRule", data));
    }
  } catch (err) {
    console.log(err.message);
    res.status(500).send(messageCRUD("error", "update", "generalRule", err.message));
  }
};
exports.delete = async (req, res) => {
  if (req.query.id) {
    const id = req.query.id;
    try {
      const data = await GeneralRuledb.findOneAndDelete({ _id: id });
      if (!data) {
        res.status(404).send(messageCRUD("error", "delete", "generalRule", id));
      } else {
        res.send(messageCRUD("success", "delete", "generalRule", data));
      }
    } catch (err) {
      console.log(err.message);
      res.status(500).send(messageCRUD("error", "delete", "generalRule", err.message));
    }
  } else {
    try {
      const data = await GeneralRuledb.deleteMany();
      res.send(messageCRUD("success", "delete", "generalRule", data));
    } catch (err) {
      console.log(err.message);
      res.status(500).send(messageCRUD("error", "delete", "generalRule", err.message));
    }
  }
};
