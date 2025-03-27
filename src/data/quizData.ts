
import { Question } from "../types/quiz";

// Quiz questions data with scenario-based questions - limited to 10 questions
export const questionData: Question[] = [
  {
    id: 1,
    question: "Sarah receives two job offers. The first is described as having a 70% success rate, while the second is described as having a 30% failure rate. She feels more drawn to the first offer. What cognitive bias is Sarah experiencing?",
    options: [
      { text: "Framing Bias", isCorrect: true },
      { text: "Anchoring Bias", isCorrect: false },
      { text: "Availability Heuristic", isCorrect: false },
      { text: "Optimism Bias", isCorrect: false }
    ],
    explanation: "The Framing Bias occurs when our decisions are influenced by how information is presented. Both job offers have the same success rate (70%), but Sarah preferred the one framed positively.",
    type: "framing"
  },
  {
    id: 2,
    question: "After watching a documentary about plane crashes, Alex decides to drive 1000 miles instead of flying, despite statistics showing driving is more dangerous. What cognitive bias is influencing Alex's decision?",
    options: [
      { text: "Availability Heuristic", isCorrect: true },
      { text: "Bandwagon Effect", isCorrect: false },
      { text: "Pessimism Bias", isCorrect: false },
      { text: "Recall Bias", isCorrect: false }
    ],
    explanation: "The Availability Heuristic is when people make judgments based on how easily examples come to mind. Recent exposure to plane crash information made flying seem more dangerous to Alex than it actually is.",
    type: "availability"
  },
  {
    id: 3,
    question: "During a negotiation, the seller first quotes $10,000 for a used car. Though the buyer knows the market value is around $7,000, they end up paying $8,500 and feel satisfied with the deal. What cognitive bias is at play?",
    options: [
      { text: "Anchoring Bias", isCorrect: true },
      { text: "Framing Effect", isCorrect: false },
      { text: "Hindsight Bias", isCorrect: false },
      { text: "Recency Bias", isCorrect: false }
    ],
    explanation: "Anchoring Bias is when people rely too heavily on the first piece of information (the 'anchor') when making decisions. The initial $10,000 price anchored the buyer's expectations, making $8,500 seem like a good deal despite being above market value.",
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
      { text: "Groupthink", isCorrect: true },
      { text: "Bandwagon Effect", isCorrect: false },
      { text: "Fundamental Attribution Error", isCorrect: false },
      { text: "Spotlight Effect", isCorrect: false }
    ],
    explanation: "Groupthink occurs when a group makes irrational decisions because members conform to consensus rather than expressing dissenting opinions. The pressure to maintain harmony leads to poor decision-making as critical thinking is suppressed.",
    type: "groupthink"
  },
  {
    id: 6,
    question: "Tom reads his personality test results and is amazed at how accurately it describes him, not realizing the description is intentionally vague and could apply to almost anyone. What bias is Tom experiencing?",
    options: [
      { text: "Barnum Effect", isCorrect: true },
      { text: "Confirmation Bias", isCorrect: false },
      { text: "Self-serving Bias", isCorrect: false },
      { text: "Projection Bias", isCorrect: false }
    ],
    explanation: "The Barnum Effect is when individuals believe vague, general personality descriptions are specifically tailored to them. The descriptions are intentionally broad enough to apply to many people, but individuals feel they're uniquely accurate.",
    type: "barnum"
  },
  {
    id: 7,
    question: "A small startup's first product becomes unexpectedly successful. The founder now believes their next venture will definitely succeed without conducting proper market research. Which bias is affecting their judgment?",
    options: [
      { text: "Hindsight Bias", isCorrect: true },
      { text: "Optimism Bias", isCorrect: false },
      { text: "Dunning-Kruger Effect", isCorrect: false },
      { text: "IKEA Effect", isCorrect: false }
    ],
    explanation: "Hindsight Bias leads people to see past events as more predictable than they were. The founder now views their first success as inevitable rather than partly due to luck, leading to overconfidence in future ventures.",
    type: "hindsight"
  },
  {
    id: 8,
    question: "Maria has an interview for her dream job. She spends hours worrying that she'll say something embarrassing, believing everyone will notice and judge her harshly. What cognitive bias is Maria experiencing?",
    options: [
      { text: "Spotlight Effect", isCorrect: true },
      { text: "Pessimism Bias", isCorrect: false },
      { text: "Negativity Bias", isCorrect: false },
      { text: "Impostor Syndrome", isCorrect: false }
    ],
    explanation: "The Spotlight Effect is the tendency to overestimate how much others notice about us. Maria believes she's under a spotlight when in reality, others are typically less focused on our flaws and mistakes than we think.",
    type: "spotlight"
  },
  {
    id: 9,
    question: "Despite overwhelming evidence that a new technology would improve efficiency, a business owner refuses to adopt it and becomes more committed to traditional methods. What cognitive bias is influencing this decision?",
    options: [
      { text: "Backfire Effect", isCorrect: true },
      { text: "Status Quo Bias", isCorrect: false },
      { text: "Loss Aversion", isCorrect: false },
      { text: "Sunk Cost Fallacy", isCorrect: false }
    ],
    explanation: "The Backfire Effect occurs when presented with evidence that contradicts our beliefs, we become more convinced of our original position. The business owner perceives the evidence as a threat to their worldview, strengthening their resistance to change.",
    type: "backfire"
  },
  {
    id: 10,
    question: "David reads a horoscope that says he'll face challenges this week. When he has a difficult day, he thinks the horoscope was accurate, ignoring the vague prediction and all the good moments. What cognitive bias is this?",
    options: [
      { text: "Confirmation Bias", isCorrect: true },
      { text: "Barnum Effect", isCorrect: false },
      { text: "Backfire Effect", isCorrect: false },
      { text: "Recency Bias", isCorrect: false }
    ],
    explanation: "Confirmation bias is the tendency to search for, interpret, and recall information in a way that confirms one's preexisting beliefs. David notices and remembers events that confirm the horoscope while ignoring evidence that contradicts it.",
    type: "confirmation"
  }
];
