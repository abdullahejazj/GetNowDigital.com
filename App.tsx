
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Impact from './components/Impact';
import Footer from './components/Footer';
import ServicesPage from './components/ServicesPage';
import ConsultModal from './components/ConsultModal';

function App() {
  const [currentView, setCurrentView] = useState<'home' | 'services'>('home');
  const [isConsultModalOpen, setIsConsultModalOpen] = useState(false);
  const whatsappNumber = "601139103321";
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;

  // Scroll to top when view changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentView]);

  return (
    <div className="min-h-screen bg-white selection:bg-blue-100 selection:text-google-blue relative">
      <Navbar 
        onNavigate={setCurrentView} 
        currentView={currentView} 
        onOpenConsult={() => setIsConsultModalOpen(true)} 
      />
      
      <main>
        {currentView === 'home' ? (
          <>
            <Hero onOpenConsult={() => setIsConsultModalOpen(true)} />
            
            {/* Statistics Strip */}
            <section className="border-y border-gray-100 py-12 px-4 bg-white">
              <div className="max-w-7xl mx-auto flex flex-wrap justify-around gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold text-google-blue">500+</div>
                  <div className="text-sm font-medium text-gray-500 uppercase tracking-widest mt-1">Clients Consulted</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-google-blue">98%</div>
                  <div className="text-sm font-medium text-gray-500 uppercase tracking-widest mt-1">Satisfaction Rate</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-google-blue">$2B+</div>
                  <div className="text-sm font-medium text-gray-500 uppercase tracking-widest mt-1">Revenue Enabled</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-google-blue">120+</div>
                  <div className="text-sm font-medium text-gray-500 uppercase tracking-widest mt-1">Global Experts</div>
                </div>
              </div>
            </section>

            <Services />
            <Impact />

            {/* FAQ Section Style */}
            <section id="faqs" className="py-24 px-4 bg-gray-50">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Frequently Asked Questions</h2>
                <div className="space-y-4">
                  {[
                    { q: "How does the initial consultation work?", a: "We start with a discovery session where we understand your business goals. From there, we build a tailored strategy that covers tech, marketing, and operations." },
                    { q: "Why focus on consultation rather than just building?", a: "Building the wrong thing perfectly is a waste of capital. GetNowDigital ensures you're building the right solution for your specific market needs." },
                    { q: "Can you help with existing projects?", a: "Yes. Many of our clients come to us for 'Digital Refactoring' where we optimize existing software and marketing stacks for better performance." },
                    { q: "Do you offer ongoing support?", a: "Absolutely. We offer retainer-based managed services and IT infrastructure support to ensure your platform scales alongside your business growth." }
                  ].map((item, idx) => (
                    <div key={idx} className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                      <h4 className="font-bold text-gray-900 mb-2">{item.q}</h4>
                      <p className="text-gray-600 text-sm">{item.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Final CTA */}
            <section className="py-24 px-4 text-center bg-white border-t border-gray-100">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to transform your business?</h2>
                <p className="text-xl text-gray-600 mb-10">Join thousands of businesses that trust GetNowDigital for their digital strategy and engineering. Contact us for a free audit today.</p>
                <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
                  <button 
                    onClick={() => setIsConsultModalOpen(true)}
                    className="bg-google-blue text-white font-bold px-12 py-5 rounded-lg text-lg hover:shadow-2xl transition-all w-full sm:w-auto text-center"
                  >
                    Schedule Your Free Audit
                  </button>
                  <button 
                    onClick={() => setCurrentView('services')}
                    className="border border-google-blue text-google-blue font-bold px-12 py-5 rounded-lg text-lg hover:bg-blue-50 transition-all w-full sm:w-auto"
                  >
                    View All Services
                  </button>
                </div>
              </div>
            </section>
          </>
        ) : (
          <ServicesPage onNavigate={setCurrentView} onOpenConsult={() => setIsConsultModalOpen(true)} />
        )}
      </main>
      
      {/* Floating WhatsApp Button */}
      <a 
        href={whatsappUrl} 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-[60] bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-all whatsapp-pulse group"
        aria-label="Chat on WhatsApp"
      >
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.432 5.626 1.433h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
        <span className="absolute right-full mr-4 bg-gray-900 text-white px-3 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Chat with us on WhatsApp
        </span>
      </a>

      <ConsultModal isOpen={isConsultModalOpen} onClose={() => setIsConsultModalOpen(false)} />
      <Footer onNavigate={setCurrentView} />
    </div>
  );
}

export default App;
