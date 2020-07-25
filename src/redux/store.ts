import { createStore } from 'redux';
import { rootReducer } from './reducers';
import { initialState } from './state/state';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const store = createStore(rootReducer, initialState);

export type AppDispatch = typeof store.dispatch;
