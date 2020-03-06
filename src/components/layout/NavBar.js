import React, {Component} from 'react';
import '../styles/NavBar.css'

class NavBar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-dark bg-dark">
                    <a className="navbar-brand" href="#">Pokemon</a>
                </nav>
            </div>
        );
    }
}

export default NavBar;