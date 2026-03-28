 
const db = require("../db");
const CustomNotFoundError = require("../errors/CustomNotFoundError");

async function getUserById(req, res) {
  const { username } = req.params;          
    const user = await db.getUserById(Number(username))  
    if (!user) {
       throw new CustomNotFoundError(`User with id ${username} not found`);
    }

    res.send(`User Name: ${user.name}, Message: ${user.message}`);  
};

module.exports = { getUserById };