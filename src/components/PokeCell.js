import React from 'react';
import Paddle from "./Paddle";
import './styles/PokeCell.css';


class PokeCell extends React.Component{
    constructor() {
        super();
        this.state = { i : 1, isLoading : true , pokemon: "", img: ""};
        this.arrowRight = this.arrowRight.bind(this);
        this.arrowLeft = this.arrowLeft.bind(this);
    }

    componentDidMount() {
        this.makeRequest(this.state.i);
    }

    makeRequest(index){
        const API = "https://pokeapi.co/api/v2/pokemon/";
        fetch(API+index)
            .then(response => response.json())
            .then(allpokemon => {
                console.log(allpokemon.sprites.front_default);
                return this.setState({
                    pokemon: allpokemon.name,
                    img: allpokemon.sprites.front_default,
                    i: index,
                    isLoading: false
                });
            });
    }

    arrowRight() {
        return this.makeRequest(this.state.i + 1);
    }
    arrowLeft() {
        if (this.state.i) {
            return this.makeRequest(this.state.i - 1);
        }
    }

    render() {
        return (
            <div >
                <button className="poke-cell">
                    <h1>{this.state.pokemon}</h1>
                    <img src={this.state.img} alt="Pokemon"/>
                </button>
                <Paddle arrowRight={this.arrowRight} arrowLeft={this.arrowLeft}/>
            </div>

        );
    }

}


export default PokeCell;


