/* @flow */
import { icons, notificationActions, NOTIFICATION_TIMEOUT } from '../const';

export type NotificationParam = {
    callToAction?: string,
    dismissable?: boolean,
    icon: $Keys<typeof icons>,
    onCallToAction?: () => void,
    text: string,
    top?: boolean,
    timeout: number,
};

export const removeNotification = (id: number): ThunkAction<> => dispatch => {
    dispatch({
        type: notificationActions.TRANSITION_NOTIFICATION,
        payload: { id },
    });
    setTimeout(() => {
        dispatch({
            type: notificationActions.REMOVE_NOTIFICATION,
            payload: { id },
        });
    }, NOTIFICATION_TIMEOUT);
};

export const showNotification = (
    payload: NotificationParam
): ThunkAction<Promise<number>> => dispatch => {
    const id = performance.now();
    dispatch({
        type: notificationActions.SHOW_NOTIFICATION,
        payload: { ...payload, id },
    });
    if (payload.timeout) {
        setTimeout(() => dispatch(removeNotification(id)), payload.timeout);
    }
    return Promise.resolve(id);
};
