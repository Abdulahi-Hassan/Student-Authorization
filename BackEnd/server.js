const express = require('express')
const mongoose = require('mongoose');
const { ConnectionDb } = require('./config/Database');
require('dotenv').config()
const app = express();
const cookieParser = require('cookie-parser')
mongoose.set('strictQuery', false)
app.use(cookieParser())
const path = require('path')
const cors = require('cors')
app.use(express.json())
app.use(cors({origin:"http://localhost:3000",credentials:true}))
app.use('/api/auth', require('./routes/Auth-Routes'))
app.use('/api', require('./routes/PaymentRoutes'))
app.use('/api', require('./routes/UserRoutes'))
app.use('/api', require('./routes/StudentRoutes'))
app.use('/api', require('./routes/ClassRoutes'))
app.use(express.static(path.join(__dirname,'public')))
app.use(express.static(path.join(__dirname, "../FrontEnd/dist")))
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, "../FrontEnd", "dist", "index.html"))
})
ConnectionDb()
app.listen(process.env.port, () => console.log(process.env.Runningconnect))