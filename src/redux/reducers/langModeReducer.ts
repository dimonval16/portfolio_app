import { initialState } from '../state/state';
import { ActionTypesI } from '../../interfaces/actionInterfaces';

const langInitialState = initialState.langMode;
type LangStateType = typeof langInitialState;

export const langModeReducer = (state = langInitialState, action: ActionTypesI): LangStateType => {
    switch (action.type) {
        default: {
            return state;
        }
    }
};
