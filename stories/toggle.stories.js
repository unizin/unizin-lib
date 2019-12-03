/* @flow */
import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import Toggle from '../src/components/toggle';

storiesOf('Toggle', module)
    .add('Uncontrolled', () => <Toggle />)
    .add('Controlled (default unchecked)', () => {
        const [parentChecked, setParentChecked] = useState(false);
        return (
            <div>
                <Toggle onChange={() => setParentChecked(!parentChecked)} />
                <span>Checked: {parentChecked ? 'true' : 'false'}</span>
            </div>
        );
    })
    .add('Controlled (default checked)', () => {
        const [parentChecked, setParentChecked] = useState(true);
        return (
            <div>
                <Toggle checked={parentChecked} onChange={() => setParentChecked(!parentChecked)} />
                <span>Checked: {parentChecked ? 'true' : 'false'}</span>
            </div>
        );
    })
    .add('Disabled', () => (
        <>
            <Toggle checked disabled />
            <Toggle disabled />
        </>
    ));
