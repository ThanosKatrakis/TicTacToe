import React, { Component } from 'react'
import NavBar from './NavBar'
import Game from './Game'

export default class MainComponent extends Component {
    render() {
        return(
            <div>
                <NavBar />
                <Game />
            </div>
        );
    }
}