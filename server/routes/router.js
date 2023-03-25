const express = require("express");
const route = express.Router();
const studentController = require("../controllers/students");
const volunteerController = require("../controllers/volunteer");
const lessonsController = require("../controllers/lesson");
const subjectController = require("../controllers/subject");
const eventController = require("../controllers/event");
const emailController = require("../controllers/email");
const profileUpload = require("../middleware/multer/profileCover");

/**
 * @description Root Route
 * @method GET /
 */

route.get("/", (req, res) => {
  res.send("server is running !!!");
});
// ================ student router ===================;
// API
route.get("/api/students", studentController.find);
route.post("/api/students", studentController.create);
route.put("/api/students/:id", studentController.update);
route.delete("/api/students/:id", studentController.delete);

// =============== volunteer router ==================
// API
route.post("/api/volunteers", profileUpload.single("profileCover"), volunteerController.create);
route.get("/api/volunteers", volunteerController.find);
route.put("/api/volunteers/:id", profileUpload.single("profileCover"), volunteerController.update);
route.delete("/api/volunteers/:id", volunteerController.delete);
// =============== lesson router ==================
// API
route.post("/api/lessons", lessonsController.create);
route.get("/api/lessons", lessonsController.find);
route.put("/api/lessons/:id", lessonsController.update);
route.delete("/api/lessons/:id", lessonsController.delete);
// =============== subject router ==================
// API
route.post("/api/subjects", subjectController.create);
route.get("/api/subjects", subjectController.find);
route.put("/api/subjects/:id", subjectController.update);
route.delete("/api/subjects/:id", subjectController.delete);
// =============== subject router ==================
// API
route.post("/api/events", eventController.create);
route.get("/api/events", eventController.find);
route.put("/api/events/:id", eventController.update);
route.delete("/api/events/:id", eventController.delete);
// =============== subject router ==================
// API
route.post("/api/email", emailController.send);
module.exports = route;
