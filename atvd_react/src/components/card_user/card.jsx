import React from "react";
import "../../App.css";

const card = (props) => {
  return (
    <>
      <div className="card">
        <h2 className="titulo">{props.usuario}</h2>
        <div className="text">
          <h3 className="data"> CPF: {props.cpf}</h3>
          <h3 className="value">Idade: {props.age}</h3>
          <h3 className="local">Endereço: {props.endereco}</h3>
        </div>
      </div>
    </>
  );
};

export default card;
