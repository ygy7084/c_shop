import React from 'react';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog';
import { CircularProgress } from 'material-ui/Progress';
import green from 'material-ui/colors/green';

const styles = theme => ({
  textField: {
    fontSize: '5em',
  },
  button: {
    width: '20vw',
    height: '10vh',
    fontSize: '1.5em',
  },
});
class SavingPoint extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
    };
  }
  render() {
    const { classes } = this.props;
    return (
      <Dialog
        open
        onClose={this.props.cancel}
        onBackdropClick={this.props.cancel}
        aria-labelledby="SavingPointTitle"
      >
        <DialogTitle id="SavingPointTitle">포인트 적립</DialogTitle>
        <DialogContent>
          <DialogContentText>
            고객님께서 적립하실 포인트를 입력하십시요.
          </DialogContentText>
          <TextField
            type="number"
            classes={{ root: classes.textField }}
            value={this.state.input}
            onChange={e => this.setState({ input: e.target.value.replace(/\D/g, '') })}
            autoFocus
            margin="dense"
            id="SavingPointInput"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button classes={{ root: classes.button }} color="primary" raised onClick={() => this.props.submit(Number(this.state.input))}>적립</Button>
          <Button classes={{ root: classes.button }} onClick={this.props.cancel}>취소</Button>
        </DialogActions>
      </Dialog>
    );
  }
}
export default withStyles(styles)(SavingPoint);
