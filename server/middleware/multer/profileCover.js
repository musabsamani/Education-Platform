const multer = require("multer")
const path = require("path")
const { uploadBasePath, profileCoverBasePath } = require("../../model/model")
const profileCoverUploadPath = path.join(uploadBasePath, profileCoverBasePath)
let imageMimeTypes = ["image/jpeg", "image/png", "image/gif", "image/bmp", "image/tiff", "image/svg+xml", "image/webp"
];
const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, profileCoverUploadPath)
    },
    filename: (req, file, callback) => {
        callback(null, new Date().toISOString().replace(/[-:]/g, '') + '-' + file.fieldname + '-' + file.originalname)
    }
});
const profileUpload = multer({
    storage: storage,
    fileFilter: (req, file, callback) => {
        callback(null, imageMimeTypes.includes(file.mimetype))
    },
})
module.exports = profileUpload;
module.exports.profileCoverUploadPath = profileCoverUploadPath