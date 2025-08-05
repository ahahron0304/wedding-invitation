import React from 'react';

const Footer = ({ config }) => {
  if (!config.footer.show) return null;

  return (
    <footer className="footer py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-12 mb-4">
            <div className="footer-brand">
              <h4>Kring & Joel</h4>
              <p>{config.footer.message}</p>
            </div>
          </div>
          
          <div className="col-lg-6 col-md-6 col-12 mb-4">
            <div className="footer-contact">
              <h5>Contact</h5>
              <ul className="list-unstyled">
                <li><i className="fas fa-envelope me-2"></i>{config.footer.contact.email}</li>
                <li><i className="fas fa-phone me-2"></i>{config.footer.contact.phone}</li>
                <li><i className="fas fa-map-marker-alt me-2"></i>{config.footer.contact.address}</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom text-center mt-4">
          <p>&copy; Copyright 2024 | Kring & Joel Wedding | All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;