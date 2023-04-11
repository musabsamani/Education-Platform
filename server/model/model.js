const mongoose = require("mongoose");
const { preFindOneAndDeleteMiddleware, subjectPreFindOneAndDeleteMiddleware } = require("../middleware/mongoose/delete");
const studentSchema = new mongoose.Schema({
  _id: String,
  name: String,
  age: String,
  address: String,
  phone: String,
  time: {
    type: Date,
    Immutable: true,
    default: () => Date.now(),
  },
});
const volunteerSchema = new mongoose.Schema({
  _id: String,
  name: String,
  age: String,
  email: String,
  address: String,
  phone: String,
  profileCover: String,
  subject: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "subjectdb",
  },
  time: {
    type: Date,
    Immutable: true,
    default: () => Date.now(),
  },
});
const roomSchema = new mongoose.Schema({
  _id: String,
  name: String,
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
const sessionSchema = new mongoose.Schema({
  _id: String,
  name: String,
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
  time: {
    type: Date,
    Immutable: true,
    default: () => Date.now(),
  },
});
const generalRuleSchema = new mongoose.Schema({
  name: String,
  value: Boolean,
  description: String,
});
subjectSchema.pre("findOneAndDelete", function (next) {
  subjectPreFindOneAndDeleteMiddleware([Volunteerdb, Lessondb, Sessiondb], GeneralRuledb, this._conditions._id, next);
});
roomSchema.pre("findOneAndDelete", function (next) {
  preFindOneAndDeleteMiddleware(Sessiondb, GeneralRuledb, "room", this._conditions._id, next);
});
volunteerSchema.pre("findOneAndDelete", function (next) {
  preFindOneAndDeleteMiddleware(Sessiondb, GeneralRuledb, "volunteer", this._conditions._id, next);
});
lessonSchema.pre("findOneAndDelete", function (next) {
  preFindOneAndDeleteMiddleware(Sessiondb, GeneralRuledb, "lesson", this._conditions._id, next);
});
const Studentdb = mongoose.model("studentdb", studentSchema);
const Volunteerdb = mongoose.model("volunteerdb", volunteerSchema);
const Lessondb = mongoose.model("lessonsdb", lessonSchema);
const Roomdb = mongoose.model("roomdb", roomSchema);
const Sessiondb = mongoose.model("sessiondb", sessionSchema);
const Subjectdb = mongoose.model("subjectdb", subjectSchema);
const GeneralRuledb = mongoose.model("generalRuledb", generalRuleSchema);

module.exports = { Studentdb, Volunteerdb, Lessondb, Subjectdb, Roomdb, Sessiondb, GeneralRuledb };
