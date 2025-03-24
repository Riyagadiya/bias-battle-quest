
import { Question } from "../types/quiz";

// Quiz questions data with scenario-based questions
export const questionData: Question[] = [
  {
    id: 1,
    question: "Sarah receives two job offers. The first is described as having a 70% success rate, while the second is described as having a 30% failure rate. She feels more drawn to the first offer. What cognitive bias is Sarah experiencing?",
    options: [
      { text: "Framing Effect", isCorrect: true },
      { text: "Anchoring Bias", isCorrect: false },
      { text: "Availability Heuristic", isCorrect: false },
      { text: "Optimism Bias", isCorrect: false }
    ],
    explanation: "The Framing Effect occurs when people react differently to information depending on how it's presented. Both job offers have the same success rate (70%), but Sarah preferred the one framed positively.",
    type: "framing"
  },
  {
    id: 2,
    question: "After watching a documentary about plane crashes, Alex decides to drive 1000 miles instead of flying, despite statistics showing driving is more dangerous. What cognitive bias is influencing Alex's decision?",
    options: [
      { text: "Bandwagon Effect", isCorrect: false },
      { text: "Availability Heuristic", isCorrect: true },
      { text: "Optimism Bias", isCorrect: false },
      { text: "Self-serving Bias", isCorrect: false }
    ],
    explanation: "The Availability Heuristic is a mental shortcut where people make judgments based on how easily examples come to mind. Recent exposure to plane crash information made flying seem more dangerous to Alex than it actually is.",
    type: "availability"
  },
  {
    id: 3,
    question: "During a negotiation, the seller first quotes $10,000 for a used car. Though the buyer knows the market value is around $7,000, they end up paying $8,500 and feel satisfied with the deal. What cognitive bias is at play?",
    options: [
      { text: "Framing Effect", isCorrect: false },
      { text: "Hindsight Bias", isCorrect: false },
      { text: "Anchoring Bias", isCorrect: true },
      { text: "Recency Bias", isCorrect: false }
    ],
    explanation: "Anchoring bias is when people rely too heavily on the first piece of information (the anchor) when making decisions. The initial $10,000 price anchored the buyer's expectations, making $8,500 seem like a good deal despite being above market value.",
    type: "anchoring"
  },
  {
    id: 4,
    question: "Mark's team has been working on a project for months. Despite growing evidence that their approach won't succeed, they continue in the same direction because they've already invested so much time. What cognitive bias is this?",
    options: [
      { text: "Sunk Cost Fallacy", isCorrect: true },
      { text: "Hindsight Bias", isCorrect: false },
      { text: "Status Quo Bias", isCorrect: false },
      { text: "Selection Bias", isCorrect: false }
    ],
    explanation: "The Sunk Cost Fallacy is the tendency to continue an endeavor due to previously invested resources (time, money, effort) that cannot be recovered, rather than based on rational decision-making about future outcomes.",
    type: "sunk-cost"
  },
  {
    id: 5,
    question: "In a meeting, Emma has a different opinion but remains silent when everyone else agrees on a solution she thinks is flawed. What cognitive bias is influencing the group's decision-making?",
    options: [
      { text: "Bandwagon Effect", isCorrect: false },
      { text: "Groupthink", isCorrect: true },
      { text: "Fundamental Attribution Error", isCorrect: false },
      { text: "Spotlight Effect", isCorrect: false }
    ],
    explanation: "Groupthink occurs when a group makes irrational decisions because members conform to consensus rather than expressing dissenting opinions. The pressure to maintain harmony leads to poor decision-making as critical thinking is suppressed.",
    type: "groupthink"
  },
  {
    id: 6,
    question: "After learning about a stock's rapid growth, James quickly invests, believing he's spotted a pattern that will continue. He ignores warnings about market volatility. What cognitive bias is James exhibiting?",
    options: [
      { text: "Clustering Illusion", isCorrect: true },
      { text: "Gambler's Fallacy", isCorrect: false },
      { text: "Confirmation Bias", isCorrect: false },
      { text: "Hindsight Bias", isCorrect: false }
    ],
    explanation: "The Clustering Illusion is the tendency to see patterns in random events when none actually exist. James mistakenly believes he's identified a meaningful pattern in stock performance, which is largely random in the short term.",
    type: "clustering"
  }
];
