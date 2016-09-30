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

var LoginModal = React.createClass({
  render: function () {
    return (
      <Modal show={this.props.show} onHide={this.props.close}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
        <form onSubmit={this.props.onSubmit}>
          <FormGroup
            controlId="formBasicText"
            validationState={this.props.validationState}>
            <ControlLabel>Working example with validation</ControlLabel>
            <FormControl
              type="text"
              value={this.props.value}
              placeholder="Enter text"
              onChange={this.props.onLoginChange}
            />
            <FormControl.Feedback />
            <HelpBlock>Nickname Must Be At Least 10 Characters.</HelpBlock>
          </FormGroup>
        </form>
        </Modal.Body>
        <Modal.Footer>
        <Button type="submit" onClick={this.props.onUserLogin}>Submit</Button>
        </Modal.Footer>
      </Modal>
    )
  }
})

module.exports = LoginModal;
