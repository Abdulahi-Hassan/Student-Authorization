const express = require('express')
const mongoose = require('mongoose');
const { ConnectionDb } = require('./config/Database');
require('dotenv').config()
const server = express();
const cookieParser = require('cookie-parser')
mongoose.set('strictQuery', false)
server.use(cookieParser())
const cors = require('cors')
ConnectionDb()
server.use(express.json())
server.use(cors({credentials:true,origin:'https://main--authorizations.netlify.app'}))
server.use('/api/login', require('./routes/Login'))
server.use('/api', require('./routes/PaymentRoutes'))
server.use('/api', require('./routes/UserRoutes'))
server.use('/api', require('./routes/StudentRoutes'))
server.use('/api', require('./routes/ClassRoutes'))


server.listen(process.env.port, () => console.log(process.env.Runningconnect))