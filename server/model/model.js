const mongoose = require("mongoose");
var schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: String,
  address: String,
  phone: String,
});
const Userdb = mongoose.model("userdb", schema);
module.exports = Userdb;
