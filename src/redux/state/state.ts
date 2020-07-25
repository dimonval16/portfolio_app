import { engMode } from './engMode/indexEng';
import { rusMode } from './rusMode/indexRus';

export const initialState = {
    langMode: {
        engInfoMode: engMode,
        rusInfoMode: rusMode,
        currentMode: engMode,
    },
};

export type InitialStateType = typeof initialState;
