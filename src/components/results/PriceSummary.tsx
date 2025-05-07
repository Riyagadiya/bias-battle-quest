
import { Separator } from "@/components/ui/separator";

interface PriceSummaryProps {
  subtotal: number;
  mrpTotal: number;
  discount: number;
  total: number;
  itemCount: number;
  showDiscount?: boolean;
  onViewCart: () => void;
}

const PriceSummary = ({ 
  subtotal, 
  mrpTotal, 
  discount, 
  total, 
  itemCount,
  showDiscount = false,
  onViewCart 
}: PriceSummaryProps) => {
  if (itemCount <= 0) return null;
  
  // If not showing discount, ensure total matches subtotal
  const finalTotal = showDiscount ? total : subtotal;
  
  // Calculate discount percentage
  const discountPercent = mrpTotal > 0 ? Math.round((discount / mrpTotal) * 100) : 0;
  
  return (
    <div className="mt-6 pt-4 border-t border-gray-100">
      <h4 className="font-medium text-sm mb-3">Order Summary</h4>
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Subtotal ({itemCount} items)</span>
          <span>₹{subtotal}</span>
        </div>
        {showDiscount && (
          <>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">MRP Total</span>
              <span className="line-through text-muted-foreground">₹{mrpTotal}</span>
            </div>
            <div className="flex justify-between text-sm text-green-600">
              <span>Discount ({discountPercent}%)</span>
              <span>- ₹{discount}</span>
            </div>
          </>
        )}
        <Separator className="my-2" />
        <div className="flex justify-between font-medium">
          <span>Total</span>
          <span>₹{finalTotal}</span>
        </div>
      </div>
      
      <button 
        className="w-full mt-4 bg-cognilense-blue text-white py-2 rounded-md hover:bg-opacity-90 transition-colors"
        onClick={onViewCart}
      >
        Proceed to Buy ({itemCount})
      </button>
    </div>
  );
};

export default PriceSummary;
