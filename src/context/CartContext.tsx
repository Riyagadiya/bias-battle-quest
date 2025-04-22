
import React, { createContext, useContext, useState } from 'react';

interface CartItem {
  title: string;
  quantity: number;
  price: number;
}

interface CartContextType {
  items: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (title: string) => void;
  getTotalItems: () => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  const addToCart = (newItem: CartItem) => {
    setItems(currentItems => {
      const existingItem = currentItems.find(item => item.title === newItem.title);
      
      if (existingItem) {
        return currentItems.map(item =>
          item.title === newItem.title
            ? { ...item, quantity: item.quantity + newItem.quantity }
            : item
        );
      }
      
      return [...currentItems, newItem];
    });
  };

  const removeFromCart = (title: string) => {
    setItems(currentItems => currentItems.filter(item => item.title !== title));
  };

  const getTotalItems = () => {
    return items.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <CartContext.Provider value={{ items, addToCart, removeFromCart, getTotalItems }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
