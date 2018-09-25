/* @flow */
import { modalActions } from '../const';
import createReducer from './createReducer';

const { OPEN_MODAL, CANCEL_MODAL, SET_MODAL_ONCLOSE } = modalActions;

export default createReducer(null, {
    [OPEN_MODAL]: (_, { type, ...modalState }: Action<ConfirmationModal>) => modalState,
    [CANCEL_MODAL]: () => null,
    [SET_MODAL_ONCLOSE]: (state, { onClose }) => {
        return { ...state, onClose };
    },
});
