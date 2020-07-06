import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import RootSaga from '../Saga/Base/index';
import Reducers from '../Ducks/Base/index';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(Reducers, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(RootSaga);
export default store;