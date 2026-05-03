import React from 'react';
import { Target, Users, Zap } from 'lucide-react';

const About = () => {
  return (
    <main style={{paddingTop: '6rem'}}>
      <div className="container section">
        <h1 className="heading-xl text-center" style={{marginBottom: '3rem'}}>
          WE ARE <span className="text-accent">OUTPRO.INDIA</span>
        </h1>
        
        <div className="grid-2" style={{alignItems: 'center'}}>
          <div className="animate-fade-up">
            <h2 className="heading-lg">Our Story</h2>
            <p className="text-lg" style={{marginBottom: '1.5rem'}}>
              Born in Jaipur, Outpro.India was founded with a single mission: to elevate the standard of sports and adventure events across the country. We are an athlete-driven organization, meaning we understand the pulse of the game from the ground up.
            </p>
            <p className="text-lg">
              At Outpro.India, we believe every sporting moment deserves world-class execution. From grassroots tournaments to corporate leagues and adventure challenges, we manage everything from concept to final whistle.
            </p>
          </div>
          
          <div className="glass-card animate-fade-up delay-200">
            <div style={{marginBottom: '2rem'}}>
              <h3 className="heading-md" style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
                <Target className="text-accent" /> Mission
              </h3>
              <p>To engineer flawless, high-energy sports ecosystems that inspire athletes and entertain fans.</p>
            </div>
            
            <div style={{marginBottom: '2rem'}}>
              <h3 className="heading-md" style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
                <Zap className="text-accent" /> Vision
              </h3>
              <p>To be India's premier partner for innovative and premium sports event management.</p>
            </div>
            
            <div>
              <h3 className="heading-md" style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
                <Users className="text-accent" /> Values
              </h3>
              <p>Athlete-First Approach, Data-Driven Execution, Absolute Reliability.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;
