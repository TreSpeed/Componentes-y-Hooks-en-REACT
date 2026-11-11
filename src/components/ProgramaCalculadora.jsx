import React, { useState } from 'react';

export default function ProgramaCalculadora() {
  const [temperatura, setTemperatura] = useState('');

  const ConversorGrados = ({ dato }) => {
    const validar = (valor) => {
      const temp = Number(valor);
      return isNaN(temp) ? false : temp;
    };

    const pasaraFarenheit = (grado) => (grado * 1.8) + 32;
    const pasaraCelsius = (grado) => (grado - 32) / 1.8;

    const temp = validar(dato);

    if (temp === false) return <p>Datos introducidos erróneos</p>;

    const fahrenheit = pasaraFarenheit(temp).toFixed(2);
    const celsius = pasaraCelsius(temp).toFixed(2);

    return (
      <div>
        <p><strong>{temp}°C</strong> equivalen a <strong>{fahrenheit}°F</strong></p>
        <p><strong>{temp}°F</strong> equivalen a <strong>{celsius}°C</strong></p>
      </div>
    );
  };

  return (
    <div>
      <h2>Conversión de grados</h2>
      <input
        type="text"
        id="num"
        value={temperatura}
        onChange={(e) => setTemperatura(e.target.value)}
        placeholder="Introduce la temperatura"
      />
      {temperatura !== '' && <ConversorGrados dato={temperatura} />}
    </div>
  );
}