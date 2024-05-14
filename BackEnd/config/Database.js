const mongoose = require('mongoose')
require('dotenv').config()
let jwt = require('jsonwebtoken')
exports.ConnectionDb = async () => {
    await mongoose.connect(process.env.mongodb).then(() => console.log(process.env.mongodbconnect))
}



