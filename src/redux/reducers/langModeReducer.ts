import { initialState } from '../state/state';
import { ToggleLanguageActionI } from '../../interfaces/actionInterfaces';
import { TO_TOGGLE_LANGUAGE } from '../actions/langModeActions';

const langInitialState = initialState.langMode;
type LangStateType = typeof langInitialState;

export const langModeReducer = (state = langInitialState, action: ToggleLanguageActionI): LangStateType => {
    switch (action.type) {
        case TO_TOGGLE_LANGUAGE: {
            return {
                ...state,
                currentMode: action.toggleEvent ? state.engInfoMode : state.rusInfoMode,
            };
        }

        default: {
            return state;
        }
    }
};
