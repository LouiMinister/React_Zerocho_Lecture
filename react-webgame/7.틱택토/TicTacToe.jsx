import React, {useCallback, useReducer} from 'react';
import Table from './Table'

const initialState = {
    winner: '',
    turn: 'O',
    tableData: [
        ['1','2','3'],
        ['4','5','6'],
        ['7','8','9']
    ],
};

export const SET_WINNER = 'SET_WINNER';
export const CLICK_CELL = 'CLICK_CELL';
export const CHANGE_TURN = 'CHANGE_TURN';

const reducer = (state, action) => {
    switch(action.type) {
        case SET_WINNER : {
            // state.winner = action.winner 하면 안됨.
            return {
                ...state,
                winner: action.winner,
            }; // 기존 객체를 바꾸지 말고 새로운 객체를 만들어야함. (불변성)
        }
        case CLICK_CELL : {
            // 불변성을 지키기 위하여 다음과 같이 작성
            const tableData = [...state.tableData];
            tableData[action.row] = [...tableData[action.row]]; // immer라는 라이브러리로 가독성 해결
            tableData[action.row][action.cell] = state.turn;
            return {
                ...state,
                tableData: tableData,
            };
        }
        case CHANGE_TURN: {
            return {
                ...state,
                turn: state.turn ==='O' ? 'X' : 'O',
            };
        }
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
            <Table onClick={onClickTable} tableData={state.tableData} dispatch={dispatch}/>
            {state.winner && <div>{state.winner}님의 승리</div>}
        </>
    )
};

export default TicTacToe;
