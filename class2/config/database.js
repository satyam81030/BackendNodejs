
const mongoose = require("mongoose");

require('dotenv').config();

const dbConnect = ()=> {
    console.log(process.env.DATABASE_URL)
        mongoose.connect(process.env.DATABASE_URL)
        .then(()=> console.log("DB connection successful"))
        .catch((err)=>{
            console.log("error in db connection");
            console.error(err.message)
        })
} 

module.exports  = dbConnect;