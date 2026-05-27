import React from 'react';
import Chart from 'react-apexcharts';
import { MdArrowUpward, MdArrowDownward, MdMoreVert } from 'react-icons/md';

const TodayOrderWidget = () => {
  const todayOrdersMetric = {
    title: "Today Order",
    value: "16.5K",
    changeText: "9% vs last day",
    isUp: true,
    subtitle: "Orders Over Time",
    hourlySeries: [15, 90, 20, 50, 10, 45]
  };

  // Localized Chart Configuration
  const series = [{
    name: "Orders Over Time",
    data: todayOrdersMetric.hourlySeries
  }];

  const options = {
    chart: {
      type: 'line',
      height: 150,
      sparkline: {
        enabled: true
      }
    },
    colors: ['#0F60FF'],
    stroke: {
      curve: 'smooth',
      width: 2
    },
    tooltip: {
      fixed: {
        enabled: false
      },
      x: {
        show: false
      },
      y: {
        title: {
          formatter: () => 'Orders'
        }
      },
      marker: {
        show: false
      }
    }
  };

  return (
    <div className="premium-card d-flex flex-column justify-content-between">
      <div>
        <div className="card-header-custom align-items-center mb-2">
          <h5 className="card-title-custom pt-3 mb-3">{todayOrdersMetric.title}</h5>
          <MdMoreVert size={22} className='text-secondary'/>
        </div>
        <div className="d-flex align-items-center justify-content-between">
          <span className="fs-2 fw-bold text-dark mb-3">{todayOrdersMetric.value}</span>
          <span className={`metric-trend m-0 ${todayOrdersMetric.isUp ? 'trend-up' : 'trend-down'}`}>
            {todayOrdersMetric.isUp ? <MdArrowUpward size={14} /> : <MdArrowDownward size={14} />}
            {todayOrdersMetric.changeText.split('vs')[0]}
            <span className="fw-semibold fs-6 text-secondary">vs {todayOrdersMetric.changeText.split('vs')[1]}</span>
          </span>
        </div>
        <span className="fw-semibold fs-6 text-secondary pt-5">
          {todayOrdersMetric.subtitle}
        </span>
      </div>
      {/* Hourly orders sparkline line chart */}
      <div className="mt-auto">
        <Chart
          options={options}
          series={series}
          type="line"
          height={250}
        />
        <div className="d-flex justify-content-between text-secondary mt-2 px-1 widget-chart-footer">
          <span>12am</span>
          <span>8am</span>
          <span>4pm</span>
          <span>11pm</span>
        </div>
      </div>
    </div>
  );
};

export default TodayOrderWidget;
