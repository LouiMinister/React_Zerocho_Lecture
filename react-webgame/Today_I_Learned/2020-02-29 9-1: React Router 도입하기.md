  [TOC]

# React Router 도입하기

[강의 URI](https://youtu.be/veXqpfcis0A?list=PLcqDmjxt30RtqbStQqk-eYMK8N-1SYIFn)



### npm package 다운로드

```bash
npm i react-router
npm i react-router-dom	// 웹에서 사용할 수 있게
```



react-router-dom 이 react-router을 사용한다

사용자는 react-router-dom만 사용한다.



`Route` 태그를 통해

```jsx
import { BrowserRouter } from 'react-router-dom';
```

```jsx
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import NumberBaseBall from "../3.숫자야구/NumberBaseball";
import RSP from "../5.가위바위보/RSP";
import Lotto from "../6.로또/Lotto";

const Games = () => {
    return(
        <BrowserRouter>
            <div>
                <Route path="/number-baseball" component={NumberBaseBall} />
                <Route path="/rock-scissors-paper" component={RSP}/>
                <Route path="/lotto-generator" component={Lotto}/>
            </div>
        </BrowserRouter>
    );
};

export default Games;
```

