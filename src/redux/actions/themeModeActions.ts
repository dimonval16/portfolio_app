import { ToggleModeACType, ToggleModeActionI } from '../../interfaces/actionInterfaces';

export const TO_TOGGLE_THEME = 'TO_TOGGLE_THEME';

export const toggleThemeAC: ToggleModeACType = (toggleEvent: boolean): ToggleModeActionI => {
    return {
        type: TO_TOGGLE_THEME,
        toggleEvent,
    };
};
