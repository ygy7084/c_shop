import React from 'react';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import './styles.css';

class SavePoint extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputPhone: '',
      inputPoint: '',
    };
    this.onInputChange = this.onInputChange.bind(this);
  }
  onInputChange(name) {
    return event =>
      this.setState({
        [name]: event.target.value,
      });
  }
  render() {
    return (
      <div className="paperWrapper">
        <Paper
          className="paper"
          zdepth={2}
        >
          <h1>SavePoint</h1>
          <TextField
            label="PHONE"
            value={this.state.inputPhone}
            onChange={this.onInputChange('inputPhone')}
          />
          <br />
          <TextField
            label="Point"
            value={this.state.inputPoint}
            onChange={this.onInputChange('inputPoint')}
          />
          <br />
          <Button
            className="button"
            raised
            color="primary"
            onClick={() => this.props.onSavePoint({
              inputPhone: this.state.inputPhone,
              inputPoint: this.state.inputPoint,
            })}
          >
            적립
          </Button>
        </Paper>
      </div>
    );
  }
}
export default SavePoint;
