import React, { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is Sproxx?",
      answer: "Sproxx is an advanced AI-powered real-time watchdog that monitors your vendor confirmations and flags anomalies before they hit P21. It uses machine learning algorithms to detect patterns and protect your supply chain margins.",
      icon: "🤖"
    },
    {
      question: "Do I need to install anything?",
      answer: "No installation required. Sproxx runs directly in your browser and connects securely to Gmail through OAuth. It's a cloud-based solution that works instantly without any software downloads.",
      icon: "⚡"
    },
    {
      question: "Can it learn new vendor formats?",
      answer: "Absolutely. Sproxx uses advanced neural networks that continuously adapt to new layouts and pricing patterns. The system becomes smarter over time as it processes more data from your vendors.",
      icon: "🧠"
    },
    {
      question: "How secure is my data?",
      answer: "Enterprise-grade security with end-to-end encryption. Your data is processed in secure, SOC 2 compliant environments and never stored permanently. All connections use industry-standard OAuth protocols.",
      icon: "🔒"
    },
    {
      question: "What ERP systems does it support?",
      answer: "Currently optimized for P21, with plans to expand to SAP, Oracle, and other major ERP systems. The platform is designed to be ERP-agnostic and can adapt to various data formats.",
      icon: "🔗"
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full text-sm font-mono text-white mb-4">
            SUPPORT CENTER
          </div>
          <h2 className="text-4xl md:text-6xl font-black gradient-text mb-6">
            FAQ Terminal
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Get answers to common questions about our AI-powered supply chain protection system
          </p>
        </div>

        {/* FAQ Grid */}
        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="group relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border border-gray-700 mb-6 hover-lift transition-all duration-500 overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Background glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <button
                className="w-full px-8 py-6 text-left transition-all duration-300 flex justify-between items-center group-hover:bg-gradient-to-r group-hover:from-blue-600/5 group-hover:to-purple-600/5"
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex items-center gap-4">
                  <div className="text-2xl">{faq.icon}</div>
                  <span className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                    {faq.question}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-cyan-400 text-2xl font-light transition-transform duration-300 group-hover:rotate-180">
                    {openIndex === index ? '−' : '+'}
                  </span>
                </div>
              </button>
              
              {openIndex === index && (
                <div className="px-8 pb-6 text-gray-300 text-lg leading-relaxed border-t border-gray-700 bg-gradient-to-r from-gray-800/50 to-gray-900/50">
                  <div className="pt-4 flex items-start gap-4">
                    <div className="w-1 h-1 bg-cyan-400 rounded-full mt-3 flex-shrink-0"></div>
                    <p>{faq.answer}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex flex-col sm:flex-row items-center gap-6 px-8 py-6 bg-gradient-to-r from-gray-800 to-gray-700 rounded-2xl border border-gray-600">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-gray-300 font-mono">Need more help?</span>
            </div>
            <a 
              href="mailto:support@sproxx.io"
              className="px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-lg font-bold hover:from-cyan-500 hover:to-blue-500 transition-all duration-300 hover-lift"
            >
              Contact Support
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
