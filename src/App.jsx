// src/App.jsx
import { useState } from 'react';
import productsData from './data/products.json';
import { CartProvider } from './context/CartContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Marquee } from './components/Marquee';
import { Categories } from './components/Categories';
import { StatementBanner } from './components/StatementBanner';
import { ProductCard } from './components/ProductCard';
import { ProductDetailModal } from './components/ProductDetailModal';
import { CartDrawer } from './components/CartDrawer';
import { Footer } from './components/Footer';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState('TODOS');
  const [activeProduct, setActiveProduct] = useState(null);

  // Filtrar productos según la categoría seleccionada
  const filteredProducts = selectedCategory === 'TODOS'
    ? productsData
    : productsData.filter((p) => p.category.toLowerCase() === selectedCategory.toLowerCase());

  return (
    <CartProvider>
      {/* Contenedor principal: Fondo negro sólido nativo en mobile (cero lag), imagen de fondo texturizada sólo en MD/PC */}
      <div 
        className="min-h-screen text-white flex flex-col selection:bg-white selection:text-black bg-neutral-950 md:bg-cover md:bg-center relative"
        style={{ backgroundImage: `url('/BG.jpg')` }}
      >
        {/* Overlay oscuro condicional: liviano en mobile, sutilmente traslúcido en PC */}
        <div className="absolute inset-0 bg-neutral-950 md:bg-black/85 pointer-events-none z-0" />

        {/* Contenido general de la tienda sobre el fondo */}
        <div className="relative z-10 flex flex-col min-h-screen">
          {/* Barra Superior */}
          <Navbar />
          
          {/* Frase animada estilo Marquee */}
          <Marquee text=" DR. DROPS || STREETWEAR SIN LÍMITES || MÁS QUE ROPA, ES ACTITUD || " />

          {/* Hero Principal */}
          <Hero />

          {/* Filtro de Categorías */}
          <Categories 
            selectedCategory={selectedCategory} 
            setSelectedCategory={setSelectedCategory} 
          />

          {/* Grilla de Catálogo */}
          <main className="flex-grow max-w-7xl mx-auto px-4 py-12 md:py-16 w-full" id="catalogo">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-lg md:text-xl font-black tracking-wider uppercase">
                {selectedCategory === 'TODOS' ? 'CATÁLOGO 2026' : selectedCategory.toUpperCase()}
              </h2>
              <span className="text-xs text-brand-muted uppercase font-bold tracking-widest">
                {filteredProducts.length} {filteredProducts.length === 1 ? 'prenda' : 'prendas'}
              </span>
            </div>

            {/* Grilla: 2 columnas en mobile, 3 en tablet y 4 en PC */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onSelectProduct={(prod) => setActiveProduct(prod)}
                />
              ))}
            </div>
          </main>

          {/* Sección de Lookbook Editorial con las dos imágenes juntas */}
          <StatementBanner 
            imageSrc1="/IMAGEN 1.png" 
            imageSrc2="/IMAGEN 2.png" 
          />

          {/* Marquee inferior de cierre */}
          <Marquee text=" ESTILO URBANO || CALIDAD PREMIUM || ESTILO URBANO || CALIDAD PREMIUM ||"/>
 
          {/* Footer con Badges */}
          <Footer />

          {/* Modal de Detalle de Producto */}
          {activeProduct && (
            <ProductDetailModal
              product={activeProduct}
              onClose={() => setActiveProduct(null)}
            />
          )}

          {/* Drawer Lateral del Carrito */}
          <CartDrawer />
        </div>
      </div>
    </CartProvider>
  );
}