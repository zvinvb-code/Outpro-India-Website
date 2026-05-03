import React from 'react';
import * as Icons from 'lucide-react';
import './ServiceCard.css';

const ServiceCard = ({ title, description, iconName }) => {
  const IconComponent = Icons[iconName] || Icons.Trophy;

  return (
    <div className="glass-card service-card">
      <div className="service-icon-wrapper">
        <IconComponent size={32} className="service-icon" />
      </div>
      <h3 className="service-title">{title}</h3>
      <p className="service-desc">{description}</p>
    </div>
  );
};

export default ServiceCard;