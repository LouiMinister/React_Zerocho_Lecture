  [TOC]

# return 내부에 for과 if 쓰기

[강의 URI](https://youtu.be/FX6uO1GkXsc?list=PLcqDmjxt30RtqbStQqk-eYMK8N-1SYIFn)



**{ }** 안에 javascript 쓸 수 있다.



jsx 에서는 함수 안에서 if, for 문을 쓸 수 있다.





```jsx
  return (
    <>
        <div
            id ="screen"
            className={state}
            onClick={onClickScreen}
        >
            {message}
        </div>
        { () => {
            if (result.length === 0) {
                return null;
            } else {
                return <>
                    <div>평균 시간: {result.reduce((a,c) => a + c) / result.length}ms</div>
                    </>
            }
        }}
        {renderAverage()}
    </>
  )
```



가독성을 위해 함수를 따로 빼는 것이 나은 듯 하다.