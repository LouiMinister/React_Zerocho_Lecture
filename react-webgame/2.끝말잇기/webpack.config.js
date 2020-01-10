const path = require('path');   // 현재 폴더 경로를 잡아줌

module.exports = {
    name : 'wordrelay-setting',
    mode : 'development', // 실서비스 : production
    devtool: 'eval', // 빠르게 하겠다
    resolve : {         // js, jsx 파일을 자동으로 찾아줌
        extensions : ['.js', 'jsx']
    },

    entry: {    // 입력다
       app : ['./client' ] // client.jsx가 WordRelay.jsx 를 불러와서 여기선 써줄필요 없음
    },                     // 확장자는 resolve extension에서 설정하면 써줄필요 없음

    output : {  // 출력
        path : path, // path.join(param1, param2) 하면 경로 합쳐준걸 리턴
        filename : 'app.js'
    }

}