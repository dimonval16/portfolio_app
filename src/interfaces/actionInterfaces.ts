export interface ToggleLanguageActionI {
    type: string;
    toggleEvent: boolean;
}

export type ToggleLangACType = (toggleEvent: boolean) => ToggleLanguageActionI;

export interface ThemeActionI {
    type: string;
}
