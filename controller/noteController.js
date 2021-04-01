const Note=require("../DB/model");

const CreateNotes=async(req,res)=>{
    const {title, author, content}=req.body;
    try {
        const createNote= new Note({
            title, author, content
        });

        await createNote.save();
    } catch (error) {
        res.status(400).send(error)
    }
}

const GetNotes=async(req,res)=>{
    try {
        const getNote=await Note.find();
        res.status(200).send(getNote)
    } catch (error) {
       res.status(400).send(error)
    }
}

exports.CreateNotes=CreateNotes;
exports.GetNotes=GetNotes;