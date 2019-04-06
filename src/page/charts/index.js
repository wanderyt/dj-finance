import React from 'react';
import PieChart from './pie-chart';
import ACTIVITIES from '../activities-data.json';

const Charts = () => {
  let leftAmount = 0, details = [];
  ACTIVITIES.forEach((item) => {
    if (item.type === 1) {
      leftAmount += item.amount;
    } else {
      leftAmount -= item.amount;
    }
    details.push({
      name: item.name,
      amount: item.amount
    });
  });

  return (
    <div className='Charts_Tab'>
      <div className='PieChart--Container'>
        <PieChart
          details={details}
          leftAmount={leftAmount} />
      </div>
    </div>
  );
};

export default Charts;
