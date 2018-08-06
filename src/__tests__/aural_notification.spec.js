import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { AuralNotification } from '../components/auralNotification';

Enzyme.configure({ adapter: new Adapter() });

describe('aural notifications', () => {
    let props;

    beforeEach(() => {
        props = { notification: '', removeAural: jest.fn(), duration: 0 };
    });

    it('should render an aria-live area', () => {
        const wrapper = shallow(<AuralNotification {...props} />);
        expect(wrapper.find('div[aria-live="assertive"]')).toHaveLength(1);
    });

    it('should render a span when props.notification is absent', () => {
        const wrapper = shallow(<AuralNotification {...props} />);
        expect(wrapper.find('div > span')).toHaveLength(0);
    });

    it('should render a span with the notification when props.notification is present', () => {
        props.notification = 'Somebody set us up the bomb.';
        const wrapper = shallow(<AuralNotification {...props} />);
        expect(wrapper.find('div > span').text()).toBe(props.notification);
    });

    it('should call removeAural after props.duration', done => {
        const wrapper = shallow(<AuralNotification {...props} />);
        wrapper.setProps({
            notification: 'You have no chance. Make your time.',
        });
        setTimeout(() => {
            expect(props.removeAural).toHaveBeenCalled();
            done();
        });
    });
});
