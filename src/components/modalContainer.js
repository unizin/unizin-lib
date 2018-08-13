/* @flow */
import React, { PureComponent, type Node } from 'react';
import { createPortal } from 'react-dom';
import { connect } from 'react-redux';
import styled, { keyframes } from 'styled-components';
import { CSSTransition } from 'react-transition-group';

import { setModalOnClose } from '../actions/modal';
import theme from '../theme';
import FocusTrap from './focusTrap';

const mapStateToProps = ({ modal }) => ({ ...modal });

class ModalWrapper extends PureComponent<{
    onCancel: () => void,
    children?: Node,
    setModalOnClose: ((HTMLElement) => void) => void,
}> {
    componentDidMount() {
        document.addEventListener('keyup', this.escListener, true);
    }

    componentWillUnmount() {
        document.removeEventListener('keyup', this.escListener);
    }

    escListener = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            this.props.onCancel();
        }
    };

    render() {
        const { children, setModalOnClose } = this.props;
        return <ModalWrapperDiv setModalOnClose={setModalOnClose}>{children}</ModalWrapperDiv>;
    }
}

export type Props = ConfirmationModal & {
    setModalOnClose: ((HTMLElement) => void) => void,
};

export const ModalPortal = ({
    modalContent,
    cancelText,
    confirmText,
    onConfirm,
    onCancel,
    setModalOnClose,
}: Props) => {
    // For compatibility with react-aria-modal
    const portalTarget = document.querySelector('#root ~ div > div') || document.body;
    return modalContent && portalTarget
        ? createPortal(
              <ModalWrapper onCancel={onCancel} setModalOnClose={setModalOnClose}>
                  <CSSTransition in={true} classNames="modal-body" timeout={330} appear>
                      <ModalBody>
                          <CloseButton onClick={onCancel} aria-label="Close" />
                          {modalContent}
                          <ModalButtons>
                              <button onClick={onCancel}>{cancelText || 'No'}</button>
                              <button onClick={onConfirm}>{confirmText || 'Yes'}</button>
                          </ModalButtons>
                      </ModalBody>
                  </CSSTransition>
              </ModalWrapper>,
              portalTarget
          )
        : null;
};

export default connect(
    mapStateToProps,
    { setModalOnClose }
)(ModalPortal);

const ModalWrapperDiv = styled(FocusTrap)`
    align-items: center;
    background-color: ${theme.colors.modal.background};
    display: flex;
    height: 100%;
    justify-content: space-around;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: ${1051 /* Modals created with react-aria-modal have a z-index of 1050} */};
`;

const fadeModal = keyframes`
    from { transform: scale(0.75); }
    to { transform: none; }
`;

const ModalBody = styled.main`
    background-color: white;
    border-radius: ${theme.borderRadius.medium};
    border: ${theme.borders.default};
    box-shadow: ${theme.shadows.default};
    margin: auto;
    position: relative;
    width: 30%;
    z-index: 4;

    &.modal-body-appear {
        animation: ${fadeModal} ${theme.animationDuration};
    }

    @media (max-width: ${theme.breakpoints.mobile}) {
        width: 95%;
    }
`;

const CloseButton = styled.button`
    position: relative;
    border-radius: 50%;
    border-color: transparent;
    width: 26px;
    height: 26px;
    background: ${theme.colors.grey.default};
    cursor: pointer;
    transition: all 0.15s ease-in-out;
    position: absolute;
    right: ${theme.spacing.small};
    top: ${theme.spacing.small};

    &:hover {
        background: ${theme.colors.grey.dark};
        transform: scale(1.1);
    }

    &:before,
    &:after {
        content: '';
        width: 13px;
        height: 2px;
        background: white;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) rotate(45deg);
    }

    &:after {
        transform: translate(-50%, -50%) rotate(-45deg);
    }
`;

const ModalButtons = styled.div`
    display: flex;
    border-top: ${theme.borders.default};

    button {
        background-color: #fff;
        border: none;
        border-radius: 0;
        cursor: pointer;
        flex: 1 1 auto;
        font-size: ${theme.fontSizes.default};
        font-weight: 600;
        padding: ${theme.spacing.medium} ${theme.spacing.small};

        &:last-child {
            border-left: ${theme.borders.default};
            color: ${theme.colors.blue.default};
        }

        &:hover {
            background: ${theme.colors.grey.ultraLight};
        }
    }
`;