import React, { useState } from 'react';

export default function Calculadora() {
  const [numero1, setnumero1] = useState(0);
  const [numero2, setnumero2] = useState(0);
  const [multiplicacion, setMultiplicacion] = useState(0);
  const [suma, setSuma] = useState(0);

  const iniciar = () => {
    const n1 = Number(numero1);
    const n2 = Number(numero2);
    setMultiplicacion(n1 * n2);
    setSuma(n1 + n2);
  };

  return (
    <div>
      <h2>Máquina de calcular</h2>
      <input
        type="number"
        value={numero1}
        onChange={(e) => setnumero1(e.target.value)}
      />
      <input
        type="number"
        value={numero2}
        onChange={(e) => setnumero2(e.target.value)}
      />
      <button onClick={iniciar}>Calcular</button>

      <h3>Multiplicación: {multiplicacion}</h3>
      <h3>Suma: {suma}</h3>
    </div>
  );
}