const connection = require('../config/db')

const getAllUser = async () => {
    let [results, fields] = await connection.query('SELECT * FROM Users');
    return results;
}

const addUser = async (userReq) => {
    let { email, name, city } = userReq;

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

const updateUser = async (email, name, city, id) => {
    const [results] = await connection.query(`
    UPDATE Users
    SET email = ?, name = ?, city = ?
    WHERE id = ?;
    `, [email, name, city, id]);
}

const destroyUser = async (userId) => {
    const [results] = await connection.query('DELETE FROM Users WHERE id = ? ', [userId]);
}

module.exports = {
    getAllUser, addUser, getUserById, updateUser, destroyUser
}