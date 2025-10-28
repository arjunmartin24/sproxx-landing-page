import React from 'react';

const DemoSection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-gradient-to-r from-green-600 to-cyan-600 rounded-full text-sm font-mono text-white mb-4">
              SYSTEM OVERVIEW
            </div>
            <h2 className="text-4xl md:text-6xl font-black gradient-text mb-6">
              How It Works
            </h2>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Connect your Gmail, let Sproxx parse confirmations, and visualize discrepancies in one powerful dashboard.
            </p>
          </div>

          {/* Demo Dashboard */}
          <div className="relative">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 h-80 md:h-96 w-full rounded-2xl border border-gray-700 shadow-2xl overflow-hidden relative">
              {/* Dashboard header */}
              <div className="bg-gradient-to-r from-gray-800 to-gray-700 px-6 py-4 border-b border-gray-600">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-gray-400 font-mono text-sm ml-4">SPROXX DASHBOARD v2.1</span>
                  </div>
                  <div className="flex items-center gap-2 text-green-400 font-mono text-sm">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    LIVE
                  </div>
                </div>
              </div>

              {/* Dashboard content */}
              <div className="p-6 h-full flex items-center justify-center relative">
                {/* Animated grid background */}
                <div className="absolute inset-0 opacity-20">
                  <div className="grid grid-cols-12 gap-4 h-full">
                    {Array.from({ length: 48 }).map((_, i) => (
                      <div key={i} className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded animate-pulse" style={{animationDelay: `${i * 0.1}s`}}></div>
                    ))}
                  </div>
                </div>

                {/* Main content */}
                <div className="text-center relative z-10">
                  <div className="mb-6">
                    <div className="inline-block p-4 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg mb-4">
                      <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Real-time Analytics Dashboard</h3>
                    <p className="text-gray-400 text-lg">
                      Advanced monitoring and visualization
                    </p>
                  </div>

                  {/* Status indicators */}
                  <div className="flex justify-center gap-6 text-sm">
                    <div className="flex items-center gap-2 text-green-400">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="font-mono">MONITORING</span>
                    </div>
                    <div className="flex items-center gap-2 text-blue-400">
                      <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                      <span className="font-mono">ANALYZING</span>
                    </div>
                    <div className="flex items-center gap-2 text-purple-400">
                      <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                      <span className="font-mono">ALERTING</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating elements around dashboard */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg rotate-12 float"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg -rotate-12 float" style={{animationDelay: '2s'}}></div>
            <div className="absolute top-1/2 -left-8 w-4 h-4 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg float" style={{animationDelay: '4s'}}></div>
          </div>

          {/* Process steps */}
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {[
              { step: "01", title: "Connect", description: "Secure Gmail integration via OAuth" },
              { step: "02", title: "Parse", description: "AI extracts pricing data from confirmations" },
              { step: "03", title: "Monitor", description: "Real-time alerts for price discrepancies" }
            ].map((item, index) => (
              <div key={index} className="text-center group">
                <div className="inline-block w-16 h-16 bg-gradient-to-br from-gray-800 to-gray-700 rounded-full border border-gray-600 flex items-center justify-center mb-4 group-hover:border-blue-500 transition-colors duration-300">
                  <span className="text-2xl font-bold text-white">{item.step}</span>
                </div>
                <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                <p className="text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
