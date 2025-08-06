import React from 'react';

const entourage = {
  parentsGroom: [
    'Richard Dumagat',
    'Michelle Dumagat',
  ],
  parentsBride: [
    'Joel Jalapit',
    'Marites Jalapit',
  ],
  maidOfHonor: ['Marry Ruth Jalapit'],
  bestMan: ['Richard Dumagat Jr.'],
  bridesmaids: [
    'Jesraela Jalapit',
    'Richelle Dumagat',
    'Ryza Mae Dumagat',
    'Rhealyn Dumagat',
    'Angel Mae Fukuta',
    'Stephanie Sabando',
    'Nhesa Mojica',
    'Regine Dela Torre',
    'Roxanne Dela Torre',
  ],
  groomsmen: [
    'John Raven Dumagat',
    'Roden Rivero',
    'Ruel Sagliba',
    'Rhoupert Dela Torre',
    'Vincent Roan Gutierrez',
    'Jason Armendarez',
    'Joel Jalapit Jr.',
    'Jerome Gatcho',
    'Jereme Abitona',
  ],
  flowerGirls: [
    'Zamira Lawren Jalapit',
    'Jethreez Doria',
    'Althea Sabando',
  ],
  ringBearer: ['Lorence Venzon'],
  bibleBearer: ['Ram Ram Dela Torre'],
};

const palette = ['#fff5ec', '#020844', '#f9bdbf', '#f1e9e4'];

