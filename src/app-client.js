var React = require('react');
var ReactDOM = require('react-dom');
var ChatApp = require('./components/ChatApp');

window.onload = function () {
  ReactDOM.render(<ChatApp/>, document.getElementById('main'));
}
