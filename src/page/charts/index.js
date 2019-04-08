import React from 'react';
import Highcharts from 'highcharts';
import HighchartReact from "highcharts-react-official";
import ACTIVITIES from '../activities-data.json';
// import drilldown from 'highcharts-drilldown';

import {buildOptions} from './helper';

const HighChartTab = (prop) => {

  // drilldown(Highcharts);

  // // Set drill up button text
  // Highcharts.setOptions({
  //   lang: {
  //     drillUpText: '<< 返回上一级'
  //   }
  // });

  const options = buildOptions(ACTIVITIES);

  return (
    <div className='HighChartTab_Tab'>
      <HighchartReact
        highcharts={Highcharts}
        options={options} />
    </div>
  );
};

export default HighChartTab;
