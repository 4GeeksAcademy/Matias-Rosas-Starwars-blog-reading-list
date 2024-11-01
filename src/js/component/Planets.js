// Planets.js
import React from 'react';

const planets = [
  { name: "Tatooine", climate: "arid", population: "200000" },
  { name: "Hoth", climate: "frozen", population: "unknown" },
  { name: "Tatooine", climate: "arid", population: "200000" },
  { name: "Hoth", climate: "frozen", population: "unknown" },
  // Agrega más planetas aquí si es necesario
];

function Planets() {
  return (
    <div className="row">
      <h2 className="text-danger">Planets</h2>
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
                <button className="btn btn-outline-dark">♡</button>
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
