import { useEffect, useState } from 'react';
import {  ArrowRight } from 'lucide-react';
import card1 from '../assets/img/finedgeCard.png';
import card2 from '../assets/img/ucpCard.jpeg';
import card3 from '../assets/img/beetCard.jpeg';
import card4 from '../assets/img/smerpGoCard.jpg';
import card5 from '../assets/img/smerpCard.png';
import card6 from '../assets/img/kuleanpayCard.png';
import card7 from '../assets/img/bulkWaveCard.jpg';
import bulkwave from '../assets/img/bulkWaveLogo1.png';
import bulkwavelaptop from '../assets/img/bulkwavelap.png';
import kuleanpay from '../assets/img/kuleanPayLogo.jpg';
import kuleanpayphone from '../assets/img/kulnpaybuttom.png';
import smerp from '../assets/img/smerpLogo.png';
import smerpphone from '../assets/img/smerpPho.png';
import finedge from '../assets/img/finedgeLogo.png';
import finedgelaptop from '../assets/img/finedgelap.png';
import ucpLogo from '../assets/img/ucpLogo.png';
import smerpgo from '../assets/img/smerpGoLogo.png';
import smerpgophone from '../assets/img/smerpGopho.png';
import ucpphone from '../assets/img/ucpphone.png';
import beetvaslaptop from '../assets/img/beetlap.png'
import beetvas from '../assets/img/beetLogo.png';


