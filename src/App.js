import React, {Component} from 'react';
import Pokemon from "./components/Pokemon";
import PokeList from "./components/PokeList";
import Paddle from "./components/Paddle";
import DetailView from "./components/DetailView";
import './App.css'

class App extends Component {
    constructor() {
        super();
        this.state = { i : 1,  pokemon: {} };
        this.arrowRight = this.arrowRight.bind(this);
        this.arrowLeft = this.arrowLeft.bind(this);
    }

    componentDidMount() {
        this.makeRequest(this.state.i);
    }

    makeRequest(index){
        const API = "https://pokeapi.co/api/v2/pokemon/";
        fetch(API+index)
            .then(res => res.json())
            .then(data => {
                const pokemon = new Pokemon(data);

                this.setState({ pokemon, i: index });
            })
            .catch(err => console.log(err));

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
        console.log(this.state.pokemon);
        return (
            <div className="App">
                <div className="Pokedex">
                    <PokeList pokemon={this.state.pokemon} arrowRight={this.arrowRight} arrowLeft={this.arrowLeft}/>
                     <DetailView pokemon={this.state.pokemon} />
                </div>
            </div>
        );
    }
}

export default App;
