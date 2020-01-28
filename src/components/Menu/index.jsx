import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => (
    <>
      <button type="button">
        <Link to="/game">Game</Link>
      </button>
      <button type="button">
        <Link to="/simulator">Simulado</Link>
      </button>
    </>
  );

export default Menu;