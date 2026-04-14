import { useEffect, useState } from 'react';
import {  ArrowRight } from 'lucide-react';
import backroundImage from '../assets/img/backgroundblueeer.jpeg';
import card1 from '../assets/img/finedgeCard.png';
import card2 from '../assets/img/ucpCard.jpeg';
import card3 from '../assets/img/beetCard.jpeg';
import card4 from '../assets/img/smerpGoCard.jpg';
import card5 from '../assets/img/smerpCard.png';
import card6 from '../assets/img/kuleanpayCard.png';
import card7 from '../assets/img/bulkWaveCard.jpg';

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
    <div className="relative h-screen flex items-center justify-center overflow-hidden bg-gray-900">
      
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-white">
       {/* <img src={backroundImage} alt="bg" className="  w-full h-full object-cover brightness-75" />*/}
        {/*<div className="absolute inset-0 bg-black/30" />*/}
      </div>

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
    {/* Reduced gap for a tighter feel */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-4"> 
      
      {/* 1. Be More Text (Order 1) */}
      <div className="flex items-center justify-start p-2 md:p-8 h-auto md:h-[280px] order-1">
        <h2 className="text-4xl md:text-7xl font-bold text-gray-900 tracking-tighter leading-none">
          Be <br/> More
        </h2>
      </div>

      {/* 2. Dark Teal Box (Order 2) */}
      <div 
        className="flex items-center justify-center p-8 h-[150px] md:h-[280px] text-white rounded-[60px] text-center order-2"
        style={{ backgroundColor: 'hsl(182, 96%, 30%)' }}
      >
        <p className="text-lg md:text-2xl font-light leading-snug">
          Live your best life, create more and multiply your impact with the tools and solutions we provide.
        </p>
      </div>

      {/* 3. Light Teal Box (Order 3) */}
      <div 
        className="flex items-center justify-center p-8 h-[150px] md:h-[280px] text-black rounded-[60px] text-center order-3"
        style={{ backgroundColor: 'hsl(184, 93%, 54%)' }} 
      >
        <p className="text-base md:text-xl font-normal leading-relaxed">
          The reward for a great idea is the tools to make it happen. We provide you with financial and operational tools that help you do business differently and with ease.
        </p>
      </div>

      {/* 4. Do More Text (Order 4) - Aligned to end */}
      <div className="flex items-center justify-end md:justify-start p-2 md:p-8 h-auto md:h-[280px] order-4">
        <h2 className="text-4xl md:text-7xl font-bold text-gray-900 tracking-tighter leading-none md:text-right">
          Do <br /> 
          <span style={{ color: 'hsl(182, 96%, 30%)' }}>more</span>
        </h2>
      </div>

    </div>
  </div>
</section>
  </div>
  );
};

export default Home;