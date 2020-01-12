import React from 'react';
import {shallow} from 'enzyme'; 
import App from '../App';
import WordGeneratorFromNumber from '../component/wordgeneratorfromnumber';

describe(("<App/> component"), () => {  
  it("should render correctly", () => {
    let wrapper = shallow(<App/>);
      expect(wrapper).toMatchSnapshot();     
  });
  it("should have the title", () => {
    let wrapper = shallow(<App/>);
      expect(wrapper.find("header h1").text()).toEqual("Number to Word");     
  });

  it("should load WordGenerator component", () => {
    let wrapper = shallow(<App/>);
      expect(wrapper.find(WordGeneratorFromNumber)).toBeDefined();
  });
});
