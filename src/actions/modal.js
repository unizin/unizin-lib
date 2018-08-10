/* @flow */
export const OPEN_MODAL = 'OPEN_MODAL';
export const CANCEL_MODAL = 'CANCEL_MODAL';
export const SET_MODAL_ONCLOSE = 'SET_MODAL_ONCLOSE';

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
