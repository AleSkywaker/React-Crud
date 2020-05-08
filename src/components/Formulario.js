import React from 'react';

const Formulario = () => {
  const [fruta, setFruta] = React.useState('');
  const [descripcion, setDescripcion] = React.useState('');
  const [listaFrutas, setListaFrutas] = React.useState([]);

  const enviar = (e) => {
    e.preventDefault();

    const frutas = {};

    if (!fruta.trim()) {
      console.log('Debes rellenar el campo fruta');
      return;
    }
    if (!descripcion.trim()) {
      console.log('Debes rellenar el campo descripcion');
      return;
    }
    console.log('enviando...' + fruta + ' ' + descripcion);

    frutas.fruta = fruta;
    frutas.descripcion = descripcion;

    setListaFrutas([...listaFrutas, frutas]);
    e.target.reset();
    setFruta('');
    setDescripcion('');
  };
  return (
    <>
      <h2>Formulario</h2>
      <form onSubmit={enviar}>
        <input
          type='text'
          placeholder='Escriba una fruta'
          className='form-control mb-2'
          onChange={(e) => setFruta(e.target.value)}
        />
        <input
          type='text'
          placeholder='Escriba una descripcion'
          className='form-control mb-2'
          onChange={(e) => setDescripcion(e.target.value)}
        />
        <button className='btn btn-primary btn-block' type='submit'>
          Agregar
        </button>
      </form>
      <hr />
      {listaFrutas.map((e, i) => {
        return (
          <>
            <li key={i}>
              <strong>Fruta : </strong>
              {e.fruta} - <strong>Descripcion : </strong>
              <em>{e.descripcion}</em>
            </li>
          </>
        );
      })}
    </>
  );
};

export default Formulario;
