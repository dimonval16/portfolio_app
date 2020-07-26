export interface ToggleLanguageActionI {
    type: string;
    toggleEvent: boolean;
}

export type ToggleLangACType = (toggleEvent: boolean) => ToggleLanguageActionI;
