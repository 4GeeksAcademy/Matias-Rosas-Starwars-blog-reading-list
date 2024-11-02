// Planets.js
import React,{ useEffect, useState,useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Context } from "../store/appContext";


const planets = [
  { name: "Tatooine", climate: "arid", population: "200000" },
  { name: "Hoth", climate: "frozen", population: "unknown" },
  { name: "Tatooine", climate: "arid", population: "200000" },
  { name: "Hoth", climate: "frozen", population: "unknown" },
  // Agrega más planetas aquí si es necesario
];

function Planets() {
  const { store, actions } = useContext(Context);


  actions.fetchPlanetsWithProperties();
  return (
    <div className="container-fluid py-2 mb-3 border border-warning">
      <h2 className="text-warning">Planets</h2>
      <div className='d-flex overflow-auto' style={{ whiteSpace: "nowrap" }}>
      {planets.map((planet, index) => (
        <div key={index} style={{ minWidth: "300px", marginRight: "15px" }}>
          <div className="card mb-4">
            <img src="https://via.placeholder.com/400x200" className="card-img-top" alt={planet.name} />
            <div className="card-body">
              <h5 className="card-title">{planet.name}</h5>
              <p className="card-text">
                <strong>Climate:</strong> {planet.climate}<br />
                <strong>Population:</strong> {planet.population}
              </p>
              <div className="d-flex justify-content-between">
                <a href="#" className="btn text-dark btn btn-warning fw-bolder">Learn more!</a>
                <button className="btn btn-outline-light">♡</button>
              </div>
            </div>
          </div>
        </div>
      ))}
      </div>

    </div>
  );
}

export default Planets;
