const express=require('express');
const {GetStudent,GetStudentID,PostStudent,PutStudent,DeleteStudent} = require('../controllers/StudentControllers');
const { VerifyToken } = require('../middleware/Verify-Token');
const router=express.Router()
router.get('/student/Allstudent',VerifyToken,GetStudent).get('/student',VerifyToken,GetStudentID).post('/student/signup',PostStudent).put('/student/:id',VerifyToken,PutStudent).delete('/student/:id',VerifyToken,DeleteStudent)
module.exports=router;