import React from 'react';

const WeddingDetailsSection = ({ config }) => {
  if (!config.weddingDetails || !config.weddingDetails.show) return null;

  return (
    <section className="wedding-details-section py-5">
      <div className="container">
        <div className="section-header text-center mb-5">
          <h2 className="section-title">Wedding Details</h2>
        </div>
        <div className="row justify-content-center">
          {config.weddingDetails.items.map((item, idx) => (
            <div className="col-lg-6 col-md-6 col-12 mb-4" key={idx}>
              <div className="wedding-detail-card p-4 h-100 shadow-sm rounded bg-white">
                <h4 className="mb-3" style={{ color: '#d4af37', fontFamily: 'Dancing Script, cursive' }}>{item.title}</h4>
                <p style={{ fontFamily: 'Lora, serif', color: '#555' }}>{item.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WeddingDetailsSection;