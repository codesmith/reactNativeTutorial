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

function Board({xIsNext, squares, onPlay}) {

    const winner = calculateWinner(squares);
    let status;
    if (winner) {
        status = "Winner:" + winner;
    } else {
        status = "Next player:" + (xIsNext? "X" : "O")
    }

    function clickHandler(i) {
        if (squares[i] || calculateWinner(squares)) {
            return;
        }
        const nextSquares = squares.slice();
        if (xIsNext) {
            nextSquares[i] = "X";
        } else {
            nextSquares[i] = "O";
        }
        onPlay(nextSquares);
    }

    return (
        <>
            <div className="status">{status}</div>
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

export default function Game() {
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [currentMove, setCurrentMove] = useState(0);
    const xIsNext = currentMove % 2 === 0;
    const currentSquares = history[currentMove];

    // 四角マスの押下をトリガーに実行される処理。
    // nextSquares 
    function handlePlay(nextSquares) {
        // slice()の第2引数の値は戻り値の要素には含まれない。
        // currentMove の要素まで戻り値に含めたいので、currentMove + 1 とする。
        const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
        setHistory(nextHistory);
        setCurrentMove(nextHistory.length - 1);
    }

    // ボタン押下をトリガーにして実行される処理。任意の手まで戻るようにstatusを更新する。
    // 偶数がXの番。奇数がOの番。
    function jumpTo(nextMove) {
        setCurrentMove(nextMove);
    }

    const moves = history.map((squares, move) => {
        let description;
        if (move == 0) {
            description = "Go to game start.";
        } else {
            description = "Go to move" + move;
        }

        return (
            <li key={move}>
                <button onClick={() => jumpTo(move)}>{description}</button>
            </li>
        );
    });

    return (
        <div className="game">
            <div className="game-board">
                <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
            </div>
        <div className="game-info">
            <ol>{moves}</ol>
        </div>
    </div>
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
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}
