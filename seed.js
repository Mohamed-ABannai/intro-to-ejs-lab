const mongoose=require('mongoose')
const Latabat=require('./model/Resturaunt')
const resturaunts = require('./data')
const {connectToDB}=require('./server')

connectToDB()

async function seedResturaunts(){

    try{

        const insertAllData= await Latabat.insertMany(resturaunts)
        console.log(insertAllData)

        }
    catch(err){

        console.log("error :" ,err)

    }
    }

    // seedResturaunts()