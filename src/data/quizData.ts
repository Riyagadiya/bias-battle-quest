import { Question } from "../types/quiz";

// Helper function to shuffle array (Fisher-Yates algorithm)
const shuffleArray = <T>(array: T[]): T[] => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

// Array of cognitive bias types
export const cognitiveBiasTypes = [
  "Hindsight Bias", 
  "Backfire Effect", 
  "Barnum Effect", 
  "Sunk Cost Fallacy", 
  "Ingroup Bias", 
  "Belief Bias", 
  "Groupthink Bias", 
  "Recall Bias", 
  "Framing Bias", 
  "Bandwagon Effect", 
  "Optimism Bias", 
  "Pessimism Bias", 
  "Diversification Bias", 
  "Salience Bias", 
  "Projection Bias", 
  "Distinction Bias", 
  "Action Bias", 
  "Bundling Bias", 
  "Omission Bias", 
  "First Impression Bias", 
  "Response Bias", 
  "Survivorship Bias", 
  "Restraint Bias", 
  "Recency Bias", 
  "Social Desirability Bias", 
  "Prestige Bias", 
  "Current Mood Bias", 
  "Anchoring Bias", 
  "Spotlight Effect", 
  "Confirmation Bias", 
  "Decoy Option Effect", 
  "Dunning Kruger Bias", 
  "The IKEA Effect", 
  "Sisyphus Effect", 
  "The Cheating Bias", 
  "Gratification Bias", 
  "Scarcity Bias"
];

// Create the full question set
const allQuizQuestions: Question[] = [
  {
    id: 1,
    question: "After a sports match, Jake claims he knew his team would win all along, even though he expressed doubts before the game. What bias is he displaying?",
    options: shuffleArray([
      { text: "Hindsight Bias", isCorrect: true },
      { text: "Optimism Bias", isCorrect: false },
      { text: "Confirmation Bias", isCorrect: false },
      { text: "Bandwagon Effect", isCorrect: false }
    ]),
    explanation: "Hindsight Bias refers to the tendency to believe we 'knew it all along' after an event has occurred, despite having different views beforehand. Jake exhibits this by claiming he knew the outcome despite initially doubting it.",
    type: "hindsight"
  },
  {
    id: 2,
    question: "After a stock market crash, Linda insists she \"saw it coming,\" despite having invested heavily beforehand. What bias is at play?",
    options: shuffleArray([
      { text: "Hindsight Bias", isCorrect: true },
      { text: "Optimism Bias", isCorrect: false },
      { text: "Recency Bias", isCorrect: false },
      { text: "Anchoring Bias", isCorrect: false }
    ]),
    explanation: "Hindsight Bias causes individuals to think they predicted an event after it happens, even if they were unsure beforehand. Linda displays this bias by claiming she foresaw the crash, even though she had made risky investments.",
    type: "hindsight"
  },
  {
    id: 3,
    question: "A doctor remembers predicting a patient's correct diagnosis, even though their initial guess was different. What bias is this?",
    options: shuffleArray([
      { text: "Hindsight Bias", isCorrect: true },
      { text: "Recall Bias", isCorrect: false },
      { text: "Availability Bias", isCorrect: false },
      { text: "Belief Bias", isCorrect: false }
    ]),
    explanation: "Hindsight Bias makes people believe they knew the outcome all along. The doctor is displaying this bias by retroactively thinking they predicted the diagnosis correctly, even though their first guess was wrong.",
    type: "hindsight"
  },
  {
    id: 4,
    question: "Mark confidently tells his friend that he \"always knew\" a movie would be a hit, even though he originally doubted it. What bias is at work?",
    options: shuffleArray([
      { text: "Hindsight Bias", isCorrect: true },
      { text: "Self-Serving Bias", isCorrect: false },
      { text: "Confirmation Bias", isCorrect: false },
      { text: "Spotlight Effect", isCorrect: false }
    ]),
    explanation: "Hindsight Bias is demonstrated when someone claims they knew the outcome of an event after it happens, despite initially doubting it. Mark's claim about the movie is an example of this bias.",
    type: "hindsight"
  },
  {
    id: 5,
    question: "Sarah reads an article that contradicts her beliefs about climate change, but instead of reconsidering, she doubles down on her stance. What bias is at play?",
    options: shuffleArray([
      { text: "Backfire Effect", isCorrect: true },
      { text: "Belief Bias", isCorrect: false },
      { text: "Confirmation Bias", isCorrect: false },
      { text: "Response Bias", isCorrect: false }
    ]),
    explanation: "The Backfire Effect occurs when someone strengthens their original beliefs after being presented with contradicting evidence. Sarah exemplifies this by becoming even more convinced of her views despite the contradictory article.",
    type: "backfire"
  },
  {
    id: 6,
    question: "John is shown evidence that a politician he supports was dishonest, but he defends them even more strongly. What bias is influencing him?",
    options: shuffleArray([
      { text: "Backfire Effect", isCorrect: true },
      { text: "Ingroup Bias", isCorrect: false },
      { text: "Prestige Bias", isCorrect: false },
      { text: "Social Desirability Bias", isCorrect: false }
    ]),
    explanation: "The Backfire Effect leads people to hold onto their beliefs more strongly after being confronted with evidence that challenges them. John is displaying this by defending the politician despite the dishonest evidence.",
    type: "backfire"
  },
  {
    id: 7,
    question: "Despite clear data showing the Earth is round, Greg becomes even more convinced in his flat-Earth belief after debating online. What bias is this?",
    options: shuffleArray([
      { text: "Backfire Effect", isCorrect: true },
      { text: "Dunning Kruger Bias", isCorrect: false },
      { text: "Current Mood Bias", isCorrect: false },
      { text: "Projection Bias", isCorrect: false }
    ]),
    explanation: "The Backfire Effect occurs when new evidence strengthens rather than weakens a person's beliefs. Greg's belief in flat-Earth becomes stronger even after being presented with contradictory evidence.",
    type: "backfire"
  },
  {
    id: 8,
    question: "A study disproves a medical myth Emily believes in, but instead of accepting the findings, she trusts the myth more. What bias is affecting her?",
    options: shuffleArray([
      { text: "Backfire Effect", isCorrect: true },
      { text: "Anchoring Bias", isCorrect: false },
      { text: "Recall Bias", isCorrect: false },
      { text: "Salience Bias", isCorrect: false }
    ]),
    explanation: "The Backfire Effect causes individuals to reject disconfirming evidence and cling to their original beliefs even more. Emily is exhibiting this bias by trusting the disproven medical myth.",
    type: "backfire"
  }
];

