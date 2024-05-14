const { ReceiptValidation } = require('../validation/AllValidation')
const StudentModel = require('../model/StudentModel')
const UserModel = require('../model/UserModel')
const ClassModel = require('../model/ClassModel')


const PaymentModel = require('../model/PaymentModel')

const GetReceipt = async (req, res) => {
    try {
        let GetReceipt = await PaymentModel.find().populate("Email").populate("Name").populate("ClassName")
        res.send(GetReceipt)
    } catch (error) {
        res.send(error.message)
    }
}
const GetReceiptID = async (req, res) => {
    try {
        let { User } = req.AllData;
        let payment = await PaymentModel.find({ Email: User })
        res.send(payment)
    } catch (error) {
        res.send(error.message)
    }
}
const ReceiptPost = async (req, res) => {

    try {
        let { Name, Email, ClassName, ReceiptAmount } = req.body;
        let Insert = new PaymentModel({ Name, Email, ReceiptAmount, ClassName })

        let { error } = ReceiptValidation(req.body)
        if (error) return res.send(error.message)
        let UserData = await UserModel.findOne({ Email: Email })
        if (!UserData) return res.send("User not found")
        let StudentData = await StudentModel.findOne({ Name: Name })
        if (!StudentData) return res.send("Student not found")
        let ClassData = await ClassModel.findOne({ ClassName: ClassName })
        if (!ClassData) return res.send("class not found")

        let CurrencyStatus = ""
        let TotalAmountPaid = parseFloat(StudentData.AmountPaid + ReceiptAmount)
        let CurrencyBalance = StudentData.TotalAmount - TotalAmountPaid

        if (ReceiptAmount === 0) {
            res.send('Please Enter Digit Greater than 0')
            return
        }
        if (StudentData.Balance === 0) {
            res.send(`Lacagta waad wada shubtay  haragagu waa $ ${StudentData.Balance} `)
            return
        }
        if (TotalAmountPaid > StudentData.TotalAmount) {
            res.send(`Lacagta laga rabo waa ${StudentData.Balance}`)
            return
        }


        if (TotalAmountPaid < StudentData.TotalAmount) {
            CurrencyStatus = "PercialPaid"
        }
        if (CurrencyBalance === 0) {
            CurrencyStatus = "FullPaid"
        }


        await PaymentModel.findByIdAndUpdate(Insert._id, {
            Email: Insert.Email = UserData._id,
            Name: Insert.Name = StudentData._id,
            ClassName: Insert.ClassName = ClassData._id,

        }, { new: true })

        await Insert.save()




        await StudentModel.findByIdAndUpdate(StudentData._id, {
            AmountPaid: TotalAmountPaid,
            Balance: CurrencyBalance,
            Status: CurrencyStatus
        }, { new: true })





        res.send({
            status: "Success",
            message: "Successfully Inserted Data Receipt",
            info: Insert
        })


    } catch (error) {
        res.send(error.message)

    }

}
const PutReceipt = async (req, res) => {
    try {
        let { id } = req.params
        let { Name, Email, ClassName, ReceiptAmount } = req.body;
        let Insert = new PaymentModel({ Name, Email, ReceiptAmount, ClassName })
        let { error } = ReceiptValidation(req.body)
        if (error) return res.send(error.message)
        let UserData = await UserModel.findOne({ Email: Email })
        if (!UserData) return res.send("User not found")
        let StudentData = await StudentModel.findOne({ _id: id })
        if (!StudentData) return res.send("Student not found")
        let ClassData = await ClassModel.findOne({ ClassName: ClassName })
        if (!ClassData) return res.send("class not found")
        let TotalAmountPaid = parseFloat(StudentData.Balance + ReceiptAmount)
        let CurrencyBalance = StudentData.TotalAmount + ReceiptAmount
        if (ReceiptAmount === 0) {
            res.send('Please Enter Digit Greater than 0')
            return
        }
        await StudentModel.findByIdAndUpdate(StudentData._id, {
            Balance: TotalAmountPaid,
            TotalAmount: CurrencyBalance,
            Status: "UnPaid"
        }, { new: true })

        res.send({
            status: "Success",
            message: "Successfully Inserted Data Receipt",
            info: Insert
        })


    } catch (error) {
        res.send(error.message)

    }

}
const DeleteReceipt = async (req, res) => {
    try {
        let { id } = req.params;
        let payment = await PaymentModel.find({ Name: id })
        let Remove = await PaymentModel.deleteMany({ _id: payment })
        if (!Remove) return res.send('')
        res.send({
            status: "Success",
            message: "Successfully Update Data Receipt",
            info: Remove
        })
    } catch (error) {

    }
}
module.exports = { GetReceipt, GetReceiptID, ReceiptPost, PutReceipt, DeleteReceipt }