const mongoose = require("mongoose");
var student = new mongoose.Schema({
  name: String,
  age: String,
  address: String,
  phone: String,
});
var volunteer = new mongoose.Schema({
  name: String,
  // age: String,
  // specialization: String,
  email: String,
  address: String,
  phone: String,
  subject: String
});
var table = new mongoose.Schema({
  name: String,
  age: String,
  address: String,
  phone: String,
});
const Studentdb = mongoose.model("studentdb", student);
const Volunteerdb = mongoose.model("volunteerdb", volunteer);
const Tabledb = mongoose.model("tabledb", table);
module.exports = { Studentdb, Volunteerdb, Tabledb }
