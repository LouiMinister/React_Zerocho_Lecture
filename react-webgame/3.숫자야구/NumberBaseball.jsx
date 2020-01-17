import React, { Component } from 'react';
import Try from './Try';

function getNumbers() { //숫자 4개를 겹치지 않고 랜덤으로 뽑는 함

}

class NumberBaseball extends Component {
    state = {
        result :'',
        value : '',
        answer: getNumbers(),
        tries: [],
    };

    onSubmitForm = () =>{

    };

    onChangeInput = () =>{

    };

    fruits = [
        { fruit: '바나나', taste: '노랗다'},
        { fruit: '귤', taste: '누렇다'},
        { fruit: '밤', taste: '떯다'},
        { fruit: '감', taste: '달다'},
        { fruit: '포도', taste: '파랗다'},
        { fruit: '맥', taste: '역겹다'},
    ];

    render(){
        return (
            <>
                <h1>{this.state.result}</h1>
                <form onSubmit={this.onSubmitForm}>
                    <input maxLength={4} value={this.state.value} onChange={this.onChagneInput}/>
                </form>
                <div>시도: {this.state.tries.length}</div>
                <ul>
                    {this.fruits.map( (v, i) => {
                        return (
                            <Try key={v.fruit + v.taste} value={v} index={i}/>
                        );
                    })}
                </ul>
            </>
        );
    }
}

export default NumberBaseball