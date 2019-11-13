import React from 'react';

import './index.scss';

const ActivityDetails = ({type, details}) => {
  const isFloated = details.total % 1 !== 0;
  const formatNumber = (number) => {
    if (isFloated) {
      return parseFloat(number).toFixed(2);
    } else {
      return number;
    }
  }
  return (
    <div className='ActivityDetails'>
      {
        type === 2 &&
        <div className='Activity--Items'>
          {
            details.items.map((item) => (
              <div className='AmountItem'>
                <div className='AmountName'>{item.name}</div>
                <div className='Amount'>
                  {/* {item.number} x {item.price} = {item.number * item.price} */}
                  {formatNumber(item.number * item.price)}
                </div>
              </div>
            ))
          }
          <div className='Activity--Total'>
            <div className='Activity--TotalAmountCaption'>总计</div>
            <div className='Activity--TotalAmount'>
              {formatNumber(details.total)}
            </div>
          </div>
        </div>
      }
      {
        type === 1 &&
        <div className='Activity--Items'>
          <div className='AmountItem'>
            <div className='Amount'>
              {/* {details.number} x {details.price} = {details.number * details.price} */}
              {formatNumber(details.number * details.price)}
            </div>
          </div>
          <div className='Activity--Total'>
            <div className='Activity--TotalAmountCaption'>总计</div>
            <div className='Activity--TotalAmount'>
              {formatNumber(details.total)}
            </div>
          </div>
        </div>
      }
    </div>
  );
};

export default ActivityDetails;
