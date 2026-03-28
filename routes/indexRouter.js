
const { Router } = require("express");

const indexRouter = Router();

indexRouter.get("/", (req, res) => res.send("Welcome to the index page"));
indexRouter.get("/about", (req, res) => res.send("About us page"));
indexRouter.get("/contact", (req, res) => res.send("Contact us page"));
 indexRouter.post("/contact",  (req, res) => {

    res.send("Contact form submitted");

});

 

module.exports = indexRouter;
