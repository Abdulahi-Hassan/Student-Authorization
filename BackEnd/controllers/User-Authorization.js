const { UserValidation, LoginValidation } = require('../validation/AllValidation')
const bcrypt = require('bcrypt')
let jwt = require('jsonwebtoken')
const PaymentModel = require('../model/PaymentModel')
const UserModel = require('../model/UserModel')
const StudentModel = require('../model/StudentModel')
const ClassModel = require('../model/ClassModel')

const PostUser = async (req, res) => {
    try {
        let { error } = UserValidation(req.body)
        if (error) return res.send(error.message)
        let { Email, UserName, Password, Role, Status } = req.body
        let findEmail = await UserModel.findOne({ Email: Email })
        if (findEmail) return res.send('User Already Exist .')

        let salt = await bcrypt.genSalt(10)
        let Insert = new UserModel({ Email, UserName, Password: await bcrypt.hash(Password, salt), Role, Status })
        if (req.file) {
            Insert.Avator =req.file.filename
        }


        let info = await Insert.save()
        console.log(info)
        res.send({
            status: "Success",
            message: "Successfully Inserted Data User",
            info: info
        })

    } catch (error) {
        res.send(error.message)
    }
}





const Login = async (req, res) => {
    try {
        let { Email } = req.body
        let { error } = LoginValidation(req.body)
        if (error) return res.send(error.message)
        let UserData = await UserModel.findOne({ Email: Email })
        if (!UserData) return res.send('Email or Password incorrect')
        let checkpass = await bcrypt.compare(req.body.Password, UserData.Password)
        if (!checkpass) return res.send('Email or Password incorrect')
        const StudentData = await StudentModel.findOne({ Email: UserData._id })
        const PaymentData = await PaymentModel.findOne({ Email: UserData._id })
        const ClassData = await ClassModel.findOne({ Email: UserData._id })

        const { Password, ...Info } = UserData._doc
        let token = jwt.sign({
            User: UserData && UserData._id,
            Student: StudentData && StudentData._id ,
            Payment: PaymentData && PaymentData._id,
            Class:ClassData && ClassData._id
        }, process.env.token)
        res.cookie("token", token, {
            path: '/',
            httpOnly: true,
            expires: new Date(Date.now() + 1000 * 32),
            sameSite: "lax"
        })


        res.json({
            status: "Success",
            message: "Successfully Login",
            token: token,
            user: Info
        })

    } catch (error) {

        res.send(error.message)

    }
}
const Change = async (req, res) => {
    try {
        let { Email, NewPassword, Confirm } = req.body
        let salt = await bcrypt.genSalt(10)
        let UserData = await UserModel.findOne({ Email: Email })
        if (!UserData) return res.send('Email Ma jiro')
        if (NewPassword !== Confirm || Confirm !== NewPassword) return res.send('Please Match Two Password !')
        await UserModel.findByIdAndUpdate(UserData._id, { Password: await bcrypt.hash(NewPassword, 10) }, { new: true })
        res.json({
            status: "Success",
            message: "Successfully Change Password"
        })

    } catch (error) {

        res.send(error.message)

    }
}


module.exports = { Login, Change, PostUser }
