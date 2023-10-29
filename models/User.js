const mongoose = require("mongoose");

const userschema = new mongoose.Schema({
    fullname:{
        type:String,
        required:true,
    },
    rollno:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    phone:{
        type:String,
        required:true,
    },
    cemail:{
        type:String,
        required:true,
    }
})

module.exports = mongoose.model("User",userschema);