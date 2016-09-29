var React = require('react');
var ReactDOM = require('react-dom');
var LoginUI = require('./components/LoginUI');

window.onload = function () {
  ReactDOM.render(<LoginUI/>, document.getElementById('main'));
}
