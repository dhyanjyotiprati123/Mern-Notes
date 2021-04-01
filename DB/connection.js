const mongoose=require("mongoose");

mongoose.connect("mongodb://localhost:27017/Notes", {useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true}
).then(()=>{
    console.log(`connection established successfully`);
}).catch((err)=>{
    console.log(err);
})