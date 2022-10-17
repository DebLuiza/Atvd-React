import React from "react";
import Card from "../../components/card_band/card";

const atvd01 = () => {
  const agenda = [
    {
      banda: "NIRVANA",
      data: "25/12/2022",
      valor: "R$ 800,00",
      local: "local 01",
    },
    {
      banda: "Gun's and Roses",
      data: "25/12/2023",
      valor: "R$ 880,00",
      local: "local 02",
    },
    {
      banda: "Maneskin",
      data: "25/12/2024",
      valor: "R$ 850,00",
      local: "local 03",
    },
  ];
  return (
    <>
     <div className="pag">
     <h2 className='subtitle'>SHOWS</h2>
      <div className="container">
        {agenda.map((e) => {
          return (
            <>
              <Card
                band={e.banda}
                data={e.data}
                value={e.valor}
                local={e.local}
              />
            </>
          );
        })}
      </div>
     </div>
    </>
  );
};

export default atvd01;
