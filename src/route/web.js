const express = require('express');
const router = express.Router();
const {helloWorld, viewEngine} = require('../controller/HomeController');

//router.Method(route,handler);
router.get('/', helloWorld);
router.get('/viewengine',viewEngine);

module.exports = router;