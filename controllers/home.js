
const projects = require("../data/projects");

console.log(projects);

module.exports.index = function(req, res) {
    console.log(projects);
    return res.render("index", { title: "Home", projects: projects});
}

module.exports.newProject = function(req, res) {
    return res.render("newproject", { title: "New Project" });
}

module.exports.postNewProject = function(req, res) {
    projects.push({...req.body, issues: []});
    return res.redirect("/");
}