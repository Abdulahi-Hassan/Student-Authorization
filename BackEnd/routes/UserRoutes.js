const express = require('express');
const { PostUser, PutUser, DeleteUser, GetUser, GetAllUser } = require('../controllers/UserControllers');
const router = express.Router()
const { VerifyToken } = require('../middleware/Verify-Token');
const { RefreshToken } = require('../middleware/Refresh-Token');
router.post('/user/signup', PostUser)
.get('/user', VerifyToken, GetUser).get('/user/Alluser', VerifyToken, GetAllUser).put('/user/:id',VerifyToken, PutUser).delete('/user/:id',VerifyToken, DeleteUser)
.get('/refresh/user',RefreshToken, VerifyToken, GetUser).get('/refresh/user/Alluser',RefreshToken, VerifyToken, GetAllUser).put('/refresh/user/:id',RefreshToken,VerifyToken, PutUser).delete('/refresh/user/:id',RefreshToken,VerifyToken, DeleteUser)
module.exports = router;