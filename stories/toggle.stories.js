/* @flow */
import React, { useState } from 'react';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import { Provider, connect } from 'react-redux';
import thunk from 'redux-thunk';
import { storiesOf } from '@storybook/react';
import Toggle from '../src/components/toggle';
import ModalContainer from '../src/components/modalContainer';
import Modal from '../src/components/modal';
import { openConfirmationModal } from '../src/actions/modal';
import modal from '../src/reducers/modalReducer';

storiesOf('Toggle', module)
    .add('Uncontrolled', () => <Toggle />)
    .add('Controlled (default unchecked)', () => {
        function Controlled() {
            const [parentChecked, setParentChecked] = useState(false);
            return (
                <div>
                    <Toggle onChange={() => setParentChecked(!parentChecked)} />
                    <span>Checked: {parentChecked ? 'true' : 'false'}</span>
                </div>
            );
        }
        return <Controlled />;
    })
    .add('Controlled (default checked)', () => {
        function Controlled() {
            const [parentChecked, setParentChecked] = useState(true);
            return (
                <div>
                    <Toggle
                        checked={parentChecked}
                        onChange={() => setParentChecked(!parentChecked)}
                    />
                    <span>Checked: {parentChecked ? 'true' : 'false'}</span>
                </div>
            );
        }
        return <Controlled />;
    })
    .add('Disabled', () => (
        <>
            <Toggle checked disabled />
            <Toggle disabled />
        </>
    ))
    .add('With label', () => (
        <div style={{ alignItems: 'center', display: 'flex' }}>
            <Toggle aria-labelledby="storybook-toggle" />
            <label id="storybook-toggle">Toggle me</label>
        </div>
    ))
    .add('Custom attributes', () => <Toggle color="magenta" height="40px" />)
    .add('Arbitrary props', () => (
        <Toggle aria-label="An arbitrary label" style={{ transform: 'rotate(45deg)' }} />
    ))
    .add('onChange return a Promise', () => {
        // $FlowFixMe
        const store = createStore(combineReducers({ modal }), applyMiddleware(thunk));

        const ConnectedModal = connect(() => ({}), { openConfirmationModal })(
            ({ openConfirmationModal }) => (
                <>
                    <Toggle
                        onChange={e =>
                            openConfirmationModal({
                                modalContent: (
                                    <Modal
                                        title="Confirm Change?"
                                        text="Confirm your change"
                                    ></Modal>
                                ),
                                element: e.target,
                            })
                        }
                    />
                    <ModalContainer />
                </>
            )
        );

        return (
            <Provider store={store}>
                <ConnectedModal />
            </Provider>
        );
    });