const WeddingDetailsSection = ({ config }) => {
  return (
    <section className="wedding-details-section py-5">
      <div className="container">
        <div className="section-header text-center mb-5">
          <h2 className="section-title">Wedding Details</h2>
        </div>
        <div className="row mb-5">
          {/* Entourage */}
          <div className="col-12 mb-5">
            <div className="wedding-detail-card p-4 h-100 shadow-sm rounded bg-white">
              <h3 className="mb-4" style={{ color: '#020844', fontFamily: 'Dancing Script, cursive', fontSize: '2rem' }}>The Entourage</h3>
              <div className="row">
                <div className="col-md-6 col-lg-3 mb-3">
                  <h5 className="fw-bold" style={{ color: '#f9bdbf' }}>Parents of the Groom</h5>
                  <ul className="list-unstyled mb-4">
                    {entourage.parentsGroom.map((name, i) => <li key={i}>{name}</li>)}
                  </ul>
                  <h5 className="fw-bold" style={{ color: '#f9bdbf' }}>Best Man</h5>
                  <ul className="list-unstyled mb-4">
                    {entourage.bestMan.map((name, i) => <li key={i}>{name}</li>)}
                  </ul>
                  <h5 className="fw-bold" style={{ color: '#f9bdbf' }}>Ring Bearer</h5>
                  <ul className="list-unstyled mb-4">
                    {entourage.ringBearer.map((name, i) => <li key={i}>{name}</li>)}
                  </ul>
                  <h5 className="fw-bold" style={{ color: '#f9bdbf' }}>Bible Bearer</h5>
                  <ul className="list-unstyled mb-4">
                    {entourage.bibleBearer.map((name, i) => <li key={i}>{name}</li>)}
                  </ul>
                </div>
                <div className="col-md-6 col-lg-3 mb-3">
                  <h5 className="fw-bold" style={{ color: '#f9bdbf' }}>Parents of the Bride</h5>
                  <ul className="list-unstyled mb-4">
                    {entourage.parentsBride.map((name, i) => <li key={i}>{name}</li>)}
                  </ul>
                  <h5 className="fw-bold" style={{ color: '#f9bdbf' }}>Maid of Honor</h5>
                  <ul className="list-unstyled mb-4">
                    {entourage.maidOfHonor.map((name, i) => <li key={i}>{name}</li>)}
                  </ul>
                  <h5 className="fw-bold" style={{ color: '#f9bdbf' }}>Flower Girls</h5>
                  <ul className="list-unstyled mb-4">
                    {entourage.flowerGirls.map((name, i) => <li key={i}>{name}</li>)}
                  </ul>
                </div>
                <div className="col-md-6 col-lg-3 mb-3">
                  <h5 className="fw-bold" style={{ color: '#f9bdbf' }}>Bridesmaids</h5>
                  <ul className="list-unstyled mb-4">
                    {entourage.bridesmaids.map((name, i) => <li key={i}>{name}</li>)}
                  </ul>
                </div>
                <div className="col-md-6 col-lg-3 mb-3">
                  <h5 className="fw-bold" style={{ color: '#f9bdbf' }}>Groomsmen</h5>
                  <ul className="list-unstyled mb-4">
                    {entourage.groomsmen.map((name, i) => <li key={i}>{name}</li>)}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* Attire Guide */}
          <div className="col-md-6 mb-5">
            <div className="wedding-detail-card p-4 h-100 shadow-sm rounded bg-white text-center">
              <h4 className="mb-3" style={{ color: '#020844', fontFamily: 'Dancing Script, cursive' }}>Attire Guide</h4>
              <p className="mb-3">We would love to see you in your <b>semi-formal attire</b>.<br/>Please dress according to our wedding colors:</p>
              <div className="d-flex justify-content-center mb-3" style={{ gap: '1rem' }}>
                {palette.map((color, i) => (
                  <span key={i} style={{ display: 'inline-block', width: 32, height: 32, borderRadius: '50%', background: color, border: '2px solid #fff', boxShadow: '0 2px 6px rgba(2,8,68,0.08)' }}></span>
                ))}
              </div>
              <div className="mb-2 d-flex justify-content-center align-items-center">
                <img 
                  src="/images/attire-guide.png" 
                  alt="Wedding Guest Attire Guide" 
                  style={{ 
                    maxWidth: '100%', 
                    height: 'auto', 
                    maxHeight: '300px',
                    borderRadius: '8px',
                    boxShadow: '0 4px 12px rgba(2, 8, 68, 0.1)'
                  }} 
                />
              </div>
              {/* <small className="text-muted">(Replace with your own attire inspiration photo if desired)</small> */}
            </div>
          </div>
          {/* Gift Guide */}
          <div className="col-md-6 mb-5">
            <div className="wedding-detail-card p-4 h-100 shadow-sm rounded bg-white text-center">
              <h4 className="mb-3" style={{ color: '#020844', fontFamily: 'Dancing Script, cursive' }}>Gift Guide</h4>
              <p style={{ fontFamily: 'Lora, serif', color: '#555' }}>
                As love is what the night is all about, your presence is one we can’t celebrate without.<br/>
                But should you still believe that a gift is worth giving, a small envelope for our future is a delightful blessing.
              </p>
            </div>
          </div>
        </div>
        {/* FAQ Extras */}
        <div className="row mb-5">
          <div className="col-md-6 mb-4">
            <div className="wedding-detail-card p-4 h-100 shadow-sm rounded bg-white">
              <h5 className="mb-3" style={{ color: '#f9bdbf', fontFamily: 'Dancing Script, cursive' }}>Can I bring someone else to your wedding with me?</h5>
              <p style={{ fontFamily: 'Lora, serif', color: '#555' }}>
                Unfortunately, no. We hope you understand that we can no longer accommodate those who are not in our guest list due to limited seats. Each seat and table has a name assigned.
              </p>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div className="wedding-detail-card p-4 h-100 shadow-sm rounded bg-white">
              <h5 className="mb-3" style={{ color: '#f9bdbf', fontFamily: 'Dancing Script, cursive' }}>Can we bring our kids to the wedding?</h5>
              <p style={{ fontFamily: 'Lora, serif', color: '#555' }}>
                We certainly love your kids, but due to necessity rather than choice, we regretfully can’t accommodate them at the venue. The only kids attending are those who are part of the entourage and those requested. We hope you understand and enjoy the night off.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeddingDetailsSection;