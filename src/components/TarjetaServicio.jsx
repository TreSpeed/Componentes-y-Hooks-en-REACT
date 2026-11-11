import React from 'react';
import Etiqueta from './Etiqueta.jsx';

export default function TarjetaServicio(props) {
  return (
    <div style={{ border: '1px solid #ddd', padding: '15px', borderRadius: '8px', marginBottom: '15px' }}>
      <h2>
        {props.titulo}
        <Etiqueta texto={props.tipoEtiqueta} />
      </h2>
      <p>{props.descripcion}</p>
    </div>
  );
}