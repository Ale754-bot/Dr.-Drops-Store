// src/components/ProductCard.jsx
import { useCart } from '../context/CartContext';
import { motion } from 'framer-motion';

export function ProductCard({ product, onSelectProduct }) {
  const { addToCart } = useCart();

  return (
    <>
      {/* ================= VISTA MÓVIL (Aceleración por GPU y carga diferida) ================= */}
      <motion.div 
        initial={{ opacity: 0, y: 30, filter: "blur(4px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true, margin: "-10px" }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        whileTap={{ scale: 0.97 }}
        style={{ willChange: "transform, opacity, filter" }}
        className="block md:hidden group relative bg-neutral-950 border border-brand-border rounded-sm overflow-hidden flex flex-col justify-between shadow-xl"
      >
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#383838_1px,transparent_1px)] [background-size:12px_12px] pointer-events-none" />

        <div 
          className="relative aspect-[4/5] overflow-hidden bg-neutral-900 cursor-pointer"
          onClick={() => onSelectProduct(product)}
        >
          <img 
            src={product.image} 
            alt={product.name} 
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover object-center"
          />
        </div>

        <div className="relative z-10 p-2.5 flex flex-col justify-between flex-grow bg-gradient-to-b from-neutral-950/80 to-neutral-950">
          <div>
            <span className="text-[8px] font-bold tracking-widest text-brand-muted uppercase block">
              {product.category}
            </span>
            <h3 
              className="text-[11px] font-black text-white uppercase tracking-tight mt-0.5 line-clamp-1 cursor-pointer"
              onClick={() => onSelectProduct(product)}
            >
              {product.name}
            </h3>
          </div>

          <div className="flex items-center justify-between mt-2 pt-1.5 border-t border-brand-border/40">
            <span className="text-xs font-black text-white">
              ${product.price.toLocaleString('es-AR')}
            </span>
            <button 
              onClick={() => addToCart(product, product.sizes[0])}
              className="bg-white text-black p-1 text-[10px]"
              title="Agregar al carrito"
            >
              🛒
            </button>
          </div>
        </div>
      </motion.div>


      {/* ================= VISTA PC (Mantiene todo tu diseño, blur y animaciones fluidas) ================= */}
      <motion.div 
        initial={{ opacity: 0, y: 70, filter: "blur(8px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: false, margin: "-50px" }}
        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
        whileHover={{ 
          y: -8, 
          scale: 1.01,
          borderColor: "rgba(255, 255, 255, 0.7)",
          transition: { duration: 0.3, ease: "easeOut" } 
        }}
        style={{ willChange: "transform, opacity, filter" }}
        className="hidden md:flex group relative bg-neutral-950 border border-brand-border rounded-sm overflow-hidden flex flex-col justify-between shadow-2xl cursor-pointer"
      >
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#4a4a4a_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none group-hover:opacity-30 transition-opacity" />

        <div 
          className="relative aspect-square overflow-hidden bg-neutral-900"
          onClick={() => onSelectProduct(product)}
        >
          <motion.img 
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            src={product.image} 
            alt={product.name} 
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-center justify-center">
            <span className="bg-white text-black text-xs font-black px-4 py-2 uppercase tracking-widest shadow-2xl">
              VER DETALLE
            </span>
          </div>
        </div>

        <div className="relative z-10 p-4 flex flex-col justify-between flex-grow bg-gradient-to-b from-neutral-950/90 to-neutral-950">
          <div>
            <span className="text-[10px] font-bold tracking-widest text-brand-muted uppercase">
              {product.category}
            </span>
            <h3 
              className="text-sm font-black text-white uppercase tracking-wider mt-1 hover:underline"
              onClick={() => onSelectProduct(product)}
            >
              {product.name}
            </h3>
          </div>

          <div className="flex items-center justify-between mt-4 pt-2 border-t border-brand-border/50">
            <span className="text-base font-extrabold text-white">
              ${product.price.toLocaleString('es-AR')}
            </span>
            
            <motion.button 
              whileHover={{ scale: 1.08, backgroundColor: "#e5e5e5" }}
              whileTap={{ scale: 0.92 }}
              onClick={(e) => {
                e.stopPropagation();
                addToCart(product, product.sizes[0]);
              }}
              className="bg-white text-black p-2 transition-colors"
              title="Agregar al carrito"
            >
              🛒
            </motion.button>
          </div>
        </div>
      </motion.div>
    </>
  );
}