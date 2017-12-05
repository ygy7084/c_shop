import React from 'react';
import Button from 'material-ui/Button';
import ModeEditIcon from 'material-ui-icons/ModeEdit';
import TextField from 'material-ui/TextField';

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit() {
    this.props.onSubmit(this.state.inputText);
    this.setState({ inputText: '' });
  }
  render() {
    return (
      <div>
        <TextField
          id="name"
          label="입력"
          value={this.state.inputText}
          onChange={e => this.setState({ inputText: e.target.value })}
          margin="normal"
        />
        <Button
          fab
          color="accent"
          aria-label="edit"
          onClick={this.handleSubmit}
        >
          <ModeEditIcon />
        </Button>
      </div>
    );
  }
}
export default Input;
