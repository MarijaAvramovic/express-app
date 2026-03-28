
require("dotenv").config();


const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const indexRouter = require("./routes/indexRouter");
const authorRouter = require("./routes/authorRouter");
const booksRouter = require("./routes/bookRouter");

app.use("/", indexRouter);
app.use("/authors", authorRouter);
app.use("/books", booksRouter);

 
app.get("/:username/messages", (req, res) => {
  console.log(req.params);
  res.end();
});
app.get("/:username/messages/:messageId", (req, res) => {
  console.log(req.params);
  const hello = req.params.messageId;
  console.log(hello.slice(2, 5));
    console.log("Query:", req.query);
  res.end();
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
