import React from 'react';
import TestimonialCard from '../components/TestimonialCard';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Outpro.India transformed our corporate sports league. The energy, the execution, and the professional approach were unmatched.",
      author: "Rahul Sharma",
      role: "HR Director",
      company: "TechCorp India"
    },
    {
      quote: "As athletes, we want everything to be perfect. Outpro delivers that perfection flawlessly.",
      author: "Ananya Singh",
      role: "Pro Cyclist",
      company: "Himalayan Challenges"
    },
    {
      quote: "The logistics, equipment, and fan engagement were top-tier. Highly recommended for any large-scale tournament.",
      author: "Vikram Mehta",
      role: "Organizer",
      company: "City T20"
    },
    {
      quote: "Our adventure event was a logistical nightmare until Outpro stepped in. They handled everything with absolute precision.",
      author: "Neha Kapoor",
      role: "Founder",
      company: "Desert Explorers"
    }
  ];

  return (
    <main style={{paddingTop: '6rem'}}>
      <div className="container section">
        <div className="text-center" style={{marginBottom: '4rem'}}>
          <h1 className="heading-xl">CLIENT <span className="text-accent">TESTIMONIALS</span></h1>
          <p className="text-lg">Don't just take our word for it.</p>
        </div>

        <div className="grid-2">
          {testimonials.map((test, idx) => (
            <div key={idx} className={`animate-fade-up delay-${(idx%2)*100}`}>
              <TestimonialCard {...test} />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Testimonials;