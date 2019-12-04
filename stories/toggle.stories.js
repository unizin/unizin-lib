/* @flow */
import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import Toggle from '../src/components/toggle';

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
            <Toggle id="storybook-toggle" />
            <label htmlFor="storybook-toggle">Toggle me</label>
        </div>
    ))
    .add('Custom attributes', () => <Toggle color="magenta" height="40px" />)
    .add('Arbitrary props', () => (
        <Toggle aria-label="An arbitrary label" style={{ transform: 'rotate(45deg)' }} />
    ));
