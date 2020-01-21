import React, { useState } from 'react';
import Board from '../components/Board';
import styles from './styles';

import { requesterServices } from '../services';

const calculateWinner = async (squares) => {
  try {
    return requesterServices.post('/', {
      squares,
    });
  } catch (err) {
    return err;
  }
};

const Game = () => {
  const [history, setHistory] = useState([{
    squares: Array(9).fill(null),
  }]);
  const [xIsNext, setXIsNext] = useState(true);
  const [stepNumber, setStepNumber] = useState(0);
  const [winner, setWinner] = useState(null);

  const current = history[stepNumber];

  const handleClick = async (i) => {
    const subHistory = history.slice(0, stepNumber + 1);
    const subcurrent = subHistory[subHistory.length - 1];
    const squares = subcurrent.squares.slice();

    if (winner || squares[i]) {
      return;
    }

    squares[i] = xIsNext ? 'X' : 'O';
    setHistory(subHistory.concat([{
      squares,
    }]));
    setStepNumber(subHistory.length);
    setXIsNext(!xIsNext);

    setWinner(await calculateWinner(squares));
  };

  const jumpTo = async (step) => {
    setStepNumber(step);
    setXIsNext((step % 2) === 0);
    setWinner(await calculateWinner(history[step].squares));
  };

  const moves = history.map((step, move) => {
    const desc = move
      ? `Go to move # ${move}`
      : 'Go to game start';
    return (
      // eslint-disable-next-line react/no-array-index-key
      <li key={move}>
        <button type="button" onClick={() => jumpTo(move)}>{desc}</button>
      </li>
    );
  });

  const nextPlayer = xIsNext ? 'X' : 'O';
  const status = winner
    ? `Winner: ${winner}`
    : `Next player: ${nextPlayer}`; 

  return (
    <div style={styles.game}>
      <div style={styles.gameBoard}>
        <Board
          squares={current.squares}
          onClick={(i) => handleClick(i)}
        />
      </div>
      <div style={styles.gameInfo}>
        <div>{ status }</div>
        <ol>{ moves }</ol>
      </div>
    </div>
  );
};

export default Game;
