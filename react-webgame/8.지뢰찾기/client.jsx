
import MineSearch from "./MineSearch";

const React = require('react');
const ReactDom = require('react-dom');
const { hot } = require('react-hot-loader/root');

//const ResponseCheck  = require('./ResponseCheck');

const Hot = hot(MineSearch);

ReactDom.render(<Hot />, document.querySelector('#root'));