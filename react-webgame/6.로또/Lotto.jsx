import React, {Component } from 'react';
import Ball from './Ball';

function getWinNumbers() {
    console.log('getWinNumbers');
    const candidate = Array(45).fill().map( (v,i) => i+ 1);
    const shuffle = [];
    while (candidate.length > 0) {
        shuffle.push(candidate.splice(Math.floor(Math.random() * candidate.length), 1)[0]);
    }
    const bonusNumber = shuffle[shuffle.length -1];
    const winNumbers = shuffle.slice(0,6).sort((p,c) => p - c);
    return [...winNumbers, bonusNumber];
}


class Lotto extends Component {
    state = {
        winNumbers: getWinNumbers(),
        winBalls: [],
        bonus: null,
        redo: false,
    };

    runTimeouts = () => {
        const {winNumbers} =this.state;
        for (let i=0 ; i< this.state.winNumbers.length -1 ; i++){
            this.timeouts[i] = setTimeout ( () => {
                this.setState((prevState) => {
                    return {
                        winBalls: [...prevState.winBalls, winNumbers[i]],
                    }
                }) ;
            }, (i+1)* 1000);
        }
        this.timeouts[6] = setTimeout( () => {
            this.setState({
                bonus : winNumbers[6],
                redo: true,
            });
        }, 7000);
    };

    timeouts = [];
    // 컴포넌트가 렌더링 되고 시작
    componentDidMount() {
        this.runTimeouts();
    }

    // setState 불릴 때 마다 실행됨
    componentDidUpdate(prevProps, prevState) {
        // redo를 눌렀을 때 동작.
        if (this.state.winBalls.length === 0){
            this.runTimeouts();
        }
    }

    // 컴포넌트가 없어졌는데 timeout이 돌아가는 것을 방지
    componentWillUnmount() {
        this.timeouts.forEach( (v) => {
            clearTimeout(v)
        });
    }

    onClickRedo = () =>{
        this.setState({
            winNumbers: getWinNumbers(),
            winBalls: [],
            bonus: null,
            redo: false,
        });
        this.timeouts = [];
    };

    render(){
        const { winBalls, bonus, redo} = this.state;
        return (
            <>
                <div>당첨 숫자</div>
                <div id="결과창">
                    {winBalls.map( (v) => <Ball key ={v} number ={v} />)}
                </div>
                <div>보너스!</div>
                {bonus && <Ball number = {bonus} />}
                {redo && <button onClick={this.onClickRedo}>한 번 더!</button>}
            </>
        );
    }
}

export default Lotto;