import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe("App Component", () =>{
    it('renders app without crash',() => {
        const wrapper = shallow(<App />);
        expect(wrapper.exists()).toBe(true);
    });

    // //'App-header' existe en App.
    // it('is App-header', () => {
    //     const wrapper = shallow(<App />);
    //     expect(wrapper.find('.App-header').exists()).toBe(true);
    // });

    // //'App-body' existe en App.
    // it('is App-body', () => {
    //     const wrapper = shallow(<App />);
    //     expect(wrapper.find('.App-body').exists()).toBe(true);
    // });

    // //App-footer' existe en App.
    // it('is App-footer', () => {
    //     const wrapper = shallow(<App />);
    //     expect(wrapper.find('.App-footer').exists()).toBe(true);
    // });
});