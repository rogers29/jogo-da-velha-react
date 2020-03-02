import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { reset } from  '../../store/ducks/game'

const Menu = () => {
  const dispatch = useDispatch();
  
  const resetGame = () => {
    dispatch(reset());
  };

  return (
      <>
        <button type="button" onClick={resetGame}>
          <Link to="/game">Game</Link>
        </button>
        <button type="button">
          <Link to="/simulator">Simulado</Link>
        </button>
      </>
    );
  };

export default Menu;