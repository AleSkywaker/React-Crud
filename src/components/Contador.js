import React from 'react';

const Contador = () => {
  const [contador, setContador] = React.useState(0);

  const aumentar = () => {
    setContador(contador + 1);
  };
  const reset = () => {
    setContador(0);
  };
  return (
    <>
      <h2>Contador: {contador}</h2>
      <h4>{contador >= 2 ? 'Es a mayor a dos' : 'Es menor a dos'}</h4>
      <button onClick={aumentar}>Aumentar</button>
      <button onClick={reset}>Resetea</button>
    </>
  );
};

export default Contador;
