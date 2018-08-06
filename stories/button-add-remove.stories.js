/* @flow */
import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from '../src/exports/button-add-remove';

class StateContainer extends React.PureComponent<Object, { boolean: boolean }> {
    state = { boolean: false };

    onClick = () => {
        this.setState(({ boolean }) => ({ boolean: !boolean }));
    };
    render() {
        return (
            <Button
                {...this.props}
                handleOnClick={this.onClick}
                triggerBoolean={this.state.boolean}
            />
        );
    }
}

storiesOf('Add Remove Button').add('Button', () => (
    <StateContainer isSmall={false} title="Bork bork bork" />
));
