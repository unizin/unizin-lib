/* @flow */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { NotificationContainer } from '../src/components/notificationContainer';

type Props = {
    notification: any,
    removeNotification: number => void,
};
const Notifications = (props: Props) => <NotificationContainer {...props} />;

const baseProps = {
    notification: {},
    removeNotification: action('remove notification'),
};

const checkNotification = {
    dismissable: true,
    icon: 'CHECK',
    id: 1,
    text: 'Check Notification',
    timeout: 0,
};

const cancelNotification = {
    dismissable: true,
    icon: 'CANCEL',
    id: 1,
    text: 'Cancel Notification',
    timeout: 0,
};

const exclamationNotification = {
    dismissable: true,
    icon: 'EXCLAMATION',
    id: 1,
    text: 'Exclamation Notification',
    timeout: 0,
};

storiesOf('Notifications', module)
    .add('All three notifications', () => (
        <Notifications
            {...{
                ...baseProps,
                notification: {
                    '1': cancelNotification,
                    '2': checkNotification,
                    '3': exclamationNotification,
                },
            }}
        />
    ))
    .add('No dismiss', () => (
        <Notifications
            {...{
                ...baseProps,
                notification: { '1': { ...checkNotification, dismissable: false } },
            }}
        />
    ))
    .add('Call to action', () => (
        <Notifications
            {...{
                ...baseProps,
                notification: {
                    '1': {
                        ...checkNotification,
                        dismissable: true,
                        callToAction: 'Do a thing',
                        onCallToAction: action('call to action'),
                    },
                },
            }}
        />
    ));
