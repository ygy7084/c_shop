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
                  (item.status !== 0) ? { background: 'grey' } : undefined
                }
              >
                <p>{item.label}</p>
                <ul>
                <p>{item.products.map(product => (
                  <li>{product.name}</li>
                ))}</p>
                </ul>
                <p>{new Date(item.datetime).toLocaleString()}</p>
                {
                  (item.status ===0) ?
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
