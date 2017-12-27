/* global document */

import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { push } from 'react-router-redux';
import io from 'socket.io-client';
import Background from './components/Background';
import Transitions from './components/Transitions';
import BasicPages from './components/BasicPages';
import SavingPoint from './components/SavingPoint';
import SimpleDialog from '../../components/SimpleDialog';
import * as savePointActions from './data/savePoint/actions';
import * as ballLoaderActions from '../../../../data/ballLoader/actions';

let socket;
let timer;
class Point extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dialogForSound: true,
      view: 'BasicPages',
      pointForSave: 0,
      SavingPointStatus: 'standby',
      elapsedTime: null,
      /*
        standby: 대기
        phoneInput: 핸드폰 번호 입력
        submit: 적립 요청
        success: 적립 성공
        failure: 적립 실패
       */
    };
    this.handleSavingPoint = this.handleSavingPoint.bind(this);
    this.playAudio = this.playAudio.bind(this);
    socket = io();
    socket.on('point', (data) => {
      const { view, pointForSave } = data;
      if (view === 'SavingPoint') {
        // 타이머 초기화
        this.playAudio();
        if (!timer) {
          timer = setInterval(() => {
            if (new Date().getTime() - this.state.elapsedTime > 10000) {
              clearInterval(timer);
              timer = null;
              this.setState({ view: 'BasicPages', SavingPointStatus: 'standby' });
            }
          }, 1000);
        }
        this.setState({
          view,
          pointForSave,
          SavingPointStatus: 'phoneInput',
          elapsedTime: new Date().getTime(),
        });
      }
    });
  }
  componentWillUnmount() {
    if (socket) {
      socket.close();
      socket = undefined;
    }
    if (timer) {
      clearInterval(timer);
      timer = null;
    }
  }
  playAudio() {
    const audio = document.querySelector('#pointAudio');
    audio.play();
  }
  handleSavingPoint(phone) {
    // 타이머 초기화
    if (timer) {
      clearInterval(timer);
      timer = null;
    }
    this.setState({ SavingPointStatus: 'submit' });
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
        <SimpleDialog
          isOpen={this.state.dialogForSound}
          onConfirm={() => {
            this.playAudio();
            this.setState({ dialogForSound: false });
          }}
        />
        <audio id="pointAudio" src="alarm_sound.mp3" >
          HTML5 Audio를 지원하지 않는 브라우저입니다
        </audio>
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
            updateElapsedTime={() => this.setState({
              elapsedTime: new Date().getTime(),
            })}
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
