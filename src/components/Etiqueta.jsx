import React from 'react';

export default function Etiqueta(props) {
  return (
    <span style={{ background: '#007bff', color: '#fff', padding: '2px 8px', borderRadius: '4px', fontSize: '12px', marginLeft: '8px' }}>
      {props.texto}
    </span>
  );
}