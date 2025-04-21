
import { ArrowUpRight } from "lucide-react";

interface CardItemProps {
  title: string;
  description: string;
  exploreText: string;
  imageUrl: string;
}

const CardItem = ({ title, description, exploreText, imageUrl }: CardItemProps) => {
  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 p-6 flex flex-col h-full">
      <div className="mb-6 flex justify-center">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-32 h-32 object-contain"
        />
      </div>
      
      <h3 className="text-xl font-domine font-semibold mb-3">{title}</h3>
      
      <p className="text-muted-foreground mb-6 flex-grow">
        {description}
      </p>
      
      <div className="flex items-center text-cognilense-blue font-medium group">
        <span>{exploreText}</span>
        <ArrowUpRight 
          size={18} 
          className="ml-1 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" 
        />
      </div>
    </div>
  );
};

export default CardItem;
