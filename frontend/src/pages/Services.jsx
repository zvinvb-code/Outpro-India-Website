import React, { useEffect, useState } from 'react';
import ServiceCard from '../components/ServiceCard';
import { fetchGET } from '../services/api';

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const loadServices = async () => {
      const data = await fetchGET('/services');
      if (data && data.length > 0) {
        setServices(data);
      } else {
        setServices([
          { title: "Event Management", description: "End-to-end execution of sports and adventure events.", iconName: "Trophy" },
          { title: "Marketing & Sponsorship", description: "Connect with brands and maximize event visibility.", iconName: "Megaphone" },
          { title: "Logistics & Equipment", description: "State-of-the-art sporting gear and seamless logistics.", iconName: "Truck" },
          { title: "Consulting", description: "Strategic planning for sustainable sports ecosystems.", iconName: "LineChart" },
          { title: "Social Media & Fan Engagement", description: "Build thriving digital communities around your sport.", iconName: "Users" }
        ]);
      }
    };
    loadServices();
  }, []);

  return (
    <main style={{paddingTop: '6rem'}}>
      <div className="container section">
        <div className="text-center" style={{marginBottom: '4rem'}}>
          <h1 className="heading-xl">OUR <span className="text-accent">SERVICES</span></h1>
          <p className="text-lg">Comprehensive solutions for your sporting events.</p>
        </div>

        <div className="grid-3">
          {services.map((srv, idx) => (
            <div key={idx} className={`animate-fade-up delay-${(idx%3)*100}`}>
              <ServiceCard {...srv} />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Services;