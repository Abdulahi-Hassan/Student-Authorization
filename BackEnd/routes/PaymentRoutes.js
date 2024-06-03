const express=require('express');
const {GetReceipt,GetReceiptID,PutReceipt,DeleteReceipt, ReceiptPost} = require('../controllers/PaymentControllers');
const router=express.Router()
const {VerifyToken} =require('../middleware/Verify-Token')
router.get('/payment',GetReceipt).get('/payment/single',VerifyToken,GetReceiptID).post('/payment/signup',ReceiptPost).put('/payment/:id',PutReceipt).delete('/payment/:id',DeleteReceipt)
module.exports=router