
import { Card, CardContent } from "@/components/ui/card";

// Using images that were uploaded
const biasCards = [
  {
    id: 1,
    title: "Framing bias",
    description: "Equivalent information can be more or less attractive depending on how it is presented, influencing our decisions.",
    image: "/lovable-uploads/33dd2e64-b5bd-420b-a109-21021722e2e5.png"
  },
  {
    id: 2,
    title: "Recall bias",
    description: "Individuals do not accurately remember past events or experiences or leave out details while reporting about them.",
    image: "/lovable-uploads/0e434285-da7a-4d09-968c-6aa803e2fb9c.png"
  },
  {
    id: 3,
    title: "Belief Bias",
    description: "We are more likely to accept the fact of something if it matches our pre-existing beliefs.",
    image: "/lovable-uploads/2e8216bb-eae1-495c-b777-3b285e3dd6a3.png"
  },
  {
    id: 4,
    title: "Groupthink bias",
    description: "A group of individuals reaches a consensus without critical reasoning or evaluation of the consequences or alternatives, simply doing or agreeing because everyone else is.",
    image: "/lovable-uploads/6a112697-8c9b-4c0c-a382-838c1abf9a96.png"
  }
];

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
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {biasCards.map((card) => (
        <Card 
          key={`bias-${card.id}`}
          className="border-0 overflow-hidden transition-all rounded-lg"
        >
          <CardContent className="p-0 h-full">
            <img 
              src={card.image} 
              alt={card.title}
              className="w-full h-full object-cover"
            />
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default QuestionSummaryList;
