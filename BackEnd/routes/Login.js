const express=require('express');
const {Login, Change} = require('../controllers/UserControllers');
const router=express.Router()
router.post('/',Login).post('/change',Change)
module.exports=router;