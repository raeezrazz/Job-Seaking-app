const express = require('express')
const mongoose=require('mongoose')
mongoose.connect('mongodb://localhost:27017/job_seeking')
const bodyParser=require('body-parser')
const port = 3001

const app = express()

app.set('view engine','ejs')
app.set('views','./views')
const userRoute = require('./routes/userRoute')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static('public'))



app.use('/',userRoute)

app.listen(port,()=>{
    console.log("Server Running at http://Localhost:3001")
})