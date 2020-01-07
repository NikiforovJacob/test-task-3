import React, { Component } from 'react';
import ReactApexChart from 'react-apexcharts';
import PropTypes from 'prop-types';
import { StyledWeekActivity } from '../styled';

class ApexChart extends Component {
  constructor(props) {
    super(props);
    const { chartData: { categories } } = this.props;

    this.state = {
      options: {
        chart: {
          height: 350,
          type: 'line',
          zoom: {
            enabled: false,
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          width: [5, 7, 5],
          curve: 'straight',
          dashArray: [0, 8, 5],
        },
        title: {
          text: 'Trainings by weeks',
          align: 'left',
        },
        legend: {
          tooltipHoverFormatter(val, opts) {
            return (
              `${val
              } - ${
                opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex]
              }`
            );
          },
        },
        markers: {
          size: 0,
          hover: {
            sizeOffset: 6,
          },
        },
        xaxis: {
          categories,
        },
        grid: {
          borderColor: '#f1f1f1',
        },
      },
    };
  }

  render() {
    const { options } = this.state;
    const { chartData: { series } } = this.props;
    return (
      <StyledWeekActivity id="chart">
        <ReactApexChart
          options={options}
          series={series}
          type="line"
          height={350}
        />
      </StyledWeekActivity>
    );
  }
}

ApexChart.propTypes = {
  chartData: PropTypes.shape({
    series: PropTypes.arrayOf(PropTypes.object),
    categories: PropTypes.arrayOf(PropTypes.number),
  }).isRequired,
};

export default ApexChart;
