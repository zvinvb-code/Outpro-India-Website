import React from 'react';
import { Quote } from 'lucide-react';
import './TestimonialCard.css';

const TestimonialCard = ({ quote, author, role, company }) => {
  return (
    <div className="testimonial-card">
      <Quote size={40} className="testimonial-icon" />
      <p className="testimonial-quote">"{quote}"</p>
      <div className="testimonial-author-info">
        <h4 className="testimonial-author">{author}</h4>
        <p className="testimonial-role">{role}, <span className="text-accent">{company}</span></p>
      </div>
    </div>
  );
};

export default TestimonialCard;