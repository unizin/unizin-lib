/* @flow */
import React from 'react';
import { storiesOf } from '@storybook/react';

import OTTooltip from '../src/components/OTTooltip';

storiesOf('Order Tool Tooltip', module).add('We hardcoded this text for some reason', () => (
    <OTTooltip message="CONTENT_REQUEST" />
));
