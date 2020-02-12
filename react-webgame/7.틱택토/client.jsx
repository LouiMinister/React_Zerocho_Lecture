
import Lotto from "./Lotto";

const React = require('react');
const ReactDom = require('react-dom');
const { hot } = require('react-hot-loader/root');

//const ResponseCheck  = require('./ResponseCheck');

const Hot = hot(Lotto);

ReactDom.render(<Hot />, document.querySelector('#root'));