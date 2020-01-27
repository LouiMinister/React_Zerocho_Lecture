  [TOC]

# ComponentDidUpdate

[강의 URI](https://youtu.be/D2OWLw3KZRQ?list=PLcqDmjxt30RtqbStQqk-eYMK8N-1SYIFn)



```jsx
    // setState 불릴 때 마다 실행됨
    componentDidUpdate(prevProps, prevState) {
        // redo를 눌렀을 때 동작.
        if (this.state.winBalls.length === 0){
            this.runTimeouts();
        }
    }
```

