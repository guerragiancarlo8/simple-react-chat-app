var React = require('react');

var ChatArea = React.createClass({
  render: function () {
    return (
      <div>
        <div id="chatArea">
          <ul className="messages"></ul>
        </div>
        <form onSubmit={this.props.onSubmitMessage}>
          <input
              type="text"
              className="inputMessage"
              value={this.props.inputValue}
              placeholder="Start Typing Here..."
              onChange={this.props.onInputChange}/>
        </form>
        <div id = "users">
          <ul className="theusers"></ul>
        </div>
      </div>
    )
  }
});

module.exports = ChatArea;
