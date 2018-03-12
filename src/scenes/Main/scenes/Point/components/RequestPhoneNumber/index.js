import React from 'react';
import { Motion, spring, TransitionMotion } from 'react-motion';
import Typohgraphy from 'material-ui/Typography';
import Dial from './components/Dial';
import PhoneInput from './components/PhoneInput';
import Saved from './components/Saved';
import Transitions from '../Transitions';
import FlexCenter from '../FlexCenter';
import './styles.css';

const animationConfig = {
  stiffness: 61,
  damping: 14,
};
class SavingPoint extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '010',
      topViewFullScreen: false,
    };
    this.handlePhoneInputSelect = this.handlePhoneInputSelect.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    const { status } = nextProps;
    if (status && status !== this.props.status) {
      if (['submit', 'success', 'failure'].includes(status)) {
        this.setState({ topViewFullScreen: true });
      } else if (['standby', 'phoneInput'].includes(status)) {
        this.setState({ topViewFullScreen: false, input: '010' });
      }
    }
  }
  handlePhoneInputSelect(v) {
    // 타이머 초기화
    this.props.updateElapsedTime();
    if (v === 'undo') {
      if (this.state.input.length > 0) {
        this.setState({
          input: this.state.input.slice(0, this.state.input.length - 1),
        });
      }
    } else if (v === 'submit') {
      this.props.submit(this.state.input);
    } else if (this.state.input.length < 11) {
      this.setState({
        input: this.state.input.concat(v),
      });
    }
  }
  render() {
    const {
      pointForSave,
      successResult,
      label,
    } = this.props;
    return (
      <div className="savingPoint">
        <Motion
          style={{
            height: spring(this.state.topViewFullScreen ? 1 : 0.4, animationConfig),
          }}
        >
          {
            ({ height }) => (
              <div
                className="savingPointTopView"
                style={{ height: `${height * 100}%` }}
              >
                <Transitions view={this.props.status} >
                  <FlexCenter transitionKey="phoneInput">
                    <PhoneInput
                      pointForSave={pointForSave}
                      input={this.state.input}
                    />
                  </FlexCenter>
                  {
                    label === '적립' ?
                      <FlexCenter transitionKey="success">
                        <Saved
                          customer={successResult.customer}
                          point={successResult.point}
                        />
                      </FlexCenter> : null
                  }
                  <FlexCenter transitionKey="failure">
                    <div>
                      <Typohgraphy
                        style={{
                          color: 'white',
                          fontSize: '6vh',
                          margin: '5vh',
                        }}
                        align="center"
                      >
                        {label} 실패
                      </Typohgraphy>
                      <Typohgraphy
                        style={{
                          color: 'white',
                          fontSize: '4vh',
                        }}
                        align="center"
                      >
                        다시 요청하십시요.
                      </Typohgraphy>
                    </div>
                  </FlexCenter>
                </Transitions>
              </div>
            )
          }
        </Motion>
        <div className="inputPhoneHelper">
          <Typohgraphy
            align="center"
            style={{ fontSize: '5vmin' }}
          >
            전화번호를 입력 해 주십시요.
          </Typohgraphy>
        </div>
        <Dial
          submitLabel={label}
          handleSelect={this.handlePhoneInputSelect}
        />
      </div>
    );
  }
}
export default SavingPoint;
