const User = require("../models/User")
require("dotenv").config()

exports.register = async(req,res)=>{
    try{
        const{fullname,rollno,email,phone,cemail} = req.body;
        if(!fullname || !rollno|| !email || !phone || !cemail){
            return res.status(403).json({
                success:false,
                message:"FILL ALL THE DETAILS"
            })
        }

        const existing = await User.findOne({email:email});
        if(existing){
            return res.status(405).json({
                success: false,
                message: "USER ALREADY REGISTERED"
            })
        }

        const user = await User.create({
            fullname:fullname,
            rollno:rollno,
            email:email,
            phone:phone,
            cemail:cemail,
        })

        return res.status(200).json({
            success:true,
            message:"REGISTERED SUCCESFULLY",
            user
        })
    }catch(e){
        console.log("internal .........")
        console.log(e)
        return res.status(500).json({error:'Internal Server Error'})

    }
}