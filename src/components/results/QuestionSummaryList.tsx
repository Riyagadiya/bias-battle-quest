
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
    <div className="space-y-3">
      {answersArray.map((answer, index) => (
        <Card key={`question-${index}`} className="overflow-hidden border-l-4 border-l-gray-300">
          <CardContent className="p-3">
            <div className="flex items-start gap-2">
              <div className="mt-1">
                {answer.isCorrect ? (
                  <CheckCircle size={16} className="text-green-500" />
                ) : (
                  <XCircle size={16} className="text-red-500" />
                )}
              </div>
              <div>
                <p className="font-medium text-xs mb-0.5">
                  Question {index + 1}
                </p>
                <p className="text-muted-foreground text-xs">
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
    </div>
  );
};

export default QuestionSummaryList;
