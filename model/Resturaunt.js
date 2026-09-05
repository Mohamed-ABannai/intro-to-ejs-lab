const mongoose=require('mongoose')

const latabatSchema= new mongoose.Schema({

name:{type:String , required:true, minLength:2, maxLength:100},
isOpen:{type:Boolean, default:true},
address:{type:String,required:true },
phone:{type:Number, required:true},
menu:[{name:{type:String,required:true},
            price:{type:Number,required:true},
            rating:{type:Number,required:true}
        }]

},{timestamps:true})

const Latabat= mongoose.model('Latabat',latabatSchema)


module.exports=Latabat