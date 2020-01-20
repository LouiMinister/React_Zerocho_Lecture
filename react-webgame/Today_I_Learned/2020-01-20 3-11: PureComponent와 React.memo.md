  [TOC]

# PureComponent와 React.memo.md

[강의 URI](https://youtu.be/43lQtV8Ig0E?list=PLcqDmjxt30RtqbStQqk-eYMK8N-1SYIFn)



### PureComponent

----

**RenderTest.jsx**

```jsx
import React, {PureComponent} from 'react';

class Test extends PureComponent {
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

**shouldComponentUpdate**를 자동으로 구현해놓음

* **pros** : state가 바뀔때만 렌더링해줌.

* **cons** :객체나 배열같은 참조관계가 있는 구조는 바뀌었는지 안바뀌었는지 구별하기 힘들어함.



```jsx
array.push(1)							 -> 같은 array라서 알아차리지 못함
[...this.state.array, 1];  -> 이렇게 짜야 알아차림		
```





**Component** : 렌더링 기준을 커스터마이징 하고 싶으 때

PureComponent : 렌더링 기준을 디폴드 정책으로 하고 싶을 때



### @Hooks

----

```jsx
import React, {Component, memo} from 'react';

const Try = memo({ tryInfo }) => {
  return (
      <li>
          <div>{tryInfo.try}</div>
          <div>{tryInfo.result}</div>
      </li>
  );
};


export default Try;
```

컴포넌트를 메모로 감싸둔다.



자식들이 모두 PureComponent나 memo면 부모에서도 PureComponent와 memo를 적용할 수 있다.