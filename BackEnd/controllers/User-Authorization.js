const {
  LoginValidation,
  EmailValidation,
  ChangeValidation,
  GenderValidation,
} = require("../validation/AllValidation");
const bcrypt = require("bcryptjs");
const UserModel = require("../model/UserModel");
const GenerateToken = require("../token/Generate-token");

const SignUp = async (req, res) => {
  try {
    let { Email, Password, Role, Status, Gender } = req.body;
    let { error: email } = EmailValidation({ Email });
    if (email) return res.send(email.message);
    let findEmail = await UserModel.findOne({ Email: Email });
    if (findEmail) return res.send("User Already Exist");
    let { error: password } = LoginValidation({ Password });
    if (password) return res.send(password.message);
    let { error: gender } = GenderValidation({ Gender });
    if (gender) return res.send(gender.message);
    let salt = await bcrypt.genSalt(10);
    let Boy = "Profile_1717436654624.png";
    let Girl = "Profile_1717436654623.png";
    let Insert = new UserModel({
      Email,
      Name: "",
      Confirm: Password,
      Password: await bcrypt.hash(Password, salt),
      Role,
      Status,
      Gender,
    });
    if (req.file) {
      Insert.Profile = req.file.filename;
    }

    let info = await Insert.save();
    res.send({
      status: "Success",
      message: "Successfully Inserted Data User",
      info: info,
    });
  } catch (error) {
    res.send(error.message);
  }
};

const Login = async (req, res) => {
  try {
    let { error } = LoginValidation({ Password: req.body.Password });
    let { error: Email } = EmailValidation({ Email: req.body.Email });
    if (Email) return res.send(Email.message);
    let UserData = await UserModel.findOne({ Email: req.body.Email });
    if (!UserData) return res.send("Email Not Found");
    if (error) return res.send(error.message);
    let checkpass = await bcrypt.compare(req.body.Password, UserData.Password);
    if (!checkpass) return res.send("Invalid Credentails");
    GenerateToken(UserData, res);
  } catch (error) {
    res.send(error.message);
  }
};

const Logout = (req, res) => {
  try {
    res.clearCookie("token");
    res.json({
      status: "Success",
      message: "Successfully Logout",
    });
  } catch (error) {
    res.send(error.message);
  }
};

const Change = async (req, res) => {
  try {
    let { Email, Password, Confirm } = req.body;
    let { error } = EmailValidation({ Email });
    if (error) return res.send(error.message);
    let UserData = await UserModel.findOne({ Email: Email });
    if (!UserData) return res.send("Email Not Found");
    let { error: AllPassword } = ChangeValidation({ Password, Confirm });
    if (AllPassword) return res.send(AllPassword.message);

    let salt = await bcrypt.genSalt(10);

    if (Password !== Confirm || Confirm !== Password)
      return res.send("Please Match Two Password !");
    await UserModel.findByIdAndUpdate(
      UserData._id,
      { Password: await bcrypt.hash(Password, salt), Confirm: Password },
      { new: true }
    );
    res.json({
      status: "Success",
      message: "Successfully Change Password",
    });
  } catch (error) {
    res.send(error.message);
  }
};

module.exports = { Login, Change, SignUp, Logout };
