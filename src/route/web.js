const express = require('express');
const router = express.Router();
const multer = require('multer');

const { postAddUser, getHomePage, getCreateUser,
    editUser, postUpdateUser, postDeleteUser,
    deleteUser,
    uploadFile,
    uploadker,
    uploadMultipleFile } = require('../controller/HomeController');

let { upload, upload1 } = require('../config/multer');

//router.Method(route,handler);
router.get('/', getHomePage);
router.post('/add-user', postAddUser);
router.get('/create', getCreateUser);

router.get('/edit/:id', editUser);
router.post('/update-user', postUpdateUser);

router.post('/delete/user/:id', postDeleteUser);
router.post('/delete-user', deleteUser);

router.get('/upload', uploadFile);
router.post('/upload-profile-pic', upload.single('profile_pic'), uploadker);
router.post('/upload-multiple-images', (req, res, next) => {
    // use middleware to handle error
    upload1(req, res, (err) => {
        if (err instanceof multer.MulterError && err.code === 'LIMIT_UNEXPECTED_FILE') {
            res.send('LIMIT UNEXPECTED FILE');
        } else if (err) {
            res.send(err);
        } else {
            next();
        }
    })
}, uploadMultipleFile);

module.exports = router;