const express=require('express');
const {GetReceipt,GetReceiptID,PutReceipt,DeleteReceipt, ReceiptPost} = require('../controllers/PaymentControllers');
const router=express.Router()
const {VerifyToken} =require('../middleware/Verify-Token')
router.get('/Allpayment',VerifyToken,GetReceipt).get('/payment',VerifyToken,GetReceiptID).post('/payment/signup',ReceiptPost).put('/payment/:id',VerifyToken,PutReceipt).delete('/payment/:id',VerifyToken,DeleteReceipt)
module.exports=router;