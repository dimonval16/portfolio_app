import { combineReducers } from 'redux';
import { langModeReducer } from './langModeReducer';

export const rootReducer = combineReducers({
    langMode: langModeReducer,
});
