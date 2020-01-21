import React, { useEffect, useState } from 'react';
import Game from '../Game';
import { requesterService } from '../../services';

const Simulator = () => {
  const { simulation, setSimulation } = useState(null);

  const getSimulator = async () => {
    try {
      return await requesterService.post('/');
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    setSimulation(getSimulator());
  }, [setSimulation]);

  return (
    <Game historyProps={simulation} />
  );
};

export default Simulator;