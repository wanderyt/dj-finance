import React from 'react';
import {formatDate} from '../util';

import './index.scss';

const ActivityTile = ({id, name, desc, date, amount}) => {
  return (
    <div className='ActivityTile'>
      <div className='Activity--Item Activity--Header'>
        <div className='Activity--Name'>{name}</div>
        <div className='Activity--Date'>{formatDate(date)}</div>
      </div>
      <div className='Activity--Item Activity--Content'>
        <div className='Activity--Desc'>{desc}</div>
      </div>
      <div className='Activity--Item Activity--Amount'>
        <div className='Activity--AmountCaption'>花费金额：</div>
        <div className='Activity--AmountNumber'>{amount}</div>
      </div>
      <div className='Activity--Item Activity--Toolbar'>
        <div className='Activity--LearnMore'>查看更多</div>
      </div>
    </div>
  );
};

export default ActivityTile;
