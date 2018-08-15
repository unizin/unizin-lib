/* @flow */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import ZingTouch from '../src/components/zingTouch';
import capitalize from '../src/util/capitalize';

storiesOf('ZingTouch', module)
    .add('Gesture handlers', () => {
        const props = ['swipe', 'tap', 'pan', 'pinch', 'expand'].reduce((acc, eventName) => {
            acc[`on${capitalize(eventName)}`] = action(eventName);
            return acc;
        }, {});
        return (
            <ZingTouch {...props}>
                <div style={{ backgroundColor: 'yellow', width: 400, height: 400 }} />
            </ZingTouch>
        );
    })
    .add('Pass zingTouchRegion prop', () => {
        class SomeComponent extends React.Component<{}> {
            render() {
                return <div style={{ backgroundColor: 'blue', width: 400, height: 400 }} />;
            }
        }

        return (
            <ZingTouch>
                <SomeComponent />
            </ZingTouch>
        );
    });
