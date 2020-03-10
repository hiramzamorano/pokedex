import React, {Component} from 'react';
import Pokemon from "./components/Pokemon";
import PokeList from "./components/PokeList";
import DetailView from "./components/DetailView";
import './App.css'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { i : 1,  pokemon: {}, showing: false };
        this.showDetails = this.showDetails.bind(this);
        this.arrowRight = this.arrowRight.bind(this);
        this.arrowLeft = this.arrowLeft.bind(this);
    }

    componentDidMount() {
        this.makeRequest(this.state.i);
    }

    makeRequest(index){
        const API_URL = "https://pokeapi.co/api/v2/pokemon/";
        fetch(API_URL+index)
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

    showDetails () {
        if (this.state.showing){
            this.setState({showing : false});
        } else {
            this.setState({showing: true})
        }

    }



    render() {
        console.log(this.state.pokemon);
        return (
            <div className="App">
                <div className="Pokedex">
                    <PokeList showDetails={this.showDetails} pokemon={this.state.pokemon} arrowRight={this.arrowRight} arrowLeft={this.arrowLeft}/>
                    { this.state.showing ?
                        <DetailView pokemon={this.state.pokemon} showDetails={this.showDetails}/>
                        : null
                    }
                </div>
            </div>
        );
    }
}

export default App;
