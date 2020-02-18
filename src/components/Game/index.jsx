import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Board from '../Board';
import styles from './styles';
import { requesterService } from '../../services';
import { setStepNumber, 
  setCurrent, 
  setHistory, 
  setNextPlayer, 
  setWinner,
} from '../../store/ducks/newGame';

const calculateWinner = async (squares) => {
  try {
    return requesterService.post('/', {
      squares,
    });
  } catch (err) {
    return err;
  }
};

const Game = () => {
  const history = useSelector(state => state.newGame.history);
  const nextPlayer = useSelector(state => state.newGame.nextPlayer);
  const stepNumber = useSelector(state => state.newGame.stepNumber);
  const winner = useSelector(state => state.newGame.winner);
  const current = useSelector(state => state.newGame.current);
  const simulated = useSelector(state => state.newGame.simulated);
  const dispatch = useDispatch();

  useEffect(() => {
    if (history.length > 1) {
      dispatch(setStepNumber(history.length - 1));
      dispatch(setCurrent(history[history.length - 1]));
    }
  }, [history, dispatch]);

  const getNextPlayer = () => (nextPlayer === 'X' ? 'O' : 'X');
  
  const handleClick = async (i) => {
    if (simulated) {
      return;
    }

    const subHistory = history.slice(0, stepNumber + 1);
    const subCurrent = subHistory[subHistory.length - 1];
    const squares = subCurrent.squares.slice();

    if (winner || squares[i]) {
      return;
    }

    squares[i] = nextPlayer;
    const newHistory = subHistory.concat([{ squares }]);

    dispatch(setHistory(newHistory));
    dispatch(setNextPlayer(getNextPlayer));
    dispatch(setWinner(await calculateWinner(squares)));
  };

  const jumpTo = async (step) => {
    dispatch(setStepNumber(step));
    dispatch(setNextPlayer(((step % 2) === 0) ? 'X' : 'O'));
    dispatch(setCurrent(history[step]));
    dispatch(setWinner(await calculateWinner(history[step].squares)));
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