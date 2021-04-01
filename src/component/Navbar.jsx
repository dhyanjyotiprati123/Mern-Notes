import React from 'react';
import {NavLink} from "react-router-dom";
import "./style/component.css";

const Navbar = () => {
    return (
        <div className="container-fluid navDiv"> 
            <div className="row">
                <div className="col-md-10 col-12 mx-auto">
                <nav className="navbar navbar-expand-lg">
  <div className="container-fluid">
    <NavLink className="navbar-brand mt-3" to="/">Notes </NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto mb-2 mb-lg-0 mt-1">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/create">Create Note</NavLink>
        </li>
       
      </ul>
    </div>
  </div>
</nav>
                </div>
            </div>
        </div>
    )
}

export default Navbar
