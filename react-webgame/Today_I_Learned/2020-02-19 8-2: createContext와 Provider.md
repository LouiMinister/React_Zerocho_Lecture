  [TOC]

# createContext와 Provider

[강의 URI](https://youtu.be/tRSsb7wz994?list=PLcqDmjxt30RtqbStQqk-eYMK8N-1SYIFn)



**ContextApi** 는 전역적인 상태를 관리하기 위해 사용한다.

**ContextApi** 는 최적화 하기 힘들다



**createContext()**
	-> Context를 만든다.



`TableContext.Provider`를 사용해서 그 아래 엘리먼트에 value를 전달할 수 있다.

```jsx
const MineSearch = () =>{
    const [state, dispatch] = useReducer(reducer, initialState);
    const {timer,result, tableData} = state;
return(
    <TableContext.Provider value={{tableData: tableData, dispatch}}>
    <Form />
        <div>{timer}</div>
            <Table />
        <div>{result}</div>
    </TableContext.Provider>
);
}
```

요대로쓰면 tableData를 계속 만들어버린다



그래서 다음과 같이 쓴다 

```jsx
const MineSearch = () =>{
    const [state, dispatch] = useReducer(reducer, initialState);
    const {timer,result, tableData} = state;

  	// useMemo 사용하여 캐싱
    const value = useMemo( () => ({tableData: tableData, dispatch}), [tableData]);

    return(
        <TableContext.Provider value={value}>
        <Form />
            <div>{timer}</div>
                <Table />
            <div>{result}</div>
        </TableContext.Provider>
    );
};
```

useMemo를 사용하여 tableData를 캐싱한다.