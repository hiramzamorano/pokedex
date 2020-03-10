import React from 'react';
import './styles/PokeCell.css';


const PokeCell = ({pokemon,showDetails}) => {
    return (
        <div >
            <button className="poke-cell" onClick={showDetails} >
                <h1>{pokemon.name}</h1>
                <img src={pokemon.image} alt="Pokemon"/>
            </button >
        </div>
    )
};


export default PokeCell;


