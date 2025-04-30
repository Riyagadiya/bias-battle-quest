
import { useState } from "react";
import { 
  ExternalLink, 
  ArrowUpRight,
  Plus,
  Minus
} from "lucide-react";
import { toast } from "sonner";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useQuiz } from "@/context/QuizContext";
import { useCart } from "@/context/CartContext";

// Card deck data
const cardDecks = [{
  id: 1,
  title: "Cognitive Biases Card Deck",
  description: "Cognitive biases are mental shortcuts. Our tool helps you harness them to solve problems, challenge assumptions, and make better decisions.",
  imageUrl: "/lovable-uploads/e2f6c9a6-de98-414b-ab11-9d986bc15f8f.png",
  backgroundColor: "#FDDE81",
  hoverColor: "#FCD14D",
  cardCount: "38 Cards",
  price: "₹699",
  mrp: "₹999",
  discount: "30% off",
  shipping: "Free Shipping",
}, {
  id: 2,
  title: "Research Method Card Deck",
  description: "Explore the design process—a structured framework for creative thinking and crafting meaningful, user-centered solutions.",
  imageUrl: "/lovable-uploads/e64a3165-39cf-43df-bade-1cd41991cf97.png",
  backgroundColor: "#D4E3A6",
  hoverColor: "#C4D985",
  cardCount: "42 Cards",
  price: "₹699",
  mrp: "₹999",
  discount: "30% off",
  shipping: "Free Shipping",
}, {
  id: 3,
  title: "Thinking Hat Card Deck",
  description: "Delve into UX laws—fundamental principles that shape the way we think about design, encouraging deeper insights and fostering more intuitive, human-centered solutions.",
  imageUrl: "/lovable-uploads/fd80351d-b396-4b23-ad6d-03e387f35f3e.png",
  backgroundColor: "#F8C1A6",
  hoverColor: "#F3986B",
  cardCount: "36 Cards",
  price: "₹699",
  mrp: "₹999",
  discount: "30% off",
  shipping: "Free Shipping",
}, {
  id: 4,
  title: "UX Laws Card Deck",
  description: "Dive into UX laws, essential principles that streamline design decisions and empower you to create intuitive, user-centered experiences with ease.",
  imageUrl: "/lovable-uploads/063475da-7147-4ad6-9584-fe8c2e87706d.png",
  backgroundColor: "#BEE5FA",
  hoverColor: "#92D4F6",
  cardCount: "40 Cards",
  price: "₹699",
  mrp: "₹999",
  discount: "30% off",
  shipping: "Free Shipping",
}];

