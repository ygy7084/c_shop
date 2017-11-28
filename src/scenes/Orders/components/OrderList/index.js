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
                <p>주문 고객 : </p>
                <p>주문 금액 : {item.wholePrice}</p>
                <p>{item.label}</p>
                <ul>
                <p>{item.products.map(product => (
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
