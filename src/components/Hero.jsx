// src/components/Hero.jsx
import heroBg from '../assets/HERO.jpg';
import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section className="relative w-full md:max-w-[1735px] mx-auto px-0 md:px-4 py-0 md:py-6">
      
      {/* Contenedor principal */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full bg-neutral-950 overflow-hidden group border border-neutral-800 shadow-2xl"
      >
        <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] md:aspect-[16/9] overflow-hidden flex items-center justify-center">
          
          {/* Imagen de fondo con zoom continuo y suave */}
          <motion.img 
            src={heroBg} 
            alt="DR. DROPS Hero Banner" 
            animate={{ scale: [1, 1.04, 1] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            className="w-full h-full object-cover object-center transform-gpu"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
          
          {/* Capas de sombreado y textura */}
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-black/50 to-black/30" />
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] opacity-10 [background-size:16px_16px] pointer-events-none" />

          {/* Contenido flotante */}
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center p-4 sm:p-6 md:p-12 overflow-hidden">
            
            {/* 1. Badge superior con pulso intermitente (latido cada unos segundos) */}
            <motion.div
              initial={{ opacity: 0, y: -20, filter: "blur(4px)" }}
              animate={{ 
                opacity: [1, 1, 0.7, 1], 
                scale: [1, 1.03, 1, 1],
                y: 0, 
                filter: "blur(0px)" 
              }}
              transition={{ 
                opacity: { duration: 4, repeat: Infinity, repeatDelay: 3, ease: "easeInOut" },
                scale: { duration: 4, repeat: Infinity, repeatDelay: 3, ease: "easeInOut" },
                default: { duration: 0.6 }
              }}
              className="border border-white/30 bg-black/60 backdrop-blur-md px-3 py-0.5 md:px-3.5 md:py-1 mb-2 rounded-full shadow-lg"
            >
              <span className="text-[8px] sm:text-[9px] md:text-xs font-black tracking-[0.25em] md:tracking-[0.3em] text-white uppercase">
                DR. DROPS 2026
              </span>
            </motion.div>
            
            {/* 2. Título principal con escala reducida en móvil (text-xl) y grande en PC (md:text-6xl) */}
            <motion.h1 
              initial={{ opacity: 0, y: 35, filter: "blur(6px)" }}
              animate={{ 
                opacity: 1, 
                y: 0, 
                filter: "blur(0px)",
                scale: [1, 1.015, 1] 
              }}
              transition={{ 
                opacity: { delay: 0.25, duration: 0.8 },
                scale: { duration: 5, repeat: Infinity, repeatDelay: 4, ease: "easeInOut" }
              }}
              className="text-xl sm:text-2xl md:text-6xl font-black uppercase tracking-tighter text-white max-w-4xl leading-none mb-1.5 md:mb-4 drop-shadow-2xl px-2"
            >
              STREETWEAR <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-300 to-neutral-500">SIN LÍMITES</span>
            </motion.h1>
            
            {/* 3. Slogan secundario compacto para móviles */}
            <motion.p 
              initial={{ opacity: 0, y: 25, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ delay: 0.45, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-[9px] sm:text-[11px] md:text-sm text-neutral-300 font-bold uppercase tracking-[0.2em] md:tracking-[0.25em] drop-shadow-md"
            >
              MÁS QUE ROPA, ES ACTITUD
            </motion.p>

          </div>
        </div>
      </motion.div>
    </section>
  );
}