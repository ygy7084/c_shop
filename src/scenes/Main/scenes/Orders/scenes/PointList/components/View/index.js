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
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';
import CloseIcon from 'material-ui-icons/Close';
import ETable from './components/ETable';

const styles = theme => ({
  appBar: {
    position: 'relative',
  },
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
class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isCummulated: false, // 고객별 보여주는지
      cummulatedList: [],
    };
  }
  calculateCummulated = () => {
    const { list } = this.props;
    const cummulatedList = [];
    list.forEach((o) => {
      const i = cummulatedList.findIndex(j => j.phone === o.customer.phone);
      if (i < 0) { cummulatedList.push({
        id: o.id,
        phone: o.customer.phone,
        point: o.pointChange,
      }); }
      else {
        cummulatedList[i].point += o.pointChange;
      }
    });
    this.setState({
      cummulatedList,
    })
  };
  render() {
    const {
      classes,
      list,
      onClose,
    } = this.props;
    return (
      <Dialog
        open
        fullScreen
        onClose={onClose}
        aria-labelledby="ManagingPointTitle"
      >
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton color="inherit" onClick={onClose} aria-label="Close">
              <CloseIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        {
          list ?
            <ETable
              isCummulated={this.state.isCummulated}
              toggleCummulated={() => {
                this.calculateCummulated();
                this.setState({
                  isCummulated: !this.state.isCummulated,
                });
              }}
              list={this.state.isCummulated ? this.state.cummulatedList : list}
            /> : null
        }
      </Dialog>
    );
  }
}
export default withStyles(styles)(Index);
