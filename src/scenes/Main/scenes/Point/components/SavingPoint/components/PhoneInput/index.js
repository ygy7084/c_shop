import React from 'react';
import './styles.css';

class PhoneInput extends React.Component {
  render() {
    const { pointForSave, input } = this.props;
    return (
      <div className="inputPhone">
        {
          pointForSave ?
            <p key="pointNotification" className="pointNotification">
              {`${pointForSave}점이 적립됩니다.`}
            </p> : null
        }
        <span key="savingPointPhoneInput" className="savingPointPhoneInput">
          { input }
          <div className="console-underscore">&#95;</div>
        </span>
      </div>
    );
  }
}
export default PhoneInput;
