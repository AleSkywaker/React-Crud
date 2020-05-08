import React from 'react';
import './App.css';
import Parrafo from '../src/components/parrafo';
import Variables from './components/Variables';
import { Eventos } from './components/Eventos';
import Contador from './components/Contador';
import Lista from './components/Lista';
import Formulario from './components/Formulario';

function App() {
  return (
    <div className='container mt-5'>
      <h1>Ejercicios React</h1>
      {/* <Parrafo nombre='Colombo' /> */}
      <Variables />
      {/* <Eventos />
      <Contador />
      <Lista /> */}
      <Formulario />
    </div>
  );
}

export default App;
