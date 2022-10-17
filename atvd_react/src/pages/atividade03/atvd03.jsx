import React from "react";
import { useState } from "react";

const atvd03 = () => {
  const [img, setImg] = useState("");
  const [theArray, setTheArray] = useState([]);

  const handleAddImg = (value) => {
    if(img !== ""){
      setTheArray([...theArray, value]);
      setImg("");
    }else{}
  };
  return (
    <div className="pag">
      <h2 className="subtitle">INSERÇÃO DE IMAGENS</h2>
      <div className="container pag3">
        <div className="form">
          <input
            type="text"
            value={img}
            onChange={(e) => setImg(e.target.value)}
            placeholder={'Url da Imagem'}
          />
          <button className={img === ""? "btn-disabled": "btn-abbled"} onClick={() => handleAddImg(img)}>Adicionar</button>
        </div>
      </div>
      <div className="img-part">
        {theArray.map((e) => {
          return <img src={e} />;
        })}
      </div>
    </div>
  );
};

export default atvd03;
