export interface ToggleModeActionI {
    type: string;
    toggleEvent: boolean;
}

export type ToggleModeACType = (toggleEvent: boolean) => ToggleModeActionI;
