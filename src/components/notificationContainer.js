/* @flow */
import { connect } from 'react-redux';
import React, { PureComponent, type Node } from 'react';
import styled from 'styled-components';
import { removeNotification, type NotificationParam } from '../actions/notificationActions';
import Notification from './notification';

type Props = {
    maxNotifications?: number,
    notification: {
        [string]: NotificationParam & { id: number },
    },
    removeNotification: (id: number) => void,
};

export class NotificationContainer extends PureComponent<Props> {
    renderNotifications(): Array<Node> {
        const { notification, removeNotification, maxNotifications } = this.props;

        return Object.keys(notification)
            .slice(0, maxNotifications)
            .map(key => {
                const { id, ...currentNotification } = notification[key];
                return (
                    <Notification
                        key={id}
                        removeNotification={removeNotification}
                        {...currentNotification}
                    />
                );
            });
    }

    render() {
        return <Notifications>{this.renderNotifications()}</Notifications>;
    }
}

const Notifications = styled.div`
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
`;

export default connect(
    ({ notification }) => ({ notification }),
    { removeNotification }
)(NotificationContainer);
