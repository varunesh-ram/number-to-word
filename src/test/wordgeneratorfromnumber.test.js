import React from 'react';
import {shallow} from 'enzyme'; 
import WordGeneratorFromNumber from '../component/wordgeneratorfromnumber';

describe(("<WordGeneratorFromNumber/> component"), () => {  
    it("should render correctly", () => {
      let wrapper = shallow(<WordGeneratorFromNumber/>);
        expect(wrapper).toMatchSnapshot();     
    });
    it("should load text field and label component", () => {
        let wrapper = shallow(<WordGeneratorFromNumber/>);
          expect(wrapper.find('input').length).toBe(1);
          expect(wrapper.find('label').length).toBe(1);
      });
  });