import React from 'react';
import Etiqueta from './Etiqueta.jsx';

export default function TarjetaServicio(props) {
  return (
    <div style={{
      border: '1px solid #444',
      borderRadius: '8px',
      padding: '15px',
      marginBottom: '15px',
      boxSizing: 'border-box'
    }}>
      <h2 style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '8px',
        fontSize: 'clamp(1.1rem, 3.5vw, 1.5rem)',
        margin: '0 0 10px 0'
      }}>
        <span>{props.titulo}</span>
        <Etiqueta texto={props.tipoEtiqueta} />
      </h2>
      <p style={{ margin: 0, opacity: 0.9 }}>{props.descripcion}</p>
    </div>
  );
}