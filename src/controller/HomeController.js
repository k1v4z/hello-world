const connection = require('../config/db');

const getHomePage = (req, res) =>{
    return res.render('sample.ejs');
}

const  postAddUser = async (req, res) =>{
    let {name, email, city} = req.body;

    const [results, fields] = await connection.query(
    `INSERT INTO 
    Users (email, name, city)
    VALUES (?,?,?);`,
    [email, name, city]);

    return res.send('add user succeed');
}
const getCreateUser = (req, res) => {
    return res.render('createuser.ejs');
}

module.exports = {
    getHomePage, postAddUser, getCreateUser //export object
}