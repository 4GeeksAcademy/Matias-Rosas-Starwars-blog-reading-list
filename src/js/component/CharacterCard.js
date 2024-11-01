/*
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function CharacterCard({ character }) {
  const [characterProperties, setCharacterProperties] = useState({});
  const navigate = useNavigate();

  // Función para obtener el personaje desde la API
  function getCharacter(characterUid) {
    fetch(`https://www.swapi.tech/api/people/${characterUid}`)
      .then((resp) => resp.json())
      .then((data) => {
        setCharacterProperties(data.result.properties);
      })
      .catch((error) => console.log(error));
  }

  // Ejecutamos la llamada a la API solo cuando character.uid cambia
  useEffect(() => {
    if (character && character.uid) {
      getCharacter(character.uid);
    }
  }, [character]);

  return (
    <div className="card mb-4">
      <img src="https://via.placeholder.com/400x200" className="card-img-top" alt={character.name} />
      <div className="card-body">
        <h5 className="card-title">{character.name}</h5>
        <p className="card-text">
          <strong>Gender:</strong> {characterProperties.gender || "Loading"}<br />
          <strong>Hair Color:</strong> {characterProperties.hair_color || "Loading"}<br />
          <strong>Eye Color:</strong> {characterProperties.eye_color || "Loading"}
        </p>
        <div className="d-flex justify-content-between">
          <a  className="btn text-dark btn btn-warning fw-bolder" onClick={()=> navigate(`/CharacterDetails/${character.uid}`)}>Learn more!</a>
          <button className="btn btn-outline-dark">♡</button>
        </div>
      </div>
    </div>
  );
}

export default CharacterCard;

*/