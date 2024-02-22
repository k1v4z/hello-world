const connection = require('../config/db');
const { getAllUser, addUser, getUserById } = require('../service/CRUDService');

const getHomePage = async (req, res) => {
    let results = await getAllUser();
    return res.render('sample.ejs', { listUsers: results }); //object
}

const postAddUser = async (req, res) => {
    //let {name, email, city} = req.body;
    const results = await addUser(req);

    return res.send('add user succeed');
}
const getCreateUser = (req, res) => {
    return res.render('createuser.ejs');
}

const editUser = async (req, res) => {
    let userId = req.params.id;
    let user = await getUserById(userId);

    return res.render('edituser.ejs', { editUser: user });
}

module.exports = {
    getHomePage, postAddUser, getCreateUser, editUser //export object
}