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
    filename: async (req, file, callback) => {
        await req.body
        let fileName;
        if (req.body.profileCoverName) {
            fileName = req.body.profileCoverName;
        } else {
            fileName = String(Math.random());
        }
        callback(null, fileName);
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