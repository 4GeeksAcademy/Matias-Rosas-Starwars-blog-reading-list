import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";


function CharacterDetails() {
  const { store, actions } = useContext(Context);
  const { id } = useParams();
  
  useEffect(() => {
    actions.getCharacter(id);
}, [store.character]);

  return (
    <div className="container">
      <div className="row mt-4">
        <div className="col-md-6">
          <img src="https://via.placeholder.com/800x600" className="img-fluid" alt="Character" />
        </div>

        <div className="col-md-6">
          <h1></h1>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
            totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
            qui ratione voluptatem sequi.
          </p>
        </div>
      </div>

      <div className="row mt-4 p-3 border-top border-danger">
        <div className="col text-center text-danger fw-bold">Name</div>
        <div className="col text-center text-danger fw-bold">Birth Year</div>
        <div className="col text-center text-danger fw-bold">Gender</div>
        <div className="col text-center text-danger fw-bold">Height</div>
        <div className="col text-center text-danger fw-bold">Skin Color</div>
        <div className="col text-center text-danger fw-bold">Eye Color</div>
      </div>
      <div className="row p-3">
        <div className="col text-center">{store.character.name}</div>
        <div className="col text-center">{store.character.birth_year}</div>
        <div className="col text-center">{store.character.gender}</div>
        <div className="col text-center">{store.character.height}</div>
        <div className="col text-center">{store.character.skin_color}</div>
        <div className="col text-center">{store.character.eye_color}</div>
      </div>
    </div>
  );
}

export default CharacterDetails;
