
import React from 'react';

interface ServicesPageProps {
  onNavigate: (view: 'home' | 'services') => void;
  onOpenConsult: () => void;
}

const SERVICE_CATEGORIES = [
  {
    title: "Strategy & Advisory",
    description: "The foundation of every successful digital venture.",
    items: [
      { name: "Digital Transformation", detail: "Holistic modernization of legacy business processes." },
      { name: "Growth Roadmapping", detail: "Step-by-step technical and marketing scaling plans." },
      { name: "Market Analysis", detail: "Deep dives into competitor tech stacks and user behavior." }
    ]
  },
  {
    title: "Product Engineering",
    description: "High-performance code built for the long haul.",
    items: [
      { name: "Custom Web Apps", detail: "SaaS platforms, internal tools, and complex web ecosystems." },
      { name: "Mobile Solutions", detail: "Native iOS and Android apps that users actually love." },
      { name: "Software Architecture", detail: "Building robust, scalable backends for millions of users." }
    ]
  },
  {
    title: "Growth & Identity",
    description: "Visibility that converts impressions into revenue.",
    items: [
      { name: "Performance Marketing", detail: "Data-backed ad campaigns across Google and Meta." },
      { name: "Brand Architecture", detail: "Visual identity systems that build long-term trust." },
      { name: "Creative Production", detail: "Commercial-grade video and photo assets for digital." }
    ]
  }
];

const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate, onOpenConsult }) => {
  return (
    <div className="animate-fadeIn">
      {/* Services Hero */}
      <section className="bg-gray-50 pt-20 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <button 
            onClick={() => onNavigate('home')}
            className="text-google-blue font-medium flex items-center gap-2 mx-auto mb-8 hover:underline"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            Back to Home
          </button>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
            Solutions built for <span className="text-google-blue">your next stage</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            From initial strategy to enterprise-scale engineering, GetNowDigital provides the technical expertise and strategic clarity required to win.
          </p>
        </div>
      </section>

      {/* Deep Dive Categories */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-24">
            {SERVICE_CATEGORIES.map((cat, idx) => (
              <div key={idx} className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                <div className="lg:col-span-4">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">{cat.title}</h2>
                  <p className="text-gray-600">{cat.description}</p>
                  <div className="mt-8">
                    <button onClick={onOpenConsult} className="inline-flex items-center text-google-blue font-bold gap-2 group">
                      Inquire about this
                      <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                    </button>
                  </div>
                </div>
                <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                  {cat.items.map((item, iIdx) => (
                    <div key={iIdx} className="p-6 rounded-xl border border-gray-100 bg-gray-50 hover:bg-white hover:shadow-lg transition-all">
                      <h3 className="font-bold text-gray-900 mb-2">{item.name}</h3>
                      <p className="text-sm text-gray-600 leading-relaxed">{item.detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-24 px-4 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-12">The GetNowDigital Advantage</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { t: "Clarity First", d: "We never write a line of code until the business objective is 100% defined." },
              { t: "Scale Ready", d: "Our architectures are built to handle sudden growth, not just current loads." },
              { t: "Result Focused", d: "We measure success in revenue and efficiency, not just Jira tickets." }
            ].map((box, i) => (
              <div key={i} className="space-y-4">
                <div className="w-12 h-12 bg-google-blue rounded-full flex items-center justify-center mx-auto text-xl font-bold">
                  {i + 1}
                </div>
                <h4 className="text-xl font-bold">{box.t}</h4>
                <p className="text-gray-400 text-sm">{box.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-4 text-center bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Not sure what you need?</h2>
          <p className="text-gray-600 mb-10 text-lg">Our consultants help you identify the technical gaps in your current business strategy for free.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button 
              onClick={onOpenConsult}
              className="bg-google-blue text-white px-8 py-4 rounded font-bold hover:shadow-xl transition-all"
            >
              Book a Free Session
            </button>
            <a href="tel:+601139103321" className="border border-gray-300 text-gray-700 px-8 py-4 rounded font-bold hover:bg-gray-50 transition-all text-center">
              Call us: +60 1139103321
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
