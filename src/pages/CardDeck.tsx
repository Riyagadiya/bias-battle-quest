
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CardItem from "@/components/CardDeck/CardItem";
import CartIcon from "@/components/CartIcon";

const cardDecks = [
  {
    title: "Cognitive Biases Card Deck",
    description: "Cognitive biases are mental shortcuts. Our tool helps you harness them to solve problems, challenge assumptions, and make better decisions.",
    imageUrl: "/lovable-uploads/e2f6c9a6-de98-414b-ab11-9d986bc15f8f.png",
    backgroundColor: "#FDDE81",
    hoverColor: "#FCD14D",
    cardCount: "38 Cards",
    price: "₹900",
    mrp: "₹1200",
    discount: "25% off",
    shipping: "Ships only in India"
  },
  {
    title: "Research Methods",
    description: "Explore the design process—a structured framework for creative thinking and crafting meaningful, user-centered solutions.",
    imageUrl: "/lovable-uploads/e64a3165-39cf-43df-bade-1cd41991cf97.png",
    backgroundColor: "#D4E3A6",
    hoverColor: "#C4D985",
    cardCount: "42 Cards",
    price: "₹900",
    mrp: "₹1200",
    discount: "25% off",
    shipping: "Ships only in India"
  },
  {
    title: "Thinking Hat",
    description: "Delve into UX laws—fundamental principles that shape the way we think about design, encouraging deeper insights and fostering more intuitive, human-centered solutions.",
    imageUrl: "/lovable-uploads/fd80351d-b396-4b23-ad6d-03e387f35f3e.png",
    backgroundColor: "#F8C1A6",
    hoverColor: "#F3986B",
    cardCount: "36 Cards",
    price: "₹900",
    mrp: "₹1200",
    discount: "25% off",
    shipping: "Ships only in India"
  },
  {
    title: "UX Laws",
    description: "Dive into UX laws, essential principles that streamline design decisions and empower you to create intuitive, user-centered experiences with ease.",
    imageUrl: "/lovable-uploads/063475da-7147-4ad6-9584-fe8c2e87706d.png",
    backgroundColor: "#BEE5FA",
    hoverColor: "#92D4F6",
    cardCount: "40 Cards",
    price: "₹900",
    mrp: "₹1200",
    discount: "25% off",
    shipping: "Ships only in India"
  }
];

const CardDeck = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <CartIcon />
      
      <main className="flex-grow py-24 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="container mx-auto"
        >
          <div className="max-w-6xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-domine font-semibold text-center mb-4">
              Explore Our Card Decks
            </h1>
            <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
              Discover our collection of carefully curated card decks designed to enhance your understanding of design thinking and decision-making.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {cardDecks.map((deck, index) => (
                <motion.div
                  key={deck.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <CardItem {...deck} />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CardDeck;
