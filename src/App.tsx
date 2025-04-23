
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QuizProvider } from "./context/QuizContext";
import { CartProvider } from "./context/CartContext";
import Index from "./pages/Index";
import Quiz from "./pages/Quiz";
import Results from "./pages/Results";
import NotFound from "./pages/NotFound";
import CardDeck from "./pages/CardDeck";
import ProductDetail from "./pages/ProductDetail";
import ShoppingCart from "./pages/ShoppingCart";
import Checkout from "./pages/Checkout";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <CartProvider>
        <QuizProvider>
          {/* Move TooltipProvider inside BrowserRouter */}
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/quiz" element={<Quiz />} />
              <Route path="/results" element={<Results />} />
              <Route path="/card-decks" element={<CardDeck />} />
              <Route path="/product/:title" element={<ProductDetail />} />
              <Route path="/cart" element={<ShoppingCart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </TooltipProvider>
        </QuizProvider>
      </CartProvider>
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;
