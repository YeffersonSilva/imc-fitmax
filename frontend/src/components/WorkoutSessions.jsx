import React from "react";

const WorkoutSessions = () => {
  return (
    <section className="workout_session">
      <div className="wrapper">
        <h1>SESSÃO DE TREINO TOP</h1>
        <p>
          Nossa sessão de treino mais popular, projetada para aumentar sua força
          e resistência com exercícios intensos e desafiadores.
        </p>
        <img src="/img5.jpg" alt="treino" />
      </div>
      <div className="wrapper">
        <h1>BOOTCAMPS DE DESTAQUE</h1>
        <p>
          Participe de nossos bootcamps de destaque para uma experiência de
          treino intensa e motivadora, perfeita para todos os níveis de
          condicionamento físico.
        </p>
        <div className="bootcamps">
          <div>
            <h4>Bootcamp de Alta Intensidade</h4>
            <p>
              Um programa de treino projetado para maximizar sua queima de calorias e melhorar seu condicionamento cardiovascular.
            </p>
          </div>
          <div>
            <h4>Bootcamp Funcional</h4>
            <p>
              Concentre-se em movimentos funcionais para melhorar sua força, flexibilidade e resistência geral.
            </p>
          </div>
          <div>
            <h4>Bootcamp de Força</h4>
            <p>
              Um treino focado em desenvolver a força muscular através de exercícios com pesos livres e máquinas.
            </p>
          </div>
          <div>
            <h4>Bootcamp de Resistência</h4>
            <p>
              Melhore sua resistência com um programa de treino que combina exercícios aeróbicos e anaeróbicos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkoutSessions;
