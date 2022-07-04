import React from "react";
import {InfoPokemon} from './card-de-pokemon';
import './estilo-card.css'


export const Cards = ({results}) =>{
    return(
        <div className="container">
            <ul className="cards">
                {
                    results.map(p=>(
                        <li className="card-item" key={p.name}>
                            <InfoPokemon url={p.url}/>
                            
                        </li>
                    ))
                }
            </ul>

        </div>
    )
}