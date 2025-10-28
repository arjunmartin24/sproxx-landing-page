import React from 'react';

const Hero = () => {
  const scrollToFeatures = () => {
    document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-purple-400 rounded-full animate-ping delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-pink-400 rounded-full animate-ping delay-2000"></div>
        <div className="absolute bottom-1/3 right-1/4 w-1 h-1 bg-cyan-400 rounded-full animate-ping delay-3000"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Main heading with futuristic styling */}
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 gradient-text neon-text fade-in-up">
              SPROXX
            </h1>
            <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-300 mb-4 fade-in-up-delay-1">
              Supply Chain Armor
            </div>
            <div className="text-lg md:text-xl text-blue-400 font-mono tracking-wider fade-in-up-delay-2">
              &lt; TERMINUS WATCHDOG SUITE /&gt;
            </div>
          </div>

          {/* Subtitle with cyber styling */}
          <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed fade-in-up-delay-3">
            <span className="text-cyan-400 font-semibold">Real-time monitoring</span> that protects your margins and detects vendor price leaks before they reach your ERP.<br />
            <span className="text-purple-400 font-semibold">Sproxx gives buyers the clarity and control they deserve.</span>
          </p>

          {/* CTA Buttons with futuristic design */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center fade-in-up-delay-3">
            <a 
              href="https://app.sproxx.io" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white px-10 py-4 rounded-lg font-bold text-lg hover-lift glow-blue transition-all duration-300 transform hover:scale-105 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                LAUNCH APP
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
            
            <button 
              onClick={scrollToFeatures}
              className="group relative border-2 border-cyan-400 text-cyan-400 px-10 py-4 rounded-lg font-bold text-lg hover-lift transition-all duration-300 transform hover:scale-105 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
                EXPLORE FEATURES
              </span>
              <div className="absolute inset-0 bg-cyan-400 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            </button>
          </div>

          {/* Status indicator */}
          <div className="mt-16 flex items-center justify-center gap-2 text-sm text-green-400 font-mono fade-in-up-delay-3">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            SYSTEM STATUS: OPERATIONAL
          </div>
        </div>
      </div>

      {/* Floating geometric shapes */}
      <div className="absolute top-20 left-10 w-16 h-16 border border-blue-400 opacity-20 rotate-45 float"></div>
      <div className="absolute top-40 right-20 w-12 h-12 border border-purple-400 opacity-20 rotate-12 float" style={{animationDelay: '2s'}}></div>
      <div className="absolute bottom-40 left-20 w-20 h-20 border border-cyan-400 opacity-20 rotate-45 float" style={{animationDelay: '4s'}}></div>
    </section>
  );
};

export default Hero;
