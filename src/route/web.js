const express = require('express');
const router = express.Router();
const { postAddUser, getHomePage, getCreateUser, editUser, postUpdateUser } = require('../controller/HomeController');

//router.Method(route,handler);
router.get('/', getHomePage);
router.post('/add-user', postAddUser);
router.get('/create', getCreateUser);

router.get('/edit/:id', editUser);
router.post('/update-user', postUpdateUser);
module.exports = router;