import React from 'react';

const StorySection = ({ config }) => {
  if (!config.story.show) return null;

  return (
    <section className="story-section py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10 col-md-12 col-12">
            <div className="section-header text-center mb-5">
              <h2 className="section-title">{config.story.title}</h2>
            </div>
            
            <div className="story-timeline">
              {config.story.events.map((event, index) => (
                <div key={index} className={`story-item ${index % 2 === 0 ? 'left' : 'right'}`}>
                  <div className="story-content">
                    <div className="story-image mb-3">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="img-fluid rounded"
                        style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                      />
                    </div>
                    <div className="story-text">
                      <div className="story-date">{event.date}</div>
                      <h4 className="story-title">{event.title}</h4>
                      <p className="story-description">{event.description}</p>
                    </div>
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

export default StorySection; 