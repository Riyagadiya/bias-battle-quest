
import { useParams, useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CartIcon from "@/components/CartIcon";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import ProductDetailView from "@/components/ProductDetail/ProductDetailView";
import { useIsMobile } from "@/hooks/use-mobile";

const cardDecks = [{
  title: "Cognitive Biases Card Deck",
  description: "Cognitive biases are mental shortcuts. Our tool helps you harness them to solve problems, challenge assumptions, and make better decisions.",
  imageUrl: "/lovable-uploads/e2f6c9a6-de98-414b-ab11-9d986bc15f8f.png",
  backgroundColor: "#FDDE81",
  hoverColor: "#FCD14D",
  cardCount: "38 Cards",
  price: "699",
  mrp: "999",
  discount: "30% off",
  shipping: "Free Shipping",
  dimensions: "12.3 x 7.9 x 2 cm",
  images: [
    "/lovable-uploads/87f79b0e-a057-4477-bb79-d8eeadcb1e11.png",
    "/lovable-uploads/3c940b73-d08b-41af-b9d8-6be5ef9f234a.png",
    "/lovable-uploads/1ebce4a9-5e4b-4fca-8da5-abd34ce21c2b.png"
  ]
}, {
  title: "Research Method Card Deck",
  description: "Explore the design process—a structured framework for creative thinking and crafting meaningful, user-centered solutions.",
  imageUrl: "/lovable-uploads/e64a3165-39cf-43df-bade-1cd41991cf97.png",
  backgroundColor: "#D4E3A6",
  hoverColor: "#C4D985",
  cardCount: "42 Cards",
  price: "699",
  mrp: "999",
  discount: "30% off",
  shipping: "Free Shipping",
  dimensions: "12.3 x 7.9 x 2 cm",
  images: [
    "/lovable-uploads/493d6450-ae7d-4b04-a96c-bbbbf02d685d.png", 
    "/lovable-uploads/127562a9-62f7-4d18-836b-65b6dcdf808f.png", 
    "/lovable-uploads/43f61f6b-0705-492c-baf8-10b7602045c2.png"
  ]
}, {
  title: "Thinking Hat Card Deck",
  description: "Delve into UX laws—fundamental principles that shape the way we think about design, encouraging deeper insights and fostering more intuitive, human-centered solutions.",
  imageUrl: "/lovable-uploads/fd80351d-b396-4b23-ad6d-03e387f35f3e.png",
  backgroundColor: "#F8C1A6",
  hoverColor: "#F3986B",
  cardCount: "36 Cards",
  price: "699",
  mrp: "999",
  discount: "30% off",
  shipping: "Free Shipping",
  dimensions: "12.3 x 7.9 x 2 cm",
  images: [
    "/lovable-uploads/714c4bab-7924-4f4a-ab3a-2d45ae90a116.png", 
    "/lovable-uploads/bc34523c-f562-425e-b26a-d9a583d0a68e.png", 
    "/lovable-uploads/5f77be4b-9b96-4bc1-a8bc-04b1e70c19f9.png"
  ]
}, {
  title: "UX Laws Card Deck",
  description: "Dive into UX laws, essential principles that streamline design decisions and empower you to create intuitive, user-centered experiences with ease.",
  imageUrl: "/lovable-uploads/063475da-7147-4ad6-9584-fe8c2e87706d.png",
  backgroundColor: "#BEE5FA",
  hoverColor: "#92D4F6",
  cardCount: "40 Cards",
  price: "699",
  mrp: "999",
  discount: "30% off",
  shipping: "Free Shipping",
  dimensions: "12.3 x 7.9 x 2 cm",
  images: [
    "/lovable-uploads/53ae4095-d4dc-4908-8135-6855b7b99e88.png", 
    "/lovable-uploads/962f0884-2994-48a4-87a1-af8bf5ad8ef3.png", 
    "/lovable-uploads/076f1c47-53f3-455f-bf0e-f5644b1c5437.png"
  ]
}];

const ProductDetail = () => {
  const { title } = useParams();
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  
  const product = cardDecks.find(deck => deck.title === decodeURIComponent(title || ""));
  
  const handleBackClick = () => {
    navigate('/card-decks');
  };
  
  if (!product) {
    return <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow py-12 px-4 md:px-6 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-xl md:text-2xl font-semibold mb-4">Product not found</h1>
            <Button onClick={() => navigate('/card-decks')}>
              Return to Products
            </Button>
          </div>
        </main>
        <Footer />
      </div>;
  }
  
  // Add recommended products to the product object
  const enhancedProduct = {
    ...product,
    recommendedProducts: cardDecks.filter(deck => deck.title !== product.title)
  };
  
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <CartIcon />
      
      <Button 
        variant="outline" 
        size="icon" 
        onClick={handleBackClick} 
        className={`fixed ${isMobile ? 'top-20 left-4' : 'left-6 top-16'} z-50 rounded-lg`}
      >
        <ArrowLeft className="h-5 w-5" />
      </Button>

      <main className="flex-grow py-6 px-4 md:py-12 md:px-6">
        <ProductDetailView product={enhancedProduct} />
      </main>
      
      <Footer />
    </div>
  );
};

export default ProductDetail;
