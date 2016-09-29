var React = require('react');
var Modal = require('react-bootstrap').Modal;
var Button = require('react-bootstrap').Button;
var Popover = require('react-bootstrap').Popover;
var Tooltip = require('react-bootstrap').Tooltip;
var OverlayTrigger = require('react-bootstrap').OverlayTrigger;
var FormGroup = require('react-bootstrap').FormGroup;
var FormControl = require('react-bootstrap').FormControl;
var ControlLabel = require('react-bootstrap').ControlLabel;
var HelpBlock = require('react-bootstrap').HelpBlock;

var LoginUI = React.createClass({
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
  handleChange: function (e) {
    this.setState({ value: e.target.value})
  },
  onUserLogin: function(e) {
    e.preventDefault();
    var username = this.state.value;
    socket.emit('add user', username);
    this.setState({showModal: false});
  },
  onInputChange: function (e) {
    this.setState({ inputValue: e.target.value})
  },
  handleSubmitMessage: function(e) {
    e.preventDefault();
    socket.emit('chat message', this.state.inputValue)
    this.setState({inputValue: ''})
  },
  render: function() {

    return  (
      <div>
        <div>
          <Modal show={this.state.showModal} onHide={this.close}>
            <Modal.Header closeButton>
            </Modal.Header>
            <Modal.Body>
            <form onSubmit={this.onUserLogin}>
              <FormGroup
                controlId="formBasicText"
                validationState={this.getValidationState()}>
                <ControlLabel>Working example with validation</ControlLabel>
                <FormControl
                  type="text"
                  value={this.state.value}
                  placeholder="Enter text"
                  onChange={this.handleChange}
                />
                <FormControl.Feedback />
                <HelpBlock>Validation is based on string length.</HelpBlock>
              </FormGroup>
            </form>
            </Modal.Body>
            <Modal.Footer>
            <Button type="submit" onClick={this.onUserLogin}>Submit</Button>
            </Modal.Footer>
          </Modal>
        </div>
        <div id="chatArea">
          <ul className="messages"></ul>
        </div>
        <form onSubmit={this.handleSubmitMessage}>
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

module.exports = LoginUI;
