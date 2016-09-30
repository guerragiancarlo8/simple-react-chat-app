var React = require('react');
var LoginModal = require('./LoginModal.js');

var ChatApp = React.createClass({
  getInitialState: function () {
    return {
      showModal: true,
      value: '',
      inputValue: ''
    }
  },
  getValidationState: function () {
    const length = this.state.value.length;
    if (length > 10) return 'success'
    else if (length > 5) return 'warning'
    else if (length > 0) return 'error'
  },
  onLoginChange: function (e) {
    this.setState({ value: e.target.value})
  },
  onUserLogin: function(e) {
    e.preventDefault();
    if(this.state.value.length > 10){
      var username = this.state.value;
      socket.emit('add user', username);
      this.setState({showModal: false});
    }
  },
  onInputChange: function (e) {
    this.setState({ inputValue: e.target.value})
  },
  onSubmitMessage: function(e) {
    e.preventDefault();
    socket.emit('chat message', this.state.inputValue)
    this.setState({inputValue: ''})
  },
  render: function() {

    return  (
      <div>
        <LoginModal
          show={this.state.showModal}
          close={this.close}
          onSubmit={this.onUserLogin}
          validationState={this.getValidationState()}
          value={this.state.value}
          onLoginChange={this.onLoginChange}
          onUserLogin={this.onUserLogin}/>


        <div id="chatArea">
          <ul className="messages"></ul>
        </div>
        <form onSubmit={this.onSubmitMessage}>
          <input
              type="text"
              className="inputMessage"
              value={this.state.inputValue}
              placeholder="Start Typing Here..."
              onChange={this.onInputChange.bind(this)}/>
        </form>
        <div id = "users">
          <ul className="theusers"></ul>
        </div>
      </div>
    )
  }
});

module.exports = ChatApp;
