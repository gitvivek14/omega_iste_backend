const express = require("express")
const app = express();

require("dotenv").config();


const cors = require('cors')

const registerroutes = require("../SERVER/routes/Registration")


const port = process.env.PORT || 4000;

app.use(express.json());
app.use(cors({
    origin:"https://omega-iste.vercel.app",
    credentials:true,
}))

require("./config/database").connect();
app.use("/api/v1",registerroutes);

app.get("/",(req,res)=>{
    return res.json({
        success:true,
        message:"YOUR SERVER IS ACTIVATED"
    })
})

app.listen(port,()=>{
    console.log(`Server is running on port${port}`);
})