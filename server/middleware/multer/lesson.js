const multer = require("multer");
const path = require("path");
const fs = require("fs");
const root = path.dirname(path.dirname(path.dirname(__dirname)));
const { uploadBasePath, lessonBasePath } = require("../../helpers/fileSystemPathes");
const lessonUploadPath = path.join(root, uploadBasePath, lessonBasePath);
// let fileMimeTypes = ["application/pdf"];
if (!fs.existsSync(lessonUploadPath)) {
  fs.mkdirSync(lessonUploadPath);
}
const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    if (!fs.existsSync(lessonUploadPath)) {
      fs.mkdirSync(lessonUploadPath);
    }
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
