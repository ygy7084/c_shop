import React from 'react';

class FlexCenter extends React.Component {
  render() {
    return (
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
      }}
      >
        { this.props.children }
      </div>
    );
  }
}
export default FlexCenter;
