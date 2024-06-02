const mongoose = require('mongoose')
const { Schema, model } = mongoose

const ClassSchema = new Schema({
    ClassName: {
        type: String,
        required: true
    },
    ClassStatus: {
        type: String,
        required: false,
        default: "active",
        enum: ["active", "pending", "blocked"]
    },
    Email:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'user'
    },
    ClassDate: {
        type: Date,
        required: false,
        default:new Date
    }
   
   
})








const ClassModel = model('class', ClassSchema)

module.exports = ClassModel