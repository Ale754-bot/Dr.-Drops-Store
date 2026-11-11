// src/context/CartContext.jsx
import { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

// ⚠️ Podés cambiar este número por el de tu tienda (código de país sin el +)
const WHATSAPP_PHONE = '5491112345678';

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem('dr_drops_cart');
    return saved ? JSON.parse(saved) : [];
  });

  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('dr_drops_cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product, selectedSize) => {
    const size = selectedSize || product.sizes[0];
    setCart((prevCart) => {
      const itemIndex = prevCart.findIndex(
        (item) => item.id === product.id && item.selectedSize === size
      );

      if (itemIndex > -1) {
        const updated = [...prevCart];
        updated[itemIndex].quantity += 1;
        return updated;
      }

      return [...prevCart, { ...product, selectedSize: size, quantity: 1 }];
    });
  };

  const removeFromCart = (id, selectedSize) => {
    setCart((prev) => prev.filter((item) => !(item.id === id && item.selectedSize === selectedSize)));
  };

  const updateQuantity = (id, selectedSize, delta) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.id === id && item.selectedSize === selectedSize) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean)
    );
  };

  const clearCart = () => setCart([]);

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const checkoutWhatsApp = () => {
    if (cart.length === 0) return;

    let message = '👑 *NUEVO PEDIDO - DR. DROPS*\n\n';
    cart.forEach((item) => {
      message += `• *${item.name}* (Talle: ${item.selectedSize})\n  ${item.quantity}x $${item.price.toLocaleString('es-AR')}\n`;
    });

    message += `\n💰 *TOTAL:* $${totalPrice.toLocaleString('es-AR')}\n\n`;
    message += '¡Hola! Quisiera confirmar este pedido y coordinar el pago y envío.';

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${+5492945685227}?text=${encoded}`, '_blank');
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalItems,
        totalPrice,
        isCartOpen,
        setIsCartOpen,
        checkoutWhatsApp
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart debe usarse dentro de un CartProvider');
  }
  return context;
}