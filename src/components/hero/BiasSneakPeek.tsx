
import { motion } from "framer-motion";

interface BiasCardProps {
  title: string;
  description: string;
  image: string;
  index: number;
}

const BiasCard = ({ title, description, image, index }: BiasCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
      className="flex flex-col h-full"
    >
      <div className="overflow-hidden rounded-lg shadow-lg h-full transition-transform duration-300 hover:scale-[1.02]">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-auto object-cover"
        />
      </div>
    </motion.div>
  );
};

interface BiasSneakPeekProps {
  isVisible: boolean;
}

const BiasSneakPeek = ({ isVisible }: BiasSneakPeekProps) => {
  const biasCards = [
    {
      title: "Framing bias",
      description: "Equivalent information can be more or less attractive depending on how it's presented, influencing our decisions.",
      image: "/lovable-uploads/127df004-c4c0-4733-a1a1-511e730bbc3b.png"
    },
    {
      title: "Recall bias",
      description: "Individuals do not accurately remember past events or experiences or leave out details while reporting about them.",
      image: "/lovable-uploads/76228625-2a1b-462b-b2f4-d3f95a6480d7.png"
    },
    {
      title: "Belief Bias",
      description: "We are more likely to accept the fact of something if it matches our pre-existing beliefs.",
      image: "/lovable-uploads/4f5494bd-d6dc-4ce4-a704-c17e765e9e3c.png"
    },
    {
      title: "Groupthink bias",
      description: "A group of individuals reaches a consensus without critical reasoning or evaluation of the consequences or alternatives, simply doing or agreeing because everyone else is.",
      image: "/lovable-uploads/5d61ea8b-bd0c-4768-a511-34a2616f81b9.png"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 60 }}
      transition={{ duration: 0.6, delay: 0.8 }}
      className="mt-16 max-w-6xl mx-auto"
    >
      <h3 className="font-domine font-bold text-3xl md:text-[40px] leading-[58px] tracking-[-3%] text-center mb-8">
        Sneak Peak into Cognitive Biases
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {biasCards.map((card, index) => (
          <BiasCard
            key={`bias-card-${index}`}
            title={card.title}
            description={card.description}
            image={card.image}
            index={index}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default BiasSneakPeek;
