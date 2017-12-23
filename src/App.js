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
import * as authActions from './data/auth/actions';
import * as noticeDialogActions from './data/noticeDialog/actions';
import * as snackBarActions from './data/snackBar/actions';
import { SimpleMessage } from './components/SimpleMessage';
import NoticeDialog from './components/NoticeDialog';
import Loader from './components/Loader';
import BallLoader from './components/BallLoader';
import SnackBar from './components/SnackBar';
import Main from './scenes/Main';
import Entry from './scenes/Entry';

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
    this.props.authRequest();
  }
  render() {
    const { noticeDialog } = this.props;
    return (
      <MuiThemeProvider theme={theme}>
        <div style={{ height: '100%' }}>
          {
            this.props.auth.user ?
              <Route
                path="/"
                render={
                  props => <Main {...props} />
                }
              /> : this.props.auth.status === 'INIT' || this.props.auth.status === 'WAITING' ?
                null :
                <Route
                  path="/"
                  render={
                    props => <Entry {...props} />}
                />
          }
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
          {
            this.props.ballLoading ?
              <BallLoader /> : null
          }
          <SnackBar
            open={this.props.snackBar.status === 'SHOW'}
            id={this.props.snackBar.id}
            content={this.props.snackBar.content}
            handleClose={this.props.dismissSnackBar}
          />
        </div>
      </MuiThemeProvider>
    );
  }
}
const mapStateToProps = state => ({
  noticeDialog: state.data.noticeDialog,
  auth: state.data.auth,
  loading: state.data.loader,
  ballLoading: state.data.ballLoader,
  snackBar: state.data.snackBar,
});
const mapDispatchToProps = dispatch => bindActionCreators({
  authRequest: authActions.request,
  noticeDialogOn: noticeDialogActions.on,
  noticeDialogOff: noticeDialogActions.off,
  showSnackBar: snackBarActions.show,
  dismissSnackBar: snackBarActions.dismiss,
}, dispatch);
export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(App));
