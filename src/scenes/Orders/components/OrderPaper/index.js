import React from 'react';
import Paper from 'material-ui/Paper';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import timeConvert from '../../modules/timeConvert';

const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3,
    width: 300,
    height: 500,
  }),
});
const pushStyles = {
  color: 'red'
};

function PaperSheet({ orders, deliver, cancel, now }) {
  return (
    <div>
      <Paper elevation={4}>
        hi

          <ul>
            {
              orders.length ?
                orders.map(item => (
                  <li
                    key={item.datetime}
                    style={
                      (item.status !== 0) ? { background: 'grey' } : undefined
                    }
                  >
                    <ul>
                      주문 고객 :  {(item.customer !== undefined) ?
                      <li>name : {(item.customer.name === undefined) ? '이름없음' : item.customer.name} phone : {(item.customer.phone)}</li>
                      : '고객정보없음'}

                    </ul>
                    <p>NFC : {(item.nfc !== undefined) ? (item.nfc.name) : 'nfc정보 없음'}</p>
                    <p>Place : {(item.place !== undefined) ? (item.place.name) : 'place 정보 없음'}</p>
                    <p>주문 금액 : {item.wholePrice}</p>
                    <p>{item.label}</p>
                    <ul>
                      {item.products.map(product => (
                        <li>{product.name}, {product.number}개
                          {product.options.map(option => (
                            <ul>
                              {option.name} :
                              {option.selections.map(selection => (
                                selection.name
                              ))}
                            </ul>
                          ))}
                        </li>
                      ))}
                    </ul>
                    <p>{new Date(item.datetime).toLocaleString()}</p>
                    {(now) ?
                      <div>
                        <p>{timeConvert(Math.floor((this.props.now.getTime() - new Date(item.datetime).getTime()) / 1000) + 1)}</p>
                        {
                          (item.status === 0) ?
                            <div>
                              <button onClick={() => deliver(item._id)}>전달</button>
                              <button onClick={() => cancel(item._id)}>주문취소</button>
                              <div style={pushStyles}>{(!item.keys) ? 'push알림 불가' : ''}</div>
                            </div>
                            : null
                        }
                      </div> : ''
                    }
                  </li>
                )) : null
            }
          </ul>

      </Paper>
    </div>
  );
}

PaperSheet.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PaperSheet);