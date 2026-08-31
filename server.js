// imports
const express = require("express") //importing express package
const app = express() // creates a express application


app.use(express.static('public')); //all static files are in the public folder

const resturaunts = require("./data.js");


// Routes go here

app.get('/',(req,res)=>{

res.render('homepage.ejs')

})
 

app.get('/resturaunts',(req,res)=>{

res.render('all-resturaunts.ejs',{resturaunts:resturaunts})

}) 

app.get('/resturaunts/:resID',(req,res)=>{

const foundResturaunts = resturaunts.find((oneRest)=>{

        return oneRest.id===Number(req.params.resID)
    })
    res.render('resturaunts-details.ejs',{resturaunt:foundResturaunts})

}) 


app.listen(3000,()=>{
    console.log('App is Running')
}) // listen on port 3000
