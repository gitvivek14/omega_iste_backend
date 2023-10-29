const mongoose = require('mongoose')

require("dotenv").config();


exports.connect = ()=>{
    mongoose.connect(process.env.mongodburl,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    .then(()=>{
        console.log('DB Connected')
    })
    .catch((e)=>{
        console.log('not connected')
    })
}