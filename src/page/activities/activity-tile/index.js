import React, {useState} from 'react';
import {formatDate} from '../util';

import './index.scss';
import ActivityDetails from './activity-details';

const ActivityTile = ({id, name, desc, date, amount}) => {
  let [isExpanded, setIsExpanded] = useState(false);
  let [details, setDetails] = useState({});

  const expandDetails = () => {
    if (!details.items) {
      const currentDetails = {
        total: 900,
        items: [{
          name: '花',
          amount: 300,
        }, {
          name: '花瓶',
          amount: 400,
        }, {
          name: '包装纸',
          amount: 200,
        }]
      };

      setDetails(currentDetails);
    }
    setIsExpanded(true);
  };

  const foldItem = () => {
    setIsExpanded(false);
  }

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
      {
        isExpanded && details &&
        <div className='Activity--Item'>
          <ActivityDetails details={details} />
        </div>
      }
      <div className='Activity--Item Activity--Toolbar'>
        {
          !isExpanded ?
          <div
            className='Activity--LearnMore'
            onClick={expandDetails}>
            查看明细
          </div>
          :
          <div
            className='Activity--Fold'
            onClick={foldItem}>
            收起
          </div>
        }
      </div>
    </div>
  );
};

export default ActivityTile;
