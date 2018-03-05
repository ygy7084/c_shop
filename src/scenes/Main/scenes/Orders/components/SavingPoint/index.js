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
import { FormGroup, FormControlLabel } from 'material-ui/Form';
import Switch from 'material-ui/Switch';
import * as cookie from '../../modules/cookie';

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
class SavingPoint extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      point: 0,
      price: 0,
      percent: parseInt(cookie.get('point_percent_input')) || 10,
      doCalculateFromPrice: cookie.get('point_doCalculateFromPrice') === 'true',
    };
  }
  handlePrice = (e) => {
    const { value } = e.target;
    const price = value < 0 ? 0 : value;
    this.setState({
      price,
      point: Math.floor(price * this.state.percent / 100),
    });
  };
  handlePercent = (e) => {
    const { value } = e.target;
    const percent = value > 100 ? 100 : e < 0 ? 0 : value;
    this.setState({
      percent,
      point: Math.floor(this.state.price * percent / 100),
    });
    cookie.set('point_percent_input', percent);
  };
  handleSwitch = () => {
    const doCalculateFromPrice = !this.state.doCalculateFromPrice;
    this.setState({
      doCalculateFromPrice,
    });
    cookie.set('point_doCalculateFromPrice', doCalculateFromPrice);
  };
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
          <FormControlLabel
            control={
              <Switch
                checked={this.state.doCalculateFromPrice}
                onChange={this.handleSwitch}
              />
            }
            label="가격으로 포인트 계산"
          />
          {
            this.state.doCalculateFromPrice ?
              <React.Fragment>
                <TextField
                  type="number"
                  classes={{ root: classes.textField }}
                  value={this.state.price}
                  onChange={this.handlePrice}
                  autoFocus
                  margin="dense"
                  id="price"
                  fullWidth
                  label="Price"
                />
                <TextField
                  type="number"
                  classes={{ root: classes.textField }}
                  value={this.state.percent}
                  onChange={this.handlePercent}
                  margin="dense"
                  id="percent"
                  fullWidth
                  label="Percent"
                />
              </React.Fragment> : null
          }
          <TextField
            type="number"
            classes={{ root: classes.textField }}
            value={this.state.point}
            onChange={e => this.setState({ point: e.target.value })}
            autoFocus={!this.state.doCalculateFromPrice}
            margin="dense"
            id="point"
            fullWidth
            label="Point"
          />
        </DialogContent>
        <DialogActions>
          <Button classes={{ root: classes.button }} color="primary" variant="raised" onClick={() => this.props.submit(Number(this.state.point))}>적립</Button>
          <Button classes={{ root: classes.button }} onClick={this.props.cancel}>취소</Button>
        </DialogActions>
      </Dialog>
    );
  }
}
export default withStyles(styles)(SavingPoint);
