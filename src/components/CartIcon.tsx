
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useIsMobile } from "@/hooks/use-mobile";

const CartIcon = () => {
  const navigate = useNavigate();
  const { getCartCount } = useCart();
  const [cartCount, setCartCount] = useState(0);
  const [showAnimation, setShowAnimation] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const count = getCartCount();
    
    if (count > cartCount) {
      setShowAnimation(true);
      const timer = setTimeout(() => setShowAnimation(false), 1000);
      return () => clearTimeout(timer);
    }
    
    setCartCount(count);
  }, [getCartCount, cartCount]);

  const handleCartClick = () => {
    navigate('/cart');
  };

  return (
    <div 
      className={`fixed ${isMobile ? 'bottom-4 right-4' : 'top-20 right-6'} z-50 cursor-pointer`}
      onClick={handleCartClick}
    >
      <motion.div 
        className="relative p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <ShoppingCart size={24} className="text-black" />
        
        <AnimatePresence>
          {cartCount > 0 && (
            <motion.div 
              key="badge"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ 
                scale: showAnimation ? [1, 1.2, 1] : 1, 
                opacity: 1 
              }}
              exit={{ scale: 0.5, opacity: 0 }}
              transition={{ 
                duration: showAnimation ? 0.3 : 0.2,
                type: showAnimation ? "spring" : "tween"
              }}
              className="absolute -top-2 -right-2 bg-black text-white text-xs w-5 h-5 rounded-full flex items-center justify-center"
            >
              {cartCount}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default CartIcon;
