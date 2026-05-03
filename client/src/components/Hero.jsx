import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-bg">
        <div className="hero-overlay"></div>
      </div>
      
      <div className="container hero-content">
        <div className="animate-fade-up">
          <p className="hero-tagline text-accent delay-100">WE PLAN. YOU CELEBRATE.</p>
          <h1 className="heading-xl delay-200">
            ENGINEERING EXTRAORDINARY <br/>
            <span className="text-outline">SPORTS & ADVENTURE</span> <br/>
            EXPERIENCES
          </h1>
          <p className="text-lg delay-300 hero-desc">
            From grassroots tournaments to corporate leagues and adventure challenges, 
            we manage everything from concept to the final whistle.
          </p>
          
          <div className="hero-cta delay-300">
            <Link to="/contact" className="btn-primary">Plan Your Event</Link>
            <Link to="/portfolio" className="btn-outline">View Portfolio</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
