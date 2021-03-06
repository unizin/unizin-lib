/* @flow */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import notification from '../src/reducers/notificationReducer';
import ConnectedNotificationContainer, {
    NotificationContainer,
} from '../src/components/notificationContainer';
import { showNotification } from '../src/actions/notificationActions';

type Props = {
    notification: any,
    removeNotification: number => void,
    isSmall: boolean,
    isBottom: boolean,
};
const Notifications = (props: Props) => <NotificationContainer {...props} />;

const baseProps = {
    notification: {},
    removeNotification: action('remove notification'),
    isBottom: false,
    isSmall: false,
};

const checkNotification = {
    dismissable: true,
    icon: 'CHECK',
    id: performance.now(),
    text: 'Check Notification',
    timeout: 0,
};

const cancelNotification = {
    dismissable: true,
    icon: 'CANCEL',
    id: performance.now() + 1,
    text: 'Cancel Notification',
    timeout: 0,
};

const exclamationNotification = {
    dismissable: true,
    icon: 'EXCLAMATION',
    id: performance.now() + 2,
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
    .add('All three notifications (bottom)', () => (
        <Notifications
            {...{
                ...baseProps,
                notification: {
                    '1': cancelNotification,
                    '2': checkNotification,
                    '3': exclamationNotification,
                },
                isBottom: true,
            }}
        />
    ))
    .add('All three notifications (small)', () => (
        <Notifications
            {...{
                ...baseProps,
                notification: {
                    '1': cancelNotification,
                    '2': checkNotification,
                    '3': exclamationNotification,
                },
                isSmall: true,
            }}
        />
    ))
    .add('All three notifications (small, bottom)', () => (
        <Notifications
            {...{
                ...baseProps,
                notification: {
                    '1': cancelNotification,
                    '2': checkNotification,
                    '3': exclamationNotification,
                },
                isSmall: true,
                isBottom: true,
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
    ))
    .add('Subtext', () => (
        <Notifications
            {...{
                ...baseProps,
                notification: {
                    '1': {
                        ...checkNotification,
                        dismissable: true,
                        subText: "I think there's a bear in my house.",
                    },
                },
            }}
        />
    ))
    .add('Subtext and C2A', () => (
        <Notifications
            {...{
                ...baseProps,
                notification: {
                    '1': {
                        ...checkNotification,
                        dismissable: true,
                        subText: "I think there's a bear in my house.",
                        callToAction: 'Poke the bear',
                        onCallToAction: action('poke'),
                    },
                },
            }}
        />
    ))
    .add('Small', () => (
        <Notifications
            {...{
                ...baseProps,
                notification: {
                    '1': {
                        ...checkNotification,
                        dismissable: true,
                        subText: "I think there's a bear in my house.",
                    },
                },
                isSmall: true,
            }}
        />
    ))
    .add('Small (bottom)', () => (
        <Notifications
            {...{
                ...baseProps,
                notification: {
                    '1': {
                        ...checkNotification,
                        dismissable: true,
                        subText: "I think there's a bear in my house.",
                    },
                },
                isSmall: true,
                isBottom: true,
            }}
        />
    ))
    .add('Bottom', () => (
        <Notifications
            {...{
                ...baseProps,
                notification: {
                    '1': {
                        ...checkNotification,
                        dismissable: true,
                        subText: "I think there's a bear in my house.",
                    },
                },
                isBottom: true,
            }}
        />
    ))
    .add('Connected notification', () => {
        const store = createStore<any, any, any>(
            combineReducers({ notification }),
            { notification: {} },
            applyMiddleware(thunk)
        );
        function show() {
            store.dispatch(
                showNotification({
                    dismissable: true,
                    icon: 'CHECK',
                    text: 'Check Notification',
                    timeout: 0,
                })
            );
        }
        show();
        return (
            <Provider store={store}>
                <React.Fragment>
                    <ConnectedNotificationContainer />
                    <button onClick={show}>Show</button>
                </React.Fragment>
            </Provider>
        );
    });
