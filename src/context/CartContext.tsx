
import React, { createContext, useContext, useState, useEffect } from 'react';

interface CartItem {
  id: string;
  title: string;
  quantity: number;
  price: number;
}

interface CartContextType {
  items: CartItem[];
  savedItems: CartItem[];
  addToCart: (item: Omit<CartItem, 'id'>) => void;
  removeFromCart: (title: string) => void;
  updateQuantity: (title: string, quantity: number) => void;
  saveForLater: (item: CartItem) => void;
  removeSavedItem: (title: string) => void;
  moveToCart: (item: CartItem) => void;
  getCartCount: () => number;
  clear: () => void; // Added the clear method to the interface
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const loadCart = (): { items: CartItem[], savedItems: CartItem[] } => {
  if (typeof window === 'undefined') return { items: [], savedItems: [] };
  const savedCart = localStorage.getItem('cart');
  const savedForLater = localStorage.getItem('savedItems');
  return {
    items: savedCart ? JSON.parse(savedCart) : [],
    savedItems: savedForLater ? JSON.parse(savedForLater) : []
  };
};

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [items, setItems] = useState<CartItem[]>(loadCart().items);
  const [savedItems, setSavedItems] = useState<CartItem[]>(loadCart().savedItems);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(items));
  }, [items]);

  useEffect(() => {
    localStorage.setItem('savedItems', JSON.stringify(savedItems));
  }, [savedItems]);

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

  const updateQuantity = (title: string, quantity: number) => {
    setItems(currentItems =>
      currentItems.map(item =>
        item.title === title ? { ...item, quantity } : item
      )
    );
  };

  const saveForLater = (item: CartItem) => {
    setSavedItems(current => [...current, item]);
    removeFromCart(item.title);
  };

  const removeSavedItem = (title: string) => {
    setSavedItems(current => current.filter(item => item.title !== title));
  };

  const moveToCart = (item: CartItem) => {
    addToCart(item);
    removeSavedItem(item.title);
  };

  const getCartCount = () => {
    return items.reduce((total, item) => total + item.quantity, 0);
  };

  // Add the clear method implementation
  const clear = () => {
    setItems([]);
    localStorage.removeItem('cart');
  };

  return (
    <CartContext.Provider value={{ 
      items, 
      savedItems, 
      addToCart, 
      removeFromCart, 
      updateQuantity, 
      saveForLater, 
      removeSavedItem, 
      moveToCart, 
      getCartCount,
      clear // Add the clear method to the context value
    }}>
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
