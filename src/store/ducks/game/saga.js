import { takeLatest, put } from 'redux-saga/effects';
import { requesterService } from '../../../services';
import { Types, setWinner } from '.';

function* workerWinner(action) {
  try {
    const winner = yield requesterService.post('/', {
      squares: action.payload,
    });

    yield put(setWinner(winner));
  } catch (err) {
    console.log(err);
  }
}

export default function* watcherGame() {
    yield takeLatest(Types.SAGA_SET_WINNER, workerWinner);
}