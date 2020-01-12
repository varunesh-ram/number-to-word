import React from 'react';
import {shallow} from 'enzyme'; 
import WordGeneratorFromNumber from '../component/wordgeneratorfromnumber';

describe(("<WordGeneratorFromNumber/> component"), () => {  
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<WordGeneratorFromNumber/>);
    });
    it("should render correctly", () => {
                expect(wrapper).toMatchSnapshot();     
    });
    it("should load text field and label component", () => {
          expect(wrapper.find('input').length).toBe(1);
          expect(wrapper.find('label').length).toBe(1);
      });
  });

  describe(("generate functionality"), () => { 
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<WordGeneratorFromNumber/>);
    }); 
    it("should generate word for number 0 to 19", () => {
        wrapper.find('input').simulate('change', { target: { value: 0 } });
        expect(wrapper.state().word).toEqual("zero");
        wrapper.find('input').simulate('change', { target: { value: 1 } });
        expect(wrapper.state().word).toEqual("one");
        wrapper.find('input').simulate('change', { target: { value: 2 } });
        expect(wrapper.state().word).toEqual("two");
        wrapper.find('input').simulate('change', { target: { value: 3 } });
        expect(wrapper.state().word).toEqual("three");
        wrapper.find('input').simulate('change', { target: { value: 4 } });
        expect(wrapper.state().word).toEqual("four");
        wrapper.find('input').simulate('change', { target: { value: 5 } });
        expect(wrapper.state().word).toEqual("five");
        wrapper.find('input').simulate('change', { target: { value: 6 } });
        expect(wrapper.state().word).toEqual("six");
        wrapper.find('input').simulate('change', { target: { value: 7 } });
        expect(wrapper.state().word).toEqual("seven");
        wrapper.find('input').simulate('change', { target: { value: 8 } });
        expect(wrapper.state().word).toEqual("eight");
        wrapper.find('input').simulate('change', { target: { value: 9 } });
        expect(wrapper.state().word).toEqual("nine");
        wrapper.find('input').simulate('change', { target: { value: 10 } });
        expect(wrapper.state().word).toEqual("ten");
        wrapper.find('input').simulate('change', { target: { value: 11 } });
        expect(wrapper.state().word).toEqual("eleven");
        wrapper.find('input').simulate('change', { target: { value: 12 } });
        expect(wrapper.state().word).toEqual("twelve");
        wrapper.find('input').simulate('change', { target: { value: 13 } });
        expect(wrapper.state().word).toEqual("thirteen");
        wrapper.find('input').simulate('change', { target: { value: 14 } });
        expect(wrapper.state().word).toEqual("fourteen");
        wrapper.find('input').simulate('change', { target: { value: 15 } });
        expect(wrapper.state().word).toEqual("fifteen");
        wrapper.find('input').simulate('change', { target: { value: 16 } });
        expect(wrapper.state().word).toEqual("sixteen");
        wrapper.find('input').simulate('change', { target: { value: 17 } });
        expect(wrapper.state().word).toEqual("seventeen");
        wrapper.find('input').simulate('change', { target: { value: 18 } });
        expect(wrapper.state().word).toEqual("eighteen");
        wrapper.find('input').simulate('change', { target: { value: 19 } });
        expect(wrapper.state().word).toEqual("nineteen");
    });

  });