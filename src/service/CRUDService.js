const connection = require('../config/db')

const getAllUser = async () => {
    let [results, fields] = await connection.query('SELECT * FROM Users');
    return results;
}

const addUser = async (req) => {
    let { name, email, city } = req.body;

    const [results, fields] = await connection.query(
        `INSERT INTO 
    Users (email, name, city)
    VALUES (?,?,?);`,
        [email, name, city]);

    return results;
}
const getUserById = async (userId) => {
    const [results] = await connection.query('SELECT * FROM Users WHERE id = ?', [userId]);
    let user = results && results.length > 0 ? results[0] : {};

    return user;
}
module.exports = {
    getAllUser, addUser, getUserById
}