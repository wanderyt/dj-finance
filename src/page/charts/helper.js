export const buildOptions = (activities) => {
  let options = {
    chart: {
      type: 'pie'
    },
    title: {
      text: '中五班班费使用情况'
    },
    plotOptions: {
      pie: {
        dataLabels: {
          enabled: true,
          format: '<br>{point.percentage:.1f} %',
          distance: -50,
          filter: {
            property: 'percentage',
            operator: '>',
            value: 5
          },
        },
        showInLegend: true
      }
    },
  };

  let seriesData = [], left = 0;
  activities.forEach(({name, amount, type, details}) => {
    if (type === 1) {
      left += amount;
    } else {
      left -= amount;
    }

    if (type === 2) {
      seriesData.push({
        name,
        y: amount,
        drilldown: name
      });
    }
  });

  seriesData.push({
    name: '剩余班费',
    y: left,
    drilldown: null
  });

  options.series = [{
    name: '花费',
    colorByPoint: true,
    data: seriesData,
  }];

  return options;
};