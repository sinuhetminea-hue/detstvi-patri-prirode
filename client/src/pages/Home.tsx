import React, { useState } from 'react';
import ChatInterface from '../components/ChatInterface';

const MoonRiverFinal = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#FDFCF8] font-serif text-[#1a2f2a]">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://r.jina.ai/i/66736486675e4782974b62d887a03043')`,
          filter: 'contrast(1.05) brightness(1.1) saturate(0.8)',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-[#f4f7f6]/80" />

      <div className="absolute top-6 left-0 w-full z-20 px-6 md:px-12 flex justify-between items-center text-[10px] tracking-[0.3em] uppercase text-[#1a2f2a]/70">
        <div className="flex gap-4 md:gap-8">
          <a href="mailto:lojzovky.lipno@gmail.com">lojzovky.lipno@gmail.com</a>
        </div>
        <div className="hidden md:block font-bold">Lojzovy Paseky, Lipno</div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4">
        <h2 className="text-lg md:text-2xl tracking-[0.5em] text-[#2c4a41] mb-2 uppercase opacity-80">
          Villa Resort
        </h2>
        
        <div className="relative mb-12">
          <h1 className="text-6xl md:text-[10rem] font-bold tracking-tighter text-[#1a2f2a] mix-blend-multiply opacity-90 leading-none">
            MOON RIVER
          </h1>
          <div className="absolute -bottom-10 left-0 w-full overflow-hidden pointer-events-none text-6xl md:text-[10rem] font-bold tracking-tighter text-[#2c4a41] scale-y-[-0.8] opacity-10 blur-[3px]">
            MOON RIVER
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mt-16">
          <button 
            onClick={() => setIsChatOpen(true)}
            className="px-10 py-4 bg-[#2c4a41] text-white hover:bg-[#1a2f2a] transition-all tracking-[0.3em] uppercase text-xs"
          >
            Konzultovat s AI Gemou
          </button>
          
          <a 
            href="mailto:lojzovky.lipno@gmail.com?subject=Zájem o prohlídku Moon River"
            className="px-10 py-4 border border-[#2c4a41] text-[#2c4a41] hover:bg-[#2c4a41] hover:text-white transition-all tracking-[0.3em] uppercase text-xs"
          >
            Rezervovat prohlídku
          </a>
        </div>
      </div>

      {isChatOpen && (
        <div className="absolute inset-0 z-50 bg-white/95 backdrop-blur-md flex items-center justify-center p-2 md:p-4">
          <div className="w-full max-w-5xl h-[90vh] bg-white shadow-2xl border border-[#e2e8f0] overflow-hidden relative">
            <button 
              onClick={() => setIsChatOpen(false)}
              className="absolute top-4 right-4 z-[60] text-[#1a2f2a] text-2xl font-light p-2"
            >
              ✕
            </button>
            <ChatInterface /> 
          </div>
        </div>
      )}

      <div className="absolute bottom-8 w-full text-center z-20">
        <p className="text-[#2c4a41] text-[9px] tracking-[0.4em] uppercase font-bold">
          Exclusive 5+5 Year Lease Model • Lipno Reservation
        </p>
      </div>
    </div>
  );
};

export default MoonRiverFinal;
