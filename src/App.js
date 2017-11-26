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
import { SimpleMessage } from './components/SimpleMessage';
import NoticeDialog from './components/NoticeDialog';
import Loader from './components/Loader';
import Orders from './scenes/Orders';
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
  componentWillMount(){
    this.props.authRequest();
  }
  constructor(props) {
    super(props);
  }
  render() {
    const { noticeDialog } = this.props;
    return (
      <MuiThemeProvider theme={theme}>
        <div style={{ height: '100%' }}>
          {
            this.props.auth.user && this.props.auth.user.kind === 'account' ?
              <Route
                path="/"
                render={
                  props => <Orders user={this.props.auth.user} {...props} />}
                 />
               : this.props.auth.status === 'INIT' || this.props.auth.status === 'WAITING' ?
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
        </div>
      </MuiThemeProvider>
    );
  }
}
const mapStateToProps = state => ({
  noticeDialog: state.data.noticeDialog,
  auth : state.data.auth,
  loading: state.data.loader,
});
const mapDispatchToProps = dispatch => bindActionCreators({
  authRequest: authActions.request,
  noticeDialogOn: noticeDialogActions.on,
  noticeDialogOff: noticeDialogActions.off,
}, dispatch);
export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(App));
