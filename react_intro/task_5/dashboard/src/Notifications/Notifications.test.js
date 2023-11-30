import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';

describe("Notifications Component", () =>{
    it('renders app without crash',() => {
        const wrapper = shallow(<Notifications />);
        expect(wrapper.exists()).toBe(true);
    });

    it('Notifications renders three list items', () => {
        const wrapper = shallow(<Notifications />);
        expect(wrapper.find('li').length).toBe(3);
    });

    it('Notifications renders the text', () => {
        const wrapper = shallow(<Notifications />);
        expect(wrapper.contains('Here is the list of notifications')).toBe(true);
    });
});