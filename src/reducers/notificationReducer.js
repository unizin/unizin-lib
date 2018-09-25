/* @flow */
import { notificationActions } from '../const';
import createReducer from './createReducer';

import { type NotificationParam } from '../actions/notificationActions';

export default createReducer(({}: { [string]: NotificationParam & { id: number } }), {
    [notificationActions.SHOW_NOTIFICATION]: (state, payload) => {
        return { ...state, [payload.id]: payload };
    },
    [notificationActions.REMOVE_NOTIFICATION]: (state, payload) => {
        const newState = { ...state };
        delete newState[payload.id];
        return newState;
    },
});
