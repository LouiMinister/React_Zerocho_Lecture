  [TOC]

# Hooks와 useEffect

[강의 URI](https://youtu.be/2DFXAcck-DQ?list=PLcqDmjxt30RtqbStQqk-eYMK8N-1SYIFn)



함수형은 렌더링 될 때 마다 프로퍼티가 전부 다시실행됨

-> useEffect도 계속 다시 실행됨



```jsx
    // 첫번째 인수는 함수, 두번째 인수는 배열
    // 두번째 인수는 배 : 바뀔 state를 넣어서 클로저 문제 해결
    useEffect( () => {  // componentDidMount, componentDidUpdate 역할(1대1 대응은 아님)

        // componentDidMount 역할
        interval.current = setInterval(changeHand, 100);

        return () => { // componentWillUnmount 역할
            clearInterval(interval.current);
        }

    }, [imgCoord]);
```

두번째 인수로 넣은 state가 바뀔 때 마다 계속 실행됨

두번째 인수를 [] 로 넣으면 처음 한번만 실행됨. (componentDidMount 처럼)