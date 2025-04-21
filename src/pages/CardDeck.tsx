
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CardItem from "@/components/CardDeck/CardItem";

const cardDecks = [
  {
    title: "Cognitive Biases",
    description: "Cognitive biases are mental shortcuts. Our tool helps you harness them to solve problems, challenge assumptions, and make better decisions.",
    exploreText: "Explore cognitive biases as mental shortcuts",
    imageUrl: "/lovable-uploads/59a39ef3-701b-4bd5-9ff0-7d868565674d.png"
  },
  {
    title: "Research Methods",
    description: "Explore the design process—a structured framework for creative thinking and crafting meaningful, user-centered solutions.",
    exploreText: "Discover the design process & user centered solutions",
    imageUrl: "/lovable-uploads/6821b333-9f52-4ff2-9784-a3b1af1542ed.png"
  },
  {
    title: "Thinking Hat",
    description: "Delve into UX laws—fundamental principles that shape the way we think about design, encouraging deeper insights and fostering more intuitive, human-centered solutions.",
    exploreText: "Explore what hat you are wearing today",
    imageUrl: "/lovable-uploads/fb67e4bc-4291-401c-b868-3a15ca1a264c.png"
  },
  {
    title: "UX Laws",
    description: "Dive into UX laws, essential principles that streamline design decisions and empower you to create intuitive, user-centered experiences with ease.",
    exploreText: "Uncover UX laws as guiding principles for design",
    imageUrl: "/lovable-uploads/887500cd-9161-4cb4-99cf-262104bee34a.png"
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
