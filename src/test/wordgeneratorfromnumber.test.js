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