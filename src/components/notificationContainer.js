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
                        key={`ul-notification-${id}`}
                        removeNotification={() => removeNotification(id)}
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
    left: 50%;
    position: absolute;
    bottom: 20px;
    width: auto;
    z-index: 1052;
    display: flex;
    flex-direction: column;
    transform: translateX(-50%);
    display: flex;
`;
// Modals created with react-aria-modal have a z-index of 1050, and unizin-lib modals have a z-index of 1051

export default connect(
    ({ notification }) => ({ notification }),
    dispatch => ({ removeNotification: id => dispatch(removeNotification(id)) })
)(NotificationContainer);
