
import React from 'react';

const SERVICES = [
  {
    id: "01",
    title: "Digital Strategy & Advisory",
    tagline: "Clarity Before Execution",
    desc: "Every serious transformation begins with structure. We help businesses define direction, identify inefficiencies, and design digital ecosystems aligned with long-term objectives. Strategy eliminates guesswork.",
    includes: ["Digital transformation consulting", "Growth roadmap design", "Technology advisory", "Business model optimization", "Market & competitor analysis", "Innovation planning"],
    icon: (
      <svg className="w-6 h-6 text-google-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
      </svg>
    )
  },
  {
    id: "02",
    title: "Engineering & Development",
    tagline: "Built to Scale",
    desc: "Technology should not just function. It should empower. We design and develop secure, scalable digital platforms engineered for performance and longevity. Precision in code. Strength in structure.",
    includes: ["Corporate & enterprise websites", "E-commerce platforms", "Custom web applications", "SaaS development", "CRM & automation systems", "API integrations", "Infrastructure architecture"],
    icon: (
      <svg className="w-6 h-6 text-google-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    )
  },
  {
    id: "03",
    title: "Custom Software Solutions",
    tagline: "Systems That Work for You",
    desc: "When off-the-shelf tools limit growth, custom systems unlock it. We design tailored software that simplifies operations, enhances visibility, and increases control. Your operations, optimized.",
    includes: ["Enterprise software development", "Workflow automation tools", "Internal management systems", "Data dashboards & analytics systems", "AI-enabled process integration"],
    icon: (
      <svg className="w-6 h-6 text-google-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    )
  },
  {
    id: "04",
    title: "Mobile Application Development",
    tagline: "Seamless Across Devices",
    desc: "Modern businesses require mobility. We build intuitive, high-performance mobile applications designed for engagement and efficiency. Performance meets usability.",
    includes: ["iOS development", "Android development", "Cross-platform apps", "Enterprise mobility solutions", "UX/UI architecture"],
    icon: (
      <svg className="w-6 h-6 text-google-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    id: "05",
    title: "Digital Marketing & Performance",
    tagline: "Measurable, Strategic Growth",
    desc: "Visibility without conversion is noise. We build performance systems focused on outcomes — not impressions. Every campaign is engineered, not improvised.",
    includes: ["Paid advertising (Google, Meta, LinkedIn)", "Funnel engineering", "SEO strategy", "Conversion optimization", "Email automation", "Data-driven performance tracking"],
    icon: (
      <svg className="w-6 h-6 text-google-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    )
  },
  {
    id: "06",
    title: "Branding & Identity",
    tagline: "Built to Be Remembered",
    desc: "Brand is not decoration. It is positioning. We design refined identity systems that communicate authority and clarity. Presence shapes perception.",
    includes: ["Brand strategy", "Logo & visual identity", "Brand guidelines", "Packaging systems", "Corporate identity architecture"],
    icon: (
      <svg className="w-6 h-6 text-google-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
      </svg>
    )
  },
  {
    id: "07",
    title: "Creative Production",
    tagline: "Visual Storytelling with Purpose",
    desc: "Creative assets should drive momentum. We produce high-end visual content aligned with strategic goals. Creative direction with business intention.",
    includes: ["Commercial video production", "Corporate photography", "Product photography", "Motion graphics", "Social media content creation", "Brand films"],
    icon: (
      <svg className="w-6 h-6 text-google-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    id: "08",
    title: "IT Infrastructure & Support",
    tagline: "Stability Behind the Growth",
    desc: "Reliable infrastructure is the silent backbone of digital success. We ensure your systems remain secure, optimized, and future-ready. Growth requires stability.",
    includes: ["Cloud setup & management", "Hosting solutions", "Cybersecurity consulting", "System audits", "Performance optimization"],
    icon: (
      <svg className="w-6 h-6 text-google-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
      </svg>
    )
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="bg-gray-50 py-24 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Expertise you can depend on</h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            GetNowDigital provides a comprehensive suite of digital services. Our primary selling point is 
            strategic consultation to ensure your technology investments drive measurable business outcomes.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {SERVICES.map((s) => (
            <div key={s.id} className="bg-white p-8 md:p-10 rounded-2xl border border-gray-100 hover:shadow-xl transition-all duration-300 flex flex-col group">
              <div className="flex items-start justify-between mb-8">
                <div className="p-4 bg-blue-50 w-fit rounded-xl group-hover:bg-google-blue group-hover:text-white transition-colors duration-300">
                  <div className="group-hover:text-white">
                    {s.icon}
                  </div>
                </div>
                <span className="text-4xl font-black text-gray-100 tracking-tighter">{s.id}</span>
              </div>
              
              <div className="mb-4">
                <span className="text-google-blue font-bold text-sm tracking-widest uppercase mb-1 block">
                  {s.tagline}
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900">{s.title}</h3>
              </div>
              
              <p className="text-gray-600 leading-relaxed mb-8 flex-grow">
                {s.desc}
              </p>
              
              <div className="pt-8 border-t border-gray-100">
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Services Include</h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
                  {s.includes.map((item, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-700">
                      <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
