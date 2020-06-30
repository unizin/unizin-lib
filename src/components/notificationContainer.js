/* @flow */
import { connect } from 'react-redux';
import React, { PureComponent, type Node } from 'react';
import styled from 'styled-components';
import classNames from 'classnames';
import { removeNotification, type NotificationParam } from '../actions/notificationActions';
import Notification from './notification';

type Props = {
    maxNotifications?: number,
    notification: {
        [string]: NotificationParam & { id: number },
    },
    removeNotification: (id: number) => void,
    isSmall?: Boolean,
    isBottom?: Boolean,
};

export class NotificationContainer extends PureComponent<Props> {
    renderNotifications(): Array<Node> {
        const {
            notification,
            removeNotification,
            maxNotifications,
            isBottom,
            isSmall,
        } = this.props;

        return Object.keys(notification)
            .slice(0, maxNotifications)
            .map(key => {
                const { id, ...currentNotification } = notification[key];
                return (
                    <Notification
                        key={`ul-notification-${id}`}
                        removeNotification={() => removeNotification(id)}
                        isBottom={isBottom}
                        isSmall={isSmall}
                        {...currentNotification}
                    />
                );
            });
    }

    render() {
        const { isSmall, isBottom } = this.props;
        const classnames = classNames({ 'is-small': isSmall }, { 'is-bottom': isBottom });
        return <Notifications className={classnames}>{this.renderNotifications()}</Notifications>;
    }
}

const Notifications = styled.div`
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 1052;
    display: flex;
    flex-direction: column;
    display: flex;

    &.is-bottom {
        top: auto;
        bottom: 20px;

        &:not(.is-small) {
            bottom: 0;
        }
    }

    &.is-small {
        left: 50%;
        width: auto;
        transform: translateX(-50%);
    }
`;
// Modals created with react-aria-modal have a z-index of 1050, and unizin-lib modals have a z-index of 1051

export default connect(
    ({ notification }) => ({ notification }),
    dispatch => ({ removeNotification: id => dispatch(removeNotification(id)) })
)(NotificationContainer);
