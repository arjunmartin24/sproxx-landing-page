import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import DemoSection from './components/DemoSection';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-inter text-gray-900 bg-gradient-to-b from-white via-purple-50 to-purple-100 scroll-smooth">
      <Hero />
      <Features />
      <DemoSection />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
