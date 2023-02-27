const mongoose = require("mongoose");
const path = require("path")
const student = new mongoose.Schema({
  _id: String,
  name: String,
  age: String,
  address: String,
  phone: String,
});
const volunteer = new mongoose.Schema({
  _id: String,
  name: String,
  age: String,
  email: String,
  address: String,
  phone: String,
  subject: String
});
const lesson = new mongoose.Schema({
  _id: String,
  subject: String,
  volunteer: String,
  date: String,
});
const subject = new mongoose.Schema({
  _id: String,
  name: String,
});
const event = new mongoose.Schema({
  _id: String,
  title: String,
  start: String,
  end: String,
});
const profile = new mongoose.Schema({
  // _id: String,
  profileCovername: String,
  // data: Buffer,
  // contentType: String
});
profile.virtual("profileCoverPath").get(function () {
  if (this.profileCovername != null) {
    return path.join("/", uploadBasePath, profileCoverBasePath, this.profileCovername)
  }
})
const Studentdb = mongoose.model("studentdb", student);
const Volunteerdb = mongoose.model("volunteerdb", volunteer);
const Lessondb = mongoose.model("lessonsdb", lesson);
const Subjectdb = mongoose.model("subjectdb", subject);
const Eventdb = mongoose.model("enentdb", event);
const Profiledb = mongoose.model('profiledb', profile);
// profile cover file paths
// root/upload
const uploadBasePath = "upload"
// profile cover file paths
// root/uploadBasePath/profileCovers
const profileCoverBasePath = "profileCovers"
module.exports = { Studentdb, Volunteerdb, Lessondb, Subjectdb, Eventdb, Profiledb, uploadBasePath, profileCoverBasePath }
