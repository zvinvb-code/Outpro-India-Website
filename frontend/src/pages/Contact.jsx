import React, { useState } from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    }, 1000);
  };

  return (
    <main style={{paddingTop: '6rem'}}>
      <div className="container section">
        <div className="text-center" style={{marginBottom: '4rem'}}>
          <h1 className="heading-xl">LET'S <span className="text-accent">BUILD</span></h1>
          <p className="text-lg">Your Next Extraordinary Event.</p>
        </div>

        <div className="grid-2">
          {/* Contact Info */}
          <div className="animate-fade-up">
            <h2 className="heading-lg" style={{marginBottom: '2rem'}}>Get In Touch</h2>
            <div style={{display: 'flex', flexDirection: 'column', gap: '1.5rem'}}>
              <div style={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
                <div style={{background: 'rgba(255,45,45,0.1)', padding: '1rem', borderRadius: '50%'}}>
                  <Mail className="text-accent" />
                </div>
                <div>
                  <h4 style={{fontSize: '1.1rem', marginBottom: '0.2rem'}}>Email</h4>
                  <p style={{color: '#888'}}>outpro.india@gmail.com</p>
                </div>
              </div>
              <div style={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
                <div style={{background: 'rgba(255,45,45,0.1)', padding: '1rem', borderRadius: '50%'}}>
                  <Phone className="text-accent" />
                </div>
                <div>
                  <h4 style={{fontSize: '1.1rem', marginBottom: '0.2rem'}}>Phone</h4>
                  <p style={{color: '#888'}}>+91 98765 43210</p>
                </div>
              </div>
              <div style={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
                <div style={{background: 'rgba(255,45,45,0.1)', padding: '1rem', borderRadius: '50%'}}>
                  <MapPin className="text-accent" />
                </div>
                <div>
                  <h4 style={{fontSize: '1.1rem', marginBottom: '0.2rem'}}>Location</h4>
                  <p style={{color: '#888'}}>Jaipur, Rajasthan, India</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="glass-card animate-fade-up delay-200">
            {submitted ? (
              <div className="text-center" style={{padding: '2rem 0'}}>
                <h3 className="heading-md text-accent">Message Sent!</h3>
                <p>We'll get back to you shortly to start planning.</p>
                <button className="btn-outline" style={{marginTop: '2rem'}} onClick={() => setSubmitted(false)}>Send Another</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{display: 'flex', flexDirection: 'column', gap: '1.5rem'}}>
                <div>
                  <label style={{display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: '#ccc'}}>Name</label>
                  <input 
                    type="text" 
                    required 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    style={{width: '100%', padding: '1rem', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: 'white', borderRadius: '4px'}} 
                  />
                </div>
                <div>
                  <label style={{display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: '#ccc'}}>Email</label>
                  <input 
                    type="email" 
                    required 
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    style={{width: '100%', padding: '1rem', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: 'white', borderRadius: '4px'}} 
                  />
                </div>
                <div>
                  <label style={{display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: '#ccc'}}>Message</label>
                  <textarea 
                    rows="4" 
                    required 
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    style={{width: '100%', padding: '1rem', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: 'white', borderRadius: '4px', resize: 'vertical'}} 
                  ></textarea>
                </div>
                <button type="submit" className="btn-primary" style={{width: '100%'}}>Send Inquiry</button>
              </form>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
