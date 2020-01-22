import NumberBaseball from "./NumberBaseball";

const React = require('react');
const ReactDom = require('react-dom');
const { hot } = require('react-hot-loader/root');

const WordRelay  = require('./NumberBaseball');

const Hot = hot(NumberBaseball);

ReactDom.render(<Hot />, document.querySelector('#root'));