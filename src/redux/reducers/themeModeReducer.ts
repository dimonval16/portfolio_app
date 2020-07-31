import { initialState } from '../state/state';
import { ToggleModeActionI } from '../../interfaces/actionInterfaces';
import { TO_TOGGLE_THEME } from '../actions/themeModeActions';

const initialThemeState = initialState.themeMode;
type ThemeInitialStateType = typeof initialState.themeMode;
type ThemeModeReducerType = (state: ThemeInitialStateType, action: ToggleModeActionI) => ThemeInitialStateType;

export const themeModeReducer: ThemeModeReducerType = (state = initialThemeState, action) => {
    switch (action.type) {
        case TO_TOGGLE_THEME: {
            return {
                ...state,
                currentTheme: action.toggleEvent ? state.lightTheme : state.darkTheme,
            };
        }

        default: {
            return state;
        }
    }
};
