  [TOC]

# reducer, action, dispatch의 관계

[강의 URI](https://youtu.be/ccKoutCkbao?list=PLcqDmjxt30RtqbStQqk-eYMK8N-1SYIFn)



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
        case SET_WINNER :
            // state.winner = action.winner 하면 안됨.
            return{
                ...state,
                winner: action.winner,
            }; // 기존 객체를 바꾸지 말고 새로운 객체를 만들어야함. (불변성)
    }
};
```

**useReducer 사용**

```jsx
const TicTacToe = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
  
      const onClickTable = useCallback( () => {
        dispatch({type: SET_WINNER, winner: '0'});  
        // 액션객체, dispatch는 action을 실행시킴. dispatch 하면ß reducer 실행됨
    }, []);

    return (
        <>
            <Table onClick={onClickTable} tableData ={state.tableDate} />
            {state.winner && <div>{state.winner}님의 승리</div>}
        </>
    )
```



state를 직접 바꿀 수 없음

action을 dispatch하면 reducer가 state가 적용해줌