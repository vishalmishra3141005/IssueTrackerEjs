
const projects = require("../data/projects");

module.exports.index = function(req, res) {
    return res.render("index", { title: "Home" });
}

module.exports.newProject = function(req, res) {
    return res.render("newproject", { title: "New Project" });
}

module.exports.postNewProject = function(req, res) {
    console.log(req.body);
    return res.redirect("/");
}