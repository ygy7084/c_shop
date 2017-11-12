import React from 'react';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import blue from 'material-ui/colors/blue';
import red from 'material-ui/colors/red';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  Route,
  withRouter,
} from 'react-router-dom';
import * as noticeDialogActions from './data/noticeDialog/actions';
import { SimpleMessage } from './components/SimpleMessage';
import NoticeDialog from './components/NoticeDialog';
import Loader from './components/Loader';
import Orders from './scenes/Orders';

const theme = createMuiTheme({
  palette: {
    primary: {
      ...blue,
    },
    error: red,
  },
});

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { noticeDialog } = this.props;
    return (
      <MuiThemeProvider theme={theme}>
        <div style={{ height: '100%' }}>
          <Orders />
          <SimpleMessage />
          <NoticeDialog
            open={noticeDialog.open}
            onClose={this.props.noticeDialogOff}
            title={noticeDialog.title}
            text={noticeDialog.text}
            onConfirm={noticeDialog.onConfirm}
          />
          {
            this.props.loading ?
              <Loader /> : null
          }
        </div>
      </MuiThemeProvider>
    );
  }
}
const mapStateToProps = state => ({
  noticeDialog: state.data.noticeDialog,
});
const mapDispatchToProps = dispatch => bindActionCreators({
  noticeDialogOn: noticeDialogActions.on,
  noticeDialogOff: noticeDialogActions.off,
}, dispatch);
export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(App));
