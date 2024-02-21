const connection = require('../config/db');

const helloWorld = (req, res) =>{
    res.send('Hello World!');
}

const viewEngine = (req, res) =>{
    return res.render('sample.ejs');
}

const postAddUser = (req, res) =>{
    let {name, email, city} = req.body;

    connection.query(
    `INSERT INTO 
    Users (email, name, city)
    VALUES (?,?,?);`,
    [email, name, city],
    function (err, results) {
        res.send('add new user succeed');
    });
}
module.exports = {
    helloWorld, viewEngine, postAddUser //export object
}