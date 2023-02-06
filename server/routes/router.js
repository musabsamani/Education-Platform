const express = require("express");
const route = express.Router();
const studentController = require("../controllers/students");
const volunteerController = require("../controllers/volunteer");
const tableController = require("../controllers/table");
const subjectController = require("../controllers/subject");

/**
 * @description Root Route
 * @method GET /
 */

route.get("/", (req, res) => { res.render("index") });
// ?================ student router ===================;
// API
route.get("/api/students", studentController.find);
route.post("/api/students", studentController.create);
route.put("/api/students/:id", studentController.update);
route.delete("/api/students/:id", studentController.delete);

// ?=============== volunteer router ==================
// API
route.post("/api/volunteers", volunteerController.create);
route.get("/api/volunteers", volunteerController.find);
route.put("/api/volunteers/:id", volunteerController.update);
route.delete("/api/volunteers/:id", volunteerController.delete);
// ?=============== table router ==================
// API
route.post("/api/table", tableController.create);
route.get("/api/table", tableController.find);
route.put("/api/table/:id", tableController.update);
route.delete("/api/table/:id", tableController.delete);
// ?=============== subject router ==================
// API
route.post("/api/subject", subjectController.create);
route.get("/api/subject", subjectController.find);
route.put("/api/subject/:id", subjectController.update);
route.delete("/api/subject/:id", subjectController.delete);
module.exports = route;