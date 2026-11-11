// src/components/Hero.jsx
import heroBg from '../assets/HERO.jpg';

export function Hero() {
  return (
    // Ampliamos el contenedor a max-w-[1500px] para que tenga más recorrido en monitores
   <section className="relative w-full md:max-w-[1735px] mx-auto px-0 md:px-4 py-0 md:py-6">
      
      {/* Contenedor uniforme y unificado de punta a punta */}
      <div className="relative w-full bg-brand-card overflow-hidden group">
        
        {/* Cambiamos md:aspect-[21/9] por md:aspect-[16/8] para darle más alto y presencia en PC */}
        <div className="relative w-full aspect-[16/9] md:aspect-[16/9] overflow-hidden flex items-center justify-center">
          <img 
            src={heroBg} 
            alt="DR. DROPS Hero Banner" 
            className="w-full h-full object-cover md:object-center transform transition-transform duration-700 ease-out group-hover:scale-105"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
          
          {/* Capa de sombreado unificada */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/40 to-black/20" />

         {/* Contenido flotante sobre la imagen */}
<div className="absolute inset-0 z-10 flex flex-col items-center justify-center md:justify-center text-center p-6 md:p-12">
  <span className="text-xs md:text-sm font-black tracking-[0.3em] text-neutral-300 uppercase mb-2 drop-shadow-md">
    NEW COLLECTION 2026
  </span>
  
  <h1 className="text-2xl md:text-2xl font-bold uppercase tracking-tighter text-white max-w-4xl leading-none mb-3 drop-shadow-xl">
    STREETWEAR SIN LÍMITES
  </h1>
  
  <p className="text-xs md:text-sm text-neutral-300 font-semibold uppercase tracking-widest mb-6 drop-shadow-md">
    MÁS QUE ROPA, ES ACTITUD
  </p>
</div>
        </div>

      </div>
    </section>
  );
}