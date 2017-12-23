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
  buttonProgress: {
    color: green[500],
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12,
  },
});
class SavingPoint extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: 0,
    };
  }
  render() {
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
            value={this.state.input}
            onChange={e => this.setState({ input: Number(e.target.value) })}
            autoFocus
            margin="dense"
            id="SavingPointInput"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button color="primary" raised onClick={() => this.props.submit(this.state.input)}>적립</Button>
          <Button onClick={this.props.cancel}>취소</Button>
        </DialogActions>
      </Dialog>
    );
  }
}
export default withStyles(styles)(SavingPoint);
