import React, { useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { MdMoreVert } from 'react-icons/md';
import Chart from 'react-apexcharts';

const reportsData = {
    customers: {
        value: '24k',
        label: 'Customers',
        series: [
            {
                name: 'Customers',
                data: [12, 16, 36, 42, 48, 44, 40],
            },
        ],
    },
    products: {
        value: '3.5k',
        label: 'Total Products',
        series: [
            {
                name: 'Total Products',
                data: [10,20, 48, 54, 60, 58, 59],
            },
        ],
    },
    revenue: {
        value: '250k',
        label: 'Revenue',
        series: [
            {
                name: 'Revenue ($)',
                data: [15,58, 48, 46, 30, 59, 55],
            },
        ],
    },
};
const reportsOptions = {
    chart: {
        type: 'line',
        height: 250,
        toolbar: {
            show: false,
        },
    },
    colors: ['#0F60FF'],
    stroke: {
        curve: 'smooth',
        width: 4,
    },
    xaxis: {
        categories: [
            'Mon',
            'Tue',
            'Wed',
            'Thu',
            'Fri',
            'Sat',
            'Sun',
        ],
        labels: {
            style: {
                colors: '#8B909A',
                fontSize: '11px',
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
        min: 0,
        max: 60,
        tickAmount: 6,
        labels: {
            formatter: (value) => `${value}k`,
            style: {
                marginBottom:'20px',
                colors: '#8B909A',
                fontSize: '11px',
                fontWeight: 500,
            },
        },
    },
    grid: {
        borderColor: '#F1F2F4',
        strokeDashArray: 4,
        xaxis: {
            lines: {
                show: false,
            },
        },
        yaxis: {
            lines: {
                show: true,
            },
        },
    },
    tooltip: {
        theme: 'light',
    },
};
const Reports = () => {
    const [activeTab, setActiveTab] = useState('customers');
    return (
        <div>
            <Card className="premium-card">
                <Card.Body className="p-2">
                    <div className="d-flex justify-content-between align-items-center flex-wrap gap-3 mb-4">
                        <div>
                            <h5 className="card-title-custom mb-2">
                                Reports
                            </h5>
                            <span className="card-subtitle-custom mt-2">
                                Last 7 Days
                            </span>
                        </div>
                        <MdMoreVert className="card-actions-custom fs-5" />
                    </div>
                    {/* Dynamic Reports Tabs Header */}
                    <div className="reports-tabs mt-5 mb-5">
                        {Object.keys(reportsData).map((tabKey) => (
                            <Button
                                key={tabKey}
                                className={`reports-tab-item ${activeTab === tabKey ? 'active' : ''
                                    }`}
                                onClick={() => setActiveTab(tabKey)}
                            >
                                <div className="fs-4 fw-extrabold text-dark text-start">
                                    {reportsData[tabKey].value}
                                </div>
                                <div className="text-secondary small-label">
                                    {reportsData[tabKey].label}
                                </div>
                            </Button>
                        ))}
                    </div>
                    {/* Chart */}
                    <div className="mt-4 mb-2">
                        <Chart
                            options={reportsOptions}
                            series={reportsData[activeTab].series}
                            type="line"
                            height={250}
                        />
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Reports;