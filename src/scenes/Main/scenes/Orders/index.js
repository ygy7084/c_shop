/* global window, document */
import React from 'react';
import io from 'socket.io-client';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { push } from 'react-router-redux';
import * as getOrdersActions from './data/getOrders/actions';
import * as deliverActions from './data/deliver/actions';
import * as noticeDialogActions from '../../../../data/noticeDialog/actions';
import * as logoutActions from '../../../../data/logout/actions';
import * as authActions from '../../../../data/auth/actions';
import * as cancelActions from './data/cancel/actions';
import * as pointActions from './data/point/actions';
import * as snackBarActions from '../../../../data/snackBar/actions';
import OrderList from './components/OrderList';
import SavingPoint from './components/SavingPoint';

let socket;
class Orders extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showRealTime: true,
      now : new Date(),
      SavingPointShow: false,
    };

    const shopId = this.props.auth.user.shop._id;
    socket = io();
    socket.on('create', (obj) => {
      this.props.addRequest(obj);
      this.playAudio();
      window.navigator.vibrate([2000, 100, 200]);
    });
    socket.on('canceled', () => this.props.getOrdersRequest(shopId));
    socket.on('deliverComplete', () => this.props.getOrdersRequest(shopId));
    socket.on('confirmDelivered', (_id) => {
      console.log('push 확인 들어옴 order : ' + _id);
    });
    socket.on('pointSaved', (data) => {
      if (data) {
        if (data.status === 'success') {
          this.props.showSnackBar(
            'SavingPointSuccess',
            `포인트 적립: ${data.customer.phone}님, ${data.point}점`
          );
        } else if (data.status === 'failure') {
          this.props.showSnackBar('SavingPointFailure', '포인트 적립 실패');
        }
      }
    });
    this.logoutHandler = this.logoutHandler.bind(this);
    this.deliver = this.deliver.bind(this);
    this.playAudio = this.playAudio.bind(this);
    this.cancel = this.cancel.bind(this);
    this.realtimeCheckHandler = this.realtimeCheckHandler.bind(this);
    this.setTimeNow = this.setTimeNow.bind(this);
    this.handleSavingPoint = this.handleSavingPoint.bind(this);

    setInterval(this.setTimeNow, 1000);
  }
  componentDidMount() {
    const shopId = this.props.auth.user.shop._id;
    this.props.getOrdersRequest(shopId)
      .then((data) => {
        if (this.props.getOrders.status !== 'SUCCESS') {
          throw data;
        }
      })
      .catch((data) => {
        console.error(data);
      });
  }
  setTimeNow() {
    this.setState({
      now: new Date(),
    });
  }
  playAudio() {
    const audio = document.querySelector('audio');
    audio.play();
  }
  realtimeCheckHandler() {
    if (this.state.showRealTime === false) {
      this.setState({
        showRealTime: true,
      });
    } else {
      this.setState({
        showRealTime: false,
      });
    }
  }
  logoutHandler() {
    this.props.logoutRequest()
      .then((data) => {
        if (this.props.logout.status === 'SUCCESS') {
          this.props.authRequest();
        } else {
          throw data;
        }
      });
  }
  deliver(_id) {
    this.props.deliverRequest(_id)
      .then((data) => {
        if (this.props.deliver.status === 'SUCCESS') {
          socket.emit('deliver', _id);
          this.props.removeRequest(_id);
        } else {
          throw data;
        }
      })
      .catch((data) => {
        console.error(data);
      });
  }
  cancel(_id) {
    this.props.cancelRequest(_id)
      .then((data) => {
        if (this.props.cancel.status === 'SUCCESS') {
          socket.emit('cancel', _id);
          this.props.removeRequest(_id);
        } else {
          throw data;
        }
      })
      .catch((data) => {
        console.error(data);
      });
  }
  handleSavingPoint(point) {
    this.props.pointRequest(point)
      .then((data) => {
        if (this.props.point.status === 'SUCCESS') {
          this.props.showSnackBar('SavingPointRequested', '포인트 적립을 시작합니다.');
          this.setState({ SavingPointShow: false });
        } else {
          throw data;
        }
      })
      .catch((data) => {
        console.error(data);
      });
  }
  render() {
    return (
      <div>
        <audio src="alarm_sound.mp3" >
          HTML5 Audio를 지원하지 않는 브라우저입니다
        </audio>
        <button onClick={this.logoutHandler}>
          로그아웃
        </button>
        <button onClick={this.playAudio}>
          소리재생
        </button>
        <button onClick={() => this.setState({ SavingPointShow: !this.state.SavingPointShow })}>
          포인트 적립
        </button>
        <button onClick={() => this.props.changePage('/point')}>포인트적립</button>
        <button onClick={this.realtimeCheckHandler}>{(this.state.showRealTime === true) ? '과거주문내역' : '실시간주문내역'}</button>
        <h1>{this.props.getOrders.orders.filter(o => !o.status).length}개 주문 대기</h1>
        {
          (this.state.showRealTime === true) ?
            <div>
              <OrderList
                orders={this.props.getOrders.orders.filter(o => !o.status).sort((a, b) => (
                  new Date(b.datetime).getTime() - new Date(a.datetime).getTime()
                ))}
                deliver={this.deliver}
                cancel={this.cancel}
                now={this.state.now}
              />
            </div> :
            <div>
              <OrderList
                orders={this.props.getOrders.orders.filter(o => o.status).sort((a, b) => (
                  new Date(b.datetime).getTime() - new Date(a.datetime).getTime()
                ))}
                deliver={this.deliver}
                cancel={this.cancel}
              />
            </div>
        }
        {
          this.state.SavingPointShow ?
            <SavingPoint
              submit={point => this.handleSavingPoint(point)}
              cancel={() => this.setState({ SavingPointShow: false })}
            /> : null
        }
      </div>
    );
  }
}
const mapStateToProps = state => ({
  auth: state.data.auth,
  getOrders: state.main.orders.data.getOrders,
  deliver: state.main.orders.data.deliver,
  cancel: state.main.orders.data.cancel,
  logout: state.data.logout,
  point: state.main.orders.data.point,
});
const mapDispatchToProps = dispatch => bindActionCreators({
  changePage: path => push(path),
  noticeDialogOn: noticeDialogActions.on,
  noticeDialogOff: noticeDialogActions.off,
  showError: noticeDialogActions.error,
  getOrdersRequest: getOrdersActions.request,
  cancelRequest: cancelActions.request,
  addRequest: getOrdersActions.add,
  removeRequest: getOrdersActions.remove,
  deliverRequest: deliverActions.request,
  logoutRequest: logoutActions.request,
  authRequest: authActions.request,
  pointRequest: pointActions.request,
  showSnackBar: snackBarActions.show,
  dismissSnackBar: snackBarActions.dismiss,
}, dispatch);
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Orders);
