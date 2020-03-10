import React from 'react';
import Paddle from "./Paddle";
import './styles/PokeCell.css';


const PokeCell = ({pokemon}) => {
    return (
        <div >
            <button className="poke-cell" >
                <h1>{pokemon.name}</h1>
                <img src={pokemon.sprite} alt="Pokemon"/>
            </button>
        </div>
    )
};


export default PokeCell;


