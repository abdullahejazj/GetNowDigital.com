
import React from 'react';

interface HeroProps {
  onOpenConsult: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenConsult }) => {
  return (
    <section id="overview" className="relative overflow-hidden pt-16 pb-20 md:pt-24 md:pb-32 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
            Stand out with <span className="text-google-blue">GetNowDigital</span> strategic advisory
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl">
            Clarity before execution. We provide expert-led digital consultation to help you build, scale, and manage your business online with engineering precision.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button 
              onClick={onOpenConsult}
              className="bg-google-blue text-white font-medium px-8 py-4 rounded text-center hover:bg-google-blue-hover transition-all google-shadow"
            >
              Book Free Consultation
            </button>
            <a href="#services" className="border border-gray-300 text-gray-700 font-medium px-8 py-4 rounded text-center hover:bg-gray-50 transition-colors">
              Explore our Services
            </a>
          </div>
        </div>
        <div className="flex-1 w-full max-w-xl">
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1000&q=80" 
              alt="Digital Consultation Session" 
              className="rounded-2xl shadow-2xl border border-gray-100 object-cover aspect-[4/3]"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl google-shadow hidden lg:block max-w-xs border border-gray-100">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                <span className="text-sm font-medium text-gray-700">Real-time Strategy</span>
              </div>
              <p className="text-xs text-gray-500">Our consultants at GetNowDigital analyze your market trends daily to ensure your tech stack is future-proof.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
