import React from 'react';
import './styles/DetailView.css';

const DetailView = ({pokemon, showDetails}) => {

    return (
        <section className="detail-view" >
            <div className='sprite-image'>
                <img src={pokemon.image} alt="pokemon" />
                <img src={pokemon.sprite} alt="pokemon" />
            </div>

            <div className='data-wrapper'>
                <h2 className='data-name'>Type: {pokemon.type}</h2>
                <p className="data-char">Base Experience: {pokemon.experience}</p>
                <p className="data-char">Height: {pokemon.height}</p>
                <p className="data-char">Weight: {pokemon.weight}</p>

            </div>
            <button className="back-btn" onClick={showDetails}>Back</button>
        </section>
    )
};

export default DetailView;
