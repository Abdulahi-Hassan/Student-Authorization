const PaymentModel = require("../model/PaymentModel");

const StudentModel = require("../model/StudentModel");
const UserModel = require("../model/UserModel");
const GenerateToken = require("../token/Generate-token");
const {
  StudentValidation,
  EmailValidation,
  UserValidation,
} = require("../validation/AllValidation");
const GetStudent = async (req, res) => {
  try {
    let GetStudent = await StudentModel.find().populate("Email");
    res.send(GetStudent);
  } catch (error) {
    res.send(error.message);
  }
};
const GetStudentID = async (req, res) => {
  try {
    const { id } = req.user;
    let Email = await StudentModel.findOne({ Email: id });
    let GetStudentID = await StudentModel.findById({ _id: Email._id });
    res.send(GetStudentID);
  } catch (error) {
    res.send(error.message);
  }
};
const PostStudent = async (req, res) => {
  try {
    let {
      Gender,
      Address,
      Balance,
      AmountPaid,
      TotalAmount,
      Status,
      Phone,
      Email,
      Name,
    } = req.body;

    let { error: name } = UserValidation({ Name: Name });
    if (name) return res.send(name.message);
    let { error } = StudentValidation({ Gender, Address, Phone });
    let { error: email } = EmailValidation({ Email });
    if (email) return res.send(email.message);
    const UserData = await UserModel.findOne({ Email: Email });
    if (!UserData) return res.send("User not found");
    if (error) return res.send(error.message);
    const UserExist = await StudentModel.findOne({ Email: UserData._id });
    let Insert = new StudentModel({
      Email,
      Phone,
      Gender,
      Address,
      Balance,
      TotalAmount,
      AmountPaid,
      Status,
      Name,
    });
    await UserModel.findByIdAndUpdate(
      UserData._id,
      {
      Name:Name
      },
      { new: true }
    );
    if (UserExist) return res.send("User Already Exist");
    await StudentModel.findByIdAndUpdate(
      Insert._id,
      {
        Email: (Insert.Email = UserData._id),
      },
      { new: true }
    );

    let info = await Insert.save();
    res.send({
      status: "Success",
      message: "Successfully Inserted Data Student",
      info: info,
    });
  } catch (error) {
    res.send(error.message);
  }
};
const PutStudent = async (req, res) => {
  try {
    let {
      Name,
      Gender,
      Address,
      Balance,
      AmountPaid,
      TotalAmount,
      Status,
      Phone,
      Email,
    } = req.body;

    let { id } = req.params;
    let Update = await StudentModel.findByIdAndUpdate(id, {
      Name,
      Gender,
      Address,
      Balance,
      AmountPaid,
      TotalAmount,
      Status,
      Phone,
    });

    await UserModel.findByIdAndUpdate(
      Update.Email,
      {
        Email: Email,
      },
      { new: true }
    );
    res.send({
      status: "Success",
      message: "Successfully Update Data Student",
      info: Update,
    });
  } catch (error) {
    res.send(error.message);
  }
};
const DeleteStudent = async (req, res) => {
  try {
    let { id } = req.params;
    let payment = await PaymentModel.find({ Name: id });

    await PaymentModel.deleteMany({ _id: payment });
    let Remove = await StudentModel.findByIdAndDelete(id);
    if (!Remove) return res.send("");
    res.send({
      status: "Success",
      message: "Successfully Delete Data Student",
      info: Remove,
    });
  } catch (error) {}
};
module.exports = {
  GetStudent,
  GetStudentID,
  PostStudent,
  PutStudent,
  DeleteStudent,
};
