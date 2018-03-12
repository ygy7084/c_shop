/* global document */

import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { push } from 'react-router-redux';
import io from 'socket.io-client';
import Background from './components/Background';
import Transitions from './components/Transitions';
import BasicPages from './components/BasicPages';
import RequestPhoneNumber from './components/RequestPhoneNumber';
import SimpleDialog from '../../components/SimpleDialog';
import * as savePointActions from './data/savePoint/actions';
import * as submitPhoneNumberActions from './data/submitPhoneNumber/actions';
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
      requestPhoneInputStatus: 'standby',
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
      if (view === 'SavingPoint' || view === 'UsingPoint') {
        // 타이머 초기화
        this.playAudio();
        if (!timer) {
          timer = setInterval(() => {
            if (new Date().getTime() - this.state.elapsedTime > 10000) {
              clearInterval(timer);
              timer = null;
              this.setState({ view: 'BasicPages', requestPhoneInputStatus: 'standby' });
            }
          }, 1000);
        }
        this.setState({
          view,
          pointForSave,
          requestPhoneInputStatus: 'phoneInput',
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
    this.setState({ requestPhoneInputStatus: 'submit' });
    this.props.loader(true);
    this.props.savePointRequest({
      shopId: this.props.user.shop._id,
      phone,
      point: this.state.pointForSave,
    })
      .then((data) => {
        this.props.loader(false);
        if (this.props.savePoint.status === 'SUCCESS') {
          this.setState({ requestPhoneInputStatus: 'success' });
          setTimeout(() => {
            this.setState({ view: 'BasicPages', requestPhoneInputStatus: 'standby' });
          }, 3000);
        } else {
          throw data;
        }
      })
      .catch((error) => {
        console.error(error);
        this.setState({ requestPhoneInputStatus: 'failure' });
        setTimeout(() => {
          this.setState({ view: 'BasicPages', requestPhoneInputStatus: 'standby' });
        }, 3000);
      });
  }
  submitPhoneNumber = (phone) => {
    clearInterval(timer);
    timer = null;
    this.props.submitPhoneNumberRequest(phone)
      .then(() => {
        if (this.props.submitPhoneNumber.status === 'SUCCESS') {
          this.setState({ view: 'BasicPages', requestPhoneInputStatus: 'standby' });
        } else {
          throw data;
        }
      })
      .catch((error) => {
        console.error(error);
        this.setState({ requestPhoneInputStatus: 'failure' });
        setTimeout(() => {
          this.setState({ view: 'BasicPages', requestPhoneInputStatus: 'standby' });
        }, 3000);
      });
  };
  render() {
    const toggle = ['SavingPoint', 'UsingPoint'].includes(this.state.view);
    return (
      <Background toggle={toggle}>
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
          <RequestPhoneNumber
            transitionKey="SavingPoint"
            status={this.state.requestPhoneInputStatus}
            pointForSave={this.state.pointForSave}
            submit={this.handleSavingPoint}
            successResult={{
              customer: this.props.savePoint.customer,
              point: this.props.savePoint.point,
            }}
            updateElapsedTime={() => this.setState({
              elapsedTime: new Date().getTime(),
            })}
            label="적립"
          />
          <RequestPhoneNumber
            transitionKey="UsingPoint"
            status="phoneInput"
            submit={this.submitPhoneNumber}
            updateElapsedTime={() => this.setState({
              elapsedTime: new Date().getTime(),
            })}
            label="사용"
          />
        </Transitions>
      </Background>
    );
  }
}
const mapStateToProps = state => ({
  savePoint: state.main.point.data.savePoint,
  submitPhoneNumber: state.main.point.data.submitPhoneNumber,
  user: state.data.auth.user,
});
const mapDispatchToProps = dispatch => bindActionCreators({
  changePage: path => push(path),
  savePointRequest: savePointActions.request,
  submitPhoneNumberRequest: submitPhoneNumberActions.request,
  loader: ballLoaderActions.manager,
}, dispatch);
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Point);
