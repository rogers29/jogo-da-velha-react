import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Game from '../../components/Game';
import { requesterService } from '../../services';
import { setHistory, setSimulated } from '../../store/ducks/game';

const Simulator = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getSimulator = async () => {
      try {
        const response = await requesterService.get('/');
        dispatch(setHistory(response));
        dispatch(setSimulated(true));
        return response
      } catch (err) {
        return err;
      }
    };

    getSimulator();
  }, [dispatch]);

  return (
    <Game />
  );
};

export default Simulator;