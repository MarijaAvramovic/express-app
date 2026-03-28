// db.js

const authors = [
  { id: 1, name: "marija" },
  { id: 2, name: "dobra" },
  { id: 3, name: "macka" },
];

async function getAuthorById(authorId) {
  return authors.find(author => author.id === authorId);
};

module.exports = { getAuthorById };
