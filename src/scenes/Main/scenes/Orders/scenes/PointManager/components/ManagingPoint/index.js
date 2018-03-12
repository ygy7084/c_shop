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

const styles = {
  textField: {
    fontSize: '5vh',
  },
  actions: {
    width: '100%',
    margin: 0,
    paddingRight: '24px',
    paddingLeft: '24px',
    paddingBottom: '24px',
  },
};
class ManagingPoint extends React.Component {
  render() {
    const {
      classes,
      status,
      getCustomerPoint,
      customerPoint,
      useCustomerPoint,
      onClose,
      requestPhoneNumber,
      didRequestPhoneNumber,
      phoneInput,
      pointInput,
      handlePhoneInput,
      handlePointInput,
    } = this.props;
    return (
      <Dialog
        open
        onClose={onClose}
        aria-labelledby="ManagingPointTitle"
      >
        <DialogTitle id="ManagingPointTitle">포인트 사용</DialogTitle>
        <DialogContent>
          <DialogContentText>
            고객님 번호를 입력하십시요.
          </DialogContentText>
          <Button
            fullWidth
            color="primary"
            onClick={requestPhoneNumber}
            disabled={didRequestPhoneNumber || status === 'GOT_CUSTOMER_POINT'}
          >
            입력 요청
          </Button>
          <TextField
            type="number"
            className={classes.textField}
            value={phoneInput}
            onChange={handlePhoneInput}
            id="ManagingPhoneInput"
            disabled={status === 'GOT_CUSTOMER_POINT'}
            autoFocus
            margin="dense"
            fullWidth
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
                  value={pointInput}
                  onChange={handlePointInput}
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
                  value={pointInput === '' ? '' : customerPoint.point - pointInput}
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
                  variant="raised"
                  onClick={() => useCustomerPoint(pointInput)}
                  disabled={pointInput === ''}
                >
                  사용
                </Button> :
                <Button
                  classes={{ root: classes.button }}
                  color="primary"
                  variant="raised"
                  onClick={() => getCustomerPoint(phoneInput)}
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
