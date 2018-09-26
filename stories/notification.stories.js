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
};
const Notifications = (props: Props) => <NotificationContainer {...props} />;

const baseProps = {
    notification: {},
    removeNotification: action('remove notification'),
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
    .add('Connected notification', () => {
        const store = createStore(
            combineReducers({ notification }),
            { notification: {} },
            applyMiddleware(thunk)
        );
        store.dispatch(
            showNotification({
                dismissable: true,
                icon: 'CHECK',
                text: 'Check Notification',
                timeout: 0,
            })
        );
        return (
            <Provider store={store}>
                <ConnectedNotificationContainer />
            </Provider>
        );
    });
