
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
  },
  {
    id: 7,
    question: "Lisa attributes her team's project success to her leadership, but blames external factors when projects fail. What cognitive bias is Lisa demonstrating?",
    options: [
      { text: "Self-serving Bias", isCorrect: true },
      { text: "Confirmation Bias", isCorrect: false },
      { text: "Dunning-Kruger Effect", isCorrect: false },
      { text: "Halo Effect", isCorrect: false }
    ],
    explanation: "Self-serving bias is the tendency to attribute successes to personal factors (skills, effort) while attributing failures to external factors (bad luck, unfair conditions). This protects self-esteem but can hinder learning from mistakes.",
    type: "self-serving"
  },
  {
    id: 8,
    question: "David reads a horoscope that says he'll face challenges this week. When he has a difficult day, he thinks the horoscope was accurate, ignoring the vague prediction and all the good moments. What cognitive bias is this?",
    options: [
      { text: "Barnum Effect", isCorrect: false },
      { text: "Confirmation Bias", isCorrect: true },
      { text: "Backfire Effect", isCorrect: false },
      { text: "Recency Bias", isCorrect: false }
    ],
    explanation: "Confirmation bias is the tendency to search for, interpret, and recall information in a way that confirms one's preexisting beliefs. David notices and remembers events that confirm the horoscope while ignoring evidence that contradicts it.",
    type: "confirmation"
  },
  {
    id: 9,
    question: "After being promoted, John believes he always deserved the position and that his success was inevitable. Looking back, all signs pointed to his promotion. What cognitive bias is John experiencing?",
    options: [
      { text: "Optimism Bias", isCorrect: false },
      { text: "Hindsight Bias", isCorrect: true },
      { text: "Outcome Bias", isCorrect: false },
      { text: "Dunning-Kruger Effect", isCorrect: false }
    ],
    explanation: "Hindsight bias is the tendency to believe, after an event has occurred, that one would have predicted or expected it beforehand. John now sees his promotion as predictable when it may not have been so obvious at the time.",
    type: "hindsight"
  },
  {
    id: 10,
    question: "Maria has an interview for her dream job. She spends hours worrying that she'll say something embarrassing, believing everyone will notice and judge her harshly. What cognitive bias is Maria experiencing?",
    options: [
      { text: "Spotlight Effect", isCorrect: true },
      { text: "Pessimism Bias", isCorrect: false },
      { text: "Negativity Bias", isCorrect: false },
      { text: "Impostor Syndrome", isCorrect: false }
    ],
    explanation: "The Spotlight Effect is the tendency to overestimate how much others notice about us. Maria believes she's under a spotlight when in reality, others are typically less focused on our flaws and mistakes than we think.",
    type: "spotlight"
  }
];
