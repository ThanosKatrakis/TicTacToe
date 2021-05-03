import React, { Component } from 'react'
import Board from './Board';

export default class Game extends Component {
    // We create the constructor for the gaming component
    constructor(props) {
        super(props);
        this.state = {
            xIsNext: true, // A flag that set's X player to play first 
            stepNumber: 0, // No steps in the beginning of the game
            history: [
                { squares: Array(9).fill(null) } // Null cause none played at the beginning
            ]
        }


    }

    handleClick(i) {
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length - 1];
        const squares = current.squares.slice();
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
            history: history.concat({
                squares: squares
            }),
            xIsNext: !this.state.xIsNext,
            stepNumber: history.length
        });
    }

    render() {
        const history = this.state.history;
        const current = history[this.state.stepNumber];

        return (
            <div>
                <div className="game">
                    <div className="game-board">
                        <Board onClick={(i) => this.handleClick(i)}
                            squares={current.squares} />
                    </div>
                </div>
            </div>
        )
    }
}
