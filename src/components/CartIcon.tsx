
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useNavigate } from "react-router-dom";

const CartIcon = () => {
  const { getCartCount } = useCart();
  const navigate = useNavigate();
  const count = getCartCount();

  return (
    <div className="fixed right-6 top-16 z-50">
      <div className="relative inline-block">
        <button
          onClick={() => navigate("/cart")}
          className="p-2 border rounded-lg bg-white/90 backdrop-blur-sm shadow-sm hover:bg-black/5 transition-colors"
        >
          <ShoppingCart size={20} />
          {count > 0 && (
            <div className="absolute -top-2 -right-2 bg-black/20 text-black text-xs w-5 h-5 rounded-full flex items-center justify-center backdrop-blur-sm">
              {count}
            </div>
          )}
        </button>
      </div>
    </div>
  );
};

export default CartIcon;
