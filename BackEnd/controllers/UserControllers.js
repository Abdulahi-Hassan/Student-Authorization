const UserModel = require('../model/UserModel')
const StudentModel = require('../model/StudentModel')
const ClassModel = require('../model/ClassModel')


const { UserValidation, LoginValidation } = require('../validation/AllValidation')
const bcrypt = require('bcrypt')
let jwt = require('jsonwebtoken')
const PaymentModel = require('../model/PaymentModel')

require('dotenv').config()

const GetAllUser = async (req, res) => {
    let Getuser = await UserModel.find()
    res.send(Getuser)
}
const GetUser = async (req, res) => {
    let { User } = req.AllData
    let GetUserID = await UserModel.findById(User)
    res.send(GetUserID)
}

const PostUser = async (req, res) => {
    try {
        let { error } = UserValidation(req.body)
        if (error) return res.send(error.message)
        let { Email, UserName, Password, Role, Profile, Status } = req.body
        let findEmail = await UserModel.findOne({ Email: Email })
        if (findEmail) return res.send('User Already Exist .')
        let salt = await bcrypt.genSalt(10)
        let Insert = new UserModel({ Email, UserName, Password: await bcrypt.hash(Password, salt), Role, Profile, Status })
        let info = await Insert.save()
        res.send({
            status: "Success",
            message: "Successfully Inserted Data User",
            info: info
        })

    } catch (error) {
        res.send(error.message)
    }
}
const PutUser = async (req, res) => {
    try {
        let { Email, UserName, Password, Role, Profile, Status } = req.body
        let { id } = req.params;
        let salt = await bcrypt.genSalt(10)

        let Update = await UserModel.findByIdAndUpdate(id, { Email, UserName, Role, Profile, Status, Password }, { new: true })
        if (Password) {
            Update.Password = await bcrypt.hash(Password, salt)
        }
        await Update.save()

        res.send({
            status: "Success",
            message: "Successfully Update Data User",
            info: Update
        })
    } catch (error) {
        res.send(error.message)
    }
}
const DeleteUser = async (req, res) => {
    try {
        let { id } = req.params;
        let StudentData = await StudentModel.findOne({ Email: id })
        if (StudentData) {
            await StudentModel.findByIdAndDelete(StudentData._id)
        }
        // let PaymentData = await ReceiptModel.find({ Email: id })
        // if (PaymentData) {
        //     await ReceiptModel.deleteMany({ _id: PaymentData })
        // }
        let ClassData = await ClassModel.findOne({ Email: id })
        if (ClassData) {
            await ClassModel.findByIdAndDelete(ClassData)
        }

        let Remove = await UserModel.findByIdAndDelete(id)

        if (!Remove) return res.send('')
        res.send({
            status: "Success",
            message: "Successfully Delete Data User",
            info: Remove
        })
    } catch (error) {

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
            id: UserData && UserData._id,
            // Student: StudentData && StudentData._id ,
            // Payment: PaymentData && PaymentData._id,
            // Class:ClassData && ClassData._id
        }, process.env.token, { expiresIn: '15s' })
        res.cookie([UserData._id], token, {
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
module.exports = { Login, Change, PostUser, PutUser, DeleteUser, GetUser, GetAllUser }