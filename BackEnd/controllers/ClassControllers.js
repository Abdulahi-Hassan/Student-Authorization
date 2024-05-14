const ClassModel = require('../model/ClassModel')
const PaymentModel = require('../model/PaymentModel')
const { ClassValidation } = require('../validation/AllValidation')
const UserModel = require('../model/UserModel')
require('dotenv').config()
const GetClass = async (req, res) => {
    try {
        let GetClass = await ClassModel.find().populate({
            path: "UserID",
            model: "user",
            select: "-_id UserName Email Role Status Password Profile"
        })
        res.send(GetClass)

    } catch (error) {
        res.send(error.message)
    }
}
const GetClassID = async (req, res) => {
    try {
        let {Class} = req.AllData;
        let GetClassID = await ClassModel.findById(Class)
        res.send(GetClassID)
    } catch (error) {
        res.send(error.message)
    }
}
const PostClass = async (req, res) => {
    try {
        let { error } = ClassValidation(req.body)
        if (error) return res.send(error.message)
        let { ClassStatus, ClassName, ClassDate, Email } = req.body
        let Insert = new ClassModel({ ClassStatus, ClassName, ClassDate, Email })
        const UserData = await UserModel.findOne({ Email: Email })
        if (!UserData) return res.send("Userka lama helin")
        const UserExist = await ClassModel.findOne({ Email: UserData._id })
        if (UserExist) return res.send("User Already Exist")
        await ClassModel.findByIdAndUpdate(Insert._id, {
            Email: Insert.Email = UserData._id
        }, { new: true })

        let info = await Insert.save()
        res.send({
            status: "Success",
            message: "Successfully Inserted Data Class",
            info: info
        })

    } catch (error) {
        res.send(error.message)
    }
}
const PutClass = async (req, res) => {
    try {
        let { ClassStatus, ClassName, ClassDate, UserID } = req.body
        let { id } = req.params;
        let Update = await ClassModel.findByIdAndUpdate(id, { ClassStatus, ClassName, ClassDate, UserID }, { new: true })
        res.send({
            status: "Success",
            message: "Successfully Update Data Class",
            info: Update
        })
    } catch (error) {
        res.send(error.message)
    }
}
const DeleteClass = async (req, res) => {
    try {
        let { id } = req.params;
        let ReceiptData = await ReceiptModel.find({ ClassID: id })
        await ReceiptModel.deleteMany({ _id: ReceiptData })
        let Remove = await ClassModel.findByIdAndDelete(id)
        if (!Remove) return res.send('')
        res.send({
            status: "Success",
            message: "Successfully Delete Data Class",
            info: Remove
        })
    } catch (error) {

    }
}



module.exports = { GetClass, GetClassID, PostClass, PutClass, DeleteClass }