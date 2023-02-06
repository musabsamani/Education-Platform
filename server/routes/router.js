const express = require("express");
const route = express.Router();
const services = require("../services/render");
const controller = require("../controllers/students");
/**
 * @description Root Route
 * @method GET /
 */
route.get("/", services.homeRoutes);
/**
 * @description update student
 * @method GET /
 */
route.get("/update_student", services.updateStudent);
route.get("/add_student", services.addStudent);

// API
route.post("/api/students", controller.create);
route.get("/api/students", controller.find);
route.put("/api/students/:id", controller.update);
route.delete("/api/students/:id", controller.delete);

module.exports = route;
