import { initialState } from '../state/state';
import { ThemeActionI } from '../../interfaces/actionInterfaces';

const initialThemeState = initialState.themeMode;
type InitialThemeStateType = typeof initialState.themeMode;
type ThemeModeReducerType = (state: InitialThemeStateType, action: ThemeActionI) => InitialThemeStateType;

export const themeModeReducer: ThemeModeReducerType = (state = initialThemeState, action) => {
    switch (action.type) {
        default: {
            return state;
        }
    }
};
