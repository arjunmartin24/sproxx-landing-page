import React from 'react';

const Features = () => {
  const features = [
    {
      title: "Detect Hidden Backorders",
      description: "Instantly flag delayed shipments buried in vendor confirmations with AI-powered pattern recognition.",
      icon: (
        <div className="relative">
          <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center glow-purple">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
          </div>
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full animate-pulse"></div>
        </div>
      ),
      color: "from-red-500 to-red-600",
      glow: "glow-purple"
    },
    {
      title: "Catch Price Hikes Early",
      description: "Compare every confirmation against your vendor price list in real time with machine learning algorithms.",
      icon: (
        <div className="relative">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center glow-blue">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
          </div>
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full animate-pulse"></div>
        </div>
      ),
      color: "from-blue-500 to-blue-600",
      glow: "glow-blue"
    },
    {
      title: "Auto-Build Vendor Baselines",
      description: "Let Sproxx learn each supplier's pricing pattern and build your defense with advanced neural networks.",
      icon: (
        <div className="relative">
          <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center glow-green">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          </div>
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full animate-pulse"></div>
        </div>
      ),
      color: "from-purple-500 to-purple-600",
      glow: "glow-green"
    }
  ];

  return (
    <section id="features" className="py-20 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-sm font-mono text-white mb-4">
            CORE SYSTEMS
          </div>
          <h2 className="text-4xl md:text-6xl font-black gradient-text mb-6">
            Protection Features
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Advanced AI-powered monitoring systems that protect your supply chain margins
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group relative bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-gray-700 hover-lift transition-all duration-500 overflow-hidden"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Background gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              
              {/* Glow effect */}
              <div className={`absolute inset-0 rounded-2xl ${feature.glow} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              {/* Content */}
              <div className="relative z-10">
                <div className="flex justify-center mb-6">
                  {feature.icon}
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-white text-center group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-gray-400 text-center leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {feature.description}
                </p>

                {/* Status indicator */}
                <div className="mt-6 flex items-center justify-center gap-2 text-sm text-green-400 font-mono">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  ACTIVE
                </div>
              </div>

              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-transparent to-gray-700 rounded-bl-2xl"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-gray-800 to-gray-700 rounded-lg border border-gray-600">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-gray-300 font-mono">All systems operational • Ready for deployment</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
