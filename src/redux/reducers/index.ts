import { combineReducers } from 'redux';
import { langModeReducer } from './langModeReducer';
import { themeModeReducer } from './themeModeReducer';

export const rootReducer = combineReducers({
    langMode: langModeReducer,
    themeMode: themeModeReducer,
});
