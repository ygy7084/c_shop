import React from 'react';
import { Motion, spring } from 'react-motion';
import './styles.css';

const animationConfig = {
  stiffness: 61,
  damping: 14,
};
class Background extends React.Component {
  render() {
    const { toggle, children } = this.props;
    return (
      <Motion
        style={{
          borderRadius: spring(toggle ? 0 : 250, animationConfig),
          width: spring(toggle ? 1 : 0.25, animationConfig),
          height: spring(toggle ? 1 : 0.25, animationConfig),
        }}
      >
        {({ borderRadius, width, height }) => (
          <div className="backgroundWrapper" >
            <div
              className="background"
              style={{
                MozBorderRadius: borderRadius,
                WebkitBorderRadius: borderRadius,
                borderRadius,
                width: toggle ? `${width * 100}%` : width * 1000,
                height: toggle ? `${height * 100}%` : width * 1000,
              }}
            >
              { children }
            </div>
          </div>
        )}
      </Motion>
    );
  }
}
export default Background;
