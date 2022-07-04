import React, {useState } from 'react';
import './App.css';
import { Route,Link,BrowserRouter,Routes } from 'react-router-dom';
import{Conexion} from './conexion/conexion';
import { Cards } from './recipientes/card';


const Home = () => <h1>elija lo que quiere ver</h1>

const Pokemons = () => {
  const [url,setUrl]=useState ('https://pokeapi.co/api/v2/pokemon/');
  const estado = Conexion(url);
  const {cargando,dato}=estado
  cargando? console.log('cargando'): console.log(dato.results);
  return (
  <div>
      <h1>Lista de Pokemones</h1>
      {
      cargando
      ?
      <h1>cargando...</h1>
      :
      <div>
      <Cards results={dato.results}/>

      <div className='botones'>
          <button className='boton' onClick={()=>setUrl(dato.previous)}>Anterior</button>
          <button className='boton' onClick={()=>setUrl(dato.next)}>Siguiente</button>
      </div>
      </div>
      }
  </div>
  )
}

const Pokemon = () => <h1>Pokemon</h1>

const Matricula = () => <h1>Mi Matricula es 190093</h1>

const App = () => {
  return(
    <BrowserRouter>
    <header>
      <nav>
      <Link to='/'>
        Home
      </Link>

      <Link to='/Pokemons'>
        Pokemons
      </Link>

      <Link to='/Pokemon'>
        Pokemon
      </Link>

      <Link to='/Matricula'>
        Matricula
      </Link>
      </nav>
    </header>

    <Routes>
    <Route exact path='/' element={<Home />} >
    </Route>

    <Route path='/Pokemons'  element={<Pokemons />}>
    </Route>

    <Route path='/Pokemon'  element={<Pokemon />}>
    </Route>

    <Route path='/Matricula'  element={<Matricula />}>
    </Route> 
    </Routes>
    </BrowserRouter>
    )
}

export default App;
