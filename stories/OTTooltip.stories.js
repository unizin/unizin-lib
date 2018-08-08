/* @flow */
import React from 'react';
import { storiesOf } from '@storybook/react';

import { OTTooltip, messageNames } from '../src/';

storiesOf('Order Tool Tooltip', module).add('We hardcoded this text for some reason', () => (
    <OTTooltip message={messageNames.CONTENT_REQUEST} />
));
