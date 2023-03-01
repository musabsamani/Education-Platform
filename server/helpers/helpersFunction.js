const profileUpload = require("../middleware/multer/profileCover")
const path = require("path")
const fs = require(("fs"))
function removeFile(fileName) {
    const cover = path.join(profileUpload.profileCoverUploadPath, fileName)
    fs.unlink(cover, err => {
        if (err) {
            console.error(err)
        }
        console.log("File deleted successfully")
    })
    console.log(cover)
}
module.exports = { removeFile }