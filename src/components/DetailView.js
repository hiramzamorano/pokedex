import React from 'react';
import './styles/DetailView.css';

const DetailView = ({pokemon}) => {

    return (
        <section className="detail-view" >
            <img className='sprite-image' src={pokemon.sprite}  />
            <div className='data-wrapper'>
                <h1 className='data-name'>Type: {pokemon.type}</h1>
                <p className="data-char">Stats: </p>
            </div>
        </section>
    )
};

export default DetailView;
