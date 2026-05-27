import React from 'react';
import { ProgressBar } from 'react-bootstrap';
import { countrySales } from '../../data/countries';
import { HiChevronDown, HiChevronUp } from 'react-icons/hi';

const CountrySales = () => {
  return (
    <div>
      <div className="card-header-custom align-items-center mb-5">
        <h5 className="card-title-custom">Sales by Country</h5>
        <span className="card-subtitle-custom fw-bold">Sales</span>
      </div>
      <div className="country-sales-list">
        {countrySales.map((item, id) => (
          <div key={id} className="country-sale-row">
            <div className="country-header">
              <div className="country-info">
                {/* Local Flag Image rendering */}
                <img
                  className="country-flag-icon"
                  src={item.flag}
                  alt={`${item.country} flag`}
                />
              </div>
              <div className='country-names ms-3'>
                <h4 className="country-value fw-semibold">{item.sales}</h4>
                <p className="country-name fw-medium">{item.country}</p>
              </div>
              <div className="progress-wrapper">
              <ProgressBar
                now={item.progress}
                className="custom-progress"
              />
            </div>
              <div className="d-flex align-items-center gap-1">
                <span className={`metric-trend m-0 ${item.isUp ? 'trend-up' : 'trend-down'}`}>
                  {item.isUp ? <HiChevronUp size={12} /> : <HiChevronDown size={12} />}
                  {item.percentage}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountrySales;
