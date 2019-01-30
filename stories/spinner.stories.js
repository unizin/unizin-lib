/* @flow */
import React from 'react';
import Spinner from '../src/components/spinner';
import { storiesOf } from '@storybook/react';

storiesOf('Spinner', module)
    .add('Defaults', () => <Spinner />)
    .add('Order tool version', () => <Spinner width="56px" stroke="10px" />);
