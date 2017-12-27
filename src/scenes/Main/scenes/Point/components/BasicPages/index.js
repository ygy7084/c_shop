import React from 'react';
import Brand from './components/Brand';
import './styles.css';

class BasicPages extends React.Component {
  render() {
    return (
      <div className="basicPagesFlex">
        <Brand />
      </div>
    );
  }
}
export default BasicPages;
