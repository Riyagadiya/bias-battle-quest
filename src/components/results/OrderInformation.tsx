
import { Truck, PackageX, CreditCard, ShieldCheck } from "lucide-react";

const OrderInformation = () => {
  return (
    <div className="mt-8 pt-6 border-t border-gray-100">
      <h4 className="font-domine text-lg font-medium mb-4">Order Information</h4>
      <div className="flex justify-between items-center px-2">
        <div className="flex items-center justify-center p-2 rounded-full bg-gray-50 w-10 h-10">
          <div className="text-cognilense-blue">
            <Truck size={18} />
          </div>
        </div>
        
        <div className="flex items-center justify-center p-2 rounded-full bg-gray-50 w-10 h-10">
          <div className="text-cognilense-orange">
            <PackageX size={18} />
          </div>
        </div>
        
        <div className="flex items-center justify-center p-2 rounded-full bg-gray-50 w-10 h-10">
          <div className="text-cognilense-green">
            <CreditCard size={18} />
          </div>
        </div>
        
        <div className="flex items-center justify-center p-2 rounded-full bg-gray-50 w-10 h-10">
          <div className="text-cognilense-blue">
            <ShieldCheck size={18} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderInformation;
