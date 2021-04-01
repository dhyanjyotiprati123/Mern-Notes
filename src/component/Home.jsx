import React, { useEffect, useState } from 'react';
import Card from "./Card";

const Home = () => {
    const [notes, setNotes]=useState([]);

    const GetNotes=async()=>{
        try{
            const getnote=await fetch("http://localhost:5000");
            const data=await getnote.json();
            setNotes(data)

        }catch(err){
            alert("something went wrong")
        }
    }

   useEffect(()=>{
       GetNotes();
   },[])

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-10 col-12 mx-auto">
                    <div className="row gx-5">
                         {
                             notes.map((celm)=>{
                                 return <Card 
                                   key={celm._id}
                                   title={celm.title}
                                   author={celm.author}
                                   content={celm.content}
                                 />
                             })
                         }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
