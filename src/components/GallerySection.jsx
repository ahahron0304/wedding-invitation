import React from 'react';

const GallerySection = ({ config }) => {
  if (!config.gallery.show) return null;

  return (
    <section className="gallery-section py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10 col-md-12 col-12">
            <div className="section-header text-center mb-5">
              <h2 className="section-title">{config.gallery.title}</h2>
            </div>
            
            <div className="row">
              {config.gallery.images.map((image, index) => (
                <div key={index} className="col-lg-4 col-md-6 col-12 mb-4">
                  <div className="gallery-item">
                    <img
                      src={image}
                      alt={`Gallery ${index + 1}`}
                      className="img-fluid rounded"
                      style={{ width: '100%', height: '250px', objectFit: 'cover' }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection; 