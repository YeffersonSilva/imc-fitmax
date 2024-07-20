import { Check } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const Pricing = () => {
  const pricing = [
    {
      imgUrl: "/pricing.jpg",
      title: "TRIMESTRAL",
      price: 1800,
      length: 3,
    },
    {
      imgUrl: "/pricing.jpg",
      title: "SEMESTRAL",
      price: 3400,
      length: 6,
    },
    {
      imgUrl: "/pricing.jpg",
      title: "ANUAL",
      price: 6700,
      length: 12,
    },
  ];
  return (
    <section className="pricing">
      <h1>PLANOS DE FITNESS FITMAX</h1>
      <div className="wrapper">
        {pricing.map((element) => {
          return (
            <div className="card" key={element.title}>
              <img src={element.imgUrl} alt={element.title} />
              <div className="title">
                <h1>{element.title}</h1>
                <h1>PACOTE</h1>
                <h3>R$ {element.price}</h3>
                <p>Por {element.length} Meses</p>
              </div>
              <div className="description">
                <p>
                  <Check /> Equipamentos
                </p>
                <p>
                  <Check /> Treinamento Livre o Dia Todo
                </p>
                <p>
                  <Check /> Vestiário Grátis
                </p>
                <p>
                  <Check /> Suporte Especializado 24/7
                </p>
                <p>
                  <Check /> Opção de Congelamento por 20 Dias
                </p>
                <Link to={"/"}>Junte-se Agora</Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Pricing;
