import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { push } from 'react-router-redux';
import io from 'socket.io-client';
import Background from './components/Background';
import Transitions from './components/Transitions';
import BasicPages from './components/BasicPages';
import SavingPoint from './components/SavingPoint';
import * as savePointActions from './data/savePoint/actions';
import { turnOnSimpleMessage } from '../../../../components/SimpleMessage/index';
import * as ballLoaderActions from '../../../../data/ballLoader/actions';

let socket;
class Point extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'BasicPages',
      pointForSave: 0,
      SavingPointStatus: 'standby',
      /*
        standby: 대기
        phoneInput: 핸드폰 번호 입력
        submit: 적립 요청
        success: 적립 성공
        failure: 적립 실패
       */
    };
    this.handleSavingPoint = this.handleSavingPoint.bind(this);
    socket = io();
    socket.on('point', (data) => {
      const { view, pointForSave } = data;
      if (view === 'BasicPages') {
        this.setState({
          view,
          SavingPointStatus: 'standby',
        });
      } else if (view === 'SavingPoint') {
        this.setState({
          view,
          pointForSave,
          SavingPointStatus: 'phoneInput',
        });
      }
    });
  }
  componentWillUnmount() {
    if (socket) {
      socket.close();
      socket = undefined;
    }
  }
  handleSavingPoint(phone) {
    this.setState({ SavingPointStatus: 'submit' });
    //
    this.props.loader(true);
    this.props.savePointRequest({
      shopId: this.props.user.shop._id,
      phone,
      point: this.state.pointForSave,
    })
      .then((data) => {
        this.props.loader(false);
        if (this.props.savePoint.status === 'SUCCESS') {
          this.setState({ SavingPointStatus: 'success' });
          setTimeout(() => {
            this.setState({ view: 'BasicPages', SavingPointStatus: 'standby' });
          }, 3000);
        } else {
          throw data;
        }
      })
      .catch((error) => {
        console.error(error);
        this.setState({ SavingPointStatus: 'failure' });
        setTimeout(() => {
          this.setState({ view: 'BasicPages', SavingPointStatus: 'standby' });
        }, 3000);
      });
  }
  render() {
    return (
      <Background toggle={this.state.view === 'SavingPoint'}>
        <Transitions view={this.state.view}>
          <BasicPages transitionKey="BasicPages" />
          <SavingPoint
            transitionKey="SavingPoint"
            status={this.state.SavingPointStatus}
            pointForSave={this.state.pointForSave}
            loader={this.props.loader}
            submit={this.handleSavingPoint}
            successResult={{
              customer: this.props.savePoint.customer,
              point: this.props.savePoint.point,
            }}
          />
        </Transitions>
      </Background>
    );
  }
}
const mapStateToProps = state => ({
  savePoint: state.main.point.data.savePoint,
  user: state.data.auth.user,
});
const mapDispatchToProps = dispatch => bindActionCreators({
  changePage: path => push(path),
  savePointRequest: savePointActions.request,
  loader: ballLoaderActions.manager,
}, dispatch);
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Point);
