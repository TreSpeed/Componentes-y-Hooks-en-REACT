import React, { useState } from 'react';

export default function ProgramaSaludos() {
  const [mensaje, setMensaje] = useState('');
  const [nombre, setNombre] = useState('');

  const crearSaludo = () => {
    setMensaje(`Hola, ¿cómo estás ${nombre}?`);
  };

  const crearDespedida = () => {
    setMensaje(`¡Hasta luego, ${nombre}! Que tengas un buen día.`);
  };

  const onChangeHandler = (event) => {
    setNombre(event.target.value);
  };

  return (
    <div>
      <h2>Bienvenidas oficiales</h2>
      <input
        type="text"
        name="campo_nombre"
        value={nombre}
        onChange={onChangeHandler}
        placeholder="Escribe tu nombre"
      />
      <button onClick={crearSaludo}>Enviar saludo</button>
      <button onClick={crearDespedida}>Enviar despedida</button>
      <p>{mensaje}</p>
    </div>
  );
}