/* @flow */
import { OPEN_MODAL, CANCEL_MODAL, SET_MODAL_ONCLOSE } from '../actions/modal';
import createReducer from './createReducer';

export default createReducer(null, {
    [OPEN_MODAL]: (_, { type, ...modalState }: Action<ConfirmationModal>) => modalState,
    [CANCEL_MODAL]: () => null,
    [SET_MODAL_ONCLOSE]: (state, { onClose }) => {
        return { ...state, onClose };
    },
});
