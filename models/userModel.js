const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required:true,
        trim: true
    },
    email:{
        type: String,
        required:true,
        trim: true
    },
    password:{
        type: String,
        required:true
    
    },
   Role:{
        type: Number,
        default:0
        
    },
    Cart:{
        type:Array,
        default:[]
    }


},{
    timestamps:true
})

module.exports = mongoose.model('Users',userSchema)