
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

// Create the full question set
const allQuizQuestions: Question[] = [
  // Hindsight Bias
  {
    id: 1,
    question: "After a sports match, Jake claims he knew his team would win all along, even though he expressed doubts before the game. What bias is he displaying?",
    options: shuffleArray([
      { text: "Hindsight Bias", isCorrect: true },
      { text: "Optimism Bias", isCorrect: false },
      { text: "Confirmation Bias", isCorrect: false },
      { text: "Bandwagon Effect", isCorrect: false }
    ]),
    explanation: "Hindsight Bias refers to the tendency to believe that we 'knew it all along' after an event has occurred. Jake is claiming he knew the outcome despite expressing different views beforehand.",
    type: "hindsight"
  },
  {
    id: 2,
    question: "After a stock market crash, Linda insists she 'saw it coming,' despite having invested heavily beforehand. What bias is at play?",
    options: shuffleArray([
      { text: "Hindsight Bias", isCorrect: true },
      { text: "Optimism Bias", isCorrect: false },
      { text: "Recency Bias", isCorrect: false },
      { text: "Anchoring Bias", isCorrect: false }
    ]),
    explanation: "Hindsight Bias leads people to believe they predicted an outcome when they actually didn't. Linda claims she saw the crash coming even though her investment decisions suggest otherwise.",
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
    explanation: "Hindsight Bias occurs when people believe they correctly predicted an outcome after knowing the result. The doctor is incorrectly remembering their initial diagnosis.",
    type: "hindsight"
  },
  {
    id: 4,
    question: "Mark confidently tells his friend that he 'always knew' a movie would be a hit, even though he originally doubted it. What bias is at work?",
    options: shuffleArray([
      { text: "Hindsight Bias", isCorrect: true },
      { text: "Self-Serving Bias", isCorrect: false },
      { text: "Confirmation Bias", isCorrect: false },
      { text: "Spotlight Effect", isCorrect: false }
    ]),
    explanation: "Hindsight Bias is when people claim they knew something would happen after it already occurred. Mark is rewriting his original opinion after learning the movie was successful.",
    type: "hindsight"
  },

  // Backfire Effect
  {
    id: 5,
    question: "Sarah reads an article that contradicts her beliefs about climate change, but instead of reconsidering, she doubles down on her stance. What bias is at play?",
    options: shuffleArray([
      { text: "Backfire Effect", isCorrect: true },
      { text: "Confirmation Bias", isCorrect: false },
      { text: "Belief Bias", isCorrect: false },
      { text: "Disconfirmation Bias", isCorrect: false }
    ]),
    explanation: "The Backfire Effect occurs when contradicting evidence causes people to strengthen their original beliefs rather than change their minds. Sarah is reinforcing her position when faced with challenging information.",
    type: "backfire"
  },
  {
    id: 6,
    question: "John is shown evidence that a politician he supports was dishonest, but he defends them even more strongly. What bias is influencing him?",
    options: shuffleArray([
      { text: "Backfire Effect", isCorrect: true },
      { text: "Ingroup Bias", isCorrect: false },
      { text: "Belief Perseverance", isCorrect: false },
      { text: "Social Desirability Bias", isCorrect: false }
    ]),
    explanation: "The Backfire Effect leads people to strengthen their beliefs when presented with contradictory evidence. John is defending the politician more strongly after learning negative information.",
    type: "backfire"
  },
  {
    id: 7,
    question: "Despite clear data showing the Earth is round, Greg becomes even more convinced in his flat-Earth belief after debating online. What bias is this?",
    options: shuffleArray([
      { text: "Backfire Effect", isCorrect: true },
      { text: "Dunning-Kruger Effect", isCorrect: false },
      { text: "Confirmation Bias", isCorrect: false },
      { text: "Belief Bias", isCorrect: false }
    ]),
    explanation: "The Backfire Effect causes people to strengthen their incorrect beliefs when presented with contradictory evidence. Greg's conviction about flat Earth theories increases after exposure to scientific evidence.",
    type: "backfire"
  },
  {
    id: 8,
    question: "A study disproves a medical myth Emily believes in, but instead of accepting the findings, she trusts the myth more. What bias is affecting her?",
    options: shuffleArray([
      { text: "Backfire Effect", isCorrect: true },
      { text: "Availability Heuristic", isCorrect: false },
      { text: "Confirmation Bias", isCorrect: false },
      { text: "Illusory Truth Effect", isCorrect: false }
    ]),
    explanation: "The Backfire Effect happens when contradictory evidence strengthens a person's original belief. Emily trusts the medical myth more after seeing evidence that disproves it.",
    type: "backfire"
  },

  // Barnum Effect
  {
    id: 9,
    question: "Lisa reads her horoscope and is amazed at how accurately it describes her personality, despite it being vague. What bias is affecting her?",
    options: shuffleArray([
      { text: "Barnum Effect", isCorrect: true },
      { text: "Subjective Validation", isCorrect: false },
      { text: "Confirmation Bias", isCorrect: false },
      { text: "Self-Serving Bias", isCorrect: false }
    ]),
    explanation: "The Barnum Effect is when individuals believe vague, general personality descriptions are specifically tailored to them. Lisa feels the horoscope is personally accurate when it's actually designed to apply to many people.",
    type: "barnum"
  },
  {
    id: 10,
    question: "A fortune teller gives vague statements that feel highly personal to Tim. What bias is at work?",
    options: shuffleArray([
      { text: "Barnum Effect", isCorrect: true },
      { text: "Illusory Correlation", isCorrect: false },
      { text: "Confirmation Bias", isCorrect: false },
      { text: "Availability Heuristic", isCorrect: false }
    ]),
    explanation: "The Barnum Effect occurs when people believe general, vague statements apply specifically to them. Tim feels the fortune teller's generic statements are uniquely personal to his situation.",
    type: "barnum"
  },

  // Sunk Cost Fallacy
  {
    id: 11,
    question: "Mark continues investing in a failing business because he has already spent so much money on it. What bias is influencing his decision?",
    options: shuffleArray([
      { text: "Sunk Cost Fallacy", isCorrect: true },
      { text: "Commitment Bias", isCorrect: false },
      { text: "Status Quo Bias", isCorrect: false },
      { text: "Escalation of Commitment", isCorrect: false }
    ]),
    explanation: "The Sunk Cost Fallacy is our tendency to continue an endeavor due to previously invested resources that cannot be recovered. Mark keeps investing in a failing business because of his previous investments.",
    type: "sunk_cost"
  },
  {
    id: 12,
    question: "Despite a terrible movie, Anna refuses to leave the theater because she already paid for the ticket. What bias is at play?",
    options: shuffleArray([
      { text: "Sunk Cost Fallacy", isCorrect: true },
      { text: "Commitment Bias", isCorrect: false },
      { text: "Status Quo Bias", isCorrect: false },
      { text: "Loss Aversion", isCorrect: false }
    ]),
    explanation: "The Sunk Cost Fallacy is our tendency to continue an endeavor due to previously invested resources that cannot be recovered. Anna stays for the entire movie despite not enjoying it because she paid for the ticket.",
    type: "sunk_cost"
  },

  // Ingroup Bias
  {
    id: 13,
    question: "A hiring manager favors a job candidate from their alma mater, believing they must be more competent. What bias is at work?",
    options: shuffleArray([
      { text: "Ingroup Bias", isCorrect: true },
      { text: "Halo Effect", isCorrect: false },
      { text: "Affinity Bias", isCorrect: false },
      { text: "Similarity Bias", isCorrect: false }
    ]),
    explanation: "Ingroup Bias is the tendency to favor members of one's own group over those in other groups. The hiring manager is showing preference for a candidate simply because they share the same educational background.",
    type: "ingroup"
  },
  {
    id: 14,
    question: "A sports fan assumes people from their city are more honest than those from rival cities. What bias is at play?",
    options: shuffleArray([
      { text: "Ingroup Bias", isCorrect: true },
      { text: "Outgroup Homogeneity", isCorrect: false },
      { text: "Stereotyping", isCorrect: false },
      { text: "Attribution Bias", isCorrect: false }
    ]),
    explanation: "Ingroup Bias leads people to attribute positive traits to members of their own group. The sports fan believes people from their city are more honest simply because they belong to the same group.",
    type: "ingroup"
  },
  
  // Belief Bias
  {
    id: 15,
    question: "A jury member believes the suspect is guilty because of their prior record, even though the evidence suggests otherwise. What bias is being demonstrated?",
    options: shuffleArray([
      { text: "Belief Bias", isCorrect: true },
      { text: "Confirmation Bias", isCorrect: false },
      { text: "Fundamental Attribution Error", isCorrect: false },
      { text: "Halo Effect", isCorrect: false }
    ]),
    explanation: "Belief Bias is when people judge the validity of an argument based on their existing beliefs rather than the logical strength of the argument. The jury member is judging guilt based on prior record rather than current evidence.",
    type: "belief"
  },
  {
    id: 16,
    question: "Kevin assumes an argument is logical just because he agrees with the conclusion. What bias is influencing him?",
    options: shuffleArray([
      { text: "Belief Bias", isCorrect: true },
      { text: "Confirmation Bias", isCorrect: false },
      { text: "Availability Heuristic", isCorrect: false },
      { text: "Anchoring Bias", isCorrect: false }
    ]),
    explanation: "Belief Bias is the tendency to evaluate the strength of arguments based on whether we agree with their conclusions, rather than how well they support the conclusion. Kevin is judging an argument's logic based on his agreement with it.",
    type: "belief"
  },

  // Groupthink Bias
  {
    id: 17,
    question: "A corporate team agrees on a risky strategy because no one wants to voice dissent. What bias is influencing their decision?",
    options: shuffleArray([
      { text: "Groupthink Bias", isCorrect: true },
      { text: "Bandwagon Effect", isCorrect: false },
      { text: "Consensus Bias", isCorrect: false },
      { text: "Conformity Bias", isCorrect: false }
    ]),
    explanation: "Groupthink occurs when a group makes irrational decisions because members conform to consensus rather than expressing dissenting opinions. The team is adopting a risky strategy because no one is willing to challenge the group's direction.",
    type: "groupthink"
  },
  {
    id: 18,
    question: "A jury quickly reaches a verdict without considering all evidence, as no one wants to challenge the majority. What bias is this?",
    options: shuffleArray([
      { text: "Groupthink Bias", isCorrect: true },
      { text: "Conformity Bias", isCorrect: false },
      { text: "Bandwagon Effect", isCorrect: false },
      { text: "Authority Bias", isCorrect: false }
    ]),
    explanation: "Groupthink Bias occurs when group members prioritize consensus over critical evaluation. The jury is making a hasty decision because no one wants to challenge the developing consensus.",
    type: "groupthink"
  },

  // Recall Bias
  {
    id: 19,
    question: "Emma only remembers the times her lucky charm worked and forgets the times it didn't. What cognitive bias is she experiencing?",
    options: shuffleArray([
      { text: "Recall Bias", isCorrect: true },
      { text: "Confirmation Bias", isCorrect: false },
      { text: "Availability Heuristic", isCorrect: false },
      { text: "Selective Perception", isCorrect: false }
    ]),
    explanation: "Recall Bias refers to the tendency to selectively remember certain events while forgetting others. Emma only recalls instances that confirm her lucky charm works, creating a distorted perception of its effectiveness.",
    type: "recall"
  },
  {
    id: 20,
    question: "A doctor recalls only successful cases of a treatment and overlooks failures. What bias is influencing their decision?",
    options: shuffleArray([
      { text: "Recall Bias", isCorrect: true },
      { text: "Survivorship Bias", isCorrect: false },
      { text: "Confirmation Bias", isCorrect: false },
      { text: "Selection Bias", isCorrect: false }
    ]),
    explanation: "Recall Bias leads to selective memory of events that support existing beliefs. The doctor remembers successful treatments while forgetting unsuccessful ones, creating a skewed perception of effectiveness.",
    type: "recall"
  },

  // Framing Bias
  {
    id: 21,
    question: "A politician presents tax cuts as 'helping hardworking families' rather than 'reducing government revenue.' What bias is being used?",
    options: shuffleArray([
      { text: "Framing Bias", isCorrect: true },
      { text: "Wording Effect", isCorrect: false },
      { text: "Spin Bias", isCorrect: false },
      { text: "Persuasion Bias", isCorrect: false }
    ]),
    explanation: "Framing Bias occurs when information is presented in a way that influences perception and decision-making. The politician is framing tax cuts positively by emphasizing benefits to families rather than costs to government.",
    type: "framing"
  },
  {
    id: 22,
    question: "A doctor says a surgery has a '90% survival rate' instead of a '10% death rate,' making it sound less risky. What bias is at work?",
    options: shuffleArray([
      { text: "Framing Bias", isCorrect: true },
      { text: "Anchoring Bias", isCorrect: false },
      { text: "Optimism Bias", isCorrect: false },
      { text: "Information Bias", isCorrect: false }
    ]),
    explanation: "Framing Bias occurs when our decisions are influenced by how information is presented. The doctor is presenting identical statistical information in a way that emphasizes positive outcomes, which tends to make patients more likely to consent.",
    type: "framing"
  },

  // Bandwagon Effect
  {
    id: 23,
    question: "John starts investing in cryptocurrency just because everyone else is doing it. What bias is affecting his choice?",
    options: shuffleArray([
      { text: "Bandwagon Effect", isCorrect: true },
      { text: "Social Proof Bias", isCorrect: false },
      { text: "Conformity Bias", isCorrect: false },
      { text: "Herd Mentality", isCorrect: false }
    ]),
    explanation: "The Bandwagon Effect is the tendency to follow what others are doing, particularly in group settings. John is investing not based on research or personal interest, but simply because he sees others doing it.",
    type: "bandwagon"
  },
  {
    id: 24,
    question: "A new fashion trend takes off, and even people who initially disliked it start following it. What bias is at play?",
    options: shuffleArray([
      { text: "Bandwagon Effect", isCorrect: true },
      { text: "Conformity Bias", isCorrect: false },
      { text: "Social Desirability Bias", isCorrect: false },
      { text: "Peer Pressure Bias", isCorrect: false }
    ]),
    explanation: "The Bandwagon Effect leads people to adopt behaviors or attitudes because of their popularity. People are changing their fashion preferences to match what has become popular, despite initial dislike.",
    type: "bandwagon"
  },

  // Optimism Bias
  {
    id: 25,
    question: "Tom underestimates the likelihood of getting into a car accident and refuses to buy insurance. What bias is influencing him?",
    options: shuffleArray([
      { text: "Optimism Bias", isCorrect: true },
      { text: "Normalcy Bias", isCorrect: false },
      { text: "Planning Fallacy", isCorrect: false },
      { text: "Risk Compensation", isCorrect: false }
    ]),
    explanation: "Optimism Bias leads people to underestimate the likelihood of negative events happening to them. Tom believes he's less likely to get into an accident than statistics would suggest.",
    type: "optimism"
  },
  {
    id: 26,
    question: "A gambler believes they are 'due for a win' after a losing streak, despite the odds staying the same. What bias is at play?",
    options: shuffleArray([
      { text: "Optimism Bias", isCorrect: true },
      { text: "Gambler's Fallacy", isCorrect: false },
      { text: "Hot Hand Fallacy", isCorrect: false },
      { text: "Recency Bias", isCorrect: false }
    ]),
    explanation: "Optimism Bias causes people to overestimate the likelihood of positive outcomes. The gambler believes they have an increased chance of winning despite unchanging probability.",
    type: "optimism"
  },

  // Anchoring Bias
  {
    id: 27,
    question: "A car salesman starts negotiations with a high price, making a slightly lower offer seem like a great deal. What bias is at work?",
    options: shuffleArray([
      { text: "Anchoring Bias", isCorrect: true },
      { text: "Framing Effect", isCorrect: false },
      { text: "Contrast Effect", isCorrect: false },
      { text: "Decoy Effect", isCorrect: false }
    ]),
    explanation: "Anchoring Bias is when people rely too heavily on the first piece of information encountered (the 'anchor') when making decisions. The initial high price serves as an anchor, making subsequent lower prices seem more reasonable by comparison.",
    type: "anchoring"
  },
  {
    id: 28,
    question: "A shopper assumes a $500 watch is a good deal because it was originally listed at $1,000. What bias is influencing them?",
    options: shuffleArray([
      { text: "Anchoring Bias", isCorrect: true },
      { text: "Framing Effect", isCorrect: false },
      { text: "Contrast Effect", isCorrect: false },
      { text: "Relative Valuation", isCorrect: false }
    ]),
    explanation: "Anchoring Bias occurs when initial information disproportionately influences judgment. The original $1,000 price serves as an anchor that makes $500 seem like a good value, regardless of the watch's actual worth.",
    type: "anchoring"
  },

  // Dunning-Kruger Effect
  {
    id: 29,
    question: "A novice investor believes they know more than experts after making one successful trade. What bias is influencing them?",
    options: shuffleArray([
      { text: "Dunning-Kruger Effect", isCorrect: true },
      { text: "Overconfidence Bias", isCorrect: false },
      { text: "Self-serving Bias", isCorrect: false },
      { text: "Superiority Bias", isCorrect: false }
    ]),
    explanation: "The Dunning-Kruger Effect is a cognitive bias where people with low ability at a task overestimate their ability. The novice investor lacks the knowledge to recognize their own limitations after one lucky success.",
    type: "dunning_kruger"
  },
  {
    id: 30,
    question: "A student with little knowledge on a subject assumes they understand it better than the professor. What bias is at work?",
    options: shuffleArray([
      { text: "Dunning-Kruger Effect", isCorrect: true },
      { text: "Overconfidence Bias", isCorrect: false },
      { text: "Superiority Illusion", isCorrect: false },
      { text: "Authority Bias", isCorrect: false }
    ]),
    explanation: "The Dunning-Kruger Effect causes people with limited knowledge to overestimate their expertise. The student lacks sufficient knowledge to recognize the depth of the subject and their own limitations.",
    type: "dunning_kruger"
  },

  // IKEA Effect
  {
    id: 31,
    question: "Mark values his homemade table more than a store-bought one, even though the latter is better made. What bias is at play?",
    options: shuffleArray([
      { text: "IKEA Effect", isCorrect: true },
      { text: "Endowment Effect", isCorrect: false },
      { text: "Effort Justification", isCorrect: false },
      { text: "Ownership Bias", isCorrect: false }
    ]),
    explanation: "The IKEA Effect is a cognitive bias where people place a disproportionately high value on products they partially created themselves. Mark values his homemade table more because he invested his own labor into making it.",
    type: "ikea"
  },
  {
    id: 32,
    question: "A chef prefers a dish they cooked themselves over a restaurant's version, despite it tasting the same. What bias is influencing their preference?",
    options: shuffleArray([
      { text: "IKEA Effect", isCorrect: true },
      { text: "Effort Heuristic", isCorrect: false },
      { text: "Endowment Effect", isCorrect: false },
      { text: "Self-Enhancement Bias", isCorrect: false }
    ]),
    explanation: "The IKEA Effect leads people to value things they created more highly. The chef values their own dish more because they invested effort in creating it, regardless of objective quality.",
    type: "ikea"
  },

  // Action Bias
  {
    id: 33,
    question: "A soccer goalkeeper always dives during penalty kicks, even though statistically staying in the center is better. What bias is this?",
    options: shuffleArray([
      { text: "Action Bias", isCorrect: true },
      { text: "Overconfidence Bias", isCorrect: false },
      { text: "Illusion of Control", isCorrect: false },
      { text: "Outcome Bias", isCorrect: false }
    ]),
    explanation: "Action Bias is the tendency to favor action over inaction, even when the action isn't necessarily the most effective response. The goalkeeper feels better diving (acting) than staying put (not acting), even when statistics suggest otherwise.",
    type: "action"
  },
  {
    id: 34,
    question: "An investor frequently trades stocks despite evidence that a buy-and-hold strategy yields better returns. What bias is at work?",
    options: shuffleArray([
      { text: "Action Bias", isCorrect: true },
      { text: "Overtrading Bias", isCorrect: false },
      { text: "Illusion of Control", isCorrect: false },
      { text: "Status Quo Bias", isCorrect: false }
    ]),
    explanation: "Action Bias leads people to prefer taking action over doing nothing, even when inaction would be more beneficial. The investor feels better actively trading rather than passively holding investments, despite evidence favoring the latter approach.",
    type: "action"
  },

  // Spotlight Effect
  {
    id: 35,
    question: "Emma feels like everyone is staring at her when she trips, even though most people didn't notice. What bias is influencing her?",
    options: shuffleArray([
      { text: "Spotlight Effect", isCorrect: true },
      { text: "Illusion of Transparency", isCorrect: false },
      { text: "Self-Consciousness Bias", isCorrect: false },
      { text: "Social Anxiety Bias", isCorrect: false }
    ]),
    explanation: "The Spotlight Effect causes people to overestimate how much others notice their appearance or behavior. Emma thinks everyone saw her trip when most people were focused on their own activities.",
    type: "spotlight"
  },
  {
    id: 36,
    question: "A teenager refuses to wear an old shirt, assuming everyone will judge them for it. What bias is at play?",
    options: shuffleArray([
      { text: "Spotlight Effect", isCorrect: true },
      { text: "Social Comparison Bias", isCorrect: false },
      { text: "Illusion of Transparency", isCorrect: false },
      { text: "Self-Consciousness Bias", isCorrect: false }
    ]),
    explanation: "The Spotlight Effect leads people to believe others pay more attention to their appearance than they actually do. The teenager assumes others will notice and judge their clothing choices more than is realistic.",
    type: "spotlight"
  },
];

// Keep track of recently used questions to avoid repetition
let recentlyUsedQuestions: Set<number> = new Set();
// Also track recently used bias types to avoid repetition of the same type
let recentlyUsedBiasTypes: Set<string> = new Set();

// Function to select 10 random questions for each quiz, avoiding repeats and same bias types when possible
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

// Export a function that will provide 10 random questions
export const questionData: Question[] = selectRandomQuestions();

// This allows us to also expose the function to get new questions
export const getRandomQuestions = selectRandomQuestions;