const Home = () => {
  const buttonColor = 'hsl(195, 90%, 61%)';

  const cards = [
    { id: 1, img: card1, alt: 'Finedge' },
    { id: 2, img: card2, alt: 'UCP' },
    { id: 3, img: card3, alt: 'beetVAS' },
    { id: 4, img: card4, alt: 'Smerp Go' },
    { id: 5, img: card5, alt: 'SMERP' },
    { id: 6, img: card6, alt: 'Kuleanpay' },
    { id: 7, img: card7, alt: 'BulkWave' },
  ];
  const solutionsData = [
    { name: 'Finedge', logo: finedge },
    { name: 'UCP', logo: ucpLogo },
    { name: 'BeetVAS', logo: beetvas }, 
    { name: 'Smerp Go', logo: smerpgo },
    { name: 'SMERP', logo: smerp },
    { name: 'Kuleanpay', logo: kuleanpay },
    { name: 'BulkWave', logo: bulkwave },
  ];

  const [flow, setFlow] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setFlow((prev) => (prev + 0.001) % 1); // Slowed down slightly for better UX
    }, 16);
    return () => clearInterval(interval);
  }, []);

  // ORBIT CONFIG
  const baseRadiusX = 750; // Tighter radius so cards stay on screen
  const baseRadiusY = 350;
  const centerOffsetY = 50;

  return (
  <div>
    <div className="relative h-screen flex items-center justify-center overflow-hidden bg-white">

      {/* ORBIT SYSTEM */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="relative w-full h-full">
          {cards.map((card, index) => {
            const angle = (flow * 2 * Math.PI) + (index * (2 * Math.PI / cards.length));
            const x = Math.cos(angle) * baseRadiusX;
            const y = Math.sin(angle) * baseRadiusY;
            /**
             * 3D DEPTH LOGIC
             * sin(angle) returns -1 at the top (furthest) and 1 at the bottom (closest)
             */
            const depth = Math.sin(angle); 
            const scale = 0.6 + (depth + 1) * 0.25; // Scales from 0.6 to 1.1
            const zIndex = Math.round((depth + 1) * 100); // Dynamic Z-index 0 to 200
            const opacity = 0.4 + (depth + 1) * 0.3; // Fades out slightly when behind text

            return (
              <div
                key={card.id}
                className="absolute w-60 h-38 rounded-2xl overflow-hidden shadow-2xl border border-white/20
                           hover:scale-125 hover:border-white/60 transition-all duration-300 cursor-pointer pointer-events-auto"
                style={{
                  left: `calc(50% + ${x}px)`,
                  top: `calc(50% + ${y + centerOffsetY}px)`,
                  transform: `translate(-50%, -50%) scale(${scale})`,
                  zIndex: zIndex,
                  opacity: opacity,
                }}
              >
                <img src={card.img} alt={card.alt} className="w-full h-full object-cover" />
              </div>
            );
          })}
        </div>
      </div>
      {/* CENTER TEXT - Fixed Z-index to sit in middle of orbit depth */}
      <div className="relative z-[100] text-center px-6 max-w-4xl mx-auto pointer-events-none">
        <div className="pointer-events-auto">
            <h1 className="text-black text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg">
              Building the Future of<br />
              <span className="text-black">Integrated Solutions.</span>
            </h1>

            <p className="text-black/90 text-lg md:text-xl mb-12 drop-shadow-md">
              Empowering Your Business Growth With User-Centric Solutions
            </p>

            <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
              <a href="#solutions" className="px-10 py-4 rounded-full font-semibold text-white text-lg transition-transform hover:scale-105" style={{ backgroundColor: buttonColor }}>
                See Our Solutions
              </a>
             <a href="#demo" className="px-10 py-4 rounded-full font-semibold text-black text-lg border-2 border-white/40 hover:bg-[hsl(182deg,93%,80%)] hover:text-black transition-all flex items-center gap-2"
              >
                Book A Demo
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
        </div>
      </div>
    </div>
    <section className="bg-gray-100 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-4"> 
          <div className="flex items-center justify-start p-2 md:p-8 h-auto md:h-[280px] order-1">
            <h2 className="text-4xl md:text-9xl font-bold text-gray-900 tracking-tighter leading-none">
              Be <br/> More
            </h2>
          </div>
          <div 
            className="flex items-center justify-center p-8 h-[150px] md:h-[280px] text-white rounded-[60px] text-center order-2"
            style={{ backgroundColor: 'hsl(182, 96%, 30%)' }}
          >
            <p className="text-lg md:text-2xl font-light leading-snug">
              Live your best life, create more and multiply your impact with the tools and solutions we provide.
            </p>
          </div>
          <div 
            className="flex items-center justify-center p-8 h-[150px] md:h-[280px] text-black rounded-[60px] text-center order-3"
            style={{ backgroundColor: 'hsl(184, 93%, 54%)' }} 
          >
            <p className="text-base md:text-xl font-normal leading-relaxed">
              The reward for a great idea is the tools to make it happen. We provide you with financial and operational tools that help you do business differently and with ease.
            </p>
          </div>
          <div className="flex items-center justify-end md:justify-end p-2 md:p-8 h-auto md:h-[280px] order-4">
            <h2 className="text-4xl md:text-9xl font-bold text-gray-900 tracking-tighter leading-none md:text-right">
              Do <br /> 
              <span style={{ color: 'hsl(182, 96%, 30%)' }}>more</span>
            </h2>
          </div>
        </div>
      </div>
    </section>
    {/*---SOLUTIONS SECTION ---*/}
    <section className="bg-white py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-black mb-6">Our Solutions</h2>
          <p className="text-gray-600 text-lg md:text-xl">
            We see simplified products and solutions as the foundation for growth and progress in commerce and society.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div 
            className="md:col-span-2 rounded-[40px] md:rounded-[60px] pt-10 bg-purple-300 px-6 md:pt-16 overflow-hidden relative flex flex-col items-center text-center"
            
          >
            <div className="max-w-2xl space-y-3 md:space-y-4 z-10 mb-2 md:mb-4"> 
              <div className="flex flex-col items-center gap-2">
                <img src={bulkwave} alt="Bulkwave Logo" className="w-12 h-12 md:w-16 md:h-16 rounded-2xl object-contain  p-1" />
                <h3 className="text-2xl md:text-4xl font-bold  tracking-tight">Bulkwave</h3>
              </div>
              <p className=" text-sm md:text-xl leading-relaxed px-4">
            Simplify bulk communication and reward programs with Bulkwave. Effortlessly distribute airtime, data, and SMS to large groups, keeping your teams and customers connected and engaged.
              </p>
              <div className="flex justify-center pt-2">
                <button className="flex items-center gap-2 bg-black text-white px-8 py-3 rounded-full font-semibold text-sm md:text-base hover:scale-105 transition-transform group">
                  Read More
                  <ArrowRight className="w-4 h-4 md:w-5 md:h-5 -rotate-45 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </div>
            </div>
            <div className="w-full max-w-3xl -mt-6 md:-mt-8">
              <img 
                src={bulkwavelaptop} 
                alt="Bulkwave Laptop" 
                className="w-full h-auto object-contain translate-y-2 md:translate-y-24 scale-100 md:scale-125 mx-auto" 
              />
            </div>
          </div>
          <div  
            className="rounded-[40px] md:rounded-[60px] pt-12 px-8 overflow-hidden relative flex flex-col items-center text-center"
            style={{ backgroundColor: '#fff0f3' }} 
          >
            <div className="space-y-4 z-10 mb-6">
              <div className="flex flex-col items-center gap-3">
                <img src={smerp} alt="SMERP Logo" className="w-12 h-12 rounded-xl object-contain" />
                <h3 className="text-2xl md:text-3xl font-bold text-black">SMERP</h3>
              </div>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                Take control of your business operations with SMERP, our comprehensive Enterprise Resource Planning (ERP) software. SMERP streamlines tasks like inventory management.
              </p>
              <div className="flex justify-center">
                <button className="flex items-center gap-2 bg-black text-white px-8 py-3 rounded-full font-semibold text-sm hover:scale-105 transition-transform group">
                  Read More
                  <ArrowRight className="w-4 h-4 -rotate-45 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </div>
            </div>
            <div className="w-full max-w-[320px] md:max-w-550px mt-auto">
              <img 
                src={smerpphone} 
                alt="SMERP Phone" 
                className="w-full h-auto translate-y-12 md:translate-y-24 scale-150" 
              />
            </div>
          </div>
          <div 
            className="rounded-[40px] md:rounded-[60px] pb-6 px-8 overflow-hidden relative flex flex-col items-center text-center"
            style={{ backgroundColor: '#e0f2fe' }} 
          >
            <div className="w-full max-w-[320px] md:max-w-700px mb-6">
              <img 
                src={kuleanpayphone} 
                alt="Kuleanpay Phone" 
                className="w-full h-auto -translate-y-8 md:-translate-y-20 scale-125" 
              />
            </div>
            <div className="space-y-4 z-10">
              <div className="flex flex-col items-center gap-3">
                <img src={kuleanpay} alt="Kuleanpay Logo" className="w-12 h-12 rounded-xl object-contain" />
                <h3 className="text-2xl md:text-3xl font-bold text-black">Kuleanpay</h3>
              </div>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                Kuleanpay is a smart AI driven escrow engine that makes payments secure, transparent, and seamless - giving businesses confidence and customers total peace of mind.
              </p>
              <div className="flex justify-center">
                <button className="flex items-center gap-2 bg-black text-white px-8 py-3 rounded-full font-semibold text-sm hover:scale-105 transition-transform group">
                  Read More
                  <ArrowRight className="w-4 h-4 -rotate-45 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
          <div 
            className="md:col-span-2 rounded-[40px] md:rounded-[60px] bg-sky-50 pt-10 px-6 md:pt-4 overflow-hidden relative flex flex-col items-center text-center mt-8"
          >
            <div className="max-w-3xl space-y-3 md:space-y-4 z-10 mb-2 md:mb-4"> 
              <div className="flex flex-col items-center gap-2">
                <div className=" p-2 rounded-2xl">
                   <img src={finedge} alt="Finedge Logo" className="w-12 h-12 md:w-16 md:h-16 object-contain" />
                </div>
                <h3 className="text-2xl md:text-4xl font-bold  tracking-tight">Finedge</h3>
              </div>
              <p className=" text-sm md:text-xl leading-relaxed px-4">
                Finedge is an all-in-one banking solution that helps MFBs streamline operations, grow their reach, and drive financial inclusion.
              </p>
              <div className="flex justify-center pt-2">
                <button className="flex items-center gap-2 bg-black text-white px-8 py-3 rounded-full font-semibold text-sm md:text-base hover:scale-105 transition-transform group">
                  Read More
                  <ArrowRight className="w-4 h-4 md:w-5 md:h-5 -rotate-45 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </div>
            </div>
            <div className="w-full max-w-4xl -mt-6 md:-mt-8">
              <img 
                src={finedgelaptop} 
                alt="Finedge Laptop" 
                className="w-full h-auto object-contain translate-y-2 md:translate-y-60 scale-100 md:scale-110 mx-auto" 
              />
            </div>
          </div>
          <div 
            className="rounded-[40px] md:rounded-[60px] pb-6 px-8 overflow-hidden relative flex flex-col items-center text-center"
            style={{ backgroundColor: '#f5f3ff' }}
          >
            <div className="w-full max-w-[280px] md:max-w-[320px] -mb-10 md:-mb-20"> 
              <img 
                src={smerpgophone} 
                alt="Smerp Go Phone" 
                className="w-full h-auto -translate-y-16 md:-translate-y-70 scale-110 object-contain mx-auto" 
              />
            </div>
            <div className="max-w-2xl space-y-4 z-10 mb-12">
              <div className="flex flex-col items-center gap-3">
                <img src={smerpgo} alt="Smerp Go Logo" className="w-12 h-12 rounded-xl object-contain" />
                <h3 className="text-2xl md:text-3xl font-bold text-black">Smerp Go</h3>
              </div>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                Take control of your business operations with SMERP, our comprehensive Enterprise Resource Planning (ERP) software. SMERP streamlines tasks like inventory management.
              </p>
              <div className="flex justify-center">
                <button className="flex items-center gap-2 bg-black text-white px-8 py-3 rounded-full font-semibold text-sm hover:scale-105 transition-transform group">
                  Read More
                  <ArrowRight className="w-4 h-4 -rotate-45 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
          <div 
            className="rounded-[40px] md:rounded-[60px] pt-8 md:pt-14 px-8 overflow-hidden relative flex flex-col items-center text-center"
            style={{ backgroundColor: '#f0f9ff' }}
          >
            <div className="max-w-2xl space-y-4 z-10 mb-4 md:mb-8"> 
              <div className="flex flex-col items-center gap-3">
                <img src={ucpLogo} alt="UCP Logo" className="w-12 h-12 rounded-xl object-contain" />
                <h3 className="text-2xl md:text-3xl font-bold text-black leading-tight">Unified Cooperative Platform (UCP)</h3>
              </div>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                Designed for cooperatives, UCP streamlines cash collection, disbursement, and reconciliation—improving cash flow, transparency, and member collaboration.
              </p>
              <div className="flex justify-center">
                <button className="flex items-center gap-2 bg-black text-white px-8 py-3 rounded-full font-semibold text-sm hover:scale-105 transition-transform group">
                  Read More
                  <ArrowRight className="w-4 h-4 -rotate-45 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </div>
            </div>
            <div className="w-full  max-w-[320px] md:max-w-[420px] mt-auto">
              <img 
                src={ucpphone} 
                alt="UCP Phone" 
                className="w-full h-auto translate-y-16 md:translate-y-32 scale-125 mx-auto" 
              />
            </div>
          </div>
          <div 
            className="md:col-span-2 rounded-[40px] md:rounded-[60px] pt-10 px-6 md:pt-16 overflow-hidden relative flex flex-col items-center text-center mt-8"
            style={{ background: 'linear-gradient(135deg, #eef2ff 0%, #f5f3ff 100%)' }} // Mixture of Light Blue and Purple
          >
            <div className="max-w-3xl space-y-3 md:space-y-4 z-10 mb-2 md:mb-4"> 
              <div className="flex flex-col items-center gap-2">
                
               <h3 className="text-2xl md:text-4xl font-bold text-black tracking-tight">beetVAS</h3>
              </div>
              <p className="text-gray-600 text-sm md:text-xl leading-relaxed px-4">
                Designed for cooperatives, UCP streamlines cash collection, disbursement, and reconciliation—improving cash flow, transparency, and member collaboration.
              </p>
              <div className="flex justify-center pt-2">
                <button className="flex items-center gap-2 bg-black text-white px-8 py-3 rounded-full font-semibold text-sm md:text-base hover:scale-105 transition-transform group">
                  Read More
                  <ArrowRight className="w-4 h-4 md:w-5 md:h-5 -rotate-45 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </div>
            </div>
            <div className="w-full max-w-4xl -mt-6 md:-mt-8">
              <img 
                src={beetvaslaptop} 
                alt="beetVAS Laptop" 
                className="w-full h-auto object-contain translate-y-6 md:translate-y-32 scale-100 md:scale-110 mx-auto" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* --- INFINITE LOGO SCROLL SECTION --- */}
    <section className="bg-white py-12 overflow-hidden border-y border-gray-100">
      <div className="flex flex-col gap-10">
        {/* Row 1: Moving Left */}
        <div className="relative flex overflow-hidden">
          <div className="flex animate-scroll whitespace-nowrap gap-8 py-2">
            {[...solutionsData, ...solutionsData].map((item, index) => (
              <div 
                key={`row1-${index}`} 
                className="flex items-center gap-5 px-10 py-5 border border-gray-100 rounded-full min-w-[280px] shadow-sm hover:shadow-md transition-shadow"
                style={{ backgroundColor: '#f0f9ff' }}
              >
                <div className="w-12 h-12 flex items-center justify-center">
                   <img src={item.logo} alt={item.name} className="max-w-full max-h-full object-contain rounded-lg" />
                </div>
                <span className="text-2xl font-bold text-gray-900 tracking-tight">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
    
        {/* Row 2: Moving Right & Starting from a different order */}
        <div className="relative flex overflow-hidden">
          <div className="flex animate-scroll-reverse whitespace-nowrap gap-8 py-2">
            {/* We reverse the array here so it starts with a different logo entirely */}
            {[...solutionsData, ...solutionsData].reverse().map((item, index) => (
              <div 
                key={`row2-${index}`} 
                className="flex items-center gap-5 px-10 py-5 border border-gray-100 rounded-full min-w-[280px] shadow-sm hover:shadow-md transition-shadow"
                style={{ backgroundColor: '#f0f9ff' }}
              >
                <div className="w-12 h-12 flex items-center justify-center">
                   <img src={item.logo} alt={item.name} className="max-w-full max-h-full object-contain rounded-lg" />
                </div>
                <span className="text-2xl font-bold text-gray-900 tracking-tight">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  </div>
  );
};

export default Home;