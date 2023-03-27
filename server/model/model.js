const mongoose = require("mongoose");
const { uploadBasePath, profileCoverBasePath } = require("../helpers/fileSystemPathes");
const studentSchema = new mongoose.Schema({
  _id: String,
  name: String,
  age: String,
  address: String,
  phone: String,
});
const volunteerSchema = new mongoose.Schema({
  _id: String,
  name: String,
  age: String,
  email: String,
  address: String,
  phone: String,
  subject: String,
  profileCoverName: String,
  time: String,
});
const lessonSchema = new mongoose.Schema({
  _id: String,
  subjectCode: String,
  name: String,
  content: String,
});
const subjectSchema = new mongoose.Schema({
  _id: String,
  code: String,
  name: String,
  description: String,
});
const eventSchema = new mongoose.Schema({
  _id: String,
  title: String,
  start: String,
  end: String,
});
const roomSchema = new mongoose.Schema({
  _id: String,
  name: String,
});

const sessionSchema = new mongoose.Schema({
  _id: String,
  subjectCode: String,
  lesson: String,
  room: String,
  volunteer: String,
  start: String,
  end: String,
});

volunteerSchema.virtual("imagePath").get(function () {
  if (this.profileCoverName) {
    return `${uploadBasePath}/${profileCoverBasePath}/${this.profileCoverName}`;
  }
  return "";
});

const Studentdb = mongoose.model("studentdb", studentSchema);
const Volunteerdb = mongoose.model("volunteerdb", volunteerSchema);
const Lessondb = mongoose.model("lessonsdb", lessonSchema);
const Subjectdb = mongoose.model("subjectdb", subjectSchema);
const Eventdb = mongoose.model("enentdb", eventSchema);
const Roomdb = mongoose.model("roomdb", roomSchema);
const Sessiondb = mongoose.model("sessiondb", sessionSchema);
module.exports = { Studentdb, Volunteerdb, Lessondb, Subjectdb, Eventdb, Roomdb, Sessiondb };
