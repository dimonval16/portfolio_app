import { ToggleModeActionI, ToggleModeACType } from '../../interfaces/actionInterfaces';

export const TO_TOGGLE_LANGUAGE = 'TO_TOGGLE_LANGUAGE';

export const toggleLanguageAC: ToggleModeACType = (toggleEvent: boolean): ToggleModeActionI => {
    return {
        type: TO_TOGGLE_LANGUAGE,
        toggleEvent,
    };
};
