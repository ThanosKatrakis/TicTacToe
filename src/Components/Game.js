import React, { Component } from 'react'

export default class Game extends Component {
    // We create the constructor for the gaming component
    constructor() {
        super(props);
        this.state = {
            xIsNext: true, // A flag that set's X player to play first 
            stepNumber: 0, // No steps in the beginning of the game
            history: [
                { square: Array(9).fill(null) } // Null cause none played at the beginning
            ]
        }


    }
    render() {
        return (
            <div>

            </div>
        )
    }
}
