import React from 'react';
import io from 'socket.io-client';
import { connect } from 'react-redux';
import Sound from 'react-sound';
import { bindActionCreators } from 'redux';
import * as getOrdersActions from './data/getOrders/actions';
import * as deliverActions from './data/deliver/actions';
import * as noticeDialogActions from '../../data/noticeDialog/actions';
import * as logoutActions from '../../data/logout/actions';
import * as authActions from '../../data/auth/actions';
import OrderList from './components/OrderList';

let socket;
class Orders extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      playStatus: Sound.status.STOPPED
    };

    //console.log(this.status);
    socket = io();
    socket.on('create', obj => {
      this.setState({ playStatus: Sound.status.PLAYING});
      console.log(this.state);
      this.props.addRequest(obj);
    });
    socket.on('canceled', () => this.props.getOrdersRequest());

    this.logoutHandler = this.logoutHandler.bind(this);
    this.deliver = this.deliver.bind(this);
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
  render() {
    return (
      <div>
        <Sound
          url="alarm_sound.mp3"
          playStatus={this.state.playStatus}
          />
        <button onClick={this.logoutHandler}>
          로그아웃
        </button>
        <button>
          실시간 주문내역
        </button>
        <button>
          과거 주문내역
        </button>

        <h1>{this.props.getOrders.orders.filter(o => !o.status).length}개 주문 대기</h1>
        <OrderList
          orders={this.props.getOrders.orders.sort((a, b) => (
            new Date(b.datetime).getTime() - new Date(a.datetime).getTime()
          ))}
          deliver={this.deliver}
        />
      </div>
    );
  }
}
const mapStateToProps = state => ({
  getOrders: state.orders.data.getOrders,
  deliver: state.orders.data.deliver,
  logout: state.data.logout,
  state
});
const mapDispatchToProps = dispatch => bindActionCreators({
  noticeDialogOn: noticeDialogActions.on,
  noticeDialogOff: noticeDialogActions.off,
  showError: noticeDialogActions.error,
  getOrdersRequest: getOrdersActions.request,
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