import React from 'react';
import Typography from 'material-ui/Typography';
import { Motion, spring, TransitionMotion } from 'react-motion';

class Saved extends React.Component {
  render() {
    const { point, customer } = this.props;
    if (
      point === null || point === undefined || !customer
    ) {
      return null;
    }
    return (
      <div>
        <Typography
          style={{
            color: 'white',
            fontSize: '5vh',
            margin: '5vh',
          }}
          align="center"
        >
          감사합니다.
        </Typography>
      </div>
    );
  }
}
export default Saved;
