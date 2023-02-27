
const path = require("path");
const fs = require("fs")
const profileUpload = require("../middleware/multer/profileCover");
const { Profiledb } = require("../model/model")
exports.upload = async (req, res) => {
    try {
        const fileName = req.file != null ? req.file.filename : null
        const profileCover = new Profiledb({
            profileCovername: fileName
        })
        const cover = await profileCover.save()
        res.send(fileName)
    } catch (err) {
        if (profileCover.profileCovername != null) {
            removeFile(profileCover.profileCovername)
        }
        // res.status(500).send("Error uploading profile cover")
        res.status(500).send({ message: err.message || "Error uploading profile cover" });
    }
}
exports.find = (req, res) => {
    if (req.query.id) {
        const id = req.query.id;
        Profiledb.findById(id).then((data) => {
            if (!data) {
                res.status(404).send({ message: `Error profile cover with id ${id} Not found` });
            } else {
                res.send(data);
            }
        })
            .catch((err) => {
                res.status(500).send({ message: `Error occured while rettriving profile cover with id ${id}` });
            });
    } else {
        Profiledb.find().then((profileCovers) => {
            res.send(profileCovers);
        })
            .catch((err) => {
                res.status(500).send({ message: err.message || "Error occured while retriving profile covers information" });
            });
    }
};
exports.delete = async (req, res) => {
    const id = req.params.id;
  Profiledb.findByIdAndDelete(id)
  .then((data) => {
      if (!data) {
        res.status(404).send({ message: `Can't delete profile cover with id ${id}. Maybe profile cover doesn't exist` });
      } else {
        removeFile(data.profileCovername)
        res.send({ message: "profile cover Deleted successfully" });
      }
    })
    .catch((err) => {
      res.status(500).send({ message: "Couldn't delete profile cover with id " + id });
    });
}
// helpers function
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