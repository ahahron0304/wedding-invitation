import React from 'react';

const EventsSection = ({ config }) => {
  if (!config.events.show) return null;

  return (
    <section className="events-section py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10 col-md-12 col-12">
            <div className="section-header text-center mb-5">
              <h2 className="section-title">{config.events.title}</h2>
            </div>
            <div className="row">
              {config.events.events.map((event, index) => (
                <div key={index} className="col-lg-6 col-md-6 col-12 mb-4">
                  <div className="event-card">
                    <div className="event-header">
                      <h4 className="event-title">{event.title}</h4>
                    </div>
                    <div className="event-body">
                      <div className="event-date">
                        <i className="fas fa-calendar-alt me-2"></i>
                        {event.date}
                      </div>
                      <div className="event-time">
                        <i className="fas fa-clock me-2"></i>
                        {event.time}
                      </div>
                      <div className="event-location">
                        <i className="fas fa-map-marker-alt me-2"></i>
                        {event.location}
                      </div>
                      {event.mapEmbedUrl && (
                        <div className="event-map my-3">
                          <iframe
                            src={event.mapEmbedUrl}
                            width="100%"
                            height="250"
                            style={{ border: 0, borderRadius: '12px' }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Event Location Map"
                          ></iframe>
                        </div>
                      )}
                      {event.mapEmbedUrl && (
                        <a
                          href={event.mapEmbedUrl.replace('embed?', 'maps?')}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-outline-primary mt-3"
                        >
                          View on Google Maps
                        </a>
                      )}
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

export default EventsSection; 