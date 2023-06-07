
const express = require("express");
const homeController = require("../controllers/home");

const route = express.Router();

route.get("/", homeController.index);
route.post("/", homeController.postIndex);

route.get("/newproject", homeController.newProject);
route.post("/newproject", homeController.postNewProject);

route.get("/issues/:id", homeController.issuesIdx);

route.get("/:id/createnewissue", homeController.createIssues);
route.post("/:id/createnewissue", homeController.postCreateIssues);

module.exports = route;