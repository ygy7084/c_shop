import React from 'react';
import BackIcon from 'material-ui-icons/Backspace';
import './styles.css';

const dials = [
  '1', '2', '3',
  '4', '5', '6',
  '7', '8', '9',
  'undo', '0', 'submit',
];
class Dial extends React.Component {
  render() {
    const { submitLabel } = this.props;
    return (
      <div className="dial">
        {
          dials.map(num => (
            <div
              role="button"
              key={num}
              className="dialNum"
              style={
                num === 'submit' ?
                  { fontSize: '5vh' } : null
              }
              onTouchTap={
                num !== '' ? () => this.props.handleSelect(num) : null
              }
            >
              {
                num === 'undo' ?
                  <BackIcon style={{
                    width: '10vh',
                    height: '10vh',
                  }}
                  /> :
                  num === 'submit' ?
                    submitLabel : num
              }
            </div>
          ))
        }
      </div>
    );
  }
}
export default Dial;
