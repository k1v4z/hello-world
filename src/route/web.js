const express = require('express');
const router = express.Router();
const {helloWorld, viewEngine, postAddUser} = require('../controller/HomeController');

//router.Method(route,handler);
router.get('/', helloWorld);
router.get('/viewengine', viewEngine);
router.post('/add-user', postAddUser)
module.exports = router;