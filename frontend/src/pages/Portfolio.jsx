import React, { useEffect, useState } from 'react';
import PortfolioCard from '../components/PortfolioCard';
import { fetchGET } from '../services/api';

const Portfolio = () => {
  const [portfolio, setPortfolio] = useState([]);
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    const loadPortfolio = async () => {
      const data = await fetchGET('/portfolio');
      if (data && data.length > 0) {
        setPortfolio(data);
      } else {
        setPortfolio([
          { title: "National Corporate League", category: "Corporate", kpis: [{label: "Participants", value: "1,200"}], image: "" },
          { title: "Himalayan Adventure Challenge", category: "Adventure", kpis: [{label: "Athletes", value: "300"}], image: "" },
          { title: "City T20 Championship", category: "Tournaments", kpis: [{label: "Spectators", value: "5,000+"}], image: "" },
          { title: "Desert Marathon", category: "Adventure", kpis: [{label: "Runners", value: "800"}], image: "" },
          { title: "TechCorp Annual Sports", category: "Corporate", kpis: [{label: "Employees", value: "2,000"}], image: "" }
        ]);
      }
    };
    loadPortfolio();
  }, []);

  const categories = ['All', 'Corporate', 'Tournaments', 'Adventure'];
  
  const filteredPortfolio = filter === 'All' 
    ? portfolio 
    : portfolio.filter(p => p.category === filter);

  return (
    <main style={{paddingTop: '6rem'}}>
      <div className="container section">
        <div className="text-center" style={{marginBottom: '3rem'}}>
          <h1 className="heading-xl">OUR <span className="text-accent">PORTFOLIO</span></h1>
          <p className="text-lg">See how we turn vision into reality.</p>
        </div>

        <div style={{display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '3rem', flexWrap: 'wrap'}}>
          {categories.map(cat => (
            <button 
              key={cat} 
              className={`btn-outline ${filter === cat ? 'active' : ''}`}
              style={{
                backgroundColor: filter === cat ? 'var(--accent-color)' : 'transparent',
                borderColor: filter === cat ? 'var(--accent-color)' : 'white'
              }}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid-3">
          {filteredPortfolio.map((item, idx) => (
            <div key={idx} className="animate-fade-up">
              <PortfolioCard {...item} />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Portfolio;
