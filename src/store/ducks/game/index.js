const initialState = {
  history: [{ squares: Array(9).fill(null) }],
  nextPlayer: 'X',
  stepNumber: 0,
  winner: null,
  current: { squares: Array(9).fill(null) },
  simulated: false,
};

// Action Types

export const Types = {
  SET_HISTORY: 'game/setHistory',
  SET_NEXT_PLAYER: 'game/setNextPlayer',
  SET_STEP_NUMBER: 'game/setStepNumber',
  SET_WINNER: 'game/setWinner',
  SET_CURRENT: 'game/setCurrent',
  SET_SIMULATED: 'game/setSimulated',
  RESET: 'game/reset',
  SAGA_SET_WINNER: 'game/sagaSetWinner',
};

// Action Creators

export function setHistory(history) {
  return {
    type: Types.SET_HISTORY,
    payload: history,
  };
}

export function setNextPlayer(nextPlayer) {
  return {
    type: Types.SET_NEXT_PLAYER,
    payload: nextPlayer,
  };
}

export function setStepNumber(stepNumber) {
  return {
    type: Types.SET_STEP_NUMBER,
    payload: stepNumber,
  };
}

export function calculateWinner(squares) {
  return {
    type: Types.SAGA_SET_WINNER,
    payload: squares,
  };
}

export function setWinner(squares) {
  return {
    type: Types.SET_WINNER,
    payload: squares,
  };
}

export function setCurrent(current) {
  return {
    type: Types.SET_CURRENT,
    payload: current,
  };
}

export function setSimulated(simulated) {
  return {
    type: Types.SET_SIMULATED,
    payload: simulated,
  };
}

export function reset() {
  return {
    type: Types.RESET,
  };
}

// Reducer

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case Types.SET_HISTORY:
      return { ...state, history: action.payload };
    case Types.SET_NEXT_PLAYER:
      return { ...state, nextPlayer: action.payload };
    case Types.SET_STEP_NUMBER:
      return { ...state, stepNumber: action.payload };
    case Types.SET_WINNER:
      return { ...state, winner: action.payload };
    case Types.SET_CURRENT:
      return { ...state, current: action.payload };
    case Types.SET_SIMULATED:
      return { ...state, simulated: action.payload };
    case Types.RESET:
      return initialState;
    default:
      return state;
  }
}