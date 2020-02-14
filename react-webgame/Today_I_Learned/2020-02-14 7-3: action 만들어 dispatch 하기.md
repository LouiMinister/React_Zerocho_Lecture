  [TOC]

# action 만들어 dispatch 하기

[강의 URI](https://youtu.be/f9awvzAxkpw)



#### 기존

```jsx
const [winner, setWinner] = useState('');
const [turn, setTurn] = useState('O');
const [tableData, setTableData] = useState([['','',''],['','',''],['','','']]);
```

위와 같이 쓸 경우 자식들에게 넘겨주기 힘 -> 하나의 **State**로 묶어서 **Reducer**로 관리



###  reducer 사용

**state 객체 선언**

```jsx
const initialState = {
    winner: '',
    turn: 'O',
    tableDate: [['','',''],['','',''],['','','']],
};
```

**reducer 함수 선언**

```jsx
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
```

**useReducer 사용**

```jsx
const TicTacToe = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const onClickTable = useCallback( () => {
        dispatch({type: SET_WINNER, winner: '0'});  
      // 액션객체, dispatch는 action을 실행시킴. dispatch 할 때 reducer 실행됨
    }, []);

    return (
        <>
            <Table onClick={onClickTable} tableData={state.tableData} dispatch={dispatch}/>
            {state.winner && <div>{state.winner}님의 승리</div>}
        </>
    )
};
```

자식에게 **dispatch, tableData**를 넘겨주어서 자식에서 dispatcher를 쓸 수 있게 함.



**자식**

