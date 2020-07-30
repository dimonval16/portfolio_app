import { engMode } from './engMode/indexEng';
import { rusMode } from './rusMode/indexRus';
import { lightThemeMode } from './themeMode/lightTheme';
import { darkThemeMode } from './themeMode/darkTheme';

export const initialState = {
    langMode: {
        engLang: engMode,
        rusLang: rusMode,
        currentLang: engMode,
    },
    themeMode: {
        lightTheme: lightThemeMode,
        darkTheme: darkThemeMode,
        currentTheme: lightThemeMode,
    },
};

export type InitialStateType = typeof initialState;
