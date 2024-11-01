// Vehicles.js
import React from 'react';

const vehicles = [
  { name: "X-wing", model: "T-65 X-wing", manufacturer: "Incom Corporation" },
  { name: "TIE Fighter", model: "Twin Ion Engine Fighter", manufacturer: "Sienar Fleet Systems" },
  { name: "X-wing", model: "T-65 X-wing", manufacturer: "Incom Corporation" },
  { name: "TIE Fighter", model: "Twin Ion Engine Fighter", manufacturer: "Sienar Fleet Systems" },
  // Agrega más vehículos aquí si es necesario
];

function Vehicles() {
  return (
    <div className="container-fluid py-2">
      <h2 className="text-danger">Vehicles</h2>
      <div className='d-flex overflow-auto' style={{ whiteSpace: "nowrap" }}>
      {vehicles.map((vehicle, index) => (
        <div key={index} style={{ minWidth: "300px", marginRight: "15px" }}>
          <div className="card mb-4">
            <img src="https://via.placeholder.com/400x200" className="card-img-top" alt={vehicle.name} />
            <div className="card-body">
              <h5 className="card-title">{vehicle.name}</h5>
              <p className="card-text">
                <strong>Model:</strong> {vehicle.model}<br />
                <strong>Manufacturer:</strong> {vehicle.manufacturer}
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

export default Vehicles;
