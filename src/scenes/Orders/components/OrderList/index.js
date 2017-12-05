import React from 'react';
import timeConvert from '../../modules/timeConvert';
const styles = {
  color: 'red'
};

const OrderList = function ({ orders, deliver, cancel, now }) {
  return (
    <div>
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
                <p>{timeConvert(Math.floor((now.getTime() - new Date(item.datetime).getTime()) / 1000))}</p>
                {
                  (item.status === 0) ?
                    <div>
                      <button onClick={() => deliver(item._id)}>전달</button>
                      <button onClick={() => cancel(item._id)}>주문취소</button>
                      <div style={styles}>{(!item.keys) ? 'push알림 불가' : ''}</div>
                    </div>
                  : null
                }
              </li>
            )) : null
        }
      </ul>
    </div>
  );
};
export default OrderList;
