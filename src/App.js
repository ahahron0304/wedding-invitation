import React, { useState, useEffect } from 'react';
import HeroSection from './components/HeroSection';
import CountdownTimer from './components/CountdownTimer';
import WeddingDetailsSection from './components/WeddingDetailsSection';
import StorySection from './components/StorySection';
import EventsSection from './components/EventsSection';
import GallerySection from './components/GallerySection';
import RSVPSection from './components/RSVPSection';
import Footer from './components/Footer';
import configData from './config.json';

const App = () => {
  const [config, setConfig] = useState(null);

  useEffect(() => {
    setConfig(configData);
  }, []);

  if (!config) {
    return <div>Loading...</div>;
  }

  return (
    <div className="wedding-app">
      <HeroSection config={config} />
      <CountdownTimer config={config} />
      <WeddingDetailsSection config={config} />
      <StorySection config={config} />
      <EventsSection config={config} />
      <GallerySection config={config} />
      <RSVPSection config={config} />
      <Footer config={config} />
    </div>
  );
};

export default App;