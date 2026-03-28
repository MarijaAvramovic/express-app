
const { Router } = require("express");
const { getBooky } = require('../controllers/booksController');
const booksRouter = Router();

booksRouter.get("/", (req, res) => res.send("All books"));
booksRouter.get("/:bookId", getBooky);
booksRouter.get("/:bookId/reserve",  (req, res)=>   {    
res.send("All reserved books")});   
 booksRouter.post("/:bookId/reserve",  (req, res)=>   {    
res.send("Book reserved" + req.params.bookId)

}  );    

 

module.exports = booksRouter;
