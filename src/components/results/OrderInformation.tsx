
import { Truck, PackageX, CreditCard, ShieldCheck } from "lucide-react";

const OrderInformation = () => {
  return (
    <div className="mt-8 pt-6 border-t border-gray-100">
      <h4 className="font-domine text-lg font-medium mb-4">Order Information</h4>
      <div className="flex items-center justify-between gap-2 px-2">
        <div className="flex items-center gap-1">
          <div className="text-cognilense-blue">
            <Truck size={16} />
          </div>
          <span className="text-xs">Free delivery</span>
        </div>
        
        <div className="flex items-center gap-1">
          <div className="text-cognilense-orange">
            <PackageX size={16} />
          </div>
          <span className="text-xs">No return</span>
        </div>
        
        <div className="flex items-center gap-1">
          <div className="text-cognilense-green">
            <CreditCard size={16} />
          </div>
          <span className="text-xs">No replacement</span>
        </div>
        
        <div className="flex items-center gap-1">
          <div className="text-cognilense-blue">
            <ShieldCheck size={16} />
          </div>
          <span className="text-xs">Secure payment</span>
        </div>
      </div>
    </div>
  );
};

export default OrderInformation;
