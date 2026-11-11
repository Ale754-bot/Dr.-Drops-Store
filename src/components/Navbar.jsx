// src/components/Navbar.jsx
import { useCart } from '../context/CartContext';
import { ShoppingBag } from 'lucide-react';
// Importamos la imagen del logo desde assets/brand/
import logoImg from '../assets/LOGO DR.DROPS.png'; 

export function Navbar() {
  const { totalItems, setIsCartOpen } = useCart();

  return (
    <header className="sticky top-0 z-40 bg-brand-dark/90 backdrop-blur-md border-b border-brand-border">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between relative">
        
        {/* Espaciador izquierdo invisible para balancear el layout en mobile cuando el logo está centrado */}
        <div className="w-10 md:hidden" />

        {/* Logo de la marca (Centrado en mobile, alineado a la izquierda en desktop) */}
        <a 
          href="#" 
          className="absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0 flex items-center gap-3 group"
        >
          <img 
            src={logoImg} 
            alt="DR. DROPS Logo" 
            className="h-8 md:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
        </a>

        {/* Botón Carrito Minimalista (Solo ícono + Badge flotante) */}
        <button
          onClick={() => setIsCartOpen(true)}
          className="relative p-2.5 text-white hover:text-neutral-300 transition-colors ml-auto"
          aria-label="Abrir carrito"
        >
          <ShoppingBag size={22} strokeWidth={2} />
          {totalItems > 0 && (
            <span className="absolute -top-1 -right-1 bg-white text-black text-[10px] font-black w-4 h-4 rounded-full flex items-center justify-center shadow-md">
              {totalItems}
            </span>
          )}
        </button>

      </div>
    </header>
  );
}