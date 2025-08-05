import React from 'react';

const HeroSection = ({ config }) => {
  if (!config.hero.show) return null;

  return (
    <section className="hero-section" style={{ 
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${config.hero.image})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed'
    }}>
      <div className="hero-overlay">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-10 col-12 text-center">
              <div className="hero-content">
                <div className="save-the-date">
                  <h2 className="save-the-date-text">Save The Date</h2>
                </div>
                
                <div className="couple-names">
                  <h1 className="display-3 text-white fw-bold mb-3">
                    {config.hero.names}
                  </h1>
                </div>
                
                <div className="wedding-info">
                  <h3 className="tagline text-white mb-4">
                    {config.hero.tagline}
                  </h3>
                  <div className="wedding-date-time">
                    <h2 className="date-text text-white mb-2">
                      {config.hero.weddingDate}
                    </h2>
                    <p className="time-text text-white">
                      {config.hero.time}
                    </p>
                  </div>
                </div>
                
                <div className="hero-cta mt-5">
                  <button className="btn btn-outline-light btn-lg px-5 py-3">
                    Attend Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;