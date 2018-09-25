/* @flow */
import { modalActions } from '../const';
const { OPEN_MODAL, CANCEL_MODAL, SET_MODAL_ONCLOSE } = modalActions;

const _cancelModal = { type: CANCEL_MODAL };
export function cancelModal(): ThunkAction<> {
    return function(dispatch, getState) {
        const { modal } = getState();
        if (modal) {
            const { onClose, element } = modal;
            onClose && element && onClose(element);
        }
        dispatch(_cancelModal);
    };
}

export function setModalOnClose(onClose: HTMLElement => void): ThunkAction<> {
    return function(dispatch) {
        dispatch({
            type: SET_MODAL_ONCLOSE,
            onClose,
        });
    };
}

export type OpenConfirmationModalParam = $Diff<
    ConfirmationModal,
    {| onConfirm: () => void, onCancel: () => void |}
>;
export function openConfirmationModal(
    modalProps: OpenConfirmationModalParam
): ThunkAction<Promise<void>> {
    return function(dispatch) {
        return new Promise((resolve, reject) => {
            const action: Action<ConfirmationModal> = {
                ...modalProps,
                type: OPEN_MODAL,
                onConfirm: () => {
                    dispatch(cancelModal());
                    resolve();
                },
                onCancel: () => {
                    dispatch(cancelModal());
                    reject();
                },
            };
            dispatch(action);
        });
    };
}
