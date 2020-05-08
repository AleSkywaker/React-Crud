import React, { Fragment, useState } from 'react';

export const Eventos = () => {
  const [texto, setTexto] = useState('Eventos');
  const [activa, setActiva] = useState(false);

  const cliquear = () => {
    if (activa) {
      setActiva(false);
      setTexto('Evento');
    } else {
      setActiva(true);
      setTexto('Nuevo evento');
    }
  };
  return (
    <Fragment>
      <h1>{texto}</h1>
      <button onClick={cliquear}>Cambia nombre</button>
    </Fragment>
  );
};
