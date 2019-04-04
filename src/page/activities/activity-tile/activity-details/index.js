import React from 'react';

import './index.scss';

const ActivityDetails = ({details}) => {
  return (
    <div className='ActivityDetails'>
      <div className='Activity--Items'>
        {
          details.items.map((item) => (
            <div className='AmountItem'>
              <div className='AmountName'>{item.name}</div>
              <div className='Amount'>{item.amount}</div>
            </div>
          ))
        }
        <div className='Activity--Total'>
          <div className='Activity--TotalAmountCaption'>总计</div>
          <div className='Activity--TotalAmount'>{details.total}</div>
        </div>
      </div>
    </div>
  );
};

export default ActivityDetails;
