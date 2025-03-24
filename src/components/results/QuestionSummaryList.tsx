
import { CheckCircle, XCircle } from "lucide-react";
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
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {answersArray.map((answer, index) => (
        <Card 
          key={`summary-${index}`}
          className="border border-gray-200 overflow-hidden bg-white transition-all"
        >
          <CardContent className="p-5">
            <div className="flex items-start gap-3">
              {answer.isCorrect ? (
                <CheckCircle size={20} className="text-cognilense-green flex-shrink-0 mt-0.5" />
              ) : (
                <XCircle size={20} className="text-red-500 flex-shrink-0 mt-0.5" />
              )}
              <div>
                <p className="font-domine font-medium text-base">
                  {questions[answer.questionIndex].question}
                </p>
                {answer.selectedOption !== null ? (
                  <p className="text-sm text-muted-foreground mt-1">
                    Your answer: {answer.selectedOption}
                  </p>
                ) : (
                  <p className="text-sm text-muted-foreground mt-1">
                    Skipped
                  </p>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default QuestionSummaryList;
