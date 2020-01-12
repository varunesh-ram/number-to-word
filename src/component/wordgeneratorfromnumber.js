import React from 'react';

class WordGeneratorFromNumber extends React.Component {
    constructor(props){
        super(props);
        this.state = {"word":"Enter a Number"
        };
    }
    generateWord(number){
        var LESS_THAN_TWENTY = [
            'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten',
            'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'
        ];
        if (number < 20){
            return LESS_THAN_TWENTY[number];
        }
        else
        return "Enter a Number";
        
      }
    onValueChange(e) {
        var num = parseInt(e.target.value, 10);
        this.setState({"word":this.generateWord(num)})
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