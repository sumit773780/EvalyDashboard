import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import ReactApexChart from 'react-apexcharts';
import { BsArrowUp, BsArrowDown } from 'react-icons/bs';

const StatCard = ({
  title = 'Total Sales & Costs',
  subtitle = 'Last 7 days',
  totalAmount = '$350K',
  extraAmount = '',
  growth = '8.56K',
  growthText = 'vs last 7 days',
  growthType = 'up',
  // DEFAULT CHART DATA
  series = [
    {
      name: 'Sales',
      data: [20, 35, 32, 40, 60, 72, 65],
    },
    {
      name: 'Cost',
      data: [10, 22, 20, 28, 45, 55, 48],
    },
  ],

  categories = [],
  colors = ['#2563ff', '#2bb3ff'],
  chartHeight = 200,
}) => {
  const options = {
    chart: {
      type: 'area',
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
    },

    stroke: {
      curve: 'smooth',
      width: 4,
    },

    colors: colors,

    dataLabels: {
      enabled: false,
    },

    legend: {
      position: 'top',
      horizontalAlign: 'right',
      fontSize: '13px',
      markers: {
        radius: 12,
      },
    },

    grid: {
      show: false,
    },

    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.25,
        opacityTo: 0.02,
        stops: [0, 100],
      },
    },

    xaxis: {
      categories: categories,

      labels: {
        style: {
          colors: '#9ca3af',
          fontSize: '12px',
          fontWeight: 500,
        },
      },

      axisBorder: {
        show: false,
      },

      axisTicks: {
        show: false,
      },
    },

    yaxis: {
      show: false,
    },

    tooltip: {
      theme: 'light',
    },
  };
  return (
    <Card className="border-0 shadow-sm rounded-4 p-3">
      <Row className="justify-content-between align-items-center">
        {/* LEFT CONTENT */}
        <Col lg={5}>
          <h4 className="fw-bold mb-1">{title}</h4>
          <p className="text-muted mb-4">{subtitle}</p>
          <div className="d-flex align-items-end gap-2 mb-3">
            <h1 className="fw-bold mb-0">{totalAmount}</h1>
            <span className="fw-semibold text-info">
              {extraAmount}
            </span>
          </div>
          <div className="d-flex align-items-center gap-2">
            <span
              className={`d-flex align-items-center gap-1 fw-semibold ${growthType === 'up'
                  ? 'text-success'
                  : 'text-danger'
                }`}
            >
              {growthType === 'up' ? (
                <BsArrowUp />
              ) : (
                <BsArrowDown />
              )}
              {growth}
            </span>
            <span className="text-muted">
              {growthText}
            </span>
          </div>
        </Col>
        {/* CHART */}
        <Col lg={7}>
          <ReactApexChart
            options={options}
            series={series}
            type="area"
            height={chartHeight}
          />
        </Col>
      </Row>
    </Card>
  );
};

export default StatCard;