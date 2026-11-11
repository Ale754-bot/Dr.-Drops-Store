// src/components/Categories.jsx
import tearBg from '../assets/EFECTO PAPEL.png'; // Asegúrate de que esta sea la ruta correcta a tu PNG

export function Categories({ selectedCategory, setSelectedCategory }) {
  const categoriesList = [
    { name: 'BUZOS', desc: 'Hoodies & Heavyweight', img: '/api/placeholder/400/300' },
    { name: 'CAMPERAS', desc: 'Techwear & Puffers', img: '/api/placeholder/400/300' },
    { name: 'CONJUNTOS', desc: 'Sets Streetwear', img: '/api/placeholder/400/300' },
    { name: 'GORROS', desc: 'Beanies & Accesorios', img: '/api/placeholder/400/300' },
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

      {/* 2. El contenedor de categorías superpuesto */}
      <div className="absolute inset-0 z-30 flex flex-col items-center justify-center max-w-7xl mx-auto px-4 py-4">
        
        {/* Botón rápido "Ver todos" (Aparece solo cuando hay un filtro activo) */}
        {isFiltered && (
          <div className="mb-2">
            <button
              onClick={() => setSelectedCategory('TODOS')}
              className="bg-black text-white hover:bg-neutral-800 px-3 py-1 text-[10px] md:text-xs font-black uppercase tracking-wider rounded-full shadow-md transition-all flex items-center gap-1.5 border border-white/20"
            >
              <span>← Ver catálogo completo</span>
            </button>
          </div>
        )}

        {/* Vista Celular: Exactamente las 4 categorías centradas */}
        <div className="flex md:hidden gap-3 w-full justify-center items-center px-1">
          {categoriesList.map((cat) => {
            const isSelected = selectedCategory && selectedCategory.toLowerCase() === cat.name.toLowerCase();
            return (
              <button
                key={cat.name}
                onClick={() => setSelectedCategory(cat.name)}
                className="flex flex-col items-center flex-1 group focus:outline-none"
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
              </button>
            );
          })}
        </div>

        {/* Vista PC: Tarjetas de 4 columnas centradas */}
        <div className="hidden md:grid grid-cols-4 gap-6 w-full max-w-6xl">
          {categoriesList.map((cat) => {
            const isSelected = selectedCategory && selectedCategory.toLowerCase() === cat.name.toLowerCase();
            return (
              <button
                key={cat.name}
                onClick={() => setSelectedCategory(cat.name)}
                className={`group relative border rounded-xl overflow-hidden shadow-xl text-left transition-all duration-300 focus:outline-none bg-white/95 backdrop-blur-sm ${
                  isSelected
                    ? 'border-black ring-2 ring-black bg-white scale-[1.02]'
                    : 'border-neutral-200 hover:border-black'
                }`}
              >
                <div className="relative w-full h-32 lg:h-36 overflow-hidden bg-neutral-200">
                  <img 
                    src={cat.img} 
                    alt={cat.name} 
                    className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-3 flex items-center justify-between">
                  <div>
                    <h3 className="text-xs lg:text-sm font-black tracking-widest uppercase text-black">
                      {cat.name}
                    </h3>
                    <span className="text-[9px] lg:text-[10px] text-neutral-500 font-bold uppercase tracking-wider">
                      {cat.desc}
                    </span>
                  </div>
                  <span className="text-black font-bold transform transition-transform group-hover:translate-x-1">→</span>
                </div>
              </button>
            );
          })}
        </div>

      </div>
    </section>
  );
}