import React from 'react';
import './PortfolioCard.css';

const PortfolioCard = ({ title, category, kpis, image }) => {
  return (
    <div className="portfolio-card">
      <div className="portfolio-img-wrapper">
        {/* Placeholder if no image */}
        <div className="portfolio-img-placeholder" style={{ backgroundImage: `url(${image || ''})` }}>
          {!image && <span className="placeholder-text">OUTPRO</span>}
        </div>
        <div className="portfolio-overlay">
          <span className="portfolio-category text-accent">{category}</span>
        </div>
      </div>
      
      <div className="portfolio-content">
        <h3 className="portfolio-title">{title}</h3>
        
        <div className="portfolio-kpis">
          {kpis && kpis.map((kpi, index) => (
            <div key={index} className="kpi-item">
              <span className="kpi-value">{kpi.value}</span>
              <span className="kpi-label">{kpi.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
