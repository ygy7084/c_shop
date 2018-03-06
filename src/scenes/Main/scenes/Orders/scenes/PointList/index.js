import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { push } from 'react-router-redux';
import {
  Route,
  Redirect,
} from 'react-router-dom';
import * as snackBarActions from '../../../../../../data/snackBar/actions';
import * as noticeDialogActions from '../../../../../../data/noticeDialog/actions';
import * as getPointListActions from './data/getPointList/actions';
import * as getCustomerDetailActions from './data/getCustomerDetail/actions';
import * as saveCustomerDetailActions from './data/saveCustomerDetail/actions';
import View from './components/View';
import CustomerDetail from './components/CustomerDetail';

class Index extends React.Component {
  componentDidMount() {
    this.props.getPointListRequest();
  }
  openCustomerDetail = (customer) => {
    this.props.getCustomerDetailRequest(customer._id)
      .then(() => {
        if (this.props.getCustomerDetail.status === 'SUCCESS') {
          this.props.push(`${this.props.match.url}/customerDetail`);
        }
      })
      .catch(console.error);
  };
  handleSave = ({ id, memo }) => {
    this.props.saveCustomerDetailRequest({ id, memo })
      .then(() => {
        this.props.getPointListRequest();
        this.props.history.goBack();
      });
  };
  render() {
    const {
      getPointList,
      history,
      match,
      getCustomerDetail,
    } = this.props;
    return (
      <Fragment>
        <View
          list={getPointList.data}
          onRowClick={this.openCustomerDetail}
          onClose={() => history.goBack()}
        />
        <Route
          path={`${match.url}/customerDetail`}
          render={() => (
            getCustomerDetail.data ?
              <CustomerDetail
                customer={getCustomerDetail.data}
                submit={this.handleSave}
                cancel={history.goBack}
              /> :
              <Redirect to={match.url}/>
          )}
        />
      </Fragment>
    );
  }
}
const mapStateToProps = state => ({
  getPointList: state.main.orders.pointList.data.getPointList,
  getCustomerDetail: state.main.orders.pointList.data.getCustomerDetail,
  saveCustomerDetail: state.main.orders.pointList.data.saveCustomerDetail,
});
const mapDispatchToProps = dispatch => bindActionCreators({
  push,
  noticeDialogOn: noticeDialogActions.on,
  noticeDialogOff: noticeDialogActions.off,
  showError: noticeDialogActions.error,
  getPointListRequest: getPointListActions.request,
  getCustomerDetailRequest: getCustomerDetailActions.request,
  saveCustomerDetailRequest: saveCustomerDetailActions.request,
  showSnackBar: snackBarActions.show,
}, dispatch);
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Index);
