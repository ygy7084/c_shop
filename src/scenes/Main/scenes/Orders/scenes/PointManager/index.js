import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { push } from 'react-router-redux';
import * as noticeDialogActions from '../../../../../../data/noticeDialog/actions';
import * as getCustomerPointActions from './data/getCustomerPoint/actions';
import * as useCustomerPointActions from './data/useCustomerPoint/actions';
import * as requestPhoneNumberActions from './data/requestPhoneNumber/actions';
import * as snackBarActions from '../../../../../../data/snackBar/actions';
import ManagingPoint from './components/ManagingPoint';

class PointManager extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'INIT',
      phoneInput: '',
      pointInput: '',
      phoneInputFocused: false,
      didRequestPhoneNumber: false,
    };
    this.handlePointInput = this.handlePointInput.bind(this);
    this.handlePhoneInput = this.handlePhoneInput.bind(this);
    this.getCustomerPoint = this.getCustomerPoint.bind(this);
    this.useCustomerPoint = this.useCustomerPoint.bind(this);
  }
  componentDidUpdate() {
    const input = document.getElementById('ManagingPhoneInput');
    if (input) input.focus();
    if (input && !this.state.inputFocused) {
      this.setState({
        phoneInput: '010',
        inputFocused: true,
      });
    }
  }
  handlePointInput(e) {
    const point = e.target.value.replace(/\D/g, '');
    if (point === '') {
      this.setState({ pointInput: '' });
    } else if (Number(point) <= this.props.getCustomerPoint.data.point) {
      this.setState({ pointInput: Number(point) });
    }
  }
  handlePhoneInput(e) {
    this.setState({ phoneInput: e.target.value.replace(/\D/g, '') });
  }
  componentWillUnmount() {
    this.props.socket.removeListener('phone', this.handleSubmittedPhoneInput);
  }
  handleSubmittedPhoneInput = (phone) => {
    this.setState({
      phoneInput: phone,
      didRequestPhoneNumber: false,
    });
    this.getCustomerPoint(phone);
  };
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
        });
    }
  }
  requestPhoneNumber = () => {
    this.props.requestPhoneNumber()
      .then(() => {
        this.props.socket.on('phone', this.handleSubmittedPhoneInput);
        this.setState({ didRequestPhoneNumber: true });
      })
      .catch(() => {
        this.props.showError(data);
      });
  };
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
        requestPhoneNumber={this.requestPhoneNumber}
        didRequestPhoneNumber={this.state.didRequestPhoneNumber}
        phoneInput={this.state.phoneInput}
        pointInput={this.state.pointInput}
        handlePhoneInput={this.handlePhoneInput}
        handlePointInput={this.handlePointInput}
      />
    );
  }
}
const mapStateToProps = state => ({
  auth: state.data.auth,
  getCustomerPoint: state.main.orders.pointManager.data.getCustomerPoint,
  useCustomerPoint: state.main.orders.pointManager.data.useCustomerPoint,
  requestPhoneNumber: state.main.orders.pointManager.data.requestPhoneNumber,
});
const mapDispatchToProps = dispatch => bindActionCreators({
  changePage: path => push(path),
  noticeDialogOn: noticeDialogActions.on,
  noticeDialogOff: noticeDialogActions.off,
  showError: noticeDialogActions.error,
  getCustomerPointRequest: getCustomerPointActions.request,
  useCustomerPointRequest: useCustomerPointActions.request,
  requestPhoneNumber: requestPhoneNumberActions.request,
  showSnackBar: snackBarActions.show,
}, dispatch);
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PointManager);
