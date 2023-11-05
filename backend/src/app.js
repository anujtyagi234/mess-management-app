
const express = require("express");
const path = require("path");
const hbs = require("hbs");
const app = express();
const userRoutes = require('./routes/users');
const  autoRoutes = require("./routes/auth");
const port = 3001|| process.env.PORT ;
require("./db/Add");

// Paths for Express config
const publicDirectoryPath = path.join(__dirname, "../public");
// const viewsPath = path.join(__dirname, "../templates/views");
const viewsPath = path.join(__dirname, "templates", "views");
const partialsPath = path.join(__dirname, "templates","partials");

// Setup handlebars engine and views location
app.use(express.static(publicDirectoryPath));
app.set("view engine", "hbs");

app.set("views", viewsPath);

// app.set("views", viewsPath);
hbs.registerPartials(partialsPath);

// Setup static directory to serve

// Routes
app.get("/", (req, res) => {
    res.render("index", {
        title: "Home",
        name: "Your Name"
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running up on port ${port}`);
});


