import React, { useState } from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import Chart from 'react-apexcharts';
import { MdMoreVert } from 'react-icons/md';

// Import decoupled metrics
import { statsMetrics } from '../data/metrics';
import StatCard from '../component/Dashboard/StatCard';
import CountrySales from '../component/Dashboard/CountrySales';
import TopCategory from '../component/Dashboard/TopCategory';
import TransactionsTable from '../component/Dashboard/TransactionsTable';
import BestSellers from '../component/Dashboard/BestSellers';
import TreandingProducts from '../component/Dashboard/TreandingProducts';
import TodayOrderWidget from '../component/Dashboard/TodayOrderWidget';
import RecentOrders from '../component/Dashboard/RecentOrders';
import StatCards2 from '../component/Dashboard/StatCards2';
import Reports from '../component/Dashboard/Reports';

const Dashboard = () => {
  // Real-time Active Users minute configurations
  const activeUsersSeries = [{
    name: "Active Users",
    data: [20, 15, 30, 25, 40, 12, 18, 22, 35, 10, 28, 45, 15, 20, 32, 25, 40, 28, 50, 12, 18, 25, 40, 15, 22, 35, 10, 18, 28, 32]
  }];

  const activeUsersOptions = {
    chart: {
      type: 'bar',
      height: 45,
      sparkline: {
        enabled: true
      }
    },
    colors: ['#0F60FF'],
    plotOptions: {
      bar: {
        columnWidth: '70%',
        borderRadius: 1.5
      }
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
          formatter: () => 'Users'
        }
      },
      marker: {
        show: false
      }
    }
  };

  return (
    <Row className="dashboard-content-page text-start">
      <Row className='gy-3'>
        {/* SALES & COSTS */}
        <Col lg={7}>
          <StatCard
            title="Total Sales & Costs"
            subtitle="Last 7 days"
            totalAmount="$350K"
            extraAmount="$235K"
            growth="8.56K"
            growthText="vs last 7 days"
            growthType="up"
            chartHeight={180}
            colors={['#2563ff', '#2bb3ff']}
            categories={[
              'MON',
              'TUE',
              'WED',
              'THU',
              'FRI',
              'SAT',
              'SUN',
            ]}
            series={[
              {
                name: 'Sales',
                data: [20, 35, 32, 40, 60, 72, 65],
              },
              {
                name: 'Cost',
                data: [10, 22, 20, 28, 45, 55, 48],
              },
            ]}
          />
        </Col>
        {/* SESSION */}
        <Col lg={5}>
          <StatCard
            title="Sessions"
            subtitle="Last 7 days"
            totalAmount="16.5K"
            growth="3%"
            growthText="vs last 7 days"
            growthType="down"
            chartHeight={180}
            colors={['#ff2e2e']}
            series={[
              {
                name: 'Sessions',
                data: [70, 30, 50, 45, 15],
              },
            ]}
          />
        </Col>
      </Row>
      <Row className='gy-3'>
        <Col lg={4} md={12}>
          <StatCards2 />
        </Col>
        <Col lg={4} md={12}>
          <StatCards2
            title='Total Profit'
            amount="50K"
            growth="12%"
            chartData={[5, 60, 10, 90]}
          />
        </Col>
        <Col lg={4} md={12}>
          <StatCards2
            title='Discounted Amount'
            amount="12K"
            growth="2%"
            growthType='up'
            chartColor='#D02626'
            chartData={[70, 30, 60, 5]}
          /></Col>
      </Row>
      <Row className='gy-3'>
        <Col lg={7} md={12}>
          <Reports />
        </Col>
        <Col lg={5} md={12}>
          <Card className="premium-card p-3">
            <Card.Body className="p-1">
              {/* Users in last 30 minutes section */}
              <Row>
                <Col className="mb-3">
                  <h5 className="card-title-custom mb-1">Users in last 30 minutes</h5>
                  <div className="fw-bold fs-2 text-dark my-2">16.5K</div>
                  <span className="card-subtitle-custom d-block mb-3 fw-semibold">Users per minute</span>
                  {/* Real-time bar sparkline */}
                  <div className="sparkline-chart-container" >
                    <Chart
                      options={activeUsersOptions}
                      series={activeUsersSeries}
                      type="bar"
                      height={45}
                    />
                  </div>
                </Col>
              </Row>
              {/* Sales by Country section */}
              <Row>
                <Col>
                  <CountrySales />
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className='gy-3'>
        <Col lg={4} md={12}>
          <TopCategory />
        </Col>
        <Col lg={8} md={12}>
          <TransactionsTable />
        </Col>
      </Row>
      <Row className='gy-3'>
        <Col lg={8} md={12}>
          <BestSellers />
        </Col>
        <Col lg={4} md={12}>
          <Card>
            <TreandingProducts />
          </Card>
        </Col>
      </Row>
      <Row className='gy-3'>
        <Col lg={4} md={12}>
          <TodayOrderWidget />
        </Col>
        <Col lg={8} md={12}>
          <RecentOrders />
        </Col>
      </Row>
    </Row>
  );
};

export default Dashboard;
