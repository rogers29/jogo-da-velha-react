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
  SET_HISTORY: 'newGame/setHistory',
  SET_NEXT_PLAYER: 'newGame/setNextPlayer',
  SET_STEP_NUMBER: 'newGame/setStepNumber',
  SET_WINNER: 'newGame/setWinner',
  SET_CURRENT: 'newGame/setCurrent',
  SET_SIMULATED: 'newGame/setSimulated',
  RESET: 'newGame/reset',
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

export function setWinner(winner) {
  return {
    type: Types.SET_WINNER,
    payload: winner,
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