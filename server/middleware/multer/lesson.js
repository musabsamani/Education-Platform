const multer = require("multer");
const path = require("path");
const { uploadBasePath, lessonBasePath } = require("../../helpers/fileSystemPathes");
const lessonUploadPath = path.join(uploadBasePath, lessonBasePath);
// let fileMimeTypes = ["application/pdf"];
const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, lessonUploadPath);
  },
  filename: async (req, file, callback) => {
    const fileName = file ? new Date().toISOString().replace(/[-:]/g, "") + "-" + file.fieldname + "-" + file.originalname : "";
    req.fileName = req.fileName = path.join(lessonUploadPath, fileName);
    callback(null, fileName);
  },
});
const lessonUpload = multer({
  storage: storage,
  // fileFilter: (req, file, callback) => {
  // callback(null, fileMimeTypes.includes(file.mimetype));
  // },
});
module.exports = { lessonUpload, lessonUploadPath };
