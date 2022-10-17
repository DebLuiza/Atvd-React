import React from "react";
import "../../App.css";

const card = (props) => {
  return (
    <>
      <div className="card">
        <h2 className="titulo">{props.band}</h2>
        <div className="text">
          <h3 className='data'> Data: {props.data}</h3>
          <h3 className='value'>Valor: {props.value}</h3>
          <h3 className='local'>Local: {props.local}</h3>
        </div>
      </div>
    </>
  );
};

export default card;