// Keep track of recently used questions to avoid repetition
const recentlyUsedQuestions: Set<number> = new Set();
// Also track recently used bias types to avoid repetition of the same type
const recentlyUsedBiasTypes: Set<string> = new Set();

// Function to select random questions for each quiz, avoiding repeats and same bias types when possible
const selectRandomQuestions = (): Question[] => {
  // Create a copy of all questions
  const availableQuestions = [...allQuizQuestions];
  
  // Filter out recently used questions if we have enough questions left
  const preferredQuestions = availableQuestions.filter(
    q => !recentlyUsedQuestions.has(q.id)
  );
  
  // Determine which question pool to use
  const questionPool = preferredQuestions.length >= 10 ? preferredQuestions : availableQuestions;
  
  // Shuffle the questions
  const shuffledQuestions = shuffleArray(questionPool);
  
  // Initialize selected questions array and track bias types used in this selection
  const selectedQuestions: Question[] = [];
  const biasTypesInThisQuiz: Set<string> = new Set();
  
  // Go through shuffled questions and select those that don't have duplicate bias types
  for (const question of shuffledQuestions) {
    // If we already have 10 questions, stop
    if (selectedQuestions.length >= 10) break;
    
    // If this bias type was recently used and we have other options, skip it
    if (recentlyUsedBiasTypes.has(question.type) && shuffledQuestions.length > 15) continue;
    
    // If this bias type is already in the current quiz and we have other options, skip it
    if (biasTypesInThisQuiz.has(question.type) && shuffledQuestions.length > 20) continue;
    
    // Add the question
    selectedQuestions.push(question);
    biasTypesInThisQuiz.add(question.type);
  }
  
  // If we couldn't get 10 questions with the above constraints, just take the first 10 shuffled
  if (selectedQuestions.length < 10) {
    selectedQuestions.splice(0, selectedQuestions.length); // Clear array
    selectedQuestions.push(...shuffledQuestions.slice(0, 10));
  }
  
  // Update recently used questions and bias types
  recentlyUsedQuestions.clear(); // Clear old tracking
  recentlyUsedBiasTypes.clear();
  selectedQuestions.forEach(q => {
    recentlyUsedQuestions.add(q.id);
    recentlyUsedBiasTypes.add(q.type);
  });
  
  return selectedQuestions;
};

// Export a function that will provide random questions
export const questionData: Question[] = selectRandomQuestions();

// This allows us to also expose the function to get new questions
export const getRandomQuestions = selectRandomQuestions;
