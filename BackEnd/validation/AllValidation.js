const joi = require('joi')
const ReceiptValidation = (RV) => {
    const Receiptvalidation = joi.object({
        Email: joi.string().required().email(),
        Name: joi.string().required(),
        ClassName: joi.string().required(),
        ReceiptAmount: joi.number().required()
    })

    return Receiptvalidation.validate(RV)
}

const UserValidation = (UV) => {
    const uservalidation = joi.object({
        UserName: joi.string().required(),
        Email: joi.string().required().email(),
        Password: joi.string().required()
    })

    return uservalidation.validate(UV)
}


const LoginValidation = (l) => {
    const login = joi.object({
        Password: joi.string().required()
    })

    return login.validate(l)
}


const StudentValidation = (SV) => {
    const studentvalidation = joi.object({
        Name: joi.string().required(),
        Email: joi.string().required().email(),
        Phone: joi.number().required(),
        Gender: joi.string().required(),
        Address: joi.string().required()
    })

    return studentvalidation.validate(SV)
}

const EmailValidation = (Email) => {
    const Emailvalidation = joi.object({
        Email: joi.string().required().email()
    })

    return Emailvalidation.validate(Email)
}

const ChangeValidation = (Change) => {
    const studentvalidation = joi.object({
        Password: joi.string().required(),
        Confirm: joi.string().required()
    })

    return studentvalidation.validate(Change)
}



const ClassValidation = (CV) => {
    const Classvalidation = joi.object({
        Email: joi.string().required().email(),
        ClassName: joi.string().required(),
        ClassStatus: joi.string().required(),
    })

    return Classvalidation.validate(CV)
}


module.exports = { EmailValidation,ChangeValidation,ClassValidation, StudentValidation, UserValidation, ReceiptValidation, LoginValidation }