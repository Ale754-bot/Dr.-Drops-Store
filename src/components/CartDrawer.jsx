// src/components/CartDrawer.jsx
import { useCart } from '../context/CartContext';

export function CartDrawer() {
  const { 
    cart, 
    isCartOpen, 
    setIsCartOpen, 
    removeFromCart, 
    updateQuantity, 
    totalPrice, 
    checkoutWhatsApp 
  } = useCart();

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Fondo oscuro traslúcido */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={() => setIsCartOpen(false)}
      />

      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-brand-card border-l border-brand-border text-white flex flex-col">
          
          {/* Header del Carrito */}
          <div className="p-6 border-b border-brand-border flex items-center justify-between">
            <h2 className="text-base font-black tracking-widest uppercase">CARRITO DE COMPRAS</h2>
            <button 
              onClick={() => setIsCartOpen(false)}
              className="text-neutral-400 hover:text-white p-1 font-bold text-lg"
            >
              ✕
            </button>
          </div>

          {/* Lista de productos en el carrito */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {cart.length === 0 ? (
              <div className="text-center py-16 text-neutral-500">
                <p className="text-4xl mb-3">🛒</p>
                <p className="text-xs font-bold tracking-widest uppercase">Tu carrito está vacío</p>
              </div>
            ) : (
              cart.map((item) => (
                <div 
                  key={`${item.id}-${item.selectedSize}`} 
                  className="flex gap-4 pb-4 border-b border-brand-border/60 items-center"
                >
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-16 h-16 object-cover bg-neutral-900 border border-brand-border flex-shrink-0"
                  />
                  <div className="flex-1">
                    <h4 className="text-xs font-black uppercase tracking-wider">{item.name}</h4>
                    <p className="text-[11px] text-brand-muted mt-0.5">Talle: <span className="text-white font-bold">{item.selectedSize}</span></p>
                    <p className="text-xs font-bold text-white mt-1">${item.price.toLocaleString('es-AR')}</p>

                    {/* Controles de cantidad */}
                    <div className="flex items-center gap-3 mt-2">
                      <div className="flex items-center border border-brand-border bg-neutral-900">
                        <button 
                          onClick={() => updateQuantity(item.id, item.selectedSize, -1)}
                          className="px-2 py-0.5 text-xs text-neutral-400 hover:text-white"
                        >
                          -
                        </button>
                        <span className="px-2 text-xs font-bold">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.selectedSize, 1)}
                          className="px-2 py-0.5 text-xs text-neutral-400 hover:text-white"
                        >
                          +
                        </button>
                      </div>

                      <button 
                        onClick={() => removeFromCart(item.id, item.selectedSize)}
                        className="text-[10px] text-red-400 hover:text-red-300 font-bold tracking-wider uppercase"
                      >
                        Eliminar
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer / Resumen y Botón WhatsApp */}
          {cart.length > 0 && (
            <div className="p-6 border-t border-brand-border bg-brand-dark space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-neutral-400 uppercase tracking-widest">Total Estimado:</span>
                <span className="text-xl font-black text-white">${totalPrice.toLocaleString('es-AR')}</span>
              </div>

              <button
                onClick={checkoutWhatsApp}
                className="w-full bg-white text-black py-4 text-xs font-black tracking-widest uppercase hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2"
              >
                <span>FINALIZAR COMPRA POR WHATSAPP</span>
                <span>→</span>
              </button>
              
              <p className="text-[10px] text-center text-neutral-500 uppercase tracking-wider">
                Serás redirigido a WhatsApp para coordinar pago y envío.
              </p>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}