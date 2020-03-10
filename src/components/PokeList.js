import React from "react";
import PokeCell from "./PokeCell";
import './styles/PokeList.css'
import Paddle from "./Paddle";

const PokeList = ({pokemon, arrowRight, arrowLeft, showDetails}) => {

    return (
        <section className="poke-list">
            <PokeCell pokemon={pokemon} showDetails={showDetails} />
            <Paddle arrowRight={arrowRight} arrowLeft={arrowLeft}/>
        </section>
    )
};

export default PokeList;
