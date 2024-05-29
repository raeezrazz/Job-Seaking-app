const express = require('express')
const bodyParser=require('body-parser')
const port = 3001

const app = express()

app.set('view engine','ejs')
app.set('views','./views')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/',(req,res)=>{
    res.render('home')
})

app.listen(port,()=>{
    console.log("Server Running at http://Localhost:3001")
})