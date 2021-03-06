import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from './ducks';
import saga from './ducks/saga';

const sagaMiddleware= createSagaMiddleware();
const store= createStore(reducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(saga);

export default store;