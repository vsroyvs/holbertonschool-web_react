import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

describe("Header Component", () =>{
    it('renders app without crash',() => {
        const wrapper = shallow(<Header />);
        expect(wrapper.exists()).toBe(true);
    });

    it('is App-header', () => {
        const wrapper = shallow(<Footer />);
        expect(wrapper.find('.App-header').exists()).toBe(true);
    });
});
