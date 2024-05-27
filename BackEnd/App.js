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
server.use(express.static('public'))
server.use(express.json())
server.use(cors())
server.use('/api', require('./routes/Login'))
server.use('/api', require('./routes/PaymentRoutes'))
server.use('/api', require('./routes/UserRoutes'))
server.use('/api', require('./routes/StudentRoutes'))
server.use('/api', require('./routes/ClassRoutes'))
const path = require('path')

server.use(express.static(path.join(__dirname, "/frontend/dist")))
server.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"))
})

server.listen(process.env.port, () => console.log(process.env.Runningconnect))