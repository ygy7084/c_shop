import React from 'react';
import { Motion, spring, TransitionMotion } from 'react-motion';
import Dial from './components/Dial';
import './styles.css';

class SavingPoint extends React.Component {
  render() {
    return (
      <div className="savingPoint">
        <div className="pointNotification">
          300점이 적립됩니다.
        </div>
        <Dial />
      </div>
    );
  }
}
export default SavingPoint;
