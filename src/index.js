/* @flow */
const { addAural } = require('./actions/auralNotificationActions');
const AuralNotification = require('./components/auralNotification');
const auralNotificationReducer = require('./reducers/auralNotificationReducer');
const Avatar = require('./components/avatar');
const AvatarOption = require('./components/avatar-option');
const ButtonAddRemove = require('./components/button-add-remove');
const CloseButton = require('./components/closeButton');
const ContentPricing = require('./components/content-pricing');
const FocusTrap = require('./components/focusTrap');
const Initials = require('./components/initials');
const Loading = require('./components/loading');
const Modal = require('./components/modal');
const ModalContainer = require('./components/modalContainer');
const modalReducer = require('./reducers/modalReducer');
const { openConfirmationModal } = require('./actions/modal');
const Tooltip = require('./components/tooltip');
const Pagination = require('./components/pagination');
const ToggleHandle = require('./components/toggleHandle');
const theme = require('./theme');
const ZingTouch = require('./components/zingTouch');
const NotificationContainer = require('./components/notificationContainer');
const notificationReducer = require('./reducers/notificationReducer');
const notificationActions = require('./actions/notificationActions');
const Spinner = require('./components/spinner');

module.exports = {
    addAural,
    AuralNotification,
    auralNotificationReducer,
    Avatar,
    AvatarOption,
    ButtonAddRemove,
    CloseButton,
    ContentPricing,
    FocusTrap,
    Initials,
    Loading,
    Modal,
    ModalContainer,
    modalReducer,
    notificationActions,
    NotificationContainer,
    notificationReducer,
    openConfirmationModal,
    Pagination,
    Spinner,
    theme,
    ToggleHandle,
    Tooltip,
    ZingTouch,
};
