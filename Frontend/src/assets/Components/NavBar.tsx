import React, { useState } from 'react';
import type { Dispatch, SetStateAction } from 'react';
import Logo from '../img/logo.png'; 
import fineedgeL from '../img/finedgeLogo.png';
import kuleanpayL from '../img/kuleanPayLogo.jpg';
import smerpL from '../img/smerpLogo.jpeg';
import bulkwaveL from '../img/bulkWaveLogo1.jpg';
import ucpL from '../img/ucpLogo.jpeg';
import beetvasL from '../img/beetLogo.jpeg';
import smerpgoL from '../img/smerpGoLogo.png';

import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react';


interface NavbarProps {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: Dispatch<SetStateAction<boolean>>;
}
const Navbar: React.FC<NavbarProps> = ({ isMobileMenuOpen, setIsMobileMenuOpen }) => {
  
  const [isMobileSolutionsOpen, setIsMobileSolutionsOpen] = useState(false);

  const buttonColor = 'hsl(195, 90%, 61%)';

  const allSolutions = [
    { name: 'Finedge', desc: 'Ai Powered core banking suite', icon: fineedgeL },
    { name: 'SMERP', desc: 'ERP solutions for Businesses', icon: smerpL },
    { name: 'Kuleanpay', desc: 'Secure payment solution', icon: kuleanpayL },
    { name: 'beetVAS', desc: 'Airtime and Data Vending Api suite', icon: beetvasL },
    { name: 'Bulkwave', desc: 'Bulk Airtime , Data & SMS', icon: bulkwaveL },
    { name: 'Smerp Go', desc: 'Pocket ERP solution for online stores', icon: smerpgoL },
    { name: 'UCP', desc: 'Unified Cooperative Platform', icon: ucpL },  
  ];



  return (
    <>
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-[999]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20 relative">

            {/* Mobile Hamburger */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="md:hidden p-2 text-gray-700"
            >
              <Menu className="w-7 h-7" />
            </button>

            {/* Desktop Left Links */}
            <div className="hidden md:flex items-center gap-x-8 text-gray-600 font-normal">
              <a href="/" className="py-2 hover:text-black transition-colors">Home</a>
              <a href="/about" className="py-2 hover:text-black transition-colors">About Us</a>

              {/* Solutions Dropdown */}
              <div className="relative group">
                <div className="flex items-center gap-x-1 cursor-pointer py-2 group-hover:text-black transition-colors">
                  Solutions
                  <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                </div>

                {/* Compact Dropdown */}
                <div className="absolute left-0 top-full mt-3 hidden group-hover:block bg-white shadow-2xl border border-gray-100 rounded-2xl w-[720px] p-5 z-50">
                  
                  <div className="mb-4">
                    <h3 className="text-lg font-semibold text-gray-900">Solutions</h3>
                  </div>

                  <div className="flex gap-10">
                    
                    {/* Left Column */}
                    <div className="w-5/12 space-y-5">
                      {allSolutions.slice(0, 4).map((item, i) => (
                        <a
                          key={i}
                          href="#"
                          className="flex items-center gap-4 hover:bg-gray-50 p-3 -mx-3 rounded-2xl transition-all group/item"
                        >
                          <div className="w-10 h-10 bg-gray-100 rounded-2xl flex items-center justify-center flex-shrink-0 overflow-hidden">
                            <img 
                              src={item.icon} 
                              alt={item.name} 
                              className="w-8 h-8 object-contain"
                            />
                          </div>
                          <div>
                            <div className="font-semibold text-base text-gray-900 group-hover/item:text-black">
                              {item.name}
                            </div>
                            <div className="text-xs text-gray-500">{item.desc}</div>
                          </div>
                        </a>
                      ))}
                    </div>

                    {/* Right Column */}
                    <div className="flex-1 space-y-5 pt-1">
                      {allSolutions.slice(4).map((item, i) => (
                        <a
                          key={i}
                          href="#"
                          className="flex items-center gap-4 hover:bg-gray-50 p-3 -mx-3 rounded-2xl transition-all group/item"
                        >
                          <div className="w-10 h-10 bg-gray-100 rounded-2xl flex items-center justify-center flex-shrink-0 overflow-hidden">
                            <img 
                              src={item.icon} 
                              alt={item.name} 
                              className="w-8 h-8 object-contain"
                            />
                          </div>
                          <div>
                            <div className="font-semibold text-base text-gray-900 group-hover/item:text-black">
                              {item.name}
                            </div>
                            <div className="text-xs text-gray-500">{item.desc}</div>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <a href="/insights" className="py-2 hover:text-black transition-colors">Insights</a>
            </div>

            {/* Center Logo + Name */}
            <div className="flex items-center gap-x-1.5 md:absolute md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2">
              <img src={Logo} alt="fifthlab logo" className="w-9 h-9 object-contain" />
              <a href="/" className="flex items-center hover:opacity-80 transition-opacity">
                <span className="font-bold text-2xl tracking-tight text-black">fifth</span>
                <span className="font-light text-2xl tracking-tight text-black">lab</span>
              </a>
            </div>

            {/* Desktop Get in Touch Button */}
            <div className="hidden md:block">
              <a
                href="/contact"
                className="flex items-center gap-x-2 px-5 py-2.5 text-sm rounded-full font-medium text-white hover:scale-105 active:scale-95 transition-all"
                style={{ backgroundColor: buttonColor }}
              >
                Get in Touch
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <div className="w-9 md:hidden" />
          </div>
        </div>
      </nav>

      {/* Mobile Menu - Updated with real images too */}
      <div
        className={`fixed inset-0 z-110 transition-all duration-300 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="absolute inset-0 bg-black" onClick={() => setIsMobileMenuOpen(false)} />

        <div
          className={`absolute top-0 left-0 h-full w-[65%] max-w-[320px] bg-white shadow-2xl transform transition-transform duration-300 overflow-hidden ${
            isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="flex flex-col h-full overflow-hidden">
            <div className="flex items-center justify-between p-6 border-b border-gray-100 flex-shrink-0">
              <div className="flex items-center gap-x-1.5">
                <img src={Logo} alt="fifthlab logo" className="w-8 h-8 object-contain" />
                <a href="/" className="flex items-center">
                  <span className="font-bold text-2xl tracking-tight text-black">fifth</span>
                  <span className="font-light text-2xl tracking-tight text-black">lab</span>
                </a>
              </div>
              <button onClick={() => setIsMobileMenuOpen(false)} className="text-gray-700 hover:text-black">
                <X className="w-7 h-7" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-6 py-8 space-y-2 text-lg font-medium text-gray-700">
              <a href="/" className="block py-4 px-4 rounded-xl hover:bg-slate-100" onClick={() => setIsMobileMenuOpen(false)}>
                Home
              </a>
              <a href="/about" className="block py-4 px-4 rounded-xl hover:bg-slate-100" onClick={() => setIsMobileMenuOpen(false)}>
                About Us
              </a>

              <div>
                <button
                  onClick={() => setIsMobileSolutionsOpen(!isMobileSolutionsOpen)}
                  className="flex items-center justify-between w-full py-4 px-4 rounded-xl hover:bg-slate-100 transition-colors"
                >
                  Solutions
                  <ChevronDown className={`w-5 h-5 transition-transform ${isMobileSolutionsOpen ? 'rotate-180' : ''}`} />
                </button>

                {isMobileSolutionsOpen && (
                  <div className="mt-4">
                    <div className="px-5 py-3 text-base font-medium text-gray-500">Products & Platforms</div>
                    <div className="space-y-2">
                      {allSolutions.map((item, idx) => (
                        <a
                          key={idx}
                          href="#"
                          className="flex items-center gap-4 py-4 px-5 rounded-2xl text-base text-gray-700 hover:bg-slate-100 transition-colors"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          <div className="w-9 h-9 bg-gray-100 rounded-xl flex items-center justify-center flex-shrink-0 overflow-hidden">
                            <img 
                              src={item.icon} 
                              alt={item.name} 
                              className="w-7 h-7 object-contain"
                            />
                          </div>
                          <div>
                            <div className="font-medium">{item.name}</div>
                            <div className="text-xs text-gray-500">{item.desc}</div>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <a href="/insights" className="block py-4 px-4 rounded-xl hover:bg-slate-100" onClick={() => setIsMobileMenuOpen(false)}>
                Insights
              </a>
            </div>

            <div className="p-6 border-t border-gray-100 flex-shrink-0">
              <a
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-center gap-x-3 w-full py-4 rounded-full text-white font-medium text-lg"
                style={{ backgroundColor: buttonColor }}
              >
                Get in Touch
                <ArrowRight className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;