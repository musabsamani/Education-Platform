const mongoose = require("mongoose");
const { uploadBasePath, profileCoverBasePath, lessonBasePath } = require("../helpers/fileSystemPathes");
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
  // time: {
  //   type: Date,
  //   Immutable: true,
  //   default: () => Date.now(),
  // },
  time: String,
});
const subjectSchema = new mongoose.Schema({
  _id: String,
  code: String,
  name: String,
  description: String,
});
const lessonSchema = new mongoose.Schema({
  _id: String,
  subject: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "subjectdb",
  },
  name: String,
  content: String,
  file: String,
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
  subject: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "subjectdb",
  },
  lesson: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "lessonsdb",
  },
  room: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "roomdb",
  },
  volunteer: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "volunteerdb",
  },
  start: String,
  end: String,
});

volunteerSchema.virtual("imagePath").get(function () {
  if (this.profileCoverName) {
    return `${uploadBasePath}/${profileCoverBasePath}/${this.profileCoverName}`;
  }
  return "";
});
lessonSchema.virtual("filePath").get(function () {
  if (this.file) {
    return `${uploadBasePath}/${lessonBasePath}/${this.file}`;
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
