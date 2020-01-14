import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles';
import Square from '../Square';

const Board = (props) => {
  const { squares, onClick } = props;
  
  const renderSquare = (i) => {
    return <Square
      value={squares[i]}
      onClick={() => onClick(i)}
    />;
  }

  return (
    <div>
      <div style={styles.boardRow}>
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div style={styles.boardRow}>
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div style={styles.boardRow}>
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
};

Board.propTypes = {
  squares: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Board;
