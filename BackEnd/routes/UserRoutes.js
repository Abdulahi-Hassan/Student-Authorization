const express = require('express');
const {PutUser, DeleteUser, GetUser, GetAllUser } = require('../controllers/UserControllers');
const router = express.Router()
const { VerifyToken } = require('../middleware/Verify-Token');
const { Upload } = require('../config/Database');
router.get('/user/single',VerifyToken ,GetUser).get('/user/',VerifyToken, GetAllUser).put('/user/:id',Upload, PutUser).delete('/user/:id', DeleteUser)
module.exports = router;