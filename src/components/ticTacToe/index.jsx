import React, { useEffect, useState } from 'react';
import './styles.css';

function Square({ value, handleClick }) {
    return <button onClick={handleClick} className='square'>{value}</button>
}

const TicTacToe = () => {
    const [squares, setSquares] = useState(Array(9).fill(''));
    const [isXTurn, setIsXTurn] = useState(true);
    const [status, setStatus] = useState('');

    function handleClick(currentSquare) {
        let cpySquares = [...squares];
        if (getWinner(cpySquares) || cpySquares[currentSquare]) return;
        cpySquares[currentSquare] = isXTurn ? 'X' : 'O';
        setSquares(cpySquares)
        setIsXTurn(!isXTurn);
    }

    function getWinner(squares) {
        const winningPatterns = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [6, 4, 2]
        ]

        for (let i = 0; i < winningPatterns.length; i++) {
            const [x, y, z] = winningPatterns[i];
            if (
                squares[x] &&
                squares[x] === squares[y] &&
                squares[x] === squares[z]
            ) {
                return squares[x]
            }
        }
        return null;
    }

    function handleRestart() {
        setSquares(Array(9).fill(''));
        setIsXTurn(true);
    }

    useEffect(() => {
        if (!getWinner(squares) && squares.every(square => square !== '')) {
            setStatus('Cats game! Try again!');
        } else if (getWinner(squares)) {
            setStatus(`Winner is ${getWinner(squares)}`);
        } else {
            setStatus(`Player turn: ${isXTurn ? 'X' : 'O'}`);
        }
    }, [squares, isXTurn])

    return (
        <div className='tic-tac-toe-container'>
            <div className='row'>
                <Square value={squares[0]} handleClick={() => handleClick(0)} />
                <Square value={squares[1]} handleClick={() => handleClick(1)} />
                <Square value={squares[2]} handleClick={() => handleClick(2)} />
            </div>
            <div className='row'>
                <Square value={squares[3]} handleClick={() => handleClick(3)} />
                <Square value={squares[4]} handleClick={() => handleClick(4)} />
                <Square value={squares[5]} handleClick={() => handleClick(5)} />
            </div>
            <div className='row'>
                <Square value={squares[6]} handleClick={() => handleClick(6)} />
                <Square value={squares[7]} handleClick={() => handleClick(7)} />
                <Square value={squares[8]} handleClick={() => handleClick(8)} />
            </div>
            <h1>{status}</h1>
            <button onClick={handleRestart} >Restart Game</button>
        </div>
    )
}

export default TicTacToe;