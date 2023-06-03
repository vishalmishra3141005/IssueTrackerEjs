
const express = require("express");
const ejs = require("ejs");
const path = require("path");

const app = express();

const port = 4000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

app.get("/", function(req, res) {
    res.render("index", { title: "Home"});
});



app.listen(port, function(err) {
    if (err) {
        console.log("Unable to start server..");
    } else {
        console.log(`Server up and running at ${port}`);
    }
});