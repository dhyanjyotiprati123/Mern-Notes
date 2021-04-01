require('dotenv').config();
require("./DB/connection");
const express=require("express");
const cors=require('cors');

const Router=require("./routes/noteRoute");

const app=express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(Router);

app.listen(port,()=>{
    console.log(`server is running at port no : ${port}`);
})