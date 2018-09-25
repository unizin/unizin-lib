/* @flow */
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import NotificationContainer from '../components/notificationContainer';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { showNotification, removeNotification } from '../actions/notificationActions';

import notification from '../reducers/notificationReducer';

Enzyme.configure({ adapter: new Adapter() });

const cancelNotification = {
    dismissable: true,
    icon: 'CANCEL',
    id: 1,
    text: 'Cancel Notification',
    timeout: 0,
    callToAction: 'Do something',
    onCallToAction: jest.fn(),
};

describe('Notifications', () => {
    let store;
    let dispatch;

    function TestContainer(props) {
        return (
            <Provider store={store}>
                <NotificationContainer />
            </Provider>
        );
    }

    beforeEach(() => {
        store = createStore(
            combineReducers({ notification }),
            { notification: {} },
            applyMiddleware(thunk)
        );
        dispatch = store.dispatch;
    });

    it('should render a wrapper', () => {
        const wrapper = mount(<TestContainer />);
        expect(wrapper.find('div')).toHaveLength(1);
    });

    it('should render a notification', () => {
        const wrapper = mount(<TestContainer />);
        expect(
            wrapper
                .find('div')
                .first()
                .children()
        ).toHaveLength(0);
        dispatch(showNotification(cancelNotification));
        wrapper.update();
        expect(
            wrapper
                .find('div')
                .first()
                .children()
        ).toHaveLength(1);
    });

    it('should remove a notification', () => {
        const wrapper = mount(<TestContainer />);
        dispatch(showNotification(cancelNotification));
        wrapper.update();
        expect(
            wrapper
                .find('div')
                .first()
                .children()
        ).toHaveLength(1);
        dispatch(removeNotification(1));
        wrapper.update();
        expect(
            wrapper
                .find('div')
                .first()
                .children()
        ).toHaveLength(0);
    });
});
