import thunk from "redux-thunk";
import {
    createStore,
    applyMiddleware
} from "redux";
import {
    composeWithDevTools
} from "redux-devtools-extension";
import createSagaMiddleware from 'redux-saga'

import rootReducer from '../reducers/index';
import {
    sagaConnect
} from "../actions/async/asyncAction";

const sagaMiddleware = createSagaMiddleware();



const middlewares = [thunk, sagaMiddleware];

const composeWithEnhancer = composeWithDevTools(
    applyMiddleware(...middlewares)
)

export const configureStore = createStore(
    rootReducer,
    composeWithEnhancer
);

sagaMiddleware.run(sagaConnect)

export default configureStore;