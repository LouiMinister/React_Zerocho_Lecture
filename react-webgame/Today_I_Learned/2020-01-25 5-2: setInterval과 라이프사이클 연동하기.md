  [TOC]

# setInterval과 라이프사이클 연동하기

[강의 URI](https://youtu.be/5aFCwolam4k?list=PLcqDmjxt30RtqbStQqk-eYMK8N-1SYIFn)



컴포넌트가 DOM에 붙는 순간 특정한 동작을 하게 할 수 있다.



```jsx
componentDidMount(){
	// 비동기 요청을 많이 함
          this.interval = setInterval( () => {
            const {imgCoord} = this.state;
            if(imgCoord === rspCoors.바위) {
                this.setState({
                    imgCoord: rspCoors.가위,
                });
            } else if (imgCoord === rspCoors.가위){
                this.setState({
                    imgCoord: rspCoors.보,
                });
            } else if (imgCoord === rspCoors.보){
                this.setState({
                    imgCoord: rspCoors.바위,
                });
            }
        },1000);
}

componentWillUnmount(){
  // 비동기 요청 정리를 많이 함.
  clearInterval(this.interval);
}
```



### 클래스의 경우

* **처음**

  constructor -> render -> ref -> componentDidMount

* **중간**

  setState/prps 바뀔때 -> shouldComponentUpdate -> render -> componentDidUpdate

* **소멸**

  부모가 나를 없앴을 때 -> componentWillUnmount -> 소멸