import React from 'react';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog';;
import { FormGroup, FormControlLabel } from 'material-ui/Form';
import Switch from 'material-ui/Switch';

const styles = theme => ({
  textField: {
    fontSize: '5em',
  },
  button: {
    width: '15vw',
    height: '7vh',
    fontSize: '1.3em',
  },
});
class CustomerDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      memo: this.props.customer.memo,
    };
  }
  render() {
    const { classes, customer } = this.props;
    console.log(customer, customer._id);
    return (
      <Dialog
        open
        onClose={this.props.cancel}
        aria-labelledby="CustomerDetailTitle"
      >
        <DialogTitle id="CustomerDetailTitle">고객 정보</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {customer.phone}
          </DialogContentText>
          <TextField
            type="number"
            classes={{ root: classes.textField }}
            value={customer.point}
            margin="dense"
            id="point"
            fullWidth
            label="Point"
            disabled
          />
          <TextField
            type="text"
            classes={{ root: classes.textField }}
            value={this.state.memo}
            onChange={e => this.setState({
              memo: e.target.value,
            })}
            margin="dense"
            id="memo"
            fullWidth
            label="Memo"
            multiline
          />
        </DialogContent>
        <DialogActions>
          <Button
            classes={{ root: classes.button }}
            color="primary"
            variant="raised"
            onClick={() => this.props.submit({
              id: customer._id,
              memo: this.state.memo,
            })}
          >
            저장
          </Button>
          <Button
            classes={{ root: classes.button }}
            onClick={this.props.cancel}
          >
            취소
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}
export default withStyles(styles)(CustomerDetail);
