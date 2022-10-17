import React from "react";
import { useState, useEffect } from "react";
import AtvdTriang from "./atvd4_triangle"

const atvd04 = () => {
  const [option01, setOption01] = useState("");
  const [option02, setOption02] = useState("");
  const [winner, setWinner] = useState(false);
  const [winner2, setWinner2] = useState(false);
  const [count, setCount] = useState(1);

  const valoresJoguinho = ["Pedra", "Papel", "Tesoura"];

  useEffect(() => {
    if (
      (option01 == "Pedra" && option02 == "Tesoura") ||
      (option01 == "Papel" && option02 == "Pedra") ||
      (option01 == "Tesoura" && option02 == "Papel")
    ) {
      setWinner(true);
      setWinner2(false);
    } else if (
      (option02 == "Pedra" && option01 == "Tesoura") ||
      (option02 == "Papel" && option01 == "Pedra") ||
      (option02 == "Tesoura" && option01 == "Papel")
    ) {
      setWinner(false);
      setWinner2(true);
    } else if (
      (option02 == "Pedra" && option01 == "Pedra") ||
      (option02 == "Papel" && option01 == "Papel") ||
      (option02 == "Tesoura" && option01 == "Tesoura")
    ) {
      setWinner(false);
      setWinner2(false);
    }
  }, [count]);

  const handleIndexValue = (min, max) => {
    setCount(count + 1);
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  };

  return (
    <div className="pag">
      <h2 className="subtitle">PEDRA, PAPEL  E TESOURA</h2>
      <div className="container">
        <div className={winner ? "box winner" : "box"}>
          <p>{option01}</p>
          <div className="btn">
            <button
              onClick={() => {
                setOption01(valoresJoguinho[handleIndexValue(0, 3)]);
              }}
            >
              JOGAR
            </button>
          </div>
        </div>
        <div className={winner2 ? "box winner" : "box"}>
          <p>{option02}</p>
          <div className="btn">
            <button
              onClick={() => {
                setOption02(valoresJoguinho[handleIndexValue(0, 3)]);
              }}
            >
              JOGAR
            </button>
          </div>
        </div>
      </div>
      <br/>
      <h2 className="subtitle">ÁREA DO TRIÂNGULO</h2>
      <AtvdTriang/>
    </div>
  );
};

export default atvd04;
