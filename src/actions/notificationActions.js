/* @flow */
import { icons, notificationActions } from '../const';

export type NotificationParam = {
    callToAction?: string,
    dismissable?: boolean,
    icon: $Keys<typeof icons>,
    onCallToAction?: () => void,
    text: string,
    top?: boolean,
    timeout: number,
};

export const removeNotification = (id: number) => ({
    type: notificationActions.REMOVE_NOTIFICATION,
    payload: { id },
});

export const showNotification = (payload: NotificationParam): ThunkAction<> => dispatch => {
    const id = performance.now();
    dispatch({
        type: notificationActions.SHOW_NOTIFICATION,
        payload: { ...payload, id, removeNotification: dispatch(removeNotification(id)) },
    });
    if (payload.timeout) {
        setTimeout(() => dispatch(removeNotification(id)), payload.timeout);
    }
};
