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

const uploadFile = (req, res) => {
    return res.render('upload.ejs');
}

const uploadker = async (req, res) => {
    if (req.fileValidationError) {
        return res.send(req.fileValidationError);
    }
    else if (!req.file) {
        return res.send('Please select an image to upload');
    }
    res.send(`You have uploaded this image: <hr/><img src="/upload/${req.file.filename}" width="500"><hr /><a href="./">Upload another image</a>`);
}

const uploadMultipleFile = async (req, res) => {
    if (req.fileValidationError) {
        return res.send(req.fileValidationError);
    }
    else if (!req.files) {
        return res.send('Please select an image to upload');
    }

    let result = "You have uploaded these images: <hr />";
    const files = req.files;
    let index, len;

    // Loop through all the uploaded images and display them on frontend
    for (index = 0, len = files.length; index < len; ++index) {
        result += `<img src="/upload/${files[index].filename}" width="300" style="margin-right: 20px;">`;
    }
    result += '<hr/><a href="./">Upload more images</a>';
    res.send(result);
}

module.exports = {
    getHomePage, postAddUser, getCreateUser,
    editUser, postUpdateUser, postDeleteUser,
    deleteUser, uploadFile, uploadker, uploadMultipleFile //export object
}