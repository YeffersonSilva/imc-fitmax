import React, { useState } from "react";
import { toast } from "react-toastify";

const BMICalculator = () => {
  const [altura, setAltura] = useState("");
  const [peso, setPeso] = useState("");
  const [genero, setGenero] = useState("");
  const [imc, setImc] = useState("");

  const calcularIMC = (e) => {
    e.preventDefault();

    if (!altura || !peso || !genero) {
      toast.error("Por favor, insira altura, peso e gênero válidos.");
      return;
    }

    const alturaEmMetros = altura / 100;
    const valorIMC = (peso / (alturaEmMetros * alturaEmMetros)).toFixed(2);
    setImc(valorIMC);

    if (valorIMC < 18.5) {
      toast.warning(
        "Você está abaixo do peso. Considere buscar orientação de um profissional de saúde."
      );
    } else if (valorIMC >= 18.5 && valorIMC < 24.9) {
      toast.success(
        "Você está com peso normal. Continue mantendo um estilo de vida saudável."
      );
    } else if (valorIMC >= 25 && valorIMC < 29.9) {
      toast.warning(
        "Você está com sobrepeso. Considere buscar orientação de um profissional de saúde."
      );
    } else {
      toast.error(
        "Você está na faixa de obesidade. É recomendável procurar orientação de um especialista em saúde."
      );
    }
  };

  return (
    <section className="bmi">
      <h1>CALCULADORA DE IMC</h1>
      <div className="container">
        <div className="wrapper">
          <form onSubmit={calcularIMC}>
            <div>
              <label>Altura (cm)</label>
              <input
                type="number"
                value={altura}
                onChange={(e) => setAltura(e.target.value)}
                required
              />
            </div>
            <div>
              <label>Peso (kg)</label>
              <input
                type="number"
                value={peso}
                onChange={(e) => setPeso(e.target.value)}
                required
              />
            </div>
            <div>
              <label>Gênero</label>
              <select
                value={genero}
                onChange={(e) => setGenero(e.target.value)}
              >
                <option value="">Selecione o Gênero</option>
                <option value="Masculino">Masculino</option>
                <option value="Feminino">Feminino</option>
              </select>
            </div>
            <button type="submit">Calcular IMC</button>
          </form>
        </div>
        <div className="wrapper">
          <img src="/bmi.jpg" alt="Imagem de IMC" />
        </div>
      </div>
    </section>
  );
};

export default BMICalculator;
