// src/components/StatementBanner.jsx
import { motion } from 'framer-motion';

export function StatementBanner({ imageSrc1, imageSrc2 }) {
  return (
    <section className="my-24 max-w-7xl mx-auto px-4 overflow-hidden">
      {/* Título de sección editorial */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        // once: false permite que se vuelva a animar cada vez que subís y bajás
        viewport={{ once: false, margin: "-50px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex items-center justify-between mb-10 border-b border-neutral-800 pb-4"
      >
        <span className="text-xs font-mono tracking-[0.4em] text-neutral-400 uppercase">
          // VISUAL LOOKBOOK 2026
        </span>
        <span className="text-xs font-mono tracking-widest text-neutral-500 uppercase">
          DR. DROPS ARCHIVE
        </span>
      </motion.div>

      {/* Contenedor en grilla para las dos fotos verticales */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-start">
        
        {/* Imagen 1 */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-30px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ y: -8 }}
          className="group relative aspect-[3/4] overflow-hidden bg-neutral-900 border border-neutral-800 rounded-sm shadow-2xl cursor-pointer"
        >
          <img 
            src={imageSrc1} 
            alt="Dr. Drops Look 01" 
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-1000 ease-out filter contrast-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 pointer-events-none" />
          <div className="absolute bottom-4 left-4">
            <span className="bg-black/80 backdrop-blur-md text-white font-mono text-[9px] px-2.5 py-1 uppercase tracking-[0.2em] border border-white/20">
              [LOOK 01 — STREETWEAR]
            </span>
          </div>
        </motion.div>

        {/* Imagen 2 con desplazamiento vertical asimétrico */}
        <motion.div 
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-30px" }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ y: -8 }}
          className="group relative aspect-[3/4] overflow-hidden bg-neutral-900 border border-neutral-800 rounded-sm shadow-2xl cursor-pointer md:mt-16"
        >
          <img 
            src={imageSrc2} 
            alt="Dr. Drops Look 02" 
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-1000 ease-out filter contrast-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 pointer-events-none" />
          <div className="absolute bottom-4 left-4">
            <span className="bg-black/80 backdrop-blur-md text-white font-mono text-[9px] px-2.5 py-1 uppercase tracking-[0.2em] border border-white/20">
              [LOOK 02 — STREETWEAR]
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}