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
    text: string,
    subText?: string,
};

export default function Notification(props: Props) {
    const {
        callToAction,
        onCallToAction,
        icon,
        removeNotification,
        dismissable,
        exit,
        text,
        subText,
    } = props;
    const button = callToAction ? <button onClick={onCallToAction}>{callToAction}</button> : null;
    const dismiss = dismissable ? (
        <CloseNotification aria-label="Dismiss" title="Dismiss" onClick={removeNotification} />
    ) : null;
    const role = dismissable ? 'status' : 'alert';
    return (
        <CSSTransition
            appear={true}
            classNames="notification"
            in={!exit}
            timeout={NOTIFICATION_TIMEOUT}
            unmountOnExit={true}
        >
            <NotificationWrapper role={role}>
                <div>
                    <div>
                        <span style={{ color: colors[icon] }}>
                            <FontAwesomeIcon icon={icons[icon]} />
                        </span>
                        <span>{text}</span>
                        {subText && <p>{subText}</p>}
                    </div>
                    {button}
                    {dismiss}
                </div>
            </NotificationWrapper>
        </CSSTransition>
    );
}

const slideIn = keyframes`
    from {
        opacity: 0.15;
        transform: translateY(100%);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
`;

const NotificationWrapper = styled.div`
    background-color: white;
    padding: ${theme.spacing.small};
    font-size: ${theme.fontSizes.small};
    margin-top: ${theme.spacing.small};
    box-shadow: ${theme.shadows.shallow};

    > div {
        align-items: center;
        display: flex;
        justify-content: space-between;

        > :nth-child(-n + 2) {
            text-align: left;
        }
    }

    p {
        margin: 0;
        font-size: ${theme.fontSizes.discrete};
        text-align: left;
        color: ${theme.colors.grey.medium};
    }

    span {
        flex-grow: 1;
        font-size: ${theme.fontSizes.plus1};
        font-weight: 600;
        margin-left: ${theme.spacing.small};

        &:first-of-type {
            margin-left: 0;
        }
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
        animation: ${slideIn} ${theme.animationDuration} ease-in forwards;
    }

    &.notification-exit {
        animation: ${slideIn} ${theme.animationDuration} ease-in reverse forwards;
    }
`;

const CloseNotification = styled(CloseButton)`
    background: white;
    border: 1px solid ${theme.colors.grey.light};

    &:hover {
        background: ${theme.colors.grey.ultraLight};
    }

    &:before,
    &:after {
        background: ${theme.colors.grey.medium};
    }
`;
