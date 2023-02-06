const mongoose = require("mongoose");
var user = new mongoose.Schema({
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
const Userdb = mongoose.model("userdb", user);
const Volunteerdb = mongoose.model("volunteerdb", volunteer);
const Tabledb = mongoose.model("tabledb", table);
