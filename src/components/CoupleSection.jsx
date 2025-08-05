import React from 'react';

const CoupleSection = ({ config }) => {
  if (!config.couple.show) return null;

  return (
    <section className="couple-section py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10 col-12 text-center">
            <div className="section-header mb-5">
              <h2 className="section-title">Partners</h2>
            </div>
            
            <div className="row">
              <div className="col-lg-6 col-md-6 col-12 mb-4">
                <div className="partner-card">
                  <div className="partner-image mb-4">
                    <img
                      src={config.couple.bride.image}
                      alt={config.couple.bride.name}
                      className="img-fluid rounded-circle"
                      style={{ width: '200px', height: '200px', objectFit: 'cover' }}
                    />
                  </div>
                  <div className="partner-info">
                    <h3 className="partner-name">{config.couple.bride.name}</h3>
                    <p className="partner-description">{config.couple.bride.description}</p>
                  </div>
                </div>
              </div>
              
              <div className="col-lg-6 col-md-6 col-12 mb-4">
                <div className="partner-card">
                  <div className="partner-image mb-4">
                    <img
                      src={config.couple.groom.image}
                      alt={config.couple.groom.name}
                      className="img-fluid rounded-circle"
                      style={{ width: '200px', height: '200px', objectFit: 'cover' }}
                    />
                  </div>
                  <div className="partner-info">
                    <h3 className="partner-name">{config.couple.groom.name}</h3>
                    <p className="partner-description">{config.couple.groom.description}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoupleSection; 