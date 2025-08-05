import React, { useState, useEffect } from 'react';

const CountdownTimer = ({ config }) => {
  const weddingDate = new Date(config.countdown.targetDate);
  const [timeLeft, setTimeLeft] = useState(weddingDate - new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(weddingDate - new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, [weddingDate]);

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((timeLeft / 1000 / 60) % 60);
  const seconds = Math.floor((timeLeft / 1000) % 60);

  if (!config.countdown.show) return null;

  return (
    <section className="countdown-timer py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10 col-12 text-center">
            <div className="countdown-header mb-5">
              <h2 className="countdown-title">Countdown to Our Big Day</h2>
            </div>
            
            <div className="row">
              <div className="col-lg-3 col-md-6 col-6 mb-4">
                <div className="countdown-box">
                  <div className="countdown-number">{days}</div>
                  <div className="countdown-label">Days</div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-6 mb-4">
                <div className="countdown-box">
                  <div className="countdown-number">{hours}</div>
                  <div className="countdown-label">Hours</div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-6 mb-4">
                <div className="countdown-box">
                  <div className="countdown-number">{minutes}</div>
                  <div className="countdown-label">Minutes</div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-6 mb-4">
                <div className="countdown-box">
                  <div className="countdown-number">{seconds}</div>
                  <div className="countdown-label">Seconds</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CountdownTimer;