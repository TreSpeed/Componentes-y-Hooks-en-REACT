import React from 'react';

export default function Visualizador({ nombreProyecto, precioFinal }) {
  return (
    <div style={{ marginTop: '20px', padding: '15px', border: '2px solid #007bff', borderRadius: '8px' }}>
      <h3>Resumen del Presupuesto</h3>
      <p><strong>Proyecto:</strong> {nombreProyecto || 'Sin nombre'}</p>
      <p><strong>Coste Total:</strong> {precioFinal} €</p>
      {precioFinal > 500 && (
        <p style={{ color: '#d9534f', fontWeight: 'bold' }}>
          ★ Presupuesto Premium ★
        </p>
      )}
    </div>
  );
}