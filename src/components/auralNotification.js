/* @flow */
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { removeAural } from '../actions/auralNotificationActions';

import styled from 'styled-components';

type Props = {
    notification: string,
    removeAural: () => void,
    duration: number,
};

export class AuralNotification extends PureComponent<Props> {
    static defaultProps = {
        duration: 5000,
    };

    componentDidUpdate() {
        const { removeAural, duration } = this.props;
        setTimeout(removeAural, duration);
    }

    render() {
        const { notification } = this.props;
        return (
            <AuralNotificationArea aria-live="assertive" aria-atomic>
                {notification && <span>{notification}</span>}
            </AuralNotificationArea>
        );
    }
}

const AuralNotificationArea = styled.div`
    clip: rect(1px, 1px, 1px, 1px);
    height: 1px;
    overflow: hidden;
    position: absolute;
    width: 1px;
    padding: 0;
    margin: 0;
    text-transform: capitalize;
`;

export default connect(
    ({ auralNotification }) => ({ notification: auralNotification }),
    { removeAural }
)(AuralNotification);
