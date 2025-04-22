
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/context/CartContext";

const CartIcon = () => {
  const { getCartCount } = useCart();
  const count = getCartCount();

  return (
    <div className="fixed right-24 top-4 z-50">
      <div className="relative inline-block">
        <div className="p-2 border rounded-lg bg-white/90 backdrop-blur-sm shadow-sm hover:bg-black/5 transition-colors">
          <ShoppingCart size={20} />
          {count > 0 && (
            <div className="absolute -top-2 -right-2 bg-[#9b87f5] text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
              {count}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartIcon;
