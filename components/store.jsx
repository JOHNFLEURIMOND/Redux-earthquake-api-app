import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootSaga from './rootSaga';
import { handleLoadQuakes } from './modules/sagas';

import { myReducer } from './modules/reducer';

const sagaMiddleware = createSagaMiddleware();

const reducers = combineReducers({
    myState: myReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(handleLoadQuakes);
sagaMiddleware.run(rootSaga);

export default store;
