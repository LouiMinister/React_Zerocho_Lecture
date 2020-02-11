  [TOC]

# useEffect로 업데이트 감지하기

[강의 URI](https://youtu.be/qdaZaC0AWq0?list=PLcqDmjxt30RtqbStQqk-eYMK8N-1SYIFn)

### Class 일 때 ComponentDidMount, ComponentDidUpdate, ComponentWillUnmount

```jsx
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
```



### Hooks일 때 

```jsx
    useEffect( () => {
        for (let i=0 ; i< winNumbers.length -1 ; i++){
            timeouts.current[i] = setTimeout ( () => {
                setWinBalls((prevBalls) => [...prevBalls, winNumbers[i]]);
            }, (i+1) * 1000);
        }
        timeouts.current[6] = setTimeout( () => {
            setBonus(winNumbers[6]);
            setRedo(true);
        }, 7000);

        return () => {  //componentDidUnmount
            timeouts.current.forEach((v) => {
                clearTimeout(v);
            });
        };
    }, [winBalls.length === 0]); 
// 빈 배열이면 componentDidMount와 동일 (배열에는 조건, 또는 바뀌는 값을 넣어둠)
// 배열에 요소가 있으면 componentDidMount와 ComponentDidUpdate 둘 다 수행
```

