import React, {Component} from 'react';
import PokeList from "./components/PokeList";
import DetailView from "./components/DetailView";
import './App.css'

class App extends Component {


    render() {
        return (
            <div className="App">
                <div className="Pokedex">
                    <PokeList />
                     <DetailView />
                </div>
            </div>
        );
    }
}

export default App;
