const mongoose = require("mongoose");
var student = new mongoose.Schema({
  name: String,
  age: String,
  address: String,
  phone: String,
});
var volunteer = new mongoose.Schema({
  name: String,
  age: String,
  email: String,
  address: String,
  phone: String,
  subject: String
});
var lesson = new mongoose.Schema({
  subject: String,
  volunteer: String,
  date: String,
});
var subject = new mongoose.Schema({
  name: String,
});
var event = new mongoose.Schema({
  title: String,
  allDay: Boolean,
  start: Date,
  end: Date,
});
const Studentdb = mongoose.model("studentdb", student);
const Volunteerdb = mongoose.model("volunteerdb", volunteer);
const Lessondb = mongoose.model("lessonsdb", lesson);
const Subjectdb = mongoose.model("subjectdb", subject);
const Eventdb = mongoose.model("enentdb", event);
module.exports = { Studentdb, Volunteerdb, Lessondb, Subjectdb, Eventdb }
