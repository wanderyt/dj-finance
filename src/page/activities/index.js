import React from 'react';
import ActivityTile from './activity-tile';

import './index.scss';

const ACTIVITIES = [{
  id: 1,
  name: '插花',
  desc: '萱萱爸爸教大家如何插花，做出一小瓶花艺。',
  date: '2019-03-21',
  amount: 900,
}, {
  id: 2,
  name: '春游',
  desc: '幼儿园大家一起去春游。',
  date: '2019-04-28',
  amount: 4700,
}];

const Activities = (props) => {
  return (
    <div className='Activities'>
      <div className='Activities--List'>
        {
          ACTIVITIES.map((item) => (
            <div
              className='ActivityTile-Item'
              key={item.id}>
              <ActivityTile {...item} />
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default Activities;
