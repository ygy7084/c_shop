/* global document */
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

// {
//   status === 'INIT' ?
//     <div style={{ float: 'left' }}>
//       <Button
//         classes={{ root: classes.button }}
//         color="accent"
//         raised
//       >
//         전체 데이터 보기
//       </Button>
//     </div> : null
// }
const styles = theme => ({
  textField: {
    fontSize: '5vh',
  },
  button: {
    fontSize: '2.6vmin',
  },
  actions: {
    width: '100%',
    margin: 0,
    paddingRight: '24px',
    paddingLeft: '24px',
    paddingBottom: '24px',
  },
});
class ManagingPoint extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      phoneInput: '',
      pointInput: '',
    };
    this.handlePointInput = this.handlePointInput.bind(this);
  }
  componentDidMount() {
    const input = document.querySelector('#ManagingPointInput');
    input.focus();
    this.setState({
      phoneInput: '010',
    });
  }
  handlePointInput(e) {
    const point = e.target.value.replace(/\D/g, '');
    if (point === '') {
      this.setState({ pointInput: '' });
    } else if (Number(point) <= this.props.customerPoint.point) {
      this.setState({ pointInput: Number(point) });
    }
  }
  render() {
    const {
      classes,
      status,
      getCustomerPoint,
      customerPoint,
      useCustomerPoint,
      onClose,
    } = this.props;
    return (
      <Dialog
        open
        onClose={onClose}
        aria-labelledby="ManagingPointTitle"
      >
        <DialogTitle id="ManagingPointTitle">포인트 관리</DialogTitle>
        <DialogContent>
          <DialogContentText>
            고객님 번호를 입력하십시요.
          </DialogContentText>
          <TextField
            type="number"
            classes={{ root: classes.textField }}
            value={this.state.phoneInput}
            onChange={e => this.setState({ phoneInput: e.target.value.replace(/\D/g, '') })}
            autoFocus
            margin="dense"
            id="ManagingPointInput"
            fullWidth
            disabled={status === 'GOT_CUSTOMER_POINT'}
          />
          {
            status === 'GOT_CUSTOMER_POINT' && customerPoint ?
              <div>
                <DialogContentText>
                  보유 포인트
                </DialogContentText>
                <TextField
                  type="number"
                  classes={{ root: classes.textField }}
                  value={customerPoint.point}
                  margin="dense"
                  fullWidth
                  disabled
                />
                <DialogContentText>
                  사용 포인트
                </DialogContentText>
                <TextField
                  type="number"
                  classes={{ root: classes.textField }}
                  value={this.state.pointInput}
                  onChange={this.handlePointInput}
                  autoFocus
                  margin="dense"
                  fullWidth
                />
                <DialogContentText>
                  잔여 포인트
                </DialogContentText>
                <TextField
                  type="number"
                  classes={{ root: classes.textField }}
                  value={this.state.pointInput === '' ? '' : customerPoint.point - this.state.pointInput}
                  margin="dense"
                  fullWidth
                  disabled
                />
              </div> : null
          }
        </DialogContent>
        <DialogActions classes={{ action: classes.actions }}>
          <div style={{ float: 'right' }}>
            {
              status === 'GOT_CUSTOMER_POINT' ?
                <Button
                  classes={{ root: classes.button }}
                  color="primary"
                  raised
                  onClick={() => useCustomerPoint(this.state.pointInput)}
                  disabled={this.state.pointInput === ''}
                >
                  사용
                </Button> :
                <Button
                  classes={{ root: classes.button }}
                  color="primary"
                  raised
                  onClick={() => getCustomerPoint(this.state.phoneInput)}
                >
                  입력
                </Button>
            }
            <Button
              classes={{ root: classes.button }}
              onClick={onClose}
            >
              취소
            </Button>
          </div>
        </DialogActions>
      </Dialog>
    );
  }
}
export default withStyles(styles)(ManagingPoint);
