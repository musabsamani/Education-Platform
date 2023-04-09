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
  profileCover: String,
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
const roomSchema = new mongoose.Schema({
  _id: String,
  name: String,
});

const sessionSchema = new mongoose.Schema({
  _id: String,
  name: String,
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
  if (this.profileCover) {
    return `${uploadBasePath}/${profileCoverBasePath}/${this.profileCover}`;
  }
  return "";
});
lessonSchema.virtual("filePath").get(function () {
  if (this.file) {
    return `${uploadBasePath}/${lessonBasePath}/${this.file}`;
  }
  return "";
});
// volunteerSchema.pre("findByIdAndDelete",function(){

// })
const Studentdb = mongoose.model("studentdb", studentSchema);
const Volunteerdb = mongoose.model("volunteerdb", volunteerSchema);
const Lessondb = mongoose.model("lessonsdb", lessonSchema);
const Subjectdb = mongoose.model("subjectdb", subjectSchema);
const Roomdb = mongoose.model("roomdb", roomSchema);
const Sessiondb = mongoose.model("sessiondb", sessionSchema);
// subjectSchema.pre("findByIdAndDelete", function () {
//   Lessondb.find({ subject: this.id }, (err, subjects) => {
//     if (err) {
//       next(err);
//     } else if (subjects.length > 0) {
//       nextThursday(new Error("this subject has lesson delete lesson first"));
//     } else {
//       next();
//     }
//   });
// });
// lessonSchema.pre("findByIdAndDelete",function(){

// })
// roomSchema.pre("findByIdAndDelete",function(){

// })
module.exports = { Studentdb, Volunteerdb, Lessondb, Subjectdb, Roomdb, Sessiondb };
