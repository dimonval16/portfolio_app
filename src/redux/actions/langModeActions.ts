import { ToggleLanguageActionI, ToggleLangACType } from '../../interfaces/actionInterfaces';

export const TO_TOGGLE_LANGUAGE = 'TO_TOGGLE_LANGUAGE';

export const toggleLanguageAC: ToggleLangACType = (toggleEvent): ToggleLanguageActionI => {
    return {
        type: TO_TOGGLE_LANGUAGE,
        toggleEvent,
    };
};
