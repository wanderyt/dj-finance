import React, {useState} from 'react';
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
}, {
  id: 3,
  name: '插花',
  desc: '萱萱爸爸教大家如何插花，做出一小瓶花艺。',
  date: '2019-03-21',
  amount: 900,
}, {
  id: 4,
  name: '春游',
  desc: '幼儿园大家一起去春游。',
  date: '2019-04-28',
  amount: 4700,
}, {
  id: 5,
  name: '插花',
  desc: '萱萱爸爸教大家如何插花，做出一小瓶花艺。',
  date: '2019-03-21',
  amount: 900,
}, {
  id: 6,
  name: '春游',
  desc: '幼儿园大家一起去春游。',
  date: '2019-04-28',
  amount: 4700,
}];

const Activities = (props) => {
  // const [isSelected, setIsSelected] = useState(false);
  // const [selectedAct, setSelectedAct] = useState([]);

  // const activityClickHandler = (item) => {
  //   // setIsSelected(true);
  //   let newSelectedAct = selectedAct.push(item.id).slice();
  //   setSelectedAct(newSelectedAct);
  // }

  // const backClickHandler = () => {
  //   setIsSelected(false);
  //   setSelectedAct({});
  // }

  return (
    <div className='Activities'>
      {/* <div className='Activities--Header'>
        {
          isSelected && <div className='Activities--BackButton' onClick={backClickHandler} />
        }
        <span className='Activities--NameTag'>
          {
            isSelected ? selectedAct.name : '活动记录'
          }
        </span>
      </div> */}
      <div className='Activities--List'>
        {
          ACTIVITIES.map((item) => (
            <div
              className='ActivityTile-Item'
              // onClick={() => activityClickHandler(item)}
              key={item.id}>
              {/* <ActivityTile {...item} isSelected={selectedAct.indexOf(item.id) > -1} /> */}
              <ActivityTile {...item} />
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default Activities;
