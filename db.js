// db.js

const authors = [
  { id: 1, name: "marija" },
  { id: 2, name: "dobra" },
  { id: 3, name: "macka" },
];

const books = [
  { id: 1, title: "Book 1", authorId: 1 },
  { id: 2, title: "Book 2", authorId: 2 },
  { id: 3, title: "Book 3", authorId: 3 },
];

const users = [
  { id: 1, name: "prda" , message: "Hello, I'm user1"},
  { id: 2, name: "mali" , message: "Hello, I'm user2"},
  { id: 3, name: "smrda" , message: "Hello, I'm user3"},
];

async function getUserById(userId) {
  return users.find(user => user.id === userId);
}

async function getAuthorById(authorId) {
  return authors.find(author => author.id === authorId);
};

async function getBookById(bookId) {
  return books.find(book => book.id === bookId);
}

module.exports = { getAuthorById , getBookById,getUserById };
