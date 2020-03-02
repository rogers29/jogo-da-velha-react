import { all } from 'redux-saga/effects';
import watcherGame from './game/saga';

export default function* saga() {
  yield all([
    watcherGame(),
  ]);
}