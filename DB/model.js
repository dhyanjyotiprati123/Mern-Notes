const mongoose=require("mongoose");

const NotesSchema=new mongoose.Schema({
    title:{
        type: String,
        reqired: true
    },
    author:{
        type: String,
        reqired: true
    },
    content:{
        type: String,
        reqired: true
    }
})

const Note= new mongoose.model("Note", NotesSchema);

module.exports=Note;