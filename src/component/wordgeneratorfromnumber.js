import React from 'react';

class WordGeneratorFromNumber extends React.Component {
    constructor(props){
        super(props);
        this.state = {"word":"Enter a Number"
        };
    }

    render = () => {
        return  (<div>
            <form>
            <input type="number"/>
            <br/>
            <label >{this.state.word}</label>                
            </form>
        </div>);
    }
}

export default WordGeneratorFromNumber;