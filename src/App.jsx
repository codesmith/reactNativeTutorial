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

    function clickHandler(i) {
        const squareList = squares.slice();
        squareList[i] = "X";
        setSquares(squareList);
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
