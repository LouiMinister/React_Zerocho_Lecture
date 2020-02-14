import React, {useCallback, useReducer} from 'react';
import Table from './Table'

const initialState = {
    winner: '',
    turn: 'O',
    tableDate: [['','',''],['','',''],['','','']],
};

const SET_WINNER = 'SET_WINNER';

const reducer = (state, action) => {
    switch(action.type) {
        case SET_WINNER :
            // state.winner = action.winner 하면 안됨.
            return{
                ...state,
                winner: action.winner,
            }; // 기존 객체를 바꾸지 말고 새로운 객체를 만들어야함. (불변성)
    }
};



const TicTacToe = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    // 아래처럼 따로따로 하면 넘겨주기가 힘듬.. 하나의 State로 묶어서 reducer로 관리.


    // const [winner, setWinner] = useState('');
    // const [turn, setTurn] = useState('O');
    // const [tableData, setTableData] = useState([['','',''],['','',''],['','','']]);

    const onClickTable = useCallback( () => {
        dispatch({type: SET_WINNER, winner: '0'});  // 액션객체, dispatch는 action을 실행시킴. dispatch 할 때 reducer 실행됨
    }, []);

    return (
        <>
            <Table onClick={onClickTable} tableData ={state.tableDate} />
            {state.winner && <div>{state.winner}님의 승리</div>}
        </>
    )
};

export default TicTacToe;
