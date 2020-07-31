import { initialState } from '../state/state';
import { ToggleModeActionI } from '../../interfaces/actionInterfaces';
import { TO_TOGGLE_LANGUAGE } from '../actions/langModeActions';

const langInitialState = initialState.langMode;
type LangInitialStateType = typeof langInitialState;
type LangModeReducerType = (state: LangInitialStateType, action: ToggleModeActionI) => LangInitialStateType;

export const langModeReducer: LangModeReducerType = (state = langInitialState, action) => {
    switch (action.type) {
        case TO_TOGGLE_LANGUAGE: {
            return {
                ...state,
                currentLang: action.toggleEvent ? state.engLang : state.rusLang,
            };
        }

        default: {
            return state;
        }
    }
};
