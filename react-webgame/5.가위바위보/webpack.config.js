const path = require('path');   // 현재 폴더 경로를 잡아줌

module.exports = {
    name : 'rock-sissor-paper',
    mode : 'development', // 실서비스 : production
    devtool: 'eval', // 빠르게 하겠다
    resolve : {         // js, jsx 파일을 자동으로 찾아줌
        extensions : ['.js', '.jsx']
    },

    entry: {    // 입력
        app : ['./client' ] // client.jsx가 WordRelay.jsx 를 불러와서 여기선 써줄필요 없음
    },                     // 확장자는 resolve extension에서 설정하면 써줄필요 없음

    module : {
        rules : [{
            test: /\.jsx?/,
            loader: 'babel-loader',
            options : {
                presets : ['@babel/preset-env', '@babel/preset-react'],
                plugins: [
                    '@babel/plugin-proposal-class-properties',
                    'react-hot-loader/babel',
                ],
            },
        }],
    },

    output : {  // 출력
        path : path.join(__dirname, ''), // path.join(param1, param2) 하면 경로 합쳐준걸 리턴
        filename : 'app.js'
    }

}