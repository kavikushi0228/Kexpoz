const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name:{
        type: String,
        required:true,
        trim: true,
        unique:true
    }
},{
    timestamps:true
})

module.exports = mongoose.model("Product",productSchema)