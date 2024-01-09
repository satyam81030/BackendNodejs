const express = require("express")
const bodyParser = require("body-parser")

const app = express();
app.use(bodyParser.json());

app.listen(3000,()=>{
   console.log("Server listing at port 3000")
})

app.get("/",(req,res)=>{
    console.log("cgvhbjnkl");
    res.send("Hello World")
})

app.post("/api/cars", (req,res)=>{
    // return res.send("Cars sumitted")
    const {name, cars} = req.body;
    console.log(name,cars);
    console.log("Card");
    res.send("sumnitted")
})

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/mydata',{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("connection successful")
}).catch((err)=>{console.log(err)})