
import { Truck, PackageX, CreditCard, ShieldCheck } from "lucide-react";

const OrderInformation = () => {
  return (
    <div className="mt-8 pt-6 border-t border-gray-100">
      <h4 className="font-domine text-lg font-medium mb-4">Order Information</h4>
      <div className="flex items-center justify-between gap-2 px-2">
        <div className="flex items-center gap-2">
          <div className="text-cognilense-blue">
            <Truck size={20} />
          </div>
          <span className="text-sm">Free delivery</span>
        </div>
        
        <div className="flex items-center gap-2">
          <div className="text-cognilense-orange">
            <PackageX size={20} />
          </div>
          <span className="text-sm">No return</span>
        </div>
        
        <div className="flex items-center gap-2">
          <div className="text-cognilense-green">
            <CreditCard size={20} />
          </div>
          <span className="text-sm">No replacement</span>
        </div>
        
        <div className="flex items-center gap-2">
          <div className="text-cognilense-blue">
            <ShieldCheck size={20} />
          </div>
          <span className="text-sm">Secure payment</span>
        </div>
      </div>
    </div>
  );
};

export default OrderInformation;
