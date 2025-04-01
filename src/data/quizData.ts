
import { Question } from "../types/quiz";

// Quiz questions data with scenario-based questions about cognitive biases
export const questionData: Question[] = [
  // Hindsight Bias
  {
    id: 1,
    question: "After a sports match, Jake claims he knew his team would win all along, even though he expressed doubts before the game. What bias is he displaying?",
    options: [
      { text: "Hindsight Bias", isCorrect: true },
      { text: "Optimism Bias", isCorrect: false },
      { text: "Groupthink", isCorrect: false },
      { text: "Sunk Cost Fallacy", isCorrect: false }
    ],
    explanation: "Hindsight Bias refers to the tendency to believe that we 'knew it all along' after an event has occurred. Jake is claiming he knew the outcome despite expressing different views beforehand.",
    type: "hindsight"
  },
  // Backfire Effect
  {
    id: 2,
    question: "Sarah reads an article that contradicts her beliefs about climate change, but instead of reconsidering, she doubles down on her stance. What bias is at play?",
    options: [
      { text: "Backfire Effect", isCorrect: true },
      { text: "Confirmation Bias", isCorrect: false },
      { text: "Belief Bias", isCorrect: false },
      { text: "Anchoring Bias", isCorrect: false }
    ],
    explanation: "The Backfire Effect occurs when contradicting evidence causes people to strengthen their original beliefs rather than change their minds. Sarah is reinforcing her position when faced with challenging information.",
    type: "backfire"
  },
  // Barnum Effect
  {
    id: 3,
    question: "Lisa reads her horoscope and is amazed at how accurately it describes her personality, despite it being vague. What bias is affecting her?",
    options: [
      { text: "Barnum Effect", isCorrect: true },
      { text: "Recall Bias", isCorrect: false },
      { text: "Spotlight Effect", isCorrect: false },
      { text: "Projection Bias", isCorrect: false }
    ],
    explanation: "The Barnum Effect is when individuals believe vague, general personality descriptions are specifically tailored to them. Lisa feels the horoscope is personally accurate when it's actually designed to apply to many people.",
    type: "barnum"
  },
  // Sunk Cost Fallacy
  {
    id: 4,
    question: "Despite a terrible movie, Anna refuses to leave the theater because she already paid for the ticket. What bias is at play?",
    options: [
      { text: "Sunk Cost Fallacy", isCorrect: true },
      { text: "Commitment Bias", isCorrect: false },
      { text: "Status Quo Bias", isCorrect: false },
      { text: "Anchoring Bias", isCorrect: false }
    ],
    explanation: "The Sunk Cost Fallacy is our tendency to continue an endeavor due to previously invested resources (time, money, effort) that cannot be recovered. Anna stays for the entire movie despite not enjoying it because she paid for the ticket.",
    type: "sunk-cost"
  },
  // Ingroup Bias
  {
    id: 5,
    question: "A hiring manager favors a job candidate from their alma mater, believing they must be more competent. What bias is at work?",
    options: [
      { text: "Ingroup Bias", isCorrect: true },
      { text: "Halo Effect", isCorrect: false },
      { text: "Affinity Bias", isCorrect: false },
      { text: "Prestige Bias", isCorrect: false }
    ],
    explanation: "Ingroup Bias is the tendency to favor members of one's own group over those in other groups. The hiring manager is showing preference for a candidate simply because they share the same educational background.",
    type: "ingroup"
  },
  // Belief Bias
  {
    id: 6,
    question: "Kevin assumes an argument is logical just because he agrees with the conclusion. What bias is influencing him?",
    options: [
      { text: "Belief Bias", isCorrect: true },
      { text: "Confirmation Bias", isCorrect: false },
      { text: "Availability Heuristic", isCorrect: false },
      { text: "Anchoring Bias", isCorrect: false }
    ],
    explanation: "Belief Bias is the tendency to evaluate the strength of arguments based on whether we agree with their conclusions, rather than how well they support the conclusion. Kevin is judging an argument's logic based on his agreement with it.",
    type: "belief"
  },
  // Groupthink Bias
  {
    id: 7,
    question: "A corporate team agrees on a risky strategy because no one wants to voice dissent. What bias is influencing their decision?",
    options: [
      { text: "Groupthink Bias", isCorrect: true },
      { text: "Bandwagon Effect", isCorrect: false },
      { text: "Consensus Bias", isCorrect: false },
      { text: "Conformity Bias", isCorrect: false }
    ],
    explanation: "Groupthink occurs when a group makes irrational decisions because members conform to consensus rather than expressing dissenting opinions. The team is adopting a risky strategy because no one is willing to challenge the group's direction.",
    type: "groupthink"
  },
  // Recall Bias
  {
    id: 8,
    question: "Emma only remembers the times her lucky charm worked and forgets the times it didn't. What cognitive bias is she experiencing?",
    options: [
      { text: "Recall Bias", isCorrect: true },
      { text: "Confirmation Bias", isCorrect: false },
      { text: "Availability Heuristic", isCorrect: false },
      { text: "Selection Bias", isCorrect: false }
    ],
    explanation: "Recall Bias refers to the tendency to selectively remember certain events while forgetting others. Emma only recalls instances that confirm her lucky charm works, creating a distorted perception of its effectiveness.",
    type: "recall"
  },
  // Framing Bias
  {
    id: 9,
    question: "A doctor says a surgery has a '90% survival rate' instead of a '10% death rate,' making it sound less risky. What bias is at work?",
    options: [
      { text: "Framing Bias", isCorrect: true },
      { text: "Anchoring Bias", isCorrect: false },
      { text: "Optimism Bias", isCorrect: false },
      { text: "Information Bias", isCorrect: false }
    ],
    explanation: "Framing Bias occurs when our decisions are influenced by how information is presented. The doctor is presenting identical statistical information in a way that emphasizes positive outcomes, which tends to make patients more likely to consent.",
    type: "framing"
  },
  // Bandwagon Effect
  {
    id: 10,
    question: "John starts investing in cryptocurrency just because everyone else is doing it. What bias is affecting his choice?",
    options: [
      { text: "Bandwagon Effect", isCorrect: true },
      { text: "Social Proof Bias", isCorrect: false },
      { text: "Conformity Bias", isCorrect: false },
      { text: "Herd Mentality", isCorrect: false }
    ],
    explanation: "The Bandwagon Effect is the tendency to follow what others are doing, particularly in group settings. John is investing not based on research or personal interest, but simply because he sees others doing it.",
    type: "bandwagon"
  },
  // Optimism Bias
  {
    id: 11,
    question: "A startup founder assumes their business will succeed, even though most startups fail. What bias is influencing them?",
    options: [
      { text: "Optimism Bias", isCorrect: true },
      { text: "Overconfidence Effect", isCorrect: false },
      { text: "Self-serving Bias", isCorrect: false },
      { text: "Planning Fallacy", isCorrect: false }
    ],
    explanation: "Optimism Bias leads people to believe they are less likely to experience negative events and more likely to experience positive ones than others. The founder believes their startup is an exception to the high failure rate statistics.",
    type: "optimism"
  },
  // Pessimism Bias
  {
    id: 12,
    question: "Despite strong economic growth, Linda believes the stock market will crash soon and refuses to invest. What bias is she demonstrating?",
    options: [
      { text: "Pessimism Bias", isCorrect: true },
      { text: "Risk Aversion", isCorrect: false },
      { text: "Loss Aversion", isCorrect: false },
      { text: "Negativity Bias", isCorrect: false }
    ],
    explanation: "Pessimism Bias is the tendency to overestimate the likelihood of negative events. Linda is exaggerating the probability of a market crash despite positive economic indicators.",
    type: "pessimism"
  },
  // Anchoring Bias
  {
    id: 13,
    question: "A car salesman starts negotiations with a high price, making a slightly lower offer seem like a great deal. What bias is at work?",
    options: [
      { text: "Anchoring Bias", isCorrect: true },
      { text: "Framing Effect", isCorrect: false },
      { text: "Contrast Effect", isCorrect: false },
      { text: "Decoy Effect", isCorrect: false }
    ],
    explanation: "Anchoring Bias is when people rely too heavily on the first piece of information encountered (the 'anchor') when making decisions. The initial high price serves as an anchor, making subsequent lower prices seem more reasonable by comparison.",
    type: "anchoring"
  },
  // Dunning-Kruger Effect
  {
    id: 14,
    question: "A novice investor believes they know more than experts after making one successful trade. What bias is influencing them?",
    options: [
      { text: "Dunning-Kruger Effect", isCorrect: true },
      { text: "Overconfidence Bias", isCorrect: false },
      { text: "Self-serving Bias", isCorrect: false },
      { text: "Superiority Bias", isCorrect: false }
    ],
    explanation: "The Dunning-Kruger Effect is a cognitive bias where people with low ability at a task overestimate their ability. The novice investor lacks the knowledge to recognize their own limitations after one lucky success.",
    type: "dunning-kruger"
  },
  // The IKEA Effect
  {
    id: 15,
    question: "Mark values his homemade table more than a store-bought one, even though the latter is better made. What bias is at play?",
    options: [
      { text: "IKEA Effect", isCorrect: true },
      { text: "Endowment Effect", isCorrect: false },
      { text: "Effort Justification", isCorrect: false },
      { text: "Ownership Bias", isCorrect: false }
    ],
    explanation: "The IKEA Effect is a cognitive bias where people place a disproportionately high value on products they partially created themselves. Mark values his homemade table more because he invested his own labor into making it.",
    type: "ikea"
  }
];
