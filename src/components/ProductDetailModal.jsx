// src/components/ProductDetailModal.jsx
import { useState } from 'react';
import { useCart } from '../context/CartContext';

export function ProductDetailModal({ product, onClose }) {
  const { addToCart } = useCart();
  const [selectedImage, setSelectedImage] = useState(product.images?.[0] || product.image);
  const [selectedSize, setSelectedSize] = useState(product.sizes?.[0] || '');

  if (!product) return null;

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div 
        className="bg-brand-card border border-brand-border text-white w-full max-w-4xl p-6 md:p-8 relative my-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-brand-muted hover:text-white text-xl font-bold p-2 z-10"
        >
          ✕
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Galería */}
          <div className="flex flex-col gap-4">
            <div className="aspect-square bg-neutral-900 border border-brand-border overflow-hidden flex items-center justify-center">
              <img 
                src={selectedImage} 
                alt={product.name} 
                className="w-full h-full object-contain"
              />
            </div>

            {product.images && product.images.length > 1 && (
              <div className="flex gap-2 overflow-x-auto pb-2">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(img)}
                    className={`w-16 h-16 border-2 flex-shrink-0 overflow-hidden ${
                      selectedImage === img ? 'border-white' : 'border-brand-border opacity-60'
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Info y Opciones */}
          <div className="flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold tracking-widest text-brand-muted uppercase">
                {product.category}
              </span>
              <h2 className="text-2xl md:text-3xl font-black uppercase tracking-wider mt-1">
                {product.name}
              </h2>
              <p className="text-2xl font-black text-white mt-2">
                ${product.price.toLocaleString('es-AR')}
              </p>

              <p className="text-sm text-neutral-300 mt-4 leading-relaxed">
                {product.description}
              </p>

              {/* Talles */}
              <div className="mt-6">
                <label className="text-xs font-bold tracking-widest text-brand-muted uppercase block mb-2">
                  SELECCIONAR TALLE:
                </label>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-4 py-2 text-sm font-bold border transition-colors ${
                        selectedSize === size
                          ? 'bg-white text-black border-white'
                          : 'bg-transparent text-white border-brand-border hover:border-neutral-500'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {product.details && (
                <div className="mt-6 pt-4 border-t border-brand-border text-xs text-neutral-400 whitespace-pre-line leading-relaxed">
                  {product.details}
                </div>
              )}
            </div>

            <div className="mt-8 pt-4 border-t border-brand-border">
              <button
                onClick={() => {
                  addToCart(product, selectedSize);
                  onClose();
                }}
                className="w-full bg-white text-black py-4 text-xs font-black tracking-widest uppercase hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2"
              >
                <span>AGREGAR AL CARRITO</span>
                <span>→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}