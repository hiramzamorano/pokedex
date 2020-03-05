import React, {Component} from 'react';


class Pokemon extends Component {

    state = {
        loading: true,
        pokemon: null,
    };

    async componentDidMount() {
        const url = "https://pokeapi.co/api/v2/pokemon/";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({pokemon: data.results[12], loading: false});
    }

    render() {
        if (this.state.loading) {
            return <div>Loading...</div>
        }

        if (!this.state.pokemon) {
            return <div>No Pokemon :(</div>
        }
        return (
            <div>
               <div>{this.state.pokemon.name}</div>
            </div>
        );
    }
}

export default Pokemon;