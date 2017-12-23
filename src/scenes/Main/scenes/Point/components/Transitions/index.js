import React from 'react';
import { spring, TransitionMotion } from 'react-motion';
import './styles.css';

const animationConfig = {
  stiffness: 61,
  damping: 14,
};
class Transition extends React.Component {
  // 동일한 애니매이션이므로 스태틱 설정
  // 0.01로 감소 (Leave 전에 0.01로 감소)
  static willLeave() {
    return {
      opacity: spring(0.01, animationConfig),
      scale: spring(0, animationConfig),
    };
  }
  // 0.01에서 시작 (Enter 전에 0.01로 초기화)
  static willEnter() {
    return {
      opacity: 0.01,
      scale: 0,
    };
  }
  constructor(props) {
    super(props);
    // children으로 사용 가능 Component를 여러개 보내지만
    // 보여주는 건 state로 관리하는 component 한 개
    this.state = {
      component: undefined,
    };
    this.getDefaultStyles = this.getDefaultStyles.bind(this);
    this.getStyles = this.getStyles.bind(this);
    this.findComponent = this.findComponent.bind(this);
  }
  componentDidMount() {
    // mounted 후 보여줄 component 찾기
    this.findComponent(this.props);
  }
  componentWillReceiveProps(nextProps) {
    // state가 props에 의존하고 있으므로 본 함수 샤용
    // view 가 변할 시 state로 변화 시켜 주어야 한다.
    if (!this.state.component || this.state.component.props.transitionKey !== nextProps.view) {
      this.findComponent(nextProps);
    }
  }
  getDefaultStyles() {
    // 기본 스타일은 투명도 없음
    if (this.state.component) {
      return [{
        key: this.state.component.props.transitionKey,
        style: {
          opacity: 1,
          scale: 1,
        },
      }];
    }
    return [];
  }
  getStyles() {
    // 보여줄 component는 1로 투명도 향상
    if (this.state.component) {
      return [{
        key: this.state.component.props.transitionKey,
        style: {
          opacity: spring(1, animationConfig),
          scale: spring(1, animationConfig),
        },
      }];
    }
    return [];
  }
  findComponent(props) {
    // children으로 들어온 component 여러개 중 보여줄 component를 찾음
    if (
      props.children &&
      props.children.length &&
      props.view
    ) {
      const found = props.children.find(o =>
        o.props.transitionKey === props.view
      );
      if (found) {
        this.setState({
          component: found,
        });
      } else {
        this.setState({
          component: null,
        });
      }
    }
  }
  render() {
    const { children } = this.props;
    return (
      // 애니매이션 관리자
      <TransitionMotion
        willLeave={Transition.willLeave}
        willEnter={Transition.willEnter}
        defaultStyles={this.getDefaultStyles()}
        styles={this.getStyles()}
      >
        {
          styles => (
            // 겹치기 전에 background 에 맞춰줄 레이아웃
            <div className="transitionsLayout">
              {
                styles.map((motion) => {
                  const { scale, ...others } = motion.style;
                  return (
                    <div
                      key={motion.key}
                      style={{
                        transform: `scale(${scale},${scale})`,
                        ...others,
                      }}
                      className="transitions"
                    >
                      {
                        children.find(o => o.props.transitionKey === motion.key)
                      }
                    </div>
                  );
                })
              }
            </div>
          )
        }
      </TransitionMotion>
    );
  }
}
export default Transition;
