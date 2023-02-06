const express = require("express");
const route = express.Router();
// const studentServices = require("../services/student");
// const volunteerServices = require("../services/volunteer");
// const lessonServices = require("../services/lesson");
// const subjectServices = require("../services/subject");
const studentController = require("../controllers/students");
const volunteerController = require("../controllers/volunteer");
// const lessonController = require("../controllers/lesson");
// const subjectController = require("../controllers/subject");

/**
 * @description Root Route
 * @method GET /
 */

route.get("/", (req, res) => { res.render("index") });
// ?===================================================
// ?===================================================
// ?================ student router ===================
// services
// route.get("/students", studentServices.homeRoutes);
// route.get("/students/update", studentServices.updateStudent);
// route.get("/students/new", studentServices.addStudent);
// API
route.get("/api/students", studentController.find);
route.post("/api/students", studentController.create);
route.put("/api/students/:id", studentController.update);
route.delete("/api/students/:id", studentController.delete);

// ?===================================================
// ?===================================================
// ?=============== volunteer router ==================
// API
route.post("/api/volunteers", volunteerController.create);
route.get("/api/volunteers", volunteerController.find);
route.put("/api/volunteers/:id", volunteerController.update);
route.delete("/api/volunteers/:id", volunteerController.delete);
module.exports = route;