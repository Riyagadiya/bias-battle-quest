
import React, { createContext, useContext, useState } from 'react';

interface CartItem {
  id: string;
  title: string;
  quantity: number;
  price: number;
}

interface CartContextType {
  items: CartItem[];
  addToCart: (item: Omit<CartItem, 'id'>) => void;
  removeFromCart: (title: string) => void;
  getCartCount: () => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [items, setItems] = useState<CartItem[]>([]);

  const addToCart = (item: Omit<CartItem, 'id'>) => {
    setItems(currentItems => {
      const existingItem = currentItems.find(i => i.title === item.title);
      if (existingItem) {
        return currentItems.map(i => 
          i.title === item.title 
            ? { ...i, quantity: i.quantity + item.quantity }
            : i
        );
      }
      return [...currentItems, { ...item, id: Date.now().toString() }];
    });
  };

  const removeFromCart = (title: string) => {
    setItems(currentItems => currentItems.filter(item => item.title !== title));
  };

  const getCartCount = () => {
    return items.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <CartContext.Provider value={{ items, addToCart, removeFromCart, getCartCount }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
