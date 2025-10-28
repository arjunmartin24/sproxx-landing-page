import React from 'react';

const DemoSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-purple-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-800">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Connect your Gmail, let Sproxx parse confirmations, and visualize discrepancies in one dashboard.
          </p>
          <div className="bg-gray-200 h-64 md:h-80 w-full rounded-xl shadow-lg flex items-center justify-center">
            <div className="text-center">
              <div className="text-6xl mb-4">📊</div>
              <p className="text-gray-600 text-lg">
                Dashboard Preview
              </p>
              <p className="text-gray-500 text-sm mt-2">
                Real-time vendor confirmation monitoring
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
