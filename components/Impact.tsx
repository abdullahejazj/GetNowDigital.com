
import React from 'react';

const Impact: React.FC = () => {
  const impacts = [
    {
      title: "Strategic Vision",
      category: "Advisory",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80",
      desc: "Transforming ambiguous business goals into clear, actionable technical roadmaps."
    },
    {
      title: "Human-Centric Design",
      category: "Branding",
      image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=800&q=80",
      desc: "Creating digital interfaces that resonate emotionally and function flawlessly."
    },
    {
      title: "Performance Growth",
      category: "Marketing",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      desc: "Using data-driven insights to scale customer acquisition and retention."
    }
  ];

  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">Driving impact through precision</h2>
            <p className="text-gray-600 text-lg">We don't just deliver projects; we deliver outcomes. See how our consultation-first approach translates into real-world results.</p>
          </div>
          <button className="text-google-blue font-bold flex items-center gap-2 hover:underline">
            View Case Studies
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {impacts.map((item, idx) => (
            <div key={idx} className="group cursor-pointer">
              <div className="overflow-hidden rounded-2xl mb-6 aspect-video md:aspect-[3/4]">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <span className="text-google-blue text-xs font-bold uppercase tracking-widest">{item.category}</span>
              <h3 className="text-xl font-bold text-gray-900 mt-2 mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Impact;
