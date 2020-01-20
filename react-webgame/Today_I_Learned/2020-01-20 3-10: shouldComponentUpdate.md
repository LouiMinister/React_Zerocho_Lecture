  [TOC]

# shouldComponentUpdate

[강의 URI](https://youtu.be/dFbdTkgaLNs?list=PLcqDmjxt30RtqbStQqk-eYMK8N-1SYIFn)



**render가 될 때**

state나 props가 바뀔 때



-> react devtool을 이용하면 다시 렌더링되는 컴포넌트가 뭔지 gui로 확인할 수 있음.



렌더링 다시 할 필요도 없는 컴포넌트들이 다시 렌더링됨 -> 성능 저하 유발



**RenderTest.jsx**

```jsx
import React, {Component} from 'react';

class Test extends Component {
    state = {
        counter :0,
    };

    onClick = () => {
        this.setState({});
    };

    render() {
        console.log('렌더링', this.state);
        return (
            <di>
                <button onClick={this.onClick}>클릭</button>
            </di>
        );
    }
}

export default Test;
```

버튼도 계속 렌더링됨. 

​	-> 다음과 같은 코드 추가



**RenderTest.jsx**

```jsx
    // true일 때 렌더링하고 false일 때 렌더링 하지 않음
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        if (this.state.counter !== nextState.counter) {
            return true;
        }
        return false;
    }
```

react에서 제공하는 함수