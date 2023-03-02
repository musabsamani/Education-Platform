const mongoose = require("mongoose");
const { uploadBasePath, profileCoverBasePath } = require("../helpers/fileSystemPathes")
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
});
const lessonSchema = new mongoose.Schema({
  _id: String,
  subject: String,
  date: String,
  volunteer: String
});
const subjectSchema = new mongoose.Schema({
  _id: String,
  name: String,
});
const eventSchema = new mongoose.Schema({
  _id: String,
  title: String,
  start: String,
  end: String,
});

volunteerSchema.virtual('imagePath').get(function () {
  if (this.profileCoverName) {
    return `${uploadBasePath}/${profileCoverBasePath}/${this.profileCoverName}`
  }
  return ""
});

const Studentdb = mongoose.model("studentdb", studentSchema);
const Volunteerdb = mongoose.model("volunteerdb", volunteerSchema);
const Lessondb = mongoose.model("lessonsdb", lessonSchema);
const Subjectdb = mongoose.model("subjectdb", subjectSchema);
const Eventdb = mongoose.model("enentdb", eventSchema);
module.exports = { Studentdb, Volunteerdb, Lessondb, Subjectdb, Eventdb, uploadBasePath, profileCoverBasePath }
