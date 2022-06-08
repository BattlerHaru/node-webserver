require("dotenv").config();
const express = require("express");
const hbs = require("hbs");

const app = express();
const port = process.env.PORT;

// handlebars
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");

// servir contenido estático
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("home", {
        nombre: "Fernando Herrera",
        titulo: "Curso de Node",
    });
});

app.get("/generic", (req, res) => {
    res.render("generic", {
        nombre: "Fernando Herrera",
        titulo: "Curso de Node",
    });
});

app.get("/elements", (req, res) => {
    res.render("elements", {
        nombre: "Fernando Herrera",
        titulo: "Curso de Node",
    });
});

app.get("*", (req, res) => {
    // res.send("404 | page not found");
    res.sendFile(__dirname + "/public/template/404.html");
});

app.listen(port, () => {
    console.log(`listening at http://localhost:${port}`);
});