const AuralNotification = require('../components/auralNotification');
const { addAural } = require('../actions/auralNotificationActions');
const auralNotificationReducer = require('../reducers/auralNotificationReducer');
const ButtonAddRemove = require('./button-add-remove');
const Pagination = require('./pagination');

module.exports = {
    AuralNotification,
    ButtonAddRemove,
    Pagination,
    addAural,
    auralNotificationReducer,
};
