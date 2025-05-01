
import { Truck, PackageX, CreditCard, ShieldCheck } from "lucide-react";

const OrderInformation = () => {
  return (
    <div className="mt-10 pt-8 border-t border-gray-100">
      <h4 className="font-domine text-lg font-medium mb-6">Order Information</h4>
      <div className="flex flex-wrap items-center justify-between gap-4 px-3">
        <div className="flex items-center gap-3">
          <div className="text-cognilense-blue p-2 bg-blue-50 rounded-full">
            <Truck size={20} />
          </div>
          <span className="text-sm">Free delivery</span>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="text-cognilense-orange p-2 bg-orange-50 rounded-full">
            <PackageX size={20} />
          </div>
          <span className="text-sm">No return</span>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="text-cognilense-green p-2 bg-green-50 rounded-full">
            <CreditCard size={20} />
          </div>
          <span className="text-sm">No replacement</span>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="text-cognilense-blue p-2 bg-blue-50 rounded-full">
            <ShieldCheck size={20} />
          </div>
          <span className="text-sm flex items-center gap-1">
            <img 
              src="/lovable-uploads/f83f426e-ac7c-4f47-a747-187cfdbb3471.png" 
              alt="Razorpay" 
              className="h-2.5 w-auto"
            />
            Secure payment
          </span>
        </div>
      </div>
    </div>
  );
};

export default OrderInformation;
