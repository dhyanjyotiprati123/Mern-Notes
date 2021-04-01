import React, { useState } from 'react';
import "./style/component.css";
import Axios from 'axios';

const Note = () => {
    const[note, setNote]=useState({
        title: "",
        author: "",
        content: ""
    });

    const HandleChange=(event)=>{
         const {name, value}=event.target;
         setNote({...note, [name]: value})
    }

    const Click=(event)=>{
        event.preventDefault();

        const newNote={
            title: note.title,
            author: note.author,
            content: note.content
        }
        
        Axios.post("http://localhost:5000/create", newNote);

        setNote({
            title: "",
            author: "",
            content: ""
        })
    }
    return (
        <div className="mainDiv">
            <div className="noteDiv">
              <form action="post">
                <div className="mb-3">
                <label htmlFor="Full Name" className="form-label">Note Title</label>
                <input type="text" className="form-control"  placeholder="Note Title" name="title" value={note.name} onChange={HandleChange} />
                 </div>
                <div className="mb-3">
                <label htmlFor="Title" className="form-label">Author Name</label>
                <input type="text" className="form-control"  placeholder="Full name" name="author" value={note.author} onChange={HandleChange} />
                </div>
                <div className="mb-3">
                 <label htmlFor="Content" className="form-label">Content</label>
                <textarea type="text" className="form-control"  placeholder="Content" name="content" value={note.content} onChange={HandleChange} />
                 </div>
                <div className="mb-3 mt-5">                            
                 <button className="btn" onClick={Click}>Create Note</button>
                </div>
            </form>
            </div>
        </div>
    )
}

export default Note
