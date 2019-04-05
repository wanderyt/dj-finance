import React, {useState} from 'react';
import ActivityTile from './activity-tile';
import ACTIVITIES from './activities.json';

import './index.scss';

// const TYPE_INCOME = 1; // 收入
// const TYPE_OUTCOME = 2; // 支出

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

  let leftAmount = 0;
  ACTIVITIES.forEach((item) => {
    if (item.type === 1) {
      leftAmount += item.amount;
    } else {
      leftAmount -= item.amount;
    }
  })

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
      <div className='Activities--LeftArea'>
        <span className='Activities--LeftCaption'>剩余金额：</span>
        <span className='Activities--LeftAmount'>{leftAmount}</span>
      </div>
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
