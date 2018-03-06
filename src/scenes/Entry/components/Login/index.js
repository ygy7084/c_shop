import React from 'react';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import './styles.css';

const styles = {
  button: {
    marginTop: '20px',
    marginBottom: '30px',
  },
};
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputId: '',
      inputPassword: '',
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
    const { classes } = this.props;
    return (
      <div className="paperWrapper">
        <Paper
          className="paper"
          zdepth={2}
        >
          <h1>Login</h1>
          <TextField
            label="ID"
            value={this.state.inputId}
            onChange={this.onInputChange('inputId')}
          />
          <br />
          <TextField
            label="Password"
            value={this.state.inputPassword}
            onChange={this.onInputChange('inputPassword')}
          />
          <br />
          <Button
            className={classes.button}
            variant="raised"
            color="primary"
            onClick={() => this.props.onLogin({
              inputId: this.state.inputId,
              inputPassword: this.state.inputPassword,
            })}
          >
            접속
          </Button>
        </Paper>
      </div>
    );
  }
}
export default withStyles(styles)(Login);
