const express = require('express');
const router = express.Router();
const {postAddUser, getHomePage, getCreateUser} = require('../controller/HomeController');

//router.Method(route,handler);
router.get('/', getHomePage);
router.post('/add-user', postAddUser);
router.get('/create',getCreateUser);

module.exports = router;