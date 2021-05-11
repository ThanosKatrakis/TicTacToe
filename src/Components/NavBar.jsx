import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {
    render() {
        return (
            <header>
                <nav className="NavbarItems">
                   <ul className="nav-menu">
                       <li>
                           <Link to="/" className="nav-links">Game</Link>
                       </li>
                       <li>
                           <Link to="/statistics" className="nav-links">Statistics</Link>
                       </li>
                       <li>
                           <Link to="/settings" className="nav-links">Settings</Link>
                       </li>
                   </ul>
                </nav>
            </header>
        )
    }
}

export default NavBar