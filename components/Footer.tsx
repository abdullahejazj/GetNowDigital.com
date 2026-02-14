
import React from 'react';

interface FooterProps {
  onNavigate: (view: 'home' | 'services') => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-white border-t border-gray-200 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center mb-6">
              <span className="text-xl font-bold tracking-tight text-gray-800">GetNow</span>
              <span className="text-xl font-medium tracking-tight text-google-blue ml-0.5">Digital</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Leading the way in digital transformation through high-touch consultation and high-impact engineering. Clarity before execution.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <svg className="w-4 h-4 text-google-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                <a href="mailto:info@getnowdigital.com" className="hover:text-google-blue">info@getnowdigital.com</a>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-600 font-bold">
                <svg className="w-4 h-4 text-google-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                <a href="tel:+601139103321" className="hover:text-google-blue">+60 1139103321</a>
              </div>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 mb-4 text-sm uppercase tracking-wider">Consultation</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="mailto:consult@getnowdigital.com" className="hover:text-google-blue font-medium">Book Free Audit</a></li>
              <li><button onClick={() => onNavigate('services')} className="hover:text-google-blue">Strategic Planning</button></li>
              <li><button onClick={() => onNavigate('services')} className="hover:text-google-blue">Tech Stack Review</button></li>
              <li><a href="https://wa.me/601139103321" className="hover:text-google-blue">WhatsApp Support</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 mb-4 text-sm uppercase tracking-wider">Services</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><button onClick={() => onNavigate('services')} className="hover:text-google-blue text-left">All Services</button></li>
              <li><button onClick={() => onNavigate('services')} className="hover:text-google-blue text-left">Web Development</button></li>
              <li><button onClick={() => onNavigate('services')} className="hover:text-google-blue text-left">Digital Marketing</button></li>
              <li><button onClick={() => onNavigate('services')} className="hover:text-google-blue text-left">Enterprise Software</button></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 mb-4 text-sm uppercase tracking-wider">Resources</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><button onClick={() => onNavigate('home')} className="hover:text-google-blue">Success Stories</button></li>
              <li><button onClick={() => onNavigate('home')} className="hover:text-google-blue">Case Studies</button></li>
              <li><a href="#" className="hover:text-google-blue">System Audits</a></li>
              <li><a href="#" className="hover:text-google-blue">Help Center</a></li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-100 gap-4">
          <div className="flex items-center gap-6 text-xs text-gray-500 font-medium">
            <a href="#" className="hover:underline">Privacy</a>
            <a href="#" className="hover:underline">Terms</a>
            <a href="#" className="hover:underline">SLA</a>
          </div>
          <p className="text-xs text-gray-400">
            © {new Date().getFullYear()} GetNowDigital.com. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
