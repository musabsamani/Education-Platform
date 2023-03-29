const { Volunteerdb } = require("../model/model");
const { removeFile } = require("../helpers/helpersFunction");
const { profileCoverUploadPath } = require("../middleware/multer/profileCover");
// create and save new volunteer
exports.create = async (req, res) => {
  if (!req.body) {
    res.status(400).send({ message: "request body can't be empty" });
    return;
  }
  const volunteer = new Volunteerdb({
    _id: req.body._id,
    name: req.body.name,
    time: req.body.time,
    age: req.body.age,
    email: req.body.email,
    address: req.body.address,
    phone: req.body.phone,
    subject: req.body.subject,
    profileCoverName: req.fileName,
  });
  volunteer
    .save(volunteer)
    .then((volunteer) => {
      volunteer.profileCoverName = volunteer.imagePath;
      res.send(volunteer);
    })
    .catch((err) => {
      if (volunteer.profileCoverName) {
        removeFile(profileCoverUploadPath, volunteer.profileCoverName);
      }
      console.error(err.message);
      res.status(500).send({ message: err.message || "Some error occured while performing a create operation" });
    });
};
// return all volunteers / single volunteer
exports.find = (req, res) => {
  if (req.query.id) {
    const id = req.query.id;
    Volunteerdb.findById(id)
      .then((data) => {
        if (!data) {
          res.status(404).send({ message: `Error volunteer with id ${id} Not found` });
        } else {
          data.profileCoverName = data.imagePath;
          res.send(data);
        }
      })
      .catch((err) => {
        res.status(500).send({ message: `Error occured while rettriving volunteer with id ${id}` });
      });
  } else {
    Volunteerdb.find()
      .then((volunteers) => {
        volunteers.forEach((volunteer) => {
          volunteer.profileCoverName = volunteer.imagePath;
        });
        res.send(volunteers);
      })
      .catch((err) => {
        res.status(500).send({ message: err.message || "Error occured while retriving volunteer information" });
      });
  }
};
// update volunteer wih specified id
exports.update = async (req, res) => {
  if (!req.body) {
    if (req.fileName) {
      removeFile(profileCoverUploadPath, req.body.profileCoverName);
    }
    return res.status(400).send({ message: "Data to update can not be empty" });
  }
  const id = req.params.id;
  req.fileName ? (req.body["profileCoverName"] = req.fileName) : "";
  const old = await Volunteerdb.findById(req.body._id);
  Volunteerdb.findByIdAndUpdate(id, req.body, { new: true, useFindAndModify: false })
    .then((data) => {
      if (!data) {
        if (req.fileName) {
          removeFile(profileCoverUploadPath, req.fileName);
        }
        res.status(404).send({ message: `Can't update volunteer with id ${id}, maybe volunteer doesn't exist` });
      } else {
        if (req.fileName) {
          removeFile(profileCoverUploadPath, old.profileCoverName);
        }
        data.profileCoverName = data.imagePath;
        res.send(data);
      }
    })
    .catch((err) => {
      if (req.fileName) {
        removeFile(profileCoverUploadPath, req.fileName);
      }
      console.error(err.message);
      res.status(500).send({ message: "Error update volunteer information" });
    });
};
// delete volunteer wih specified id
exports.delete = (req, res) => {
  const id = req.params.id;
  Volunteerdb.findByIdAndDelete(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({ message: `Can't delete volunteer with id ${id}. Maybe volunteer doesn't exist` });
      } else {
        if (data.profileCoverName) {
          removeFile(profileCoverUploadPath, data.profileCoverName);
        }
        res.send({ message: "Volunteer Deleted successfully" });
      }
    })
    .catch((err) => {
      console.error(err.message);
      res.status(500).send({ message: "Couldn't delete volunteer with id " + id });
    });
};
