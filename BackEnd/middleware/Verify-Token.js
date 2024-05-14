let jwt = require('jsonwebtoken')
require('dotenv').config()
exports.VerifyToken = (req, res, next) => {
    let cookies = req.headers.cookie && req.headers.cookie.split('=')[1]
    if (!cookies) return res.send({ message: "Cookie not found" })
    jwt.verify(cookies, process.env.token, (err, data) => {
        if (err) return res.send({ message: "Invalid token" })
        res.cookie([data.id])
        req.AllData = data
        next()
    })
}

