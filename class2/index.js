require('dotenv').config();
const express = require("express");
const router = require("./Routes/todos");
const dbConnect = require("./config/database")

const app  = express();
const bodyParser =  require('body-parser');
app.use(bodyParser.json());
dbConnect();

app.use("/api/v1", router)

app.get("/", (req,res)=>{
    res.send(`<h1> This is HomePage</h1>`)
})

app.listen(process.env.PORT,()=>{
    console.log("Server listing at port 3000")
})  

