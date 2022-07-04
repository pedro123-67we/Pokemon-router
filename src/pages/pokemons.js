import './App.css';
import React, {useState } from 'react';
import{Conexion} from './conexion/conexion';
import { Cards } from './recipientes/card';

const Pokemon = () => {
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