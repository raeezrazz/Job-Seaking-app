const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userOtpVerificationSchema = new Schema({
    email:String,
    otp :String,
    createAt:{
        type:Date,
        default:Date.now()
    }
});

const userOtpVerification = mongoose.model(
    "userOtpVerification",
    userOtpVerificationSchema
)
module.exports = userOtpVerification 
