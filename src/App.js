import React, {Component} from 'react';
import PokeList from "./components/PokeList";
import DetailView from "./components/DetailView";
import NavBar from "./components/layout/NavBar";
import './App.css'

class App extends Component {
    constructor() {
        super();
        this.state = {};
    }


    handleOnClick() {
      console.log("HI");
    }

    render() {
        return (
            <div className="App">
                <div className="Pokedex">
               <PokeList handleOnClick={this.handleOnClick}/>
               <DetailView pokemon={this.state.pokemon}/>
                </div>
            </div>
        );
    }
}

export default App;
