const express = require("express");
const route = express.Router();
const services = require("../services/render");
const controller = require("../controllers/controller");
/**
 * @description Root Route
 * @method GET /
 */
route.get("/", services.homeRoutes);
/**
 * @description update user
 * @method GET /
 */
route.get("/update_user", services.updateUser);
route.get("/add_user", services.addUser);

// API
route.post("/api/users", controller.create);
route.get("/api/users", controller.find);
route.put("/api/users/:id", controller.update);
route.delete("/api/users/:id", controller.delete);

module.exports = route;
