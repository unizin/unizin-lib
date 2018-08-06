import * as ACTIONS from '../actions/auralNotificationActions';

const { ADD_AURAL_NOTIFICATION, REMOVE_AURAL_NOTIFICATION } = ACTIONS;

export default function(state = '', { type, payload }) {
    switch (type) {
        case ADD_AURAL_NOTIFICATION:
            return payload;
        case REMOVE_AURAL_NOTIFICATION:
            return '';
        default:
            return state;
    }
}
