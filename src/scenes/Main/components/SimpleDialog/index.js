import React from 'react';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import Dialog, {
  DialogActions,
  DialogTitle,
} from 'material-ui/Dialog';

const styles = theme => ({
  button: {
    width: '20vw',
    fontSize: '1.5em',
  },
});
class SimpleDialog extends React.Component {
  render() {
    const { classes, isOpen, onConfirm } = this.props;
    return (
      <Dialog
        open={isOpen}
        onClose={onConfirm}
        aria-labelledby="SavingPointTitle"
      >
        <DialogTitle id="SavingPointTitle">포인트 적립을 시작합니다.</DialogTitle>
        <DialogActions>
          <Button
            classes={{ root: classes.button }}
            color="primary"
            variant="raised"
            onClick={onConfirm}
          >
            확인
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}
export default withStyles(styles)(SimpleDialog);
