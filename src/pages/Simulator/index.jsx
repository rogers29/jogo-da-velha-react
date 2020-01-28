import React, { useEffect, useState } from 'react';
import Game from '../../components/Game';
import { requesterService } from '../../services';

const Simulator = () => {
  const [simulation, setSimulation] = useState();

  const getSimulator = async () => {
    try {
      const response = await requesterService.get('/');
      setSimulation(response);
      return response
    } catch (err) {
        return err;
    }
  };

  useEffect(() => {
    getSimulator();
  }, []);

  return (
    <Game historyProps={simulation} />
  );
};

export default Simulator;