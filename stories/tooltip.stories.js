/* @flow */
import React from 'react';
import { storiesOf } from '@storybook/react';

import Tooltip from '../src/components/tooltip';

storiesOf('Tooltip', module)
    .add('Tooltip with UA text', () => <Tooltip message="UA text goes here." />)
    .add('Tooltip with React element child', () => <Tooltip message={<span>{'<span />'}</span>} />);
