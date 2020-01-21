import React from 'react';
import Menu from '../components/Menu';
import Routers  from '../components/Routers';

const App = () => (
    // <React.Fragment> <React.Fragment/> = suporta atributo key para identificar cada itens
    <>
      <Menu />
      <Routers />
    </>
  );

export default App;