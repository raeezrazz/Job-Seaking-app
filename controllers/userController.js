
const Users = require('../models/userModel')
       





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

const registerUser=async(req,res)=>{
    try{
       const{name,email,phone,password}=req.body

       
        
    }catch(error){
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
    registerUser
}