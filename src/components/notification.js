/* @flow */
import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCheckCircle,
    faExclamationTriangle,
    faTimesCircle,
} from '@fortawesome/free-solid-svg-icons';
import { CSSTransition } from 'react-transition-group';

import { icons as iconNames, NOTIFICATION_TIMEOUT } from '../const';

import theme from '../theme';

import { type NotificationParam } from '../actions/notificationActions';
import CloseButton from './closeButton';

const { CANCEL, CHECK, EXCLAMATION } = iconNames;

const icons = {
    [CANCEL]: faTimesCircle,
    [CHECK]: faCheckCircle,
    [EXCLAMATION]: faExclamationTriangle,
};

const colors = {
    [CANCEL]: theme.colors.red.default,
    [CHECK]: theme.colors.green.medium,
    [EXCLAMATION]: theme.colors.yellow.medium,
};

type Props = NotificationParam & {
    id: number,
    removeNotification: (id: number) => void,
    exit?: boolean,
};

export default function Notification(props: Props) {
    const { callToAction, onCallToAction, icon, removeNotification, dismissable, exit } = props;
    const button = callToAction ? <button onClick={onCallToAction}>{callToAction}</button> : null;
    const dismiss = dismissable ? (
        <CloseNotification label="Dismiss" onClick={removeNotification} />
    ) : null;
    const role = dismissable ? 'status' : 'alert';
    return (
        <CSSTransition
            classNames="notification"
            in={!exit}
            appear={true}
            timeout={NOTIFICATION_TIMEOUT}
        >
            <NotificationWrapper role={role}>
                <div style={{ color: colors[icon] }}>
                    <FontAwesomeIcon icon={icons[icon]} />
                </div>
                <span>{props.text}</span>
                {button}
                {dismiss}
            </NotificationWrapper>
        </CSSTransition>
    );
}

const slideIn = keyframes`
    from {
        opacity: 0.15;
        transform: translateY(-100px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
`;

const NotificationWrapper = styled.div`
    align-items: center;
    display: flex;
    padding: ${theme.spacing.medium};
    justify-content: space-between;

    &:not(:first-of-type) {
        border-top: ${theme.borders.default};
    }

    &:last-of-type {
        box-shadow: ${theme.shadows.down};
    }

    div {
        font-size: ${theme.fontSizes.plus4};
    }

    span {
        flex-grow: 1;
        margin-left: ${theme.spacing.medium};
        font-size: ${theme.fontSizes.plus3};
        font-weight: 600;
    }

    > :nth-child(-n + 2) {
        text-align: left;
    }

    button {
        margin-left: ${theme.spacing.medium};
        cursor: pointer;

        &:hover {
            background-color: ${theme.colors.grey.ultraLight};
        }

        &:first-of-type:not(:last-of-type) {
            background-color: none;
            border: ${theme.borders.default};
            border-radius: ${theme.borderRadius.small};
            color: ${theme.colors.blue.default};
            padding: ${theme.spacing.tiny} ${theme.spacing.small};
        }
    }

    &.notification-appear {
        animation: ${slideIn} ${theme.animationDuration} ease-in;
    }

    &.notification-exit {
        animation: ${slideIn} ${theme.animationDuration} ease-in reverse;
    }

    &.notification-exit-done {
        visibility: hidden;
    }
`;

const CloseNotification = styled(CloseButton)`
    border-color: ${theme.colors.grey.light};
    background-color: white;

    &:before,
    &:after {
        background-color: ${theme.colors.grey.medium};
    }
`;
