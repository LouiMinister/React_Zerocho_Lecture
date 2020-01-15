
[TOC]

# @babel preset-env와 plugins

[강의 URI](https://www.youtube.com/watch?v=jQh5_jvZVzI&list=PLcqDmjxt30RtqbStQqk-eYMK8N-1SYIFn&index=17)



presets : 플러그인 모음

preset-env 는 브라우저마다의 코드로 변환시켜준다.



**webpack.config.js**

```jsx
    module : {
        rules: [{
            test: /\.jsx?/,
            loader: 'babel-loader',
            options: {
                presets: [
                    ['@babel/preset-env', {
                         targets: {
                             browsers: ['> 1% in KR'],
                         },
                        debug: true,
                    }],
                    '@babel/preset-react'
                ],
                plugins: [],
            },
        }],
    },
    plugins: [
        new webpack.LoaderOptionsPlugin({debug : true}),
    ],
```



순서

entry, module, plugins, output

입력파일 -> 모듈, 플러그인 적용 -> 결과파일





## @babel/preset-env



[browser list](https://github.com/browserslist/browserslist) 

여러 브라우저에서 실행되도록 컨버팅해줌

browsers에서 브라우저 설정