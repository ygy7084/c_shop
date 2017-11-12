import React from 'react';

const OrderList = function ({ orders, deliver }) {
  return (
    <div>
      <ul>
        {
          orders.length ?
            orders.map(item => (
              <li
                key={item.datetime}
                style={
                  item.delivered ? { background: 'grey' } : undefined
                }
              >
                <p>{item.label}</p>
                <p>{item.orderList.reduce((a, b) => (a + ', ' + b))}</p>
                <p>{new Date(item.datetime).toLocaleString()}</p>
                {
                  !item.delivered ?
                    <button onClick={() => deliver(item._id)}>전달</button>
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
