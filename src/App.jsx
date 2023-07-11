import React, { useState } from "react";

function Square({value, clickSquareHandler}) {

    return (
    <button 
        className="square"
        onClick={clickSquareHandler}
    >
        {value}
    </button>
    );
}

export default function Board() {
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);

    function clickHandler(i) {
        if (squares[i]) {
            return;
        }
        const squareList = squares.slice();
        if (xIsNext) {
            squareList[i] = "X";
        } else {
            squareList[i] = "O";
        }
        setSquares(squareList);
        setXIsNext(!xIsNext);
    }

    return (
        <>
            <div className="board-row">
                <Square value={squares[0]} clickSquareHandler={() => clickHandler(0)}/>
                <Square value={squares[1]} clickSquareHandler={() => clickHandler(1)}/>
                <Square value={squares[2]} clickSquareHandler={() => clickHandler(2)}/>
            </div>
            <div className="board-row">
                <Square value={squares[3]} clickSquareHandler={() => clickHandler(3)}/>
                <Square value={squares[4]} clickSquareHandler={() => clickHandler(4)}/>
                <Square value={squares[5]} clickSquareHandler={() => clickHandler(5)}/>
            </div>
            <div className="board-row">
                <Square value={squares[6]} clickSquareHandler={() => clickHandler(6)}/>
                <Square value={squares[7]} clickSquareHandler={() => clickHandler(7)}/>
                <Square value={squares[8]} clickSquareHandler={() => clickHandler(8)}/>
            </div>
        </>
    );
}

function calculateWinner(squares) {
  
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i]
        if (squares[a] && squares[a] === squares[a] && squares[a] === squares[c]) {
            return squares[a];
        }
        return null;
    }
}
