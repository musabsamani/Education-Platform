const express = require("express");
const route = express.Router();
const studentController = require("../controllers/students");
const volunteerController = require("../controllers/volunteer");
const lessonsController = require("../controllers/lesson");
const subjectController = require("../controllers/subject");

/**
 * @description Root Route
 * @method GET /
 */

route.get("/", (req, res) => { res.render("index") });
// ================ student router ===================;
// API
route.get("/api/students", studentController.find);
route.post("/api/students", studentController.create);
route.put("/api/students/:id", studentController.update);
route.delete("/api/students/:id", studentController.delete);

// =============== volunteer router ==================
// API
route.post("/api/volunteers", volunteerController.create);
route.get("/api/volunteers", volunteerController.find);
route.put("/api/volunteers/:id", volunteerController.update);
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
module.exports = route;