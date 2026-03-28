
require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const indexRouter = require("./routes/indexRouter");
const authorRouter = require("./routes/authorRouter");
const booksRouter = require("./routes/bookRouter");
  const { getUserById } = require("./controllers/usersController");
  const path = require("path");
  const links = [
  { href: "/", text: "Home" },
  { href: "about", text: "About" },
  { href: "contact", text: "Contact" },
];
const users = ["Rose", "Cake", "Biff"];
const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

 
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use("/", indexRouter);
app.use("/authors", authorRouter);
app.use("/books", booksRouter);

 
app.get("/:username/messages", getUserById);

app.get("/:username/messages/:messageId", (req, res) => {
  console.log(req.params);
  const hello = req.params.messageId;
  console.log(hello.slice(2, 5));
    console.log("Query:", req.query);
  res.end();
});
app.get("/views", (req, res) => {
  res.render("index", { title: "My Express App", message: "Hello, EJS!" , links: links, users: users});
});
app.get("/aboutdbl", (req, res) => {
  res.render("about", { title: "About Us", message: "Welcome to the about page!" });
});
app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.statusCode || 500).send(err.message);
});



app.listen(PORT, (error) => {
  // This is important!
  // Without this, any startup errors will silently fail
  // instead of giving you a helpful error message.
  if (error) {
    throw error;
  }
  console.log(`My first Express app - listening on port ${PORT}!`);
});
