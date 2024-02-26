const connection = require('../config/db')
const { sequelize } = require('../config/Sequelize')
const User = require('../model/User')

const getAllUser = async () => {
    //ORM
    const users = await User.findAll({});

    //let [results, fields] = await connection.query('SELECT * FROM Users');
    return users;
}

const addUser = async (userReq) => {
    //ORM
    let { email, name, city } = userReq;

    const result = User.create({
        email: email,
        name: name,
        city: city
    })
    // const [results, fields] = await connection.query(
    //     `INSERT INTO 
    // Users (email, name, city)
    // VALUES (?,?,?);`,
    //     [email, name, city]);

    return result;
}

const getUserById = async (userId) => {
    //ORM
    const result = User.findOne({
        where: {
            id: userId
        }
    })
    // const [results] = await connection.query('SELECT * FROM Users WHERE id = ?', [userId]);
    //let user = results && results.length > 0 ? results[0] : {};

    return result;
}

const updateUser = async (email, name, city, id) => {
    const user = {
        email: email,
        name: name,
        city: city
    }
    //ORM
    const result = User.update(user, {
        where: {
            id: id
        }
    });

    // const [results] = await connection.query(`
    // UPDATE Users
    // SET email = ?, name = ?, city = ?
    // WHERE id = ?;
    // `, [email, name, city, id]);
}

const destroyUser = async (userId) => {
    //ORM
    await User.destroy({
        where: {
            id: userId
        }
    })
    //const [results] = await connection.query('DELETE FROM Users WHERE id = ? ', [userId]);
}

module.exports = {
    getAllUser, addUser, getUserById, updateUser, destroyUser
}