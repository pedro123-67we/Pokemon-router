import React, {useState } from 'react';
import './App.css';
import { Route,Link,BrowserRouter,Routes } from 'react-router-dom';
import{Conexion} from './conexion/conexion';
import { Cards } from './recipientes/card';
import Main from './Components/Main';
import './Components/style.css';



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

  function Pokemon(){
  return(
    <div className="App">
    <Main />
  </div>
  )

} 

const Matricula = () =>{

  return(
    <div>
      <h1 className='matricula'>Mi Matricula es 190093</h1><br></br>
      <p className='matricula'>Soy pedro Alejandro Gomez Dominguez</p>
      <img className='img' src='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAd
      Hx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nz
      c3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAIQAhAMBIgACEQEDEQH/xAAbAAACAg
      MBAAAAAAAAAAAAAAAABgQFAQIDB//EAEgQAAEDAwMCAgcEBQkFCQAAAAECAwQABREGEiETMRRBIjJRYXGBkRVCUoIWI2KSoQczQ1STosHS8CVVY3KUJDQ2RE
      VTc8PR/8QAGwEBAAIDAQEAAAAAAAAAAAAAAAQFAgMGAQf/xAAyEQACAgECAw
      UGBQUAAAAAAAAAAQIDBAUREiExIkFhccEGExRRkaEVIzJSgUJTsdHh/9oADAMBAAIRAxEA
      PwD3GiiigCiiotyuES2Q3Jlwktx4zQytxxWAKAlVDuV0t9qYL9zmx4jI+++6ED+NK6brqPVHNha+xrUrtcZjW594Z7ttH1QfJS/pVfbbXZLdqpbF3gPTJG9LbF4uT3iOo+UhRRg8NHChtwADyPIUBbr19b
      3yBZLdd7xnsuFCV0/7RW1P
      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'></img>
    </div>
  )
}


const App = () => {
  return(
    <BrowserRouter>
    <header>
      <nav>
      <Link to='/' className='nav-bar'>
        Home
      </Link>

      <Link to='/Pokemons' className='nav-bar'>
        Pokemons
      </Link>

      <Link to='/Pokemon' className='nav-bar'>
        Pokemon
      </Link>

      <Link to='/Matricula' className='nav-bar'>
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
