
import { Truck, PackageX, CreditCard, ShieldCheck } from "lucide-react";

const OrderInformation = () => {
  return (
    <div className="mt-10 pt-7 border-t border-gray-100">
      <h4 className="font-domine text-lg font-medium mb-5">Order Information</h4>
      <div className="flex flex-wrap items-center justify-between gap-4 py-2">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-blue-50 flex items-center justify-center text-cognilense-blue">
            <Truck size={20} />
          </div>
          <span className="text-sm font-medium">Free delivery</span>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-orange-50 flex items-center justify-center text-cognilense-orange">
            <PackageX size={20} />
          </div>
          <span className="text-sm font-medium">No return</span>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-green-50 flex items-center justify-center text-cognilense-green">
            <CreditCard size={20} />
          </div>
          <span className="text-sm font-medium">No replacement</span>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-blue-50 flex items-center justify-center text-cognilense-blue">
            <ShieldCheck size={20} />
          </div>
          <span className="text-sm font-medium">Secure payment</span>
        </div>
      </div>
    </div>
  );
};

export default OrderInformation;
