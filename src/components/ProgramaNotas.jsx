import React, { useState } from 'react';

export default function ProgramaNotas() {
  const [nota, setNota] = useState(0);

  const asignaNota = (event) => {
    setNota(Number(event.target.value));
  };

  const evaluarNota = (valor) => {
    if (valor > 6) return 'Notable';
    if (valor >= 5) return 'Aprobada';
    return 'Suspendida';
  };

  return (
    <div>
      <h2>Comprobador de notas</h2>
      <input
        type="number"
        id="nota"
        value={nota}
        onChange={asignaNota}
      />
      <p>La nota es ahora: {nota}</p>
      <p>Resultado: {evaluarNota(nota)}</p>
    </div>
  );
}