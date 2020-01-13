const path = require('path');

module.exports = {
    mode : 'development',
    devtool: 'eval', // 프로덕트일 때 hidden-source-map
    resolve: {
        extensions: ['.jsx', '.js'],
    },

    entry:{
        app: './client',
    },
    module : {
        rules: [{
            test: /\.jsx?/,
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env', '@babel/preset-react'],
                plugins: [],
            },
        }],
    },
    output: {
        filename : 'app.js',
        path : path.join(__dirname, 'dist'), // path.join(param1, param2) 하면 경로 합쳐준걸 리턴
    },
};