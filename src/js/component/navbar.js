import React from "react";
import { useNavigate } from "react-router-dom";
export const Navbar = () => {
  const navigate = useNavigate();
	return (
		<nav className="navbar navbar-expand-lg bg-dark">
    <div className="container mx-1">
      <div className="mx-1 mb-0">
       <a><h1 className="navbar-brand  badge text-wrap text-warning d-block" onClick={() => navigate("/")}  style={{fontSize: '1.9em', fontFamily: 'Impact, fantasy', textAlign: 'start', padding: '0,0,0,0'}}>Star<br />Wars</h1>
       </a>
      
      </div>
      <div className="d-flex align-items-center">
        <span className="me-2 text-dark btn btn-warning fw-bolder">Favorites <span className="badge bg-secondary">0</span></span>
        <div className="dropdown">
          <span className="dropdown-toggle text-white" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            
          </span>
          <ul className="dropdown-menu dropdown-menu-end">
            <li><span className="dropdown-item">(empty)</span></li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
	);
};
