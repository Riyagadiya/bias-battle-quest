
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface ExpertLensProps {
  isVisible: boolean;
}

const ExpertLens = ({ isVisible }: ExpertLensProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 40 }}
      transition={{ duration: 0.7, delay: 0.7 }}
      className="mt-96 mb-6 max-w-6xl mx-auto relative"
    >
      <div className="absolute right-0 top-0 w-[50%] h-full rounded-2xl bg-gradient-to-br from-cognilense-yellow/20 via-cognilense-blue/20 to-cognilense-green/20 z-0"></div>
      
      <div className="flex flex-col md:flex-row items-center md:items-start relative z-10">
        <div className="w-full md:w-2/5 text-left flex flex-col items-start pr-4 md:mt-8">
          <div className="mb-5">
            <h2 className="font-worksans font-normal text-xl md:text-2xl">See the world from an</h2>
            <h2 className="font-domine font-bold text-4xl md:text-5xl mt-1">experts' lens</h2>
          </div>
          
          <button className="flex items-center gap-2 border border-gray-300 rounded-full px-5 py-2 text-sm md:text-base font-worksans hover:bg-gray-50 transition-colors">
            Meet the Expert <ArrowUpRight size={16} />
          </button>
          
          <p className="font-worksans text-sm md:text-base text-gray-700 mt-4 max-w-lg">
            We have been using these and many other methods, lenses and thinking techniques to solve problems and look at situations with a new eye.
          </p>
        </div>
        
        <div className="w-full md:w-3/5 flex flex-col mt-6 md:mt-0">
          <div className="relative">
            <div className="relative -left-1/6 md:-left-1/6 w-[90%]">
              <img 
                src="/lovable-uploads/0c8c5f2a-45bc-4474-aad2-3255da8f8bb2.png" 
                alt="Man with hands on head illustrating cognitive bias" 
                className="w-full h-auto object-contain z-10"
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ExpertLens;
