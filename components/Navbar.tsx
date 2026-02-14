
import React from 'react';

interface NavbarProps {
  onNavigate: (view: 'home' | 'services') => void;
  currentView: string;
  onOpenConsult: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentView, onOpenConsult }) => {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 py-3 px-4 md:px-8 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <button onClick={() => onNavigate('home')} className="flex items-center hover:opacity-80 transition-opacity">
          <span className="text-2xl font-bold tracking-tight text-gray-800">GetNow</span>
          <span className="text-2xl font-medium tracking-tight text-google-blue">Digital</span>
        </button>
        <div className="hidden lg:flex items-center ml-10 space-x-8 text-sm font-medium text-gray-600">
          <button 
            onClick={() => onNavigate('home')} 
            className={`${currentView === 'home' ? 'text-google-blue' : 'hover:text-google-blue'}`}
          >
            Overview
          </button>
          <button 
            onClick={() => onNavigate('services')} 
            className={`${currentView === 'services' ? 'text-google-blue' : 'hover:text-google-blue'}`}
          >
            Services
          </button>
          <button 
            onClick={onOpenConsult}
            className="hover:text-google-blue font-bold"
          >
            Consult Now
          </button>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <a 
          href="tel:+601139103321" 
          className="hidden md:flex items-center gap-2 text-sm font-bold text-gray-700 hover:text-google-blue transition-colors px-4 py-2"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
          </svg>
          +60 1139103321
        </a>
        <button 
          onClick={onOpenConsult}
          className="bg-google-blue text-white text-sm font-medium px-6 py-2.5 rounded hover:bg-google-blue-hover google-shadow transition-all"
        >
          Free Consultation
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
