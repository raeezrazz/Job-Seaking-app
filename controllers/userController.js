
const Users = require('../models/userModel')
const bcrypt=require('bcrypt')
const nodemailer = require('nodemailer');
const dotenv = require('dotenv').config()

const userOtpVerification = require('../models/userOtpVerification');
const { EsimProfilePage } = require('twilio/lib/rest/supersim/v1/esimProfile');
const { TrustProductsEvaluationsContextImpl } = require('twilio/lib/rest/trusthub/v1/trustProducts/trustProductsEvaluations');





const loadHome = async(req,res)=>{
try {
    res.render('home')
    
} catch (error) {
    console.log(error.message)
}
}

const loadLogin= async(req,res)=>{
    try {
        res.render('login')
    } catch (error) {
        console.log(error.message)
    }
}

const loadRegister=async(req,res)=>{
    try {
        res.render('register')
    } catch (error) {
        console.log(error.message)
    }
}

const transporter = nodemailer.createTransport({
    service: 'gmail',
    host:'smpt.gmail.com',
    port:587,
    secure:true,
    auth: {
        user:process.env.AUTH_EMAIL, 
        pass: process.env.AUTH_PASS   
    }
});
const registerUser=async(req,res)=>{
    try{
       const{name,email,phone,password}=req.body
       const saltRounds = 10;
       const otp =`${Math.floor(1000 + Math.random() * 9000)}`
       const hashedOtp =  await bcrypt.hash(otp,saltRounds)

       console.log(otp,"THIS IS THE OTP");

       const mailOption = {
        from : process.env.AUTH_EMAIL,
        to:email,
        subject:"Verify Your Email",
        html: `<p>Enter the <b>${otp}</b> to verify your email address and complete the sign up</p>`
    }
    const userOtpVerificationRecord = await userOtpVerification.findOne({ email:email});

    if(userOtpVerificationRecord){
        await userOtpVerification.updateOne({email:email},{otp: hashedOtp,createAt:Date.now() })
    }else{
        const newOTPVerification  = await new userOtpVerification({
           email:email,
            otp: hashedOtp,
            createdAt: Date.now(),
            expiresAt: Date.now()+3600000,
        });
        //save otp record
        await newOTPVerification.save();
    
    }
    await transporter.sendMail(mailOption);
    res.json({success:true})
        
    }catch(error){
        console.log(error.message)
    }
}

const verifyOtp = async(req,res)=>{
    try {
        console.log("hello hello")
    } catch (error) {
        console.log(error.message)
    }
}


// =async(req,res)=>{
//     try {
        
//     } catch (error) {
//         console.log(error.message)
//     }
// }


module.exports={
    loadHome,
    loadLogin,
    loadRegister,
    registerUser,
    verifyOtp
}