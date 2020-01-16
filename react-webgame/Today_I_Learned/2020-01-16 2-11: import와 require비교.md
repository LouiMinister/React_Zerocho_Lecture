[TOC]

# import와  require 비교(추가필요)

[강의 URI](https://www.youtube.com/watch?v=jQh5_jvZVzI&list=PLcqDmjxt30RtqbStQqk-eYMK8N-1SYIFn&index=21)



숫자야구 하면서 익힐것 

1. props에 관한 개념을 익힌다.
2. map 함수
3. import



**흠... 부족하니까 다시 살펴보는게 좋을듯()**

### require

----

**노드의 모듈시스템**

모듈 export 한거를 다른곳에서 require로 가져올 수 있다.

다른 사람이 만든 스크립트도 require로 사용할 수 있다.

```
const React = require('react');
const ReactDom = require('react-dom');

class SomeThing{

}

module.exports = SomeThing;

//-------------------------------------------------


import React from 'react';
import ReactDom from 'react-dom';

class someThingP

}

export default SomeThing;
```



**common 2015**

```javascript
export const hello = 'hello'; // import {hello};
export const bye = 'hello' // import {bye}

export default NumberBaseBall; // import NumberBaseball;
```

**common js**

```javascript
export.hello = 'hello' // const hello = require('hello'); 
export.bye = 'hello' // const bye = requre()

module.exports = NumberBaseball;
```

node 에서는 commonjs만 지원

​	-> import 쓰면 에러가 남

바벨이 지원해주기 때문에 가능



node에서는 require, export 사용



둘 다 호환된다고 보면 된다.







구조분해 문법 정리하기