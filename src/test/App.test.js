import React from 'react';
import {shallow} from 'enzyme'; 
import App from '../App';
import WordGeneratorFromNumber from '../component/wordgeneratorfromnumber';

describe(("<App/> component"), () => {  
  let wrapper;
    beforeEach(() => {
        wrapper = shallow(<App/>);
    });
  it("should render correctly", () => {
      expect(wrapper).toMatchSnapshot();     
  });
  it("should have the title", () => {
      expect(wrapper.find("header h1").text()).toEqual("Number to Word");     
  });

  it("should load WordGenerator component", () => {
      expect(wrapper.find(WordGeneratorFromNumber)).toBeDefined();
  });
});
