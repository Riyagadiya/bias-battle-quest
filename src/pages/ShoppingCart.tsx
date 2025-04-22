
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useCart } from "@/context/CartContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ShoppingCart = () => {
  const { items } = useCart();

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow container mx-auto py-8 px-4">
        <h1 className="text-3xl font-semibold mb-6">Shopping Cart</h1>
        
        <Tabs defaultValue="items" className="w-full">
          <TabsList className="mb-6">
            <TabsTrigger value="items">Items ({items.length})</TabsTrigger>
            <TabsTrigger value="saved">Saved for Later</TabsTrigger>
          </TabsList>
          
          <TabsContent value="items">
            <Card>
              <CardContent className="pt-6">
                {items.map((item, index) => (
                  <div key={item.id}>
                    <div className="flex items-start gap-4 py-4">
                      <div className="w-24 h-24 bg-muted rounded-lg"></div>
                      <div className="flex-grow">
                        <h3 className="font-medium">{item.title}</h3>
                        <p className="text-sm text-muted-foreground mt-1">
                          Quantity: {item.quantity}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">₹{item.price}</p>
                      </div>
                    </div>
                    {index < items.length - 1 && <Separator className="my-4" />}
                  </div>
                ))}
                
                {items.length === 0 && (
                  <p className="text-center text-muted-foreground py-8">
                    Your cart is empty
                  </p>
                )}
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="saved">
            <Card>
              <CardContent className="pt-6">
                <p className="text-center text-muted-foreground py-8">
                  No items saved for later
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
      
      <Footer />
    </div>
  );
};

export default ShoppingCart;
