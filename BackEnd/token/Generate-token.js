const jwt=require('jsonwebtoken')
require('dotenv').config()
const GenerateToken=(user,res)=>{
    let token=jwt.sign({id:user._id},process.env.token,{expiresIn:"1h"});
    const {Password,...info}=user._doc;
    res.cookie("token",token,{
        httpOnly:true,
        expires:new Date("2025/6/9"),
        SameSite:"Liibaan",
        secure:false,
        path:"/"
    })
    res.json({status:"Success",message:"Successfully Logged In",...info,token})
}
module.exports =GenerateToken