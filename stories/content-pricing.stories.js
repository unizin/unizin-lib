/* @flow */
import React from 'react';
import { storiesOf } from '@storybook/react';

import Pricing from '../src/components/content-pricing';

const offerPrice = '74.99';
const listPrice = '174.95';

storiesOf('Content Pricing', module)
    .add('Has all information', () => <Pricing {...{ offerPrice, listPrice }} />)
    .add('Missing list price', () => <Pricing {...{ offerPrice }} />)
    .add('Missing offer price', () => <Pricing {...{ listPrice }} />)
    .add('Free content', () => <Pricing {...{ offerPrice: '0', listPrice }} />)
    .add('Free content, missing list price', () => <Pricing {...{ offerPrice: '0' }} />)
    .add('Missing both prices (why do we allow this?)', () => <Pricing />);
