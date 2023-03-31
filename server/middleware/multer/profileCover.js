const multer = require("multer");
const path = require("path");
const { uploadBasePath, profileCoverBasePath } = require("../../helpers/fileSystemPathes");
const profileCoverUploadPath = path.join(uploadBasePath, profileCoverBasePath);
let imageMimeTypes = ["image/jpeg", "image/png", "image/gif", "image/bmp", "image/tiff", "image/svg+xml", "image/webp"];
const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, profileCoverUploadPath);
  },
  filename: async (req, file, callback) => {
    const fileName = file ? new Date().toISOString().replace(/[-:]/g, "") + "-" + file.fieldname + "-" + file.originalname : "";
    req.fileName = path.join(profileCoverUploadPath, fileName);
    callback(null, fileName);
  },
});
const profileUpload = multer({
  storage: storage,
  fileFilter: (req, file, callback) => {
    callback(null, imageMimeTypes.includes(file.mimetype));
  },
});
module.exports = { profileUpload, profileCoverUploadPath };