const ResultsActionTabs = () => {
  const { restartQuiz } = useQuiz();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [quantities, setQuantities] = useState<{[key: number]: number}>({
    1: 0,
    2: 0,
    3: 0,
    4: 0
  });

  const handleQuantityChange = (deckId: number, change: number) => {
    setQuantities(prev => {
      const newQuantity = Math.max(0, (prev[deckId] || 0) + change);
      return { ...prev, [deckId]: newQuantity };
    });
  };

  const handleAddToCart = (deckId: number) => {
    const quantity = quantities[deckId];
    if (quantity <= 0) {
      toast.error("Please select a quantity first");
      return;
    }

    const deck = cardDecks.find(d => d.id === deckId);
    if (deck) {
      addToCart({
        title: deck.title,
        quantity,
        price: parseInt(deck.price.replace("₹", ""))
      });
      
      toast.success(`${quantity} ${deck.title}${quantity > 1 ? 's' : ''} added to cart`);
      setQuantities(prev => ({ ...prev, [deckId]: 0 }));
    }
  };

  const shareQuiz = () => {
    const shareUrl = window.location.origin;
    navigator.clipboard.writeText(shareUrl);
    toast.success("Quiz URL copied to clipboard!");
  };

  const handleDeckClick = (title: string) => {
    navigate(`/product/${encodeURIComponent(title)}`);
  };

  const handleViewAllDecks = () => {
    navigate('/card-decks');
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden h-full">
      <Tabs defaultValue="all" className="h-full flex flex-col">
        <TabsList className="grid grid-cols-4 bg-cognilense-background mb-1">
          <TabsTrigger value="all">All Decks</TabsTrigger>
          <TabsTrigger value="cognitive">Cognitive</TabsTrigger>
          <TabsTrigger value="research">Research</TabsTrigger>
          <TabsTrigger value="ux">UX Laws</TabsTrigger>
        </TabsList>
        
        <div className="flex-grow overflow-y-auto">
          {/* All Decks Tab */}
          <TabsContent value="all" className="h-full m-0">
            <Card className="border-0 shadow-none h-full">
              <CardContent className="pt-6 px-4 h-full">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-domine text-lg font-semibold">All Card Decks</h3>
                  <button 
                    className="text-sm flex items-center text-cognilense-blue hover:underline" 
                    onClick={handleViewAllDecks}
                  >
                    View all <ArrowUpRight size={16} className="ml-1" />
                  </button>
                </div>
                
                <div className="space-y-4">
                  {cardDecks.map((deck) => (
                    <div 
                      key={deck.id} 
                      className="flex flex-col md:flex-row items-center gap-4 p-3 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <div 
                        className="w-20 h-20 rounded-lg flex items-center justify-center p-2 cursor-pointer"
                        style={{ backgroundColor: deck.backgroundColor }}
                        onClick={() => handleDeckClick(deck.title)}
                      >
                        <img src={deck.imageUrl} alt={deck.title} className="object-contain max-h-full" />
                      </div>
                      
                      <div className="flex-1 cursor-pointer" onClick={() => handleDeckClick(deck.title)}>
                        <h4 className="font-medium line-clamp-1">{deck.title}</h4>
                        <p className="text-xs text-muted-foreground">{deck.cardCount}</p>
                        
                        <div className="flex items-center gap-2 mt-1">
                          <span className="font-semibold">{deck.price}</span>
                          <Badge variant="secondary" className="bg-green-100 text-green-800 text-xs">
                            {deck.discount}
                          </Badge>
                          <span className="text-xs text-muted-foreground line-through">
                            {deck.mrp}
                          </span>
                        </div>
                      </div>
                      
                      <div className="shrink-0 flex items-center gap-2">
                        <Button 
                          variant="outline" 
                          size="icon"
                          onClick={() => handleQuantityChange(deck.id, -1)}
                          disabled={quantities[deck.id] <= 0}
                          className="h-8 w-8 rounded-full"
                        >
                          <Minus size={16} />
                        </Button>
                        
                        <span className="w-8 text-center">{quantities[deck.id] || 0}</span>
                        
                        <Button 
                          variant="outline" 
                          size="icon"
                          onClick={() => handleQuantityChange(deck.id, 1)}
                          className="h-8 w-8 rounded-full"
                        >
                          <Plus size={16} />
                        </Button>
                        
                        <Button 
                          className="ml-2"
                          variant="default"
                          size="sm"
                          onClick={() => handleAddToCart(deck.id)}
                          disabled={quantities[deck.id] <= 0}
                        >
                          Add
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          {/* Cognitive Bias Tab */}
          <TabsContent value="cognitive" className="h-full m-0">
            <Card className="border-0 shadow-none h-full">
              <CardContent className="pt-6 px-4 h-full">
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-domine text-lg font-semibold">Cognitive Bias Deck</h3>
                  </div>
                  
                  <div className="flex flex-col items-center border border-gray-100 rounded-lg p-6">
                    <div 
                      className="w-40 h-40 rounded-lg flex items-center justify-center p-6 mb-4 cursor-pointer"
                      style={{ backgroundColor: '#FDDE81' }}
                      onClick={() => handleDeckClick("Cognitive Biases Card Deck")}
                    >
                      <img 
                        src="/lovable-uploads/e2f6c9a6-de98-414b-ab11-9d986bc15f8f.png" 
                        alt="Cognitive Biases Card Deck" 
                        className="object-contain max-h-full" 
                      />
                    </div>
                    
                    <h4 
                      className="font-medium text-lg cursor-pointer"
                      onClick={() => handleDeckClick("Cognitive Biases Card Deck")}
                    >
                      Cognitive Biases Card Deck
                    </h4>
                    <p 
                      className="text-sm text-muted-foreground text-center mt-2 mb-4 cursor-pointer"
                      onClick={() => handleDeckClick("Cognitive Biases Card Deck")}
                    >
                      38 Cards to help you identify and mitigate cognitive biases in decision making
                    </p>
                    
                    <div 
                      className="flex items-center gap-3 mb-6 cursor-pointer"
                      onClick={() => handleDeckClick("Cognitive Biases Card Deck")}
                    >
                      <span className="font-semibold text-xl">₹699</span>
                      <Badge variant="secondary" className="bg-green-100 text-green-800">
                        30% off
                      </Badge>
                      <span className="text-sm text-muted-foreground line-through">
                        ₹999
                      </span>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <Button 
                          variant="outline" 
                          size="icon"
                          onClick={() => handleQuantityChange(1, -1)}
                          disabled={quantities[1] <= 0}
                          className="h-8 w-8 rounded-full"
                        >
                          <Minus size={16} />
                        </Button>
                        
                        <span className="w-8 text-center">{quantities[1] || 0}</span>
                        
                        <Button 
                          variant="outline" 
                          size="icon"
                          onClick={() => handleQuantityChange(1, 1)}
                          className="h-8 w-8 rounded-full"
                        >
                          <Plus size={16} />
                        </Button>
                      </div>
                      
                      <Button 
                        onClick={() => handleAddToCart(1)}
                        disabled={quantities[1] <= 0}
                      >
                        Add to Cart
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          {/* Research Methods Tab */}
          <TabsContent value="research" className="h-full m-0">
            <Card className="border-0 shadow-none h-full">
              <CardContent className="pt-6 px-4 h-full">
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-domine text-lg font-semibold">Research Method Deck</h3>
                  </div>
                  
                  <div className="flex flex-col items-center border border-gray-100 rounded-lg p-6">
                    <div 
                      className="w-40 h-40 rounded-lg flex items-center justify-center p-6 mb-4 cursor-pointer"
                      style={{ backgroundColor: '#D4E3A6' }}
                      onClick={() => handleDeckClick("Research Method Card Deck")}
                    >
                      <img 
                        src="/lovable-uploads/e64a3165-39cf-43df-bade-1cd41991cf97.png" 
                        alt="Research Method Card Deck" 
                        className="object-contain max-h-full" 
                      />
                    </div>
                    
                    <h4
                      className="font-medium text-lg cursor-pointer"
                      onClick={() => handleDeckClick("Research Method Card Deck")}
                    >
                      Research Method Card Deck
                    </h4>
                    <p 
                      className="text-sm text-muted-foreground text-center mt-2 mb-4 cursor-pointer"
                      onClick={() => handleDeckClick("Research Method Card Deck")}
                    >
                      42 Cards with research methodologies for designing user-centered solutions
                    </p>
                    
                    <div 
                      className="flex items-center gap-3 mb-6 cursor-pointer"
                      onClick={() => handleDeckClick("Research Method Card Deck")}
                    >
                      <span className="font-semibold text-xl">₹699</span>
                      <Badge variant="secondary" className="bg-green-100 text-green-800">
                        30% off
                      </Badge>
                      <span className="text-sm text-muted-foreground line-through">
                        ₹999
                      </span>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <Button 
                          variant="outline" 
                          size="icon"
                          onClick={() => handleQuantityChange(2, -1)}
                          disabled={quantities[2] <= 0}
                          className="h-8 w-8 rounded-full"
                        >
                          <Minus size={16} />
                        </Button>
                        
                        <span className="w-8 text-center">{quantities[2] || 0}</span>
                        
                        <Button 
                          variant="outline" 
                          size="icon"
                          onClick={() => handleQuantityChange(2, 1)}
                          className="h-8 w-8 rounded-full"
                        >
                          <Plus size={16} />
                        </Button>
                      </div>
                      
                      <Button 
                        onClick={() => handleAddToCart(2)}
                        disabled={quantities[2] <= 0}
                      >
                        Add to Cart
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          {/* UX Laws Tab */}
          <TabsContent value="ux" className="h-full m-0">
            <Card className="border-0 shadow-none h-full">
              <CardContent className="pt-6 px-4 h-full">
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-domine text-lg font-semibold">UX Laws Deck</h3>
                  </div>
                  
                  <div className="flex flex-col items-center border border-gray-100 rounded-lg p-6">
                    <div 
                      className="w-40 h-40 rounded-lg flex items-center justify-center p-6 mb-4 cursor-pointer"
                      style={{ backgroundColor: '#BEE5FA' }}
                      onClick={() => handleDeckClick("UX Laws Card Deck")}
                    >
                      <img 
                        src="/lovable-uploads/063475da-7147-4ad6-9584-fe8c2e87706d.png" 
                        alt="UX Laws Card Deck" 
                        className="object-contain max-h-full" 
                      />
                    </div>
                    
                    <h4
                      className="font-medium text-lg cursor-pointer"
                      onClick={() => handleDeckClick("UX Laws Card Deck")}
                    >
                      UX Laws Card Deck
                    </h4>
                    <p 
                      className="text-sm text-muted-foreground text-center mt-2 mb-4 cursor-pointer"
                      onClick={() => handleDeckClick("UX Laws Card Deck")}
                    >
                      40 Cards with essential UX principles for creating intuitive user experiences
                    </p>
                    
                    <div 
                      className="flex items-center gap-3 mb-6 cursor-pointer"
                      onClick={() => handleDeckClick("UX Laws Card Deck")}
                    >
                      <span className="font-semibold text-xl">₹699</span>
                      <Badge variant="secondary" className="bg-green-100 text-green-800">
                        30% off
                      </Badge>
                      <span className="text-sm text-muted-foreground line-through">
                        ₹999
                      </span>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <Button 
                          variant="outline" 
                          size="icon"
                          onClick={() => handleQuantityChange(4, -1)}
                          disabled={quantities[4] <= 0}
                          className="h-8 w-8 rounded-full"
                        >
                          <Minus size={16} />
                        </Button>
                        
                        <span className="w-8 text-center">{quantities[4] || 0}</span>
                        
                        <Button 
                          variant="outline" 
                          size="icon"
                          onClick={() => handleQuantityChange(4, 1)}
                          className="h-8 w-8 rounded-full"
                        >
                          <Plus size={16} />
                        </Button>
                      </div>
                      
                      <Button 
                        onClick={() => handleAddToCart(4)}
                        disabled={quantities[4] <= 0}
                      >
                        Add to Cart
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
};

export default ResultsActionTabs;
