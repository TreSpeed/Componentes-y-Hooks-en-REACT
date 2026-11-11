import React, { useState } from 'react';
import Visualizador from './Visualizador.jsx';

export default function CalculadoraPresupuesto() {
  const [nombre, setNombre] = useState('');
  const [horas, setHoras] = useState(0);

  const PRECIO_POR_HORA = 30;
  const total = Number(horas) * PRECIO_POR_HORA;

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h2>Calculadora de Presupuestos IBEROSTAR</h2>
      
      <div style={{ marginBottom: '10px' }}>
        <label>Nombre del proyecto: </label>
        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          placeholder="Ej. Rediseño Web"
        />
      </div>

      <div style={{ marginBottom: '10px' }}>
        <label>Horas estimadas: </label>
        <input
          type="number"
          value={horas}
          onChange={(e) => setHoras(e.target.value)}
          min="0"
        />
      </div>

      <Visualizador nombreProyecto={nombre} precioFinal={total} />
    </div>
  );
}