import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { push } from 'react-router-redux';
import * as noticeDialogActions from '../../../../../../data/noticeDialog/actions';
import * as getCustomerPointActions from './data/getCustomerPoint/actions';
import * as useCustomerPointActions from './data/useCustomerPoint/actions';
import * as snackBarActions from '../../../../../../data/snackBar/actions';
import ManagingPoint from './components/ManagingPoint';

class PointManager extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'INIT',
    };
    this.getCustomerPoint = this.getCustomerPoint.bind(this);
    this.useCustomerPoint = this.useCustomerPoint.bind(this);
  }
  getCustomerPoint(phone) {
    this.props.getCustomerPointRequest(phone)
      .then((data) => {
        if (this.props.getCustomerPoint.status !== 'SUCCESS') {
          throw data;
        }
        this.setState({
          status: 'GOT_CUSTOMER_POINT',
        });
      })
      .catch((data) => {
        this.setState({
          status: 'GOT_CUSTOMER_POINT_ERROR',
        });
        this.props.showError(data);
      });
  }
  useCustomerPoint(point) {
    if (point &&
      this.props.auth.user &&
      this.props.auth.user.shop &&
      this.props.getCustomerPoint.data
    ) {
      const { customerId } = this.props.getCustomerPoint.data;
      this.props.useCustomerPointRequest({
        customerId,
        shopId: this.props.auth.user.shop._id,
        point,
      })
        .then((data) => {
          if (this.props.useCustomerPoint.status !== 'SUCCESS') {
            throw data;
          }
          const { customerPhone, point } = this.props.useCustomerPoint.data;
          this.props.showSnackBar('UsingPointSuccess', `포인트 사용 성공 : ${customerPhone}님, 잔여 : ${point}`);
          this.props.onClose();
        })
        .catch((data) => {
          this.props.showSnackBar('UsingPointFailure', '포인트 사용 실패');
          this.props.onClose();
          this.props.showError(data);
        });
    }
  }
  render() {
    const {
      onClose, getCustomerPoint,
    } = this.props;
    return (
      <ManagingPoint
        status={this.state.status}
        getCustomerPoint={this.getCustomerPoint}
        customerPoint={getCustomerPoint.data}
        useCustomerPoint={this.useCustomerPoint}
        onClose={onClose}
      />
    );
  }
}
const mapStateToProps = state => ({
  auth: state.data.auth,
  getCustomerPoint: state.main.orders.pointManager.data.getCustomerPoint,
  useCustomerPoint: state.main.orders.pointManager.data.useCustomerPoint,
});
const mapDispatchToProps = dispatch => bindActionCreators({
  changePage: path => push(path),
  noticeDialogOn: noticeDialogActions.on,
  noticeDialogOff: noticeDialogActions.off,
  showError: noticeDialogActions.error,
  getCustomerPointRequest: getCustomerPointActions.request,
  useCustomerPointRequest: useCustomerPointActions.request,
  showSnackBar: snackBarActions.show,
}, dispatch);
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PointManager);
