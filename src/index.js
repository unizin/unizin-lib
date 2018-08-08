/* @flow */
const { addAural } = require('./actions/auralNotificationActions');
const AuralNotification = require('./components/auralNotification');
const auralNotificationReducer = require('./reducers/auralNotificationReducer');
const Avatar = require('./components/avatar');
const AvatarOption = require('./components/avatar-option');
const ButtonAddRemove = require('./components/button-add-remove');
const ContentPricing = require('./components/content-pricing');
const FocusTrap = require('./components/focusTrap');
const Initials = require('./components/initials');
const Loading = require('./components/loading');
const { default: OTTooltip, messageNames } = require('./components/OTTooltip');
const Pagination = require('./components/pagination');
const ToggleHandle = require('./components/toggleHandle');

module.exports = {
    addAural,
    AuralNotification,
    auralNotificationReducer,
    Avatar,
    AvatarOption,
    ButtonAddRemove,
    ContentPricing,
    FocusTrap,
    Initials,
    Loading,
    messageNames,
    OTTooltip,
    Pagination,
    ToggleHandle,
};
