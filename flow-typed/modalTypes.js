import type { Node } from 'react';

declare type ConfirmationModal = {
    cancelText?: string,
    confirmText?: string,
    element: ?HTMLElement,
    modalContent: Node,
    onCancel: () => void,
    onClose?: HTMLElement => void,
    onConfirm: () => void,
    showCancel?: boolean,
    showConfirm?: boolean,
};

declare type ModalState = ?ConfirmationModal;
