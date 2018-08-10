/* @flow */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { ModalPortal } from '../src/components/modalContainer';
import Modal from '../src/components/modal';

const props = {
    element: null,
    modalContent: <Modal title="Would you like a cookie?" text="They are very tasty" />,
    onCancel: action('Cancel'),
    onConfirm: action('Confirm'),
    setModalOnClose: action('SetModalOnClose'),
};

storiesOf('ModalPortal (Confirm modal)', module)
    .add('Base props', () => <ModalPortal {...props} />)
    .add('With custom labeling', () => (
        <ModalPortal {...{ ...props, cancelText: 'Bork', confirmText: 'Bork bork bork' }} />
    ));
