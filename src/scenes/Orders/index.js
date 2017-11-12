import React from 'react';
import io from 'socket.io-client';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as getOrdersActions from './data/getOrders/actions';
import * as deliverActions from './data/deliver/actions';
import * as noticeDialogActions from '../../data/noticeDialog/actions';
import OrderList from './components/OrderList';

let socket;
class Orders extends React.Component {
  constructor(props) {
    super(props);
    socket = io();
    socket.on('create', obj => this.props.addRequest(obj));
    this.deliver = this.deliver.bind(this);
  }
  componentDidMount() {
    this.props.getOrdersRequest()
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
        <h1>{this.props.getOrders.orders.filter(o => !o.delivered).length}개 주문 대기</h1>
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
});
const mapDispatchToProps = dispatch => bindActionCreators({
  noticeDialogOn: noticeDialogActions.on,
  noticeDialogOff: noticeDialogActions.off,
  showError: noticeDialogActions.error,
  getOrdersRequest: getOrdersActions.request,
  addRequest: getOrdersActions.add,
  removeRequest: getOrdersActions.remove,
  deliverRequest: deliverActions.request,
}, dispatch);
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Orders);
