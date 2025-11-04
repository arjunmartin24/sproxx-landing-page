import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Hero from './components/Hero';

function App() {
  useEffect(() => {
    AOS.init({ duration: 700, once: true });
  }, []);

  return (
    <div className="font-sans bg-[#0A0A0F] min-h-screen">
      <Hero />
      <section data-aos="fade-up" className="text-center py-24">
        <h2 className="text-3xl font-semibold text-white mb-6">Precision Meets Performance</h2>
        <p className="text-gray-400 max-w-xl mx-auto">
          Unify purchasing, supplier insights, and outbound logistics in one platform built for efficiency and control.
        </p>
      </section>
      <footer className="text-center py-6 text-gray-500 border-t border-gray-800">
        © 2025 Sproxx Inc. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
