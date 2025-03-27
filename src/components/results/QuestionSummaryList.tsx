
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, XCircle } from "lucide-react";

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
    <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2">
      {answersArray.map((answer, index) => (
        <Card key={`question-${index}`} className="overflow-hidden border-l-4 border-l-gray-300">
          <CardContent className="p-4">
            <div className="flex items-start gap-3">
              <div className="mt-1">
                {answer.isCorrect ? (
                  <CheckCircle size={18} className="text-green-500" />
                ) : (
                  <XCircle size={18} className="text-red-500" />
                )}
              </div>
              <div>
                <p className="font-medium mb-1 text-sm">
                  Question {index + 1}
                </p>
                <p className="text-muted-foreground text-sm">
                  {answer.selectedOption ? (
                    <>Your answer: <span className={answer.isCorrect ? "text-green-600 font-medium" : "text-red-600 font-medium"}>
                      {answer.selectedOption}
                    </span></>
                  ) : (
                    <span className="text-amber-600">Skipped</span>
                  )}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
      
      <div className="pt-4">
        <h4 className="font-domine text-lg font-semibold mb-3">
          Cognitive Bias Cards
        </h4>
        <p className="text-sm text-muted-foreground mb-4">
          Improve your critical thinking with our bias card deck
        </p>
        <img 
          src="/lovable-uploads/f0b791d6-bd23-4b3a-beff-64efd67f762b.png"
          alt="Cognitive Bias Card"
          className="w-full h-auto rounded-lg shadow-sm"
        />
      </div>
    </div>
  );
};

export default QuestionSummaryList;
