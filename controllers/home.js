
const projects = require("../data/projects");


module.exports.index = function(req, res) {
    console.log(projects);
    return res.render("index", { title: "Home", projects: projects });
}

module.exports.postIndex = function(req, res) {
    console.log(req.body);


    let newProjects = [];
    for (let project of projects) {
        if (project.title.startsWith(req.body.title) &&
            project.description.startsWith(req.body.description)) {
            if (req.body.author === "select") {
                console.log(project);
                newProjects.push(project);
            } else if (project.author === req.body.author) {
                newProjects.push(project);
            }
        }
    }

    return res.render("index", { title: "Home", projects: newProjects });
}

module.exports.newProject = function(req, res) {
    return res.render("newproject", { title: "New Project" });
}

module.exports.postNewProject = function(req, res) {
    let id = 0;
    if (projects.length > 0) {
        id = projects[projects.length - 1].id + 1;
    }

    projects.push({id: id, ...req.body, issues: []});

    return res.render("index", { title: "Home", projects: projects });
}

module.exports.issuesIdx = function(req, res) {
    let projectId = parseInt(req.params.id);
    let issues = [];
    for (let project of projects) {
        if (project.id === projectId) {
            issues = project.issues;
            break;
        }
    }
    console.log(issues);
    return res.render("issues", { title: "Issues", projectId: projectId, issues : issues});
}

module.exports.createIssues = function(req, res) {
    let projectId = req.params.id;
    return res.render("createissue", { title: "Create Issue", projectId: projectId });
}

module.exports.postCreateIssues = function (req, res) {
    let baseProject = null;
    let projectId = parseInt(req.params.id);
    for (let project of projects) {
        if (project.id === projectId) {
            baseProject = project;
            break;
        }
    }
    let issues = baseProject.issues;
    let newIssue = {};
    newIssue.title = req.body.title;
    newIssue.author = req.body.author;
    newIssue.description = req.body.description;

    newIssue.labels = [];
    for (let keys in req.body) {
        if (req.body[keys] === "bug-issue") {
            newIssue.labels.push(keys);
        }
    }
    console.log(req.body);
    console.log(newIssue);

    issues.push(newIssue);
    return res.redirect(`/issues/${projectId}`);
}

