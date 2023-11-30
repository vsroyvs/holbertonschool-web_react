import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';

describe("Footer Component", () =>{
    it('renders app without crash',() => {
        const wrapper = shallow(<Footer />);
        expect(wrapper.exists()).toBe(true);
    });

    it('is App-footer', () => {
        const wrapper = shallow(<Footer />);
        expect(wrapper.find('.App-footer').exists()).toBe(true);
    });
});
