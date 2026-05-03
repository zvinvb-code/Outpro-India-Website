import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import PortfolioCard from '../components/PortfolioCard';
import TestimonialCard from '../components/TestimonialCard';
import { fetchGET } from '../services/api';

const Home = () => {
  const [services, setServices] = useState([]);
  const [portfolio, setPortfolio] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      // Fetch or use fallback data
      const srvData = await fetchGET('/services');
      if (srvData && srvData.length > 0) {
        setServices(srvData.slice(0, 3));
      } else {
        setServices([
          { title: "Event Management", description: "End-to-end execution of sports and adventure events.", iconName: "Trophy" },
          { title: "Marketing & Sponsorship", description: "Connect with brands and maximize event visibility.", iconName: "Megaphone" },
          { title: "Logistics & Equipment", description: "State-of-the-art sporting gear and seamless logistics.", iconName: "Truck" }
        ]);
      }

      const portData = await fetchGET('/portfolio');
      if (portData && portData.length > 0) {
        setPortfolio(portData.slice(0, 3));
      } else {
        setPortfolio([
          { title: "National Corporate League", category: "Corporate", kpis: [{label: "Participants", value: "1,200"}], image: "" },
          { title: "Himalayan Adventure", category: "Adventure", kpis: [{label: "Athletes", value: "300"}], image: "" },
          { title: "City T20 Championship", category: "Tournaments", kpis: [{label: "Spectators", value: "5,000+"}], image: "" }
        ]);
      }
    };
    
    loadData();
  }, []);

  return (
    <main>
      <Hero />
      
      {/* Services Preview */}
      <section className="section container">
        <div className="text-center" style={{marginBottom: '3rem'}}>
          <h2 className="heading-lg">Our Expertise</h2>
          <p className="text-lg">Delivering world-class execution across all sporting verticals.</p>
        </div>
        
        <div className="grid-3">
          {services.map((srv, idx) => (
            <div key={idx} className={`animate-fade-up delay-${(idx+1)*100}`}>
              <ServiceCard {...srv} />
            </div>
          ))}
        </div>
        
        <div className="text-center" style={{marginTop: '3rem'}}>
          <Link to="/services" className="btn-outline">View All Services</Link>
        </div>
      </section>

      {/* Metrics Banner */}
      <section className="section" style={{background: 'var(--card-bg)', borderTop: '1px solid rgba(255,45,45,0.2)', borderBottom: '1px solid rgba(255,45,45,0.2)'}}>
        <div className="container grid-3" style={{textAlign: 'center'}}>
          <div>
            <h3 className="heading-lg text-accent">50+</h3>
            <p className="text-lg text-outline">Events Managed</p>
          </div>
          <div>
            <h3 className="heading-lg text-accent">100k+</h3>
            <p className="text-lg text-outline">Athletes Engaged</p>
          </div>
          <div>
            <h3 className="heading-lg text-accent">20+</h3>
            <p className="text-lg text-outline">Brand Partners</p>
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="section container">
        <div className="text-center" style={{marginBottom: '3rem'}}>
          <h2 className="heading-lg">Featured Work</h2>
        </div>
        
        <div className="grid-3">
          {portfolio.map((item, idx) => (
            <div key={idx} className={`animate-fade-up delay-${(idx+1)*100}`}>
              <PortfolioCard {...item} />
            </div>
          ))}
        </div>
        
        <div className="text-center" style={{marginTop: '3rem'}}>
          <Link to="/portfolio" className="btn-outline">View Full Portfolio</Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section container">
        <h2 className="heading-lg text-center" style={{marginBottom: '3rem'}}>What Our Partners Say</h2>
        <div className="grid-2">
          <TestimonialCard 
            quote="Outpro.India transformed our corporate sports league. The energy, the execution, and the professional approach were unmatched."
            author="Rahul Sharma"
            role="HR Director"
            company="TechCorp India"
          />
          <TestimonialCard 
            quote="As athletes, we want everything to be perfect. Outpro delivers that perfection flawlessly."
            author="Ananya Singh"
            role="Pro Cyclist"
            company="Himalayan Challenges"
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="section" style={{background: 'var(--accent-color)', color: 'white', textAlign: 'center'}}>
        <div className="container">
          <h2 className="heading-xl" style={{color: 'white'}}>READY TO PLAY?</h2>
          <p className="text-lg" style={{maxWidth: '600px', margin: '0 auto 2rem'}}>
            Let's engineer an unforgettable sports experience together.
          </p>
          <Link to="/contact" className="btn-outline" style={{borderColor: 'white', color: 'white'}}>Let's Build Your Next Event</Link>
        </div>
      </section>
    </main>
  );
};

export default Home;
