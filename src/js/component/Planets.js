// Planets.js
import React,{ useEffect, useState,useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Context } from "../store/appContext";

// Falta hacer el PLANETDETAILS y el useparams y todo
function Planets() {
  const { store, actions } = useContext(Context);
  const [combinedPlanets, setCombinedPlanets] = useState([]);

  useEffect(() => {
    actions.getPlanetsWithUid();
    actions.fetchPlanetsWithProperties();
  }, []);

  useEffect(() => {
    if (store.planetswithProperties.length && store.planetswithUid.length) {
      const combined = store.planetswithUid.map(planet => {
        const properties = store.planetswithProperties.find(prop => prop.name  === planet.name);
        return { ...planet, ...properties };
      });
      setCombinedPlanets(combined);
      console.log("combinedPlanets: ", combined);
    }
  }, [store.planetswithProperties,store.planetswithUid]);

  function handleClick (objectname) {
    actions.updateFavorites(objectname);
  };


  return (
    <div className="container-fluid py-2 mb-3 border border-warning">
      <h2 className="text-warning">Planets</h2>
      <div className='d-flex overflow-auto' style={{ whiteSpace: "nowrap" }}>
      {combinedPlanets.length === 0 ? (<p className='text-secondary fst-italic'>Stay strong while the force is loading...</p>) :
      combinedPlanets.map((planet, index) => (
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
                <button className={`heartbtn ${store.favorites.includes(planet.name) ? "clicked" : ""}`} onClick={() => handleClick(planet.name)}>♡</button>
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
