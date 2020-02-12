  [TOC]

# useMemo와  useCallback

[강의 URI](https://youtu.be/6H6KncvVc8s?list=PLcqDmjxt30RtqbStQqk-eYMK8N-1SYIFn)

**useMemo**: 함수의 리턴값을 기억한다.

**useRef**: 일반 값을 기억한다.





Hooks는 전체가 다시실행됨. -> getWinNumber도 계속 실행됨

```jsx
 const [winNumbers, setWinNumbers] = useState(getWinNumbers());
```



### -> **useMemo 사용**

```jsx
const lottoNumbers = useMemo(() => getWinNumbers(), [winNumbers]);
```



### -> **마찬가지로 useCallback 사용**

```jsx
	 const onClickRedo = useCallback(() => {
        console.log('onClickRedo');
        console.log(winNumbers);
        setWinNumbers(getWinNumbers());
        setWinBalls([]);
        setBonus(null);
        setRedo(false);
        timeouts.current = []
    }, [winNumbers]);
```



**두번째 인자는 state를 넣어준다**

-> State가 바뀔 때 다시 로딩한다.