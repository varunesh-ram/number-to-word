import React from 'react';

class WordGeneratorFromNumber extends React.Component {
    constructor(props){
        super(props);
        this.state = {"word":"Enter a Number"
        };
    }
    generateWord(number){
        var remainder, word,
        words = arguments[1];
        if (number === 0) {
            return !words ? 'zero' : words.join(' ').replace(/,$/, '');
        }
        // First run
        if (!words) {
        words = [];
        }
        var LESS_THAN_TWENTY = [
            'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten',
            'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'
        ];
        var TENTHS_LESS_THAN_HUNDRED = [
            'zero', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'
        ];
        if (number < 20){
            remainder = 0;
            word = LESS_THAN_TWENTY[number];
        }
        else if (number < 100){
            remainder = number % 10;
            word = TENTHS_LESS_THAN_HUNDRED[Math.floor(number / 10)];
            if (remainder) {
                word += '-' + LESS_THAN_TWENTY[remainder];
                remainder = 0;
            }
        }
        else if (number < 1000){
            remainder = number % 100;
        word = this.generateWord(Math.floor(number / 100)) + ' hundred';
        }
        else if (number < 1000000) {
            remainder = number % 1000;
            word = this.generateWord(Math.floor(number / 1000)) + ' thousand,';    
        }
        else if (number < 1000000000) {
            remainder = number % 1000000;
            word = this.generateWord(Math.floor(number / 1000000)) + ' million,';    
        }
        else
        return "Enter a Number";

        words.push(word);
        return this.generateWord(remainder, words);
        
      }
    onValueChange(e) {
        var num = parseInt(e.target.value, 10);
        let word = this.generateWord(num);
        this.setState({"word":word});
      };

      
    render = () => {
        return  (<div>
            <form>
            <input type="number" onChange={this.onValueChange.bind(this)}/>
            <br/>
            <label >{this.state.word}</label>                
            </form>
        </div>);
    }
}

export default WordGeneratorFromNumber;