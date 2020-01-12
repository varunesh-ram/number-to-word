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
        it("should generate word for number 20 to 99", () => {
        wrapper.find('input').simulate('change', { target: { value: 20 } });
        expect(wrapper.state().word).toEqual("twenty");
        wrapper.find('input').simulate('change', { target: { value: 30 } });
        expect(wrapper.state().word).toEqual("thirty");
        wrapper.find('input').simulate('change', { target: { value: 40 } });
        expect(wrapper.state().word).toEqual("forty");
        wrapper.find('input').simulate('change', { target: { value: 50 } });
        expect(wrapper.state().word).toEqual("fifty");
        wrapper.find('input').simulate('change', { target: { value: 60 } });
        expect(wrapper.state().word).toEqual("sixty");
        wrapper.find('input').simulate('change', { target: { value: 70 } });
        expect(wrapper.state().word).toEqual("seventy");
        wrapper.find('input').simulate('change', { target: { value: 80 } });
        expect(wrapper.state().word).toEqual("eighty");
        wrapper.find('input').simulate('change', { target: { value: 90 } });
        expect(wrapper.state().word).toEqual("ninety");
        wrapper.find('input').simulate('change', { target: { value: 21 } });
        expect(wrapper.state().word).toEqual("twenty-one");
        wrapper.find('input').simulate('change', { target: { value: 32 } });
        expect(wrapper.state().word).toEqual("thirty-two");
        wrapper.find('input').simulate('change', { target: { value: 43 } });
        expect(wrapper.state().word).toEqual("forty-three");
        wrapper.find('input').simulate('change', { target: { value: 54 } });
        expect(wrapper.state().word).toEqual("fifty-four");
        wrapper.find('input').simulate('change', { target: { value: 65 } });
        expect(wrapper.state().word).toEqual("sixty-five");
        wrapper.find('input').simulate('change', { target: { value: 76 } });
        expect(wrapper.state().word).toEqual("seventy-six");
        wrapper.find('input').simulate('change', { target: { value: 87 } });
        expect(wrapper.state().word).toEqual("eighty-seven");
        wrapper.find('input').simulate('change', { target: { value: 98 } });
        expect(wrapper.state().word).toEqual("ninety-eight");
    });
    it("should generate word for number 100 to 999", () => {
        wrapper.find('input').simulate('change', { target: { value: 205 } });
        expect(wrapper.state().word).toEqual("two hundred five");
        wrapper.find('input').simulate('change', { target: { value: 314} });
        expect(wrapper.state().word).toEqual("three hundred fourteen");
        wrapper.find('input').simulate('change', { target: { value: 465 } });
        expect(wrapper.state().word).toEqual("four hundred sixty-five");
        wrapper.find('input').simulate('change', { target: { value: 541 } });
        expect(wrapper.state().word).toEqual("five hundred forty-one");
        wrapper.find('input').simulate('change', { target: { value: 698 } });
        expect(wrapper.state().word).toEqual("six hundred ninety-eight");
        wrapper.find('input').simulate('change', { target: { value: 754 } });
        expect(wrapper.state().word).toEqual("seven hundred fifty-four");
        wrapper.find('input').simulate('change', { target: { value: 812 } });
        expect(wrapper.state().word).toEqual("eight hundred twelve");
        wrapper.find('input').simulate('change', { target: { value: 996 } });
        expect(wrapper.state().word).toEqual("nine hundred ninety-six");
        wrapper.find('input').simulate('change', { target: { value: 400 } });
        expect(wrapper.state().word).toEqual("four hundred");
    });
    it("should generate word for number 1000 to 999999", () => {
        wrapper.find('input').simulate('change', { target: { value: 2050 } });
        expect(wrapper.state().word).toEqual("two thousand, fifty");
        wrapper.find('input').simulate('change', { target: { value: 3141} });
        expect(wrapper.state().word).toEqual("three thousand, one hundred forty-one");
        wrapper.find('input').simulate('change', { target: { value: 46521 } });
        expect(wrapper.state().word).toEqual("forty-six thousand, five hundred twenty-one");
        wrapper.find('input').simulate('change', { target: { value: 541652 } });
        expect(wrapper.state().word).toEqual("five hundred forty-one thousand, six hundred fifty-two");
        wrapper.find('input').simulate('change', { target: { value: 69841 } });
        expect(wrapper.state().word).toEqual("sixty-nine thousand, eight hundred forty-one");
        wrapper.find('input').simulate('change', { target: { value: 75424 } });
        expect(wrapper.state().word).toEqual("seventy-five thousand, four hundred twenty-four");
        wrapper.find('input').simulate('change', { target: { value: 81200 } });
        expect(wrapper.state().word).toEqual("eighty-one thousand, two hundred");
        wrapper.find('input').simulate('change', { target: { value: 400000 } });
        expect(wrapper.state().word).toEqual("four hundred thousand");
        wrapper.find('input').simulate('change', { target: { value: 999999 } });
        expect(wrapper.state().word).toEqual("nine hundred ninety-nine thousand, nine hundred ninety-nine");
    });
    it("should generate word for number 1000000 to 999999999", () => {
        wrapper.find('input').simulate('change', { target: { value: 999999999 } });
        expect(wrapper.state().word).toEqual("nine hundred ninety-nine million, nine hundred ninety-nine thousand, nine hundred ninety-nine");
        wrapper.find('input').simulate('change', { target: { value: 1000000} });
        expect(wrapper.state().word).toEqual("one million");
    });

  });