import React from 'react';

const MoonRiverHero = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black font-serif">
      {/* HLAVNÍ POZADÍ - TVŮJ OBRÁZEK */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://r.jina.ai/i/66736486675e4782974b62d887a03043')`, // Tady je tvůj vygenerovaný obraz
          filter: 'brightness(0.7)'
        }}
      />

      {/* TEXTOVÁ VRSTVA */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4">
        <h2 className="text-xl md:text-3xl tracking-[0.3em] text-amber-200/80 mb-2 uppercase">
          Villa Resort
        </h2>
        
        <div className="relative">
          {/* HLAVNÍ NÁPIS */}
          <h1 className="text-6xl md:text-9xl font-bold text-white tracking-tighter mix-blend-overlay opacity-90">
            MOON RIVER
          </h1>
          
          {/* EFEKT VLNĚNÍ NA HLADINĚ (ODRAZ) */}
          <div className="absolute -bottom-16 left-0 w-full overflow-hidden select-none pointer-events-none">
            <h1 className="text-6xl md:text-9xl font-bold text-white tracking-tighter scale-y-[-1] opacity-20 blur-[2px] animate-pulse">
              MOON RIVER
            </h1>
            {/* Animovaná clona pro efekt vody */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent h-full w-full animate-[wave_5s_ease-in-out_infinite]" />
          </div>
        </div>
      </div>

      {/* LEGISLATIVNÍ / STRATEGICKÝ PODTEXT (V dolní části) */}
      <div className="absolute bottom-10 w-full text-center z-20">
        <p className="text-amber-100/50 text-sm tracking-widest uppercase italic">
          Safe-Haven Concept • Lipno 2026 • Exclusive 5+5 Lease
        </p>
      </div>

      {/* Definice animace vlnění (Inline CSS) */}
      <style>{`
        @keyframes wave {
          0%, 100% { transform: translateY(0) scaleY(1); opacity: 0.2; }
          50% { transform: translateY(5px) scaleY(1.1); opacity: 0.3; }
        }
      `}</style>
    </div>
  );
};

export default MoonRiverHero;
