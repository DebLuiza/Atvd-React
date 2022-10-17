import React from "react";
import { useState } from "react";


const atvd4_triangle = () => {
  const [height, setHeight] = useState(0);
  const [base, setBase] = useState(0);
  const [area, setArea] = useState(0);

  const handleSetArea = () => {
      setArea((base * height) / 2);
      setHeight(0);
      setBase(0);
  };

  return (
    <div className="container-triangle">
      <div className="form">
        <input
          type="number"
          id="id-altura"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
        <input
          type="number"
          id="id-base"
          value={base}
          onChange={(e) => setBase(e.target.value)}
        />
        <button
          className={height === 0 || base === 0 ? "btn-disabled" : "btn-abbled"}
          onClick={() => handleSetArea()}
        >
          Calcular
        </button>
        <div className="results">
          <span>Área: {area}</span>
        </div>
      </div>
    </div>
  );
};

export default atvd4_triangle;
