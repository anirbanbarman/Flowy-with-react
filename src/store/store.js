import { createStore,applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import { flowyReducer } from './reducers/flowy-reducer';

export const store=createStore(flowyReducer,applyMiddleware(thunk));