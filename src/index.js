/* @flow */
const { addAural } = require('./actions/auralNotificationActions');
const AuralNotification = require('./components/auralNotification');
const auralNotificationReducer = require('./reducers/auralNotificationReducer');
const AvatarOption = require('./components/avatar-option');
const ButtonAddRemove = require('./components/button-add-remove');
const ContentPricing = require('./components/content-pricing');
const FocusTrap = require('./components/focusTrap');
const Initials = require('./components/initials');
const Loading = require('./components/loading');
const OTTooltip = require('./components/OTTooltip');
const Pagination = require('./components/pagination');
const ToggleHandle = require('./components/toggleHandle');

module.exports = {
    addAural,
    AuralNotification,
    auralNotificationReducer,
    AvatarOption,
    ButtonAddRemove,
    ContentPricing,
    FocusTrap,
    Initials,
    Loading,
    OTTooltip,
    Pagination,
    ToggleHandle,
};