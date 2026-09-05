// imports
const express = require("express") //importing express package
const app = express() // creates a express application
const mongoose=require('mongoose')
const dotenv = require('dotenv').config();
const dns = require("dns");
dns.setServers(["8.8.8.8", "1.1.1.1"]);
const Latabat=require('./model/Resturaunt.js')

app.use(express.static('public')); //all static files are in the public folder

const resturaunts = require("./data.js");

async function connectToDB() {
    try{
    await mongoose.connect(process.env.mongoURI)
     console.log('Connected to DataBase')
    }
    catch(err){

        console.log('Failed to Connect: ',err)

    }
}
connectToDB()
// Routes go here

app.get('/',(req,res)=>{

res.render('homepage.ejs')

})
 

app.get('/resturaunts', async(req,res)=>{

    try {

        const resturaunts = await Latabat.find()

        console.log(resturaunts)

        res.render('all-resturaunts.ejs',{resturaunts: resturaunts})

    }
    catch(err) {
         console.log('Error: ', err)
    }
}) 

app.get('/resturaunts/:resID', async (req,res)=>{

    try {
        const foundResturaunt = await Latabat.findById(req.params.resID)

        console.log(foundResturaunt)

        res.render('resturaunts-details.ejs',{resturaunt: foundResturaunt})

    }
    catch(err) {
        console.log(err)
    }

})


app.listen(3000,()=>{
    console.log('App is Running')
}) // listen on port 3000

module.exports={connectToDB}