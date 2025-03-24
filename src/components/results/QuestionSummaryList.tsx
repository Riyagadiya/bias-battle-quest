
import { Card, CardContent } from "@/components/ui/card";

interface Question {
  id: number;
  question: string;
  options: { text: string; isCorrect: boolean }[];
  explanation: string;
  type: string;
}

interface AnswerSummary {
  questionIndex: number;
  selectedOption: string | null;
  isCorrect: boolean | undefined;
}

interface QuestionSummaryListProps {
  answersArray: AnswerSummary[];
  questions: Question[];
}

const QuestionSummaryList = ({ answersArray, questions }: QuestionSummaryListProps) => {
  // Cognitive bias cards data
  const biasCards = [
    {
      title: "Framing bias",
      description: "Equivalent information can be more or less attractive depending on how it is presented, influencing our decisions.",
      image: "/lovable-uploads/f0b791d6-bd23-4b3a-beff-64efd67f762b.png"
    },
    {
      title: "Recall bias",
      description: "Individuals do not accurately remember past events or experiences or leave out details while reporting about them.",
      image: "/lovable-uploads/f02f5f6f-6f15-429c-a14c-1a74343bad09.png"
    },
    {
      title: "Belief Bias",
      description: "We are more likely to accept the fact of something if it matches our pre-existing beliefs.",
      image: "/lovable-uploads/12d32dda-2c05-4a8e-a769-0b0e153e53aa.png"
    },
    {
      title: "Groupthink bias",
      description: "A group of individuals reaches a consensus without critical reasoning or evaluation of the consequences or alternatives, simply doing or agreeing because everyone else is.",
      image: "/lovable-uploads/2c66cb1d-3be2-44cf-ae55-2cdcc2f2faf3.png"
    }
  ];

  return (
    <div className="space-y-6">
      <h3 className="font-domine text-2xl font-semibold text-center mb-6">
        Cognitive Biases - Sneak Peak
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {biasCards.map((card, index) => (
          <div key={`bias-card-${index}`} className="flex flex-col h-full">
            <Card className="overflow-hidden h-full">
              <CardContent className="p-0 h-full">
                <img 
                  src={card.image} 
                  alt={card.title} 
                  className="w-full h-auto object-cover"
                />
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuestionSummaryList;
