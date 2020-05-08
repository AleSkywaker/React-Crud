import React from 'react';

const Lista = () => {
  const alumnos = [
    { id: 1, nombre: 'Alex', email: 'alex@email.com' },
    { id: 2, nombre: 'Marta', email: 'marta@email.com' },
    { id: 3, nombre: 'Carolina', email: 'carolina@email.com' },
    { id: 4, nombre: 'Patricia', email: 'patricia@email.com' },
    { id: 5, nombre: 'Laura', email: 'laura@email.com' },
  ];

  const [lista, setAlumnos] = React.useState(alumnos);

  const agregar = () => {
    setAlumnos([...lista, { id: 6, nombre: 'Silvia', email: 'silvia@email.com' }]);
  };

  return (
    <>
      <h3>Lista</h3>

      {lista.map((el, i) => {
        return (
          <li key={i}>
            <strong>Nombre :</strong> {el.nombre}
          </li>
        );
      })}

      <button onClick={agregar}>Agregar</button>
    </>
  );
};

export default Lista;
