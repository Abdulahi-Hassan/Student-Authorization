const express=require('express');
const {GetStudent,GetStudentID,PostStudent,PutStudent,DeleteStudent} = require('../controllers/StudentControllers');
const { VerifyToken } = require('../middleware/Verify-Token');
const router=express.Router()
router.get('/student',GetStudent).get('/student/single',VerifyToken,GetStudentID).post('/student/signup',PostStudent).put('/student/:id',PutStudent).delete('/student/:id',DeleteStudent)
module.exports=router