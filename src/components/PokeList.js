import React from "react";
import PokeCell from "./PokeCell";
import './styles/PokeList.css'
import Paddle from "./Paddle";

const PokeList = ({pokemon, arrowRight, arrowLeft}) => {

    return (
        <section className="poke-list">
            <PokeCell pokemon={pokemon} />
            <Paddle arrowRight={arrowRight} arrowLeft={arrowLeft}/>
        </section>
    )
};

export default PokeList;
