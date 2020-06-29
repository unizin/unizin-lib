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
    .add('Text as offer price', () => <Pricing {...{ offerPrice: 'Bork bork bork', listPrice }} />)
    .add('With waiver', () => <Pricing {...{ offerPrice, listPrice, isWaived: true }} />)
    .add('With child', () => (
        <Pricing {...{ offerPrice, listPrice }}>
            <span
                style={{
                    background: 'purple',
                    margin: '0 0 0 2px',
                    padding: '2px 5px',
                    color: 'white',
                    borderRadius: '10px',
                    fontSize: '10px',
                }}
            >
                Child Element
            </span>
        </Pricing>
    ))
    .add('With waiver and child', () => (
        <Pricing {...{ offerPrice, listPrice, isWaived: true }}>
            <span
                style={{
                    background: 'purple',
                    margin: '0 0 0 2px',
                    padding: '2px 5px',
                    color: 'white',
                    borderRadius: '10px',
                    fontSize: '10px',
                }}
            >
                Child Element
            </span>
        </Pricing>
    ))
    .add('Missing both prices (why do we allow this?)', () => <Pricing />);
