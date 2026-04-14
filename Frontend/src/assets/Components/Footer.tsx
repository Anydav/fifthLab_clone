import { ArrowRight } from 'lucide-react';
// Make sure this path matches your folder structure
import bottomfoot from '../img/buttomfoot.png'

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-16 pb-8 px-5 sm:px-8 md:px-20 font-sans">
      {/* --- TOP CTA SECTION --- */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-20 border-b border-white/10 pb-16">
        <div className="text-center md:text-left">
          <h2 className="text-4xl md:text-6xl font-bold leading-tight">
            Join Our <br />
            <span >Ever Growing</span> <br />
            Community
          </h2>
          
<div className="mt-8 relative max-w-lg mx-auto md:mx-0 flex items-center border border-white rounded-lg p-1">
  <input 
    type="email" 
    placeholder="Enter your email address" 
    className="w-full bg-transparent py-4 px-6 text-white outline-none placeholder:text-white"
  />
  
  <button className="bg-transparent border border-white rounded-md py-3 px-8 whitespace-nowrap font-bold text-[#1ec7d1] hover:bg-white/10 transition-colors mr-1">
    Join Now
  </button>
</div>
        </div>

        {/* The buttomfoot Image */}
        <div className="w-full max-w-[400px] md:max-w-[500px]">
          <img 
            src={bottomfoot} 
            alt="Community Illustration" 
            className="w-full h-auto object-contain animate-pulse-slow" 
            style={{ animationDuration: '4s' }}
          />
        </div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-[5fr_1fr_1fr_1fr] gap-12">
        
        {/* Brand & Address Column */}
        <div className="col-span-2 md:col-span-1 text-center sm:text-left">
          <div className="flex sm:block justify-center sm:justify-start">
            <img 
              alt="fifthlab" 
              className="h-8 mb-4" 
              src="/assets/darklogo-DcOLRKJ2.png" 
            />
          </div>

          <p className="text-[#A19EC2] text-[16px] sm:text-[18px] max-w-xs mx-auto sm:mx-0">
            <a 
              href="https://maps.google.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Plot 7, Joshua Ebun Ojo Close, Lekki Phase 1, Lagos Nigeria.
            </a>
          </p>

          {/* Social Icons removed */}
          <div className="flex justify-center sm:justify-start gap-4 mt-6 text-[#A19EC2]">
            <a href="https://www.facebook.com/FifthlabAfrica" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://x.com/FifthlabAfrica" target="_blank" rel="noopener noreferrer">X</a>
            <a href="https://www.instagram.com/fifthlabafrica/" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://www.linkedin.com/company/fifthlab/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>

          <div className="flex justify-center sm:justify-start mt-6">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img 
                alt="NDPR Audit" 
                className="h-[90px] sm:h-[110px]" 
                src="/assets/ndpr24-cz-BIRGo.png" 
              />
            </a>
          </div>
        </div>

        {/* Product Column */}
        <div className="text-left">
          <h3 className="font-bold text-[18px] sm:text-[20px] mb-4">Product</h3>
          <ul className="space-y-2 text-[#A19EC2] text-[16px] sm:text-[18px]">
            <li><a href="/bulkwave">Bulkwave</a></li>
            <li><a href="/finedge">FinEdge</a></li>
            <li><a href="/kuleanpay">KuleanPay</a></li>
            <li><a href="/beetvas">BeetVAS</a></li>
            <li><a href="/smerp">Smerp</a></li>
            <li><a href="/smerpgo">SmerpGo</a></li>
            <li><a href="/ucp">UCP</a></li>
          </ul>
        </div>

        {/* Company Column */}
        <div className="text-left">
          <h3 className="font-bold text-[18px] sm:text-[20px] mb-4">Company</h3>
          <ul className="space-y-2 text-[#A19EC2] text-[16px] sm:text-[18px]">
            <li><a href="/about-us">About Us</a></li>
            <li><a href="/contact-us">Contact us</a></li>
            <li><a href="/careers">Careers</a></li>
            <li><a href="/insights">Insights</a></li>
          </ul>
        </div>

        {/* Contact Column */}
        <div className="text-left">
          <h3 className="font-bold text-[18px] sm:text-[20px] mb-4">Contact Us</h3>
          
          <p className="text-[#A19EC2] mb-4">
            Email: hello@thefifthlab.com
          </p>

          <p className="text-[#A19EC2] mb-4">
            Phone: +234 816 235 2009
          </p>

          <p className="text-[#A19EC2]">
            Address: Lekki Phase 1, Lagos, Nigeria
          </p>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-[#D9DBE9] opacity-20 my-10"></div>

      {/* Bottom Footer */}
      <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left text-[#6F6C90] text-[14px] sm:text-[16px]">
        <p className="mb-3 md:mb-0">Copyright © 2026 Fifthlab</p>
        <p>
          All Rights Reserved |
          <a className="ml-1 underline text-white" href="/cookie-policy">Cookie Policy</a> |
          <a className="ml-1 underline text-white" href="/privacy-policy">Privacy Policy</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;