import React from 'react';
import {Chart} from 'react-google-charts';
import Spinner from '../../../module/spinner';

const PieChart = ({details = [], leftAmount = 0}) => {
  const dataHandler = (data = []) => {
    let items = [['记录', '金额'], ['剩余班费', leftAmount]];
    data.forEach((item) => {
      items.push([item.name, item.amount]);
    });
    return items;
  }

  const chartData = dataHandler(details);

  const Loading = () => (
    <div className='LoadingProgress'>
      <Spinner />
    </div>
  );

  return (
    <div className='PieChart--Container'>
      <Chart
        width='100%'
        height='300px'
        chartType="PieChart"
        loader={<Loading />}
        data={chartData}
        options={{
          title: '中五班班费使用情况',
        }}
      />
    </div>
  );
};

export default PieChart;
