// src/components/TearSection.jsx
export function TearSection({ children }) {
  return (
    <div className="relative w-full bg-white text-black mt-[-35px] md:mt-[-60px] pt-12 pb-16 z-20">
      
      {/* RASGADO SUPERIOR (Efecto papel roto con textura urbana) */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-30 -translate-y-[99%] pointer-events-none">
        <svg 
          className="relative block w-full h-10 md:h-20 text-white fill-current" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
        >
          {/* Trazado irregular con picos filosos imitando papel rasgado a mano */}
          <path d="M0,40 L45,20 L90,55 L140,15 L190,60 L240,10 L300,50 L360,20 L420,65 L480,15 L540,55 L600,10 L660,60 L720,20 L780,50 L840,15 L900,55 L960,20 L1020,60 L1080,15 L1140,50 L1200,25 L1200,120 L0,120 Z"></path>
        </svg>
      </div>

      {/* Contenido (Tus Categorías) */}
      <div className="relative z-30 max-w-[1500px] mx-auto px-4">
        {children}
      </div>

      {/* RASGADO INFERIOR CON GOTEOS DE PINTURA */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-30 translate-y-[99%] pointer-events-none">
        <svg 
          className="relative block w-full h-12 md:h-24 text-white fill-current" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
        >
          {/* Borde inferior irregular tipo papel cortado */}
          <path d="M0,0 L60,35 L120,10 L180,45 L240,15 L300,40 L360,10 L420,50 L480,20 L540,45 L600,10 L660,50 L720,15 L780,40 L840,10 L900,45 L960,15 L1020,50 L1080,20 L1140,40 L1200,10 L1200,0 Z"></path>
          
          {/* Goteos de pintura / chorreadas urbanas simuladas */}
          <rect x="150" y="50" width="6" height="35" rx="3" />
          <rect x="340" y="50" width="8" height="50" rx="4" />
          <rect x="580" y="50" width="5" height="30" rx="2.5" />
          <rect x="750" y="50" width="7" height="45" rx="3.5" />
          <rect x="980" y="50" width="6" height="40" rx="3" />
        </svg>
      </div>

    </div>
  );
}