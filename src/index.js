/* @flow */
const AuralNotification = require('./components/auralNotification');
const { addAural } = require('./actions/auralNotificationActions');
const auralNotificationReducer = require('./reducers/auralNotificationReducer');
const ButtonAddRemove = require('./components/button-add-remove');
const Pagination = require('./components/pagination');

module.exports = {
    AuralNotification,
    addAural,
    auralNotificationReducer,
    ButtonAddRemove,
    Pagination,
};
