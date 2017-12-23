import React from 'react';
import './styles.css';

const dials = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  ['*', 0, '#'],
];
class Dial extends React.Component {
  render() {
    return (
      <div className="dial">
        {
          dials.map(row => (
            <div key={String(row)} className="dialRow">
              {
                row.map(num => (
                  <div key={num} className="dialNum">
                    {num}
                  </div>
                ))
              }
            </div>
          ))
        }
      </div>
    );
  }
}
export default Dial;
