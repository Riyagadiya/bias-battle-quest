
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { useIsMobile } from "@/hooks/use-mobile";

interface PriceSummaryProps {
  subtotal: number;
  mrpTotal: number;
  discount: number;
  total: number;
  itemCount: number;
  showDiscount: boolean;
  onViewCart: () => void;
}

const PriceSummary = ({
  subtotal,
  mrpTotal,
  discount,
  total,
  itemCount,
  showDiscount,
  onViewCart
}: PriceSummaryProps) => {
  const isMobile = useIsMobile();
  
  if (itemCount === 0) {
    return null;
  }
  
  return (
    <div className="mt-4 mb-4">
      <Separator className="my-4" />
      
      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <span className="text-sm text-muted-foreground">Subtotal ({itemCount} {itemCount === 1 ? 'item' : 'items'})</span>
          <span className="font-medium text-sm">₹{subtotal}</span>
        </div>
        
        {showDiscount && (
          <>
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">MRP</span>
              <span className="text-sm text-muted-foreground line-through">₹{mrpTotal}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-green-600">Discount</span>
              <span className="text-sm text-green-600">-₹{discount}</span>
            </div>
          </>
        )}
        
        <div className="flex justify-between items-center">
          <span className="font-medium">Total</span>
          <span className="font-semibold text-lg">₹{total}</span>
        </div>
        
        <Button 
          onClick={onViewCart}
          className="w-full rounded-full mt-2 md:mt-3 flex items-center justify-center gap-2"
        >
          <ShoppingCart size={18} />
          View Cart
        </Button>
      </div>
    </div>
  );
};

export default PriceSummary;
