const express=require('express');

const router=express.Router();
const noteController=require("../controller/noteController");

router.get("/",noteController.GetNotes);

router.post("/create", noteController.CreateNotes);

module.exports=router;