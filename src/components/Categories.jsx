// src/components/Categories.jsx
import tearBg from '../assets/EFECTO PAPEL.png';
import { motion } from 'framer-motion';

export function Categories({ selectedCategory, setSelectedCategory }) {
  const categoriesList = [
    { name: 'BUZOS', img: '/CAT BUZO.png' },
    { name: 'CAMPERAS', img: '/CAT CAMPERA.png' },
    { name: 'CONJUNTOS', img: '/CAT CONJUNTO.png' },
    { name: 'GORROS', img: '/CAT GORRO.png' },
  ];

  // Verificamos si hay algún filtro activo (distinto de 'TODOS' o vacío)
  const isFiltered = selectedCategory && selectedCategory.toLowerCase() !== 'todos';

  return (
    <section className="relative w-full -mt-12 md:-mt-40 z-20">
      
      {/* 1. La imagen PNG de fondo */}
      <div className="w-full overflow-hidden leading-none">
        <img 
          src={tearBg} 
          alt="Efecto de diseño" 
          className="w-full h-auto object-cover min-h-[190px] md:min-h-[260px]"
        />
      </div>

      {/* 2. El contenedor de categorías superpuesto exactamente en su lugar */}
      <div className="absolute inset-0 z-30 flex flex-col items-center justify-center max-w-7xl mx-auto px-4 py-2 md:py-6">
        
        {/* Botón rápido "Ver todos" (Aparece solo cuando hay un filtro activo) */}
        {isFiltered && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="mb-2"
          >
            <button
              onClick={() => setSelectedCategory('TODOS')}
              className="bg-black text-white hover:bg-neutral-800 px-3 py-1 text-[10px] md:text-xs font-black uppercase tracking-wider rounded-full shadow-md transition-all flex items-center gap-1.5 border border-white/20 cursor-pointer"
            >
              <span>← Ver catálogo completo</span>
            </button>
          </motion.div>
        )}

        {/* Vista Celular: Deslizamiento lateral mantenido */}
        <div className="flex md:hidden gap-3 w-full justify-center items-center px-1">
          {categoriesList.map((cat, index) => {
            const isSelected = selectedCategory && selectedCategory.toLowerCase() === cat.name.toLowerCase();
            return (
              <motion.button
                key={cat.name}
                initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ 
                  duration: 0.9,            
                  delay: index * 0.22,       
                  ease: [0.16, 1, 0.3, 1] 
                }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setSelectedCategory(cat.name)}
                className="flex flex-col items-center flex-1 group focus:outline-none cursor-pointer"
              >
                <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full border-2 overflow-hidden shadow-md transition-all ${
                  isSelected 
                    ? 'border-black scale-105 ring-2 ring-black/20 bg-black' 
                    : 'border-neutral-300'
                }`}>
                  <img src={cat.img} alt={cat.name} className="w-full h-full object-cover" />
                </div>
                <span className={`text-[9px] sm:text-[10px] font-black tracking-wider mt-1 uppercase transition-colors ${
                  isSelected ? 'text-black font-extrabold underline' : 'text-neutral-800'
                }`}>
                  {cat.name}
                </span>
              </motion.button>
            );
          })}
        </div>

        {/* Vista PC: Tarjetas de 4 columnas en posición fija con imágenes más amplias */}
        <div className="hidden md:grid grid-cols-4 gap-4 lg:gap-6 w-full max-w-5xl">
          {categoriesList.map((cat, index) => {
            const isSelected = selectedCategory && selectedCategory.toLowerCase() === cat.name.toLowerCase();
            return (
              <motion.div
                key={cat.name}
                initial={{ opacity: 0, y: 50, filter: "blur(6px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  duration: 1.0,            
                  delay: index * 0.2,        
                  ease: [0.16, 1, 0.3, 1] 
                }}
                whileHover={{ y: -6, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <button
                  onClick={() => setSelectedCategory(cat.name)}
                  className={`w-full group relative border rounded-xl overflow-hidden shadow-xl text-left transition-colors duration-300 focus:outline-none bg-white/95 backdrop-blur-sm cursor-pointer ${
                    isSelected
                      ? 'border-black ring-2 ring-black bg-white'
                      : 'border-neutral-200 hover:border-black'
                  }`}
                >
                  {/* Quitamos las restricciones de altura máxima para que la imagen ocupe todo su espacio proporcional */}
                  <div className="relative w-full aspect-square overflow-hidden bg-neutral-900">
                    <img 
                      src={cat.img} 
                      alt={cat.name} 
                      className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-2.5 lg:p-3 flex items-center justify-between">
                    <div>
                      <h3 className="text-xs lg:text-sm font-black tracking-widest uppercase text-black">
                        {cat.name}
                      </h3>
                      {cat.desc && (
                        <span className="text-[9px] lg:text-[10px] text-neutral-500 font-bold uppercase tracking-wider">
                          {cat.desc}
                        </span>
                      )}
                    </div>
                    <span className="text-black font-bold transform transition-transform group-hover:translate-x-1">→</span>
                  </div>
                </button>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}