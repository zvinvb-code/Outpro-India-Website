import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import { FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Link to="/" className="nav-logo">
            OUTPRO<span className="text-accent">.INDIA</span>
          </Link>
          <p className="footer-tagline">We plan. You celebrate.</p>
          <div className="social-links">
            <a href="#" className="social-icon"><FaInstagram size={20} /></a>
            <a href="#" className="social-icon"><FaLinkedin size={20} /></a>
            <a href="#" className="social-icon"><FaTwitter size={20} /></a>
          </div>
        </div>

        <div className="footer-links">
          <h4 className="footer-heading">Quick Links</h4>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/portfolio">Portfolio</Link></li>
            <li><Link to="/testimonials">Testimonials</Link></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4 className="footer-heading">Contact Us</h4>
          <ul>
            <li><Mail size={16} className="text-accent" /> outpro.india@gmail.com</li>
            <li><Phone size={16} className="text-accent" /> +91 98765 43210</li>
            <li><MapPin size={16} className="text-accent" /> Jaipur, Rajasthan, India</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Outpro.India. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
