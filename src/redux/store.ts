import { createStore } from 'redux';
import { rootReducer } from './reducers';
import { initialState } from './state/state';

const store = createStore(rootReducer, initialState);

export default store;
