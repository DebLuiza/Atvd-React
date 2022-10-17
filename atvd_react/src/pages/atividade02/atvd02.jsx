import React from "react";
import Card from "../../components/card_user/card";

const atvd02 = () => {
  const usuarios = [
    {
      usuario: "Joãozinho",
      cpf: "000.000.000-35",
      idade: "18",
      endereco: "Endereço 01",
    },
    {
      usuario: "Daniel",
      cpf: "000.000.000-48",
      idade: "14",
      endereco: "Endereço 02",
    },
    {
      usuario: "Joacir",
      cpf: "000.000.000-52",
      idade: "85",
      endereco: "Endereço 03",
    },
  ];
  return (
    <>
     <div className="pag">
     <h2 className='subtitle'>USUÁRIOS</h2>
      <div className="container">
        {usuarios.map((e) => {
          return (
            <>
              <Card
                usuario={e.usuario}
                cpf={e.cpf}
                age={e.idade}
                endereco={e.endereco}
              />
            </>
          );
        })}
      </div>
     </div>
    </>
  );
};

export default atvd02;
