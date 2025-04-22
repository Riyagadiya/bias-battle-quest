
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { cn } from "@/lib/utils";

const CartIcon = () => {
  const { getTotalItems } = useCart();
  const itemCount = getTotalItems();

  console.log('Cart Icon - Item Count:', itemCount); // Added debug log

  return (
    <div className={cn(
      "fixed top-4 left-4 z-50", 
      itemCount === 0 && "hidden" // Hide if no items
    )}>
      <div className="relative inline-block p-2 border rounded-lg bg-white shadow-sm">
        <ShoppingCart className="w-6 h-6 text-gray-700" />
        {itemCount > 0 && (
          <div 
            className="absolute -top-2 -right-2 bg-red-500 text-white w-5 h-5 rounded-full flex items-center justify-center text-xs font-medium"
            data-testid="cart-item-count"
          >
            {itemCount}
          </div>
        )}
      </div>
    </div>
  );
};

export default CartIcon;
