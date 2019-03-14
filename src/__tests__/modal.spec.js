/* @flow */
import React from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ModalContainer from '../components/modalContainer';
import { openConfirmationModal } from '../actions/modal';
import modalReducer from '../reducers/modalReducer';

Enzyme.configure({ adapter: new Adapter() });

describe('Confirmation Modal', () => {
    let store;
    let dispatch;

    beforeEach(() => {
        // $FlowFixMe redux types suck.
        store = createStore(
            combineReducers({ modal: modalReducer }),
            { modal: null },
            applyMiddleware(thunk)
        );
        dispatch = store.dispatch;
    });

    function renderModal() {
        return mount(
            <Provider store={store}>
                <ModalContainer />
            </Provider>
        );
    }

    it('should render a modal when openConfirmationModal is called', () => {
        const modalWrapper = renderModal();
        expect(modalWrapper.find('section')).toHaveLength(0);
        dispatch(openConfirmationModal({ modalContent: <div />, element: null }));
        modalWrapper.update();
        expect(modalWrapper.find('section')).toHaveLength(1);
    });

    it('should close the modal and the promise should resolve when onConfirm is called', done => {
        dispatch(openConfirmationModal({ modalContent: <div />, element: null })).then(done);
        const modalWrapper = renderModal();
        modalWrapper
            .find('button')
            .last()
            .simulate('click');
        modalWrapper.update();
        expect(modalWrapper.find('section')).toHaveLength(0);
    });

    it('should return focus to the calling element when the modal is closed', done => {
        const element = document.createElement('button');
        const focusListener = jest.fn();
        element.addEventListener('focus', focusListener);
        dispatch(openConfirmationModal({ modalContent: <div />, element })).then(() => {
            expect(focusListener).toHaveBeenCalled();
            done();
        });
        const modalWrapper = renderModal();
        expect(modalWrapper.find('section')).toHaveLength(1);
        modalWrapper
            .find('button')
            .last()
            .simulate('click');
        modalWrapper.update();
    });

    it('should close the modal and the promise should reject when onCancel is called', done => {
        dispatch(
            openConfirmationModal({
                modalContent: <div />,
                element: null,
            })
        ).then(() => {}, done);
        const modalWrapper = renderModal();
        expect(modalWrapper.find('section')).toHaveLength(1);
        modalWrapper
            .find('button')
            .first()
            .simulate('click');
    });
});
