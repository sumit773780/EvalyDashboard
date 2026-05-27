import React from 'react';
import { statsMetrics } from '../../data/metrics';

const TopCategory = () => {
  const topCategoryData = statsMetrics.topCategory;

  // Mapping index to the custom SCSS bubble classnames
  const getCircleClass = (idx) => {
    switch (idx) {
      case 0: return 'circle-fashion';
      case 1: return 'circle-electronics';
      case 2: return 'circle-makeup';
      default: return '';
    }
  };
  return (
    <div className="premium-card">
      <div className="card-header-custom align-items-start mb-3">
        <div>
          <h5 className="card-title-custom mb-1">{topCategoryData.title}</h5>
          <span className="card-subtitle-custom">{topCategoryData.subtitle}</span>
        </div>
      </div>
      {/* CSS Overlapping Bubbles Section */}
      <div className="top-category-visual">
        {topCategoryData.categories.map((item, idx) => (
          <div 
            key={idx} 
            className={`category-circle ${getCircleClass(idx)}`}
            id={`category-bubble-${item.name.toLowerCase().replace(' ', '-')}`}
          >
            <span className="circle-label">{item.name}</span>
            <span className="circle-value">{item.value}</span>
            <span className="circle-sub">{item.percentText}</span>
          </div>
        ))}
      </div>
      {/* Legend list at the bottom */}
      <div className="d-flex flex-column gap-2 mt-2 pt-1">
        {topCategoryData.categories.map((item, idx) => (
          <div key={idx} className="category-item-legend">
            <span 
              className="legend-dot" 
              style={{ backgroundColor: item.color }} 
            />
            <span className="legend-name">{item.name}</span>
            <span className="legend-value">{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopCategory;
