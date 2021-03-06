import React from 'react';
import Paper from 'material-ui/Paper';
import timeConvert from '../../modules/timeConvert';
import './styles1.css';

const OrderList = function OrderList({ orders, deliver, cancel, now }) {
  return (
    <div>
      {
        orders.length ?
          orders.map(item => (
            <Paper
              key={item._id}
              className="paper"
              zdepth={4}
              style={
                (item.status !== 0) ? { background: 'grey', marginTop: '10px' } : { marginTop: '10px' }
              }
            >
              <ul>주문 고객 :{(item.customer !== undefined) ?
                <li>name :{(item.customer.name === undefined) ? '이름없음' : item.customer.name}
                  <br />phone :<a href={`tel:+${item.customer.phone}`}>{(item.customer.phone)}</a>
                </li>
                  : '고객정보없음'}
              </ul>
              <p style={(item.place !== undefined) ? { color:'red' } : undefined}>
                장소 : {(item.place !== undefined) ? (item.place.name) : 'place 정보 없음'}
              </p>
              <p>주문 금액 : {item.wholePrice}</p>
              <p>{item.label}</p>
              <ul>
                {item.products.map(product => (
                  <li key={product._id}>{product.name}, {product.number}개
                    {product.options.map(option => (
                      <ul key={option._id}>
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
                  <p>{timeConvert(Math.floor((now.getTime() - new Date(item.datetime).getTime()) / 1000) + 1)}</p>
                  {
                    (item.status === 0) ?
                      <div>
                        <button onClick={() => deliver(item._id)}>전달</button>
                        <button onClick={() => cancel(item._id)}>주문취소</button>
                        <div style={{ color:'red' }}>{(!item.keys) ? 'push알림 불가' : ''}</div>
                      </div>
                      : null
                  }
                </div> : ''
              }
            </Paper>
          )) : null
      }
    </div>
  );
};
export default OrderList;
