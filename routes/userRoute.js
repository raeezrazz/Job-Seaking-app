const express= require('express')
const userRoute = express()
const userController = require('../controllers/userController')


userRoute.set('view engine','ejs');
userRoute.set('views','./views/users');



userRoute.get('/',userController.loadHome)

userRoute.get('/login',userController.loadLogin)
userRoute.get('/register',userController.loadRegister)
userRoute.post('/registerUser',userController.registerUser)



module.exports = userRoute