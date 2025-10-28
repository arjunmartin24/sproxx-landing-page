import React, { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is Sproxx?",
      answer: "Sproxx is a real-time watchdog that monitors your vendor confirmations and flags anomalies before they hit P21."
    },
    {
      question: "Do I need to install anything?",
      answer: "No. It runs directly in your browser and connects securely to Gmail."
    },
    {
      question: "Can it learn new vendor formats?",
      answer: "Yes. Sproxx continuously adapts to new layouts and pricing patterns."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-800">
          Frequently Asked Questions
        </h2>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg mb-6 border border-gray-100 hover:shadow-xl transition-all duration-300">
              <button
                className="w-full px-8 py-6 text-left font-semibold text-gray-800 hover:bg-gray-50 transition-colors flex justify-between items-center rounded-xl"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-lg">{faq.question}</span>
                <span className="text-purple-600 text-2xl font-light">
                  {openIndex === index ? '−' : '+'}
                </span>
              </button>
              {openIndex === index && (
                <div className="px-8 pb-6 text-gray-600 text-lg leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
