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
        const history = this.state.history.slice(0, this.state.stepNumber + 1); //  Create a copy of current history
        const current = history[history.length - 1]; // It's the item in the history
        const squares = current.squares.slice(); // Creates a copy of the squares
        const winner = culculateWinner(squares);
        if (winner || squares[i]) { // If there is a value in i the other player cannot change it
            return;
        }
        squares[i] = this.state.xIsNext ? 'X' : 'O'; // Find whose player turn is
        this.setState({ // Put the new history to the history
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

function culculateWinner(squares) {
    const winningLines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (let i = 0; i < winningLines.length; i++) {
        const [a, b, c] = winningLines[i];
        if (squares[a] && squares[a] === squares[b] && squares[b] === squares[c]) {
            return squares[a];
        }
    }

    return null; // If there is no winner
}
