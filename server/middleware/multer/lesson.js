const multer = require("multer");
const path = require("path");
const fs = require("fs");
const { uploadBasePath, lessonBasePath } = require("../../helpers/fileSystemPathes");
const lessonUploadPath = path.join(uploadBasePath, lessonBasePath);
let imageMimetypes = ["image/jpeg", "image/png", "image/gif", "image/bmp", "image/tiff", "image/svg+xml", "image/webp"];
let videoMimetypes = ["video/mp4", "video/webm", "video/ogg"];
let audioMimetypes = ["audio/mpeg", "audio/ogg", "audio/wav", "audio/mp3", "audio/x-m4a"];
let pdfMimetypes = ["application/pdf"];
let fileMimetypes = imageMimetypes.concat(videoMimetypes, audioMimetypes, pdfMimetypes);
let multipleUploads;
try {
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
      await req.fileName;
      const fileName = file ? new Date().toISOString().replace(/[-:]/g, "") + "-" + file.fieldname + "-" + file.originalname : "";
      let fileType;
      if (imageMimetypes.includes(file.mimetype)) {
        fileType = "image";
      } else if (videoMimetypes.includes(file.mimetype)) {
        fileType = "video";
      } else if (audioMimetypes.includes(file.mimetype)) {
        fileType = "audio";
      } else if (pdfMimetypes.includes(file.mimetype)) {
        fileType = "pdf";
      } else {
        fileType = "unknown";
      }
      if (req.fileName) {
        req.fileName.push({ fileType: fileType, filePath: path.join(lessonUploadPath, fileName) });
      } else {
        req.fileName = [{ fileType: fileType, filePath: path.join(lessonUploadPath, fileName) }];
      }
      callback(null, fileName);
    },
  });
  const lessonUpload = multer({
    storage: storage,
    fileFilter: (req, file, callback) => {
      // console.log(fileType);
      callback(null, fileMimetypes.includes(file.mimetype));
    },
  });
  multipleUploads = lessonUpload.fields([{ name: "file", maxCount: "4" }]);
} catch (err) {
  console.log(err.message);
}
module.exports = { multipleUploads, lessonUploadPath };
