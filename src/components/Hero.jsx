import React from 'react';

const Hero = () => {
  const scrollToFeatures = () => {
    document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-purple-50 to-purple-100">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent animate-fade-in">
            Supply Chain Armor for P21 (work in progress)
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-delay">
            Protect your margin and detect vendor price leaks before they reach your ERP.<br />
            Sproxx gives buyers the clarity and control they deserve.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-delay-2">
            <a 
              href="https://app.sproxx.io" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-purple-600 to-purple-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-purple-700 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-purple-200"
            >
              Launch App
            </a>
            <button 
              onClick={scrollToFeatures}
              className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-purple-600 hover:text-white transition-all duration-300 transform hover:scale-105"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
