import React from 'react';
import "./style/component.css";

const Card = (props) => {
    return (
        <div className="col-md-4 col-10 mx-auto">
            <div className="card mt-5 mb-md-5 mb-3">
            <div className="card-body">
              <h5 className="card-title">{props.title}</h5>
              <h4 className="card-title">Author: {props.author}</h4>
              <p className="card-text">{props.content}</p>  
            </div>
          </div>
        </div>
    )
}

export default Card
