// src/components/ProductCard.jsx
import { useCart } from '../context/CartContext';
import { motion } from 'framer-motion';

export function ProductCard({ product, onSelectProduct }) {
  const { addToCart } = useCart();

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ 
        y: -6, 
        scale: 1.01,
        borderColor: "rgba(255, 255, 255, 0.7)",
        transition: { duration: 0.25, ease: "easeOut" } 
      }}
      whileTap={{ scale: 0.98 }}
      style={{ willChange: "transform, opacity, filter" }}
      className="group relative bg-neutral-950 border border-brand-border rounded-sm overflow-hidden flex flex-col justify-between shadow-2xl cursor-pointer"
      onClick={() => onSelectProduct(product)}
    >
      {/* Patrón de fondo sutil */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#4a4a4a_1px,transparent_1px)] [background-size:14px_14px] pointer-events-none group-hover:opacity-30 transition-opacity" />

      {/* Imagen del Producto */}
      <div className="relative aspect-[4/5] md:aspect-square overflow-hidden bg-neutral-900">
        <motion.img 
          whileHover={{ scale: 1.06 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          src={product.image} 
          alt={product.name} 
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover object-center"
        />
        {/* Overlay al hacer hover en PC */}
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:flex items-center justify-center">
          <span className="bg-white text-black text-xs font-black px-4 py-2 uppercase tracking-widest shadow-2xl">
            VER DETALLE
          </span>
        </div>
      </div>

      {/* Información del Producto */}
      <div className="relative z-10 p-3 md:p-4 flex flex-col justify-between flex-grow bg-gradient-to-b from-neutral-950/90 to-neutral-950">
        <div>
          <span className="text-[9px] md:text-[10px] font-bold tracking-widest text-brand-muted uppercase">
            {product.category}
          </span>
          <h3 className="text-xs md:text-sm font-black text-white uppercase tracking-wider mt-1 line-clamp-1 group-hover:underline">
            {product.name}
          </h3>
        </div>

        <div className="flex items-center justify-between mt-3 md:mt-4 pt-2 border-t border-brand-border/50">
          <span className="text-sm md:text-base font-extrabold text-white">
            ${product.price.toLocaleString('es-AR')}
          </span>
          
          <motion.button 
            whileHover={{ scale: 1.08, backgroundColor: "#e5e5e5" }}
            whileTap={{ scale: 0.92 }}
            onClick={(e) => {
              e.stopPropagation();
              addToCart(product, product.sizes[0]);
            }}
            className="bg-white text-black p-1.5 md:p-2 transition-colors text-xs md:text-sm"
            title="Agregar al carrito"
          >
            🛒
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}