
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
        <div 
          key={`summary-${index}`}
          className="flex items-start gap-3 p-3 rounded-md bg-white border"
        >
          {answer.isCorrect ? (
            <CheckCircle size={20} className="text-green-500 flex-shrink-0 mt-0.5" />
          ) : (
            <XCircle size={20} className="text-red-500 flex-shrink-0 mt-0.5" />
          )}
          <div>
            <p className="font-medium">
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
      ))}
    </div>
  );
};

export default QuestionSummaryList;
