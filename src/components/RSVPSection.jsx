import React, { useState } from 'react';

const RSVPSection = ({ config }) => {
  const [formData, setFormData] = useState({
    name: '',
    attending: 'Yes, I will be there',
    numberOfGuests: 1,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert('Thank you for your RSVP!');
  };

  if (!config.rsvp.show) return null;

  return (
    <section className="rsvp-section py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10 col-12 text-center">
            <div className="rsvp-header mb-5">
              <h2 className="rsvp-title">{config.rsvp.title}</h2>
              <p className="rsvp-subtitle">{config.rsvp.subtitle}</p>
            </div>
            <div className="row">
              <div className="col-lg-6 col-md-6 col-12 mb-4">
                <div className="rsvp-form">
                  <form onSubmit={handleSubmit}>
                    <div className="form-group mb-3">
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Name"
                        className="form-control"
                        required
                      />
                    </div>
                    <div className="form-group mb-3">
                      <div className="attendance-options">
                        <label className="attendance-option">
                          <input
                            type="radio"
                            name="attending"
                            value="Yes, I will be there"
                            checked={formData.attending === 'Yes, I will be there'}
                            onChange={handleChange}
                          />
                          <span>Yes, I will be there</span>
                        </label>
                        <label className="attendance-option">
                          <input
                            type="radio"
                            name="attending"
                            value="Sorry, I can't come"
                            checked={formData.attending === 'Sorry, I can\'t come'}
                            onChange={handleChange}
                          />
                          <span>Sorry, I can't come</span>
                        </label>
                      </div>
                    </div>
                    <div className="form-group mb-3">
                      <select
                        name="numberOfGuests"
                        value={formData.numberOfGuests}
                        onChange={handleChange}
                        className="form-control"
                        required
                      >
                        <option value="">Number Of Guests</option>
                        <option value="1">01</option>
                        <option value="2">02</option>
                        <option value="3">03</option>
                        <option value="4">04</option>
                        <option value="5">05</option>
                      </select>
                    </div>
                    <button type="submit" className="btn btn-primary btn-lg w-100">
                      RSVP
                    </button>
                  </form>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-12 mb-4">
                <div className="rsvp-qr-section">
                  <h4>Scan QR Code</h4>
                  <div className="qr-code-container">
                    <img 
                      src="https://via.placeholder.com/200x200/ffffff/000000?text=QR+Code" 
                      alt="RSVP QR Code" 
                      className="img-fluid"
                    />
                  </div>
                  <p className="mt-3">Or use the form above</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RSVPSection;