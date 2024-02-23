const express = require('express');
const {apigetUser, apigetUserById, apiDeleteUserById, apiCreateUser} = require('../controller/ApiController');

let router = express.Router();

const initApiRoute = (app) => {
    router.get('/users', apigetUser);
    router.get('/users/:id',apigetUserById);
    router.delete('/delete/users/:id',apiDeleteUserById);
    router.post('/create',apiCreateUser);

    return app.use('/api/v1/', router);
}

module.exports = {
    initApiRoute
}