import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CardItem from "@/components/CardDeck/CardItem";

const cardDecks = [
  {
    title: "Cognitive Biases",
    description: "Cognitive biases are mental shortcuts. Our tool helps you harness them to solve problems, challenge assumptions, and make better decisions.",
    imageUrl: "/lovable-uploads/693a4e69-d361-4cf9-a802-e0546b2cdbb1.png",
    backgroundColor: "#FDDE81",
    hoverColor: "#FCD14D"
  },
  {
    title: "Research Methods",
    description: "Explore the design process—a structured framework for creative thinking and crafting meaningful, user-centered solutions.",
    imageUrl: "/lovable-uploads/e64a3165-39cf-43df-bade-1cd41991cf97.png",
    backgroundColor: "#D4E3A6",
    hoverColor: "#C4D985"
  },
  {
    title: "Thinking Hat",
    description: "Delve into UX laws—fundamental principles that shape the way we think about design, encouraging deeper insights and fostering more intuitive, human-centered solutions.",
    imageUrl: "/lovable-uploads/fd80351d-b396-4b23-ad6d-03e387f35f3e.png",
    backgroundColor: "#F8C1A6",
    hoverColor: "#F3986B"
  },
  {
    title: "UX Laws",
    description: "Dive into UX laws, essential principles that streamline design decisions and empower you to create intuitive, user-centered experiences with ease.",
    imageUrl: "/lovable-uploads/fd73ccda-1243-4492-85ac-6ff020116ede.png",
    backgroundColor: "#BEE5FA",
    hoverColor: "#92D4F6"
  }
];

const CardDeck = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
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
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
