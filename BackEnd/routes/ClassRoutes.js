const express=require('express');
const {GetClass,GetClassID,PostClass,PutClass,DeleteClass} = require('../controllers/ClassControllers');
const { VerifyToken } = require('../middleware/Verify-Token');
const router=express.Router()
router.get('/Allclass',VerifyToken,GetClass).get('/class',VerifyToken,GetClassID).post('/class/signup',PostClass).put('/:id',VerifyToken,PutClass).delete('/:id',VerifyToken,DeleteClass)
module.exports=router;