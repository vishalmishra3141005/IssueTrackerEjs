
const express = require("express");
const homeController = require("../controllers/home");

const route = express.Router();

route.get("/", homeController.index);


route.get("/newproject", homeController.newProject);
route.post("/newproject", homeController.postNewProject);
module.exports = route;