const express = require('express');
const router = express.Router();
const { postAddUser, getHomePage, getCreateUser,
    editUser, postUpdateUser, postDeleteUser,
    deleteUser } = require('../controller/HomeController');

//router.Method(route,handler);
router.get('/', getHomePage);
router.post('/add-user', postAddUser);
router.get('/create', getCreateUser);

router.get('/edit/:id', editUser);
router.post('/update-user', postUpdateUser);

router.post('/delete/user/:id', postDeleteUser);
router.post('/delete-user', deleteUser);

module.exports = router;