 
const db = require("../db");
const CustomNotFoundError = require("../errors/CustomNotFoundError");


async function getBooky(req, res) {
  const { bookId } = req.params;

 
    const book = await db.getBookById(Number(bookId))  
if (!book) {
       throw new CustomNotFoundError(`Book with id ${bookID} not found`);
    }

    res.send(`Book Title: ${book.title}`);
 
     
 
   
};

module.exports = { getBooky };
