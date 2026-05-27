import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import ReactApexChart from 'react-apexcharts';
import {
  BsArrowUp,
  BsArrowDown,
} from 'react-icons/bs';

const StatCards2 = ({
  title = "Total Orders",
  subtitle = "Last 7 Days",
  amount = "25.7K",
  growth = "6%",
  growthText= "vs last 7 days",
  growthType = 'up',
  chartColor = '#12c45b',
  chartData = [ 20, 58,35,75],
  categories = [],
}) => {
  const options = {
    chart: {
      type: 'area',
      toolbar: {
        show: false,
      },
      sparkline: {
        enabled: true,
      },
    },
    stroke: {
      curve: 'smooth',
      width: 3,
    },
    colors: [chartColor],
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.25,
        opacityTo: 0.02,
        stops: [0, 100],
      },
    },
    dataLabels: {
      enabled: false,
    },
    grid: {
      show: false,
    },
    tooltip: {
      enabled: true,
    },
    xaxis: {
      categories: categories,
      labels: {
        show: false,
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
  };
  return (
    <Card className="border-0 rounded-4 shadow-sm h-100 overflow-hidden">
      <Card.Body className="p-4">
        <Row className="align-items-center">
          {/* LEFT CONTENT */}
            <h4 className="fw-semibold mb-1 fs-4 text-dark">
              {title}
            </h4>
          <Col xs={7}>
            <p className="text-secondary mb-4">
              {subtitle}
            </p>
            <h1 className="fw-bold text-dark fs-2 mb-4">
              {amount}
            </h1>
            <div className="d-flex align-items-center gap-2 flex-wrap">
              <span
                className={`d-flex align-items-center gap-1 fw-semibold ${
                  growthType === 'up'
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
              <span className="text-secondary">
                {growthText}
              </span>
            </div>
          </Col>
          {/* RIGHT CHART */}
          <Col xs={5}>
            <ReactApexChart
              options={options}
              series={[
                {
                  name: title,
                  data: chartData,
                },
              ]}
              type="area"
              height={140}
            />
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default StatCards2;