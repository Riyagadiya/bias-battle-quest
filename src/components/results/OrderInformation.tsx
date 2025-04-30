
import { Truck, PackageX, CreditCard, ShieldCheck } from "lucide-react";

const OrderInformation = () => {
  return (
    <div className="mt-8 pt-6 border-t border-gray-100">
      <h4 className="font-domine text-lg font-medium mb-4">Order Information</h4>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
          <div className="mt-0.5 text-cognilense-blue">
            <Truck size={20} />
          </div>
          <div>
            <h5 className="font-medium text-sm">Free Delivery</h5>
          </div>
        </div>
        
        <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
          <div className="mt-0.5 text-cognilense-orange">
            <PackageX size={20} />
          </div>
          <div>
            <h5 className="font-medium text-sm">No Returns</h5>
          </div>
        </div>
        
        <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
          <div className="mt-0.5 text-cognilense-green">
            <CreditCard size={20} />
          </div>
          <div>
            <h5 className="font-medium text-sm">Secure Payment</h5>
            <p className="text-xs text-muted-foreground">Payments processed securely via Razorpay</p>
          </div>
        </div>
        
        <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
          <div className="mt-0.5 text-cognilense-blue">
            <ShieldCheck size={20} />
          </div>
          <div>
            <h5 className="font-medium text-sm">Quality Guarantee</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderInformation;
