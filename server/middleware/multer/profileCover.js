const multer = require("multer")
const path = require("path")
const { uploadBasePath, profileCoverBasePath } = require("../../helpers/fileSystemPathes")
const profileCoverUploadPath = path.join(uploadBasePath, profileCoverBasePath)
let imageMimeTypes = ["image/jpeg", "image/png", "image/gif", "image/bmp", "image/tiff", "image/svg+xml", "image/webp"
];
const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, profileCoverUploadPath)
    },
    filename: async (req, file, callback) => {
        // const timeStampFileName = new Date().toISOString().replace(/[-:]/g, '') + "-" + fileInputFieldName + "-" + formFile.name
        // const fileName = formFile.name ? timeStampFileName : ""
        const body = await req.body
        let fileName = body.profileCoverName
        console.log(fileName)
        if (!fileName) {
            fileName = String(Math.random());
        }
        console.log(fileName)
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