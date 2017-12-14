import React from 'react';
import io from 'socket.io-client';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as getOrdersActions from './data/getOrders/actions';
import * as deliverActions from './data/deliver/actions';
import * as noticeDialogActions from '../../data/noticeDialog/actions';
import * as logoutActions from '../../data/logout/actions';
import * as authActions from '../../data/auth/actions';
import * as cancelActions from './data/cancel/actions';
import OrderList from './components/OrderList';
import Point from '../../scenes/Point';
import Paper from './components/OrderPaper';

let socket;

class Orders extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showComponent: false,
      showRealTime: true,
      now : new Date(),
    };
    this.toPoint = this.toPoint.bind(this);

    const shopId = this.props.user.shop._id;
    socket = io();
    socket.on('create', obj => {
      this.props.addRequest(obj);
      this.playAudio();
      window.navigator.vibrate([2000, 100, 200]);
    });
    socket.on('canceled', () => this.props.getOrdersRequest(shopId));
    socket.on('deliverComplete', () => this.props.getOrdersRequest(shopId));
    socket.on('confirmDelivered', (_id) => {
      console.log('push 확인 들어옴 order : ' + _id);
    });

    this.logoutHandler = this.logoutHandler.bind(this);
    this.deliver = this.deliver.bind(this);
    this.playAudio = this.playAudio.bind(this);
    this.cancel = this.cancel.bind(this);
    this.realtimeCheckHandler = this.realtimeCheckHandler.bind(this);
    this.setTimeNow = this.setTimeNow.bind(this);

    setInterval(this.setTimeNow, 1000);
  }
  componentDidMount() {
    const shopId = this.props.user.shop._id;
    this.props.getOrdersRequest(shopId)
      .then((data) => {
        if (this.props.getOrders.status === 'SUCCESS') {
        } else {
          throw data;
        }
      })
      .catch((data) => {
        console.error(data);
      });
  }
  setTimeNow() {
    //console.log(this.state.now.toLocaleString());
    this.setState({
      now: new Date(),
    })
  }
  playAudio() {
    let audio = document.querySelector("audio");
    audio.play();
  }
  toPoint(){
    if (this.state.showComponent === false) {
      this.setState({
        showComponent: true,
      });
    } else{
      this.setState({
        showComponent: false,
      })
    }
  }
  realtimeCheckHandler(){
    if (this.state.showRealTime === false) {
      this.setState({
        showRealTime: true,
      });
    } else{
      this.setState({
        showRealTime: false,
      })
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
        <button onClick={this.toPoint}>포인트적립</button>
        <button onClick={this.realtimeCheckHandler}>{(this.state.showRealTime===true)?'과거주문내역':'실시간주문내역'}</button>
        {this.state.showComponent ?
          <Point /> :
          null
        }
        <h1>{this.props.getOrders.orders.filter(o => !o.status).length}개 주문 대기</h1>
        {
          (this.state.showRealTime === true) ?
            <div>
              <OrderList
                orders={this.props.getOrders.orders.filter(o=> !o.status).sort((a, b) => (
                  new Date(b.datetime).getTime() - new Date(a.datetime).getTime()
                ))}
                deliver={this.deliver}
                cancel={this.cancel}
                now={this.state.now}
              />
            </div> :
            <div>
              <OrderList
                orders={this.props.getOrders.orders.filter(o=> o.status).sort((a, b) => (
                  new Date(b.datetime).getTime() - new Date(a.datetime).getTime()
                ))}
                deliver={this.deliver}
                cancel={this.cancel}
              />
            </div>
        }
      </div>
    );
  }
}
const mapStateToProps = state => ({
  getOrders: state.orders.data.getOrders,
  deliver: state.orders.data.deliver,
  cancel: state.orders.data.cancel,
  logout: state.data.logout,
  state
});
const mapDispatchToProps = dispatch => bindActionCreators({
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
}, dispatch);
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Orders);

  const tests = [{
  }];

function abbrevation(products){
};

abbrevation(tests);