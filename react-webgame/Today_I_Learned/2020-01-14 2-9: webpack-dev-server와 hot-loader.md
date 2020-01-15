[TOC]

# webpack-dev-server와 hot-loader

[강의 URI](https://www.youtube.com/watch?v=jQh5_jvZVzI&list=PLcqDmjxt30RtqbStQqk-eYMK8N-1SYIFn&index=19)



npm i -D react-hot-loader

npm i -D webpack-dev-server

webpack.config.js 읽어서 빌드를 해주고



**package.json**

```
"scripts" : {
    "dev": "webpack-dev-server --hot"
  },
  
  plugins: ['react-hot-loader/babel',],
```

$ npm run dev



**client.jsx**

```jsx
const Hot = hot(WordRelay);

ReactDom.render(<Hot />, document.querySelector('#root'));
```

**webpack-dev-server**

서버가 있어야 프론트엔드 코드 변경 된걸 감지하고 빌드 자동으로 해줌

webpack.config.js 읽어서 빌드를 해주고 그걸 서버로 유지시켜줌 (webpack.config 설정 바꾼건 빌드를 다시해줘야 적용이 됨)