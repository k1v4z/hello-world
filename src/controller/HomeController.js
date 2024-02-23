const connection = require('../config/db');
const { getAllUser, addUser, getUserById, updateUser, destroyUser } = require('../service/CRUDService');

const getHomePage = async (req, res) => {
    let results = await getAllUser();
    return res.render('sample.ejs', { listUsers: results }); //object
}

const postAddUser = async (req, res) => {
    //let {name, email, city} = req.body;
    const results = await addUser(req.body);

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

const postUpdateUser = async (req, res) => {
    let { id, email, name, city } = req.body;

    await updateUser(email, name, city, id);

    res.redirect('/');
}

const postDeleteUser = async (req, res) => {
    const userId = req.params.id;
    let user = await getUserById(userId);

    res.render('deleteuser.ejs', { deleteUser: user });
}

const deleteUser = async (req, res) => {
    const userId = req.body.id;

    await destroyUser(userId);

    res.redirect('/');
}

module.exports = {
    getHomePage, postAddUser, getCreateUser,
    editUser, postUpdateUser, postDeleteUser,
    deleteUser //export object
}