
export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "You're at a restaurant and the first dish you see on the menu is $25. When deciding what to order later, you find yourself comparing other prices to this amount. What cognitive bias is influencing your decision?",
    options: [
      "Anchoring Bias",
      "Availability Heuristic",
      "Loss Aversion",
      "Confirmation Bias"
    ],
    correctAnswer: 0,
    explanation: "This scenario demonstrates Anchoring Bias - the tendency to rely too heavily on the first piece of information encountered (the 'anchor'). The initial price becomes a reference point that influences how you perceive other prices on the menu."
  },
  {
    id: 2,
    question: "After reading news stories about plane crashes, you feel anxious about an upcoming flight, even though you know statistically flying is very safe. What cognitive bias is affecting your risk assessment?",
    options: [
      "Fundamental Attribution Error",
      "Availability Heuristic",
      "Optimism Bias",
      "Dunning-Kruger Effect"
    ],
    correctAnswer: 1,
    explanation: "This illustrates the Availability Heuristic - judging probability based on how easily examples come to mind. Recent or vivid news stories about plane crashes make these events seem more likely than they actually are."
  },
  {
    id: 3,
    question: "You strongly believe in a political viewpoint and primarily follow news sources that align with your perspective. When you encounter contradicting information, you quickly dismiss it. What bias is at play?",
    options: [
      "Self-serving Bias",
      "Halo Effect",
      "Confirmation Bias",
      "Bandwagon Effect"
    ],
    correctAnswer: 2,
    explanation: "This scenario demonstrates Confirmation Bias - the tendency to search for, interpret, and remember information that confirms your existing beliefs while giving disproportionately less consideration to alternative possibilities."
  },
  {
    id: 4,
    question: "After taking a single introductory course in psychology, your friend claims they can now analyze and diagnose anyone's mental health issues with confidence. What cognitive bias might explain this behavior?",
    options: [
      "Optimism Bias",
      "Dunning-Kruger Effect",
      "Hindsight Bias",
      "Actor-Observer Bias"
    ],
    correctAnswer: 1,
    explanation: "This scenario illustrates the Dunning-Kruger Effect - a cognitive bias where people with limited knowledge or competence in a given intellectual or social domain overestimate their expertise. They lack the metacognitive ability to recognize their own incompetence."
  },
  {
    id: 5,
    question: "You meet someone who is well-dressed and articulate at a business conference. Without knowing much else about them, you assume they must also be intelligent, trustworthy, and successful. What bias is influencing your judgment?",
    options: [
      "Fundamental Attribution Error",
      "Self-serving Bias",
      "Bandwagon Effect",
      "Halo Effect"
    ],
    correctAnswer: 3,
    explanation: "This scenario demonstrates the Halo Effect - the tendency to let one positive trait (in this case, appearance and communication skills) influence your opinion of other unrelated traits (like intelligence, trustworthiness, and success)."
  },
  {
    id: 6,
    question: "You've spent months working on a project that's clearly failing, but you continue investing time and resources because you've already put so much into it. What fallacy explains this behavior?",
    options: [
      "Sunk Cost Fallacy",
      "Gambler's Fallacy",
      "Planning Fallacy",
      "Framing Effect"
    ],
    correctAnswer: 0,
    explanation: "This scenario demonstrates the Sunk Cost Fallacy - continuing a behavior or endeavor due to previously invested resources (time, money, effort) despite evidence suggesting that the cost of continuing outweighs the benefits."
  },
  {
    id: 7,
    question: "You notice that a particular cryptocurrency is gaining popularity among your social circle. Despite knowing little about it, you invest because 'everyone else is doing it.' What cognitive bias is driving your decision?",
    options: [
      "Bandwagon Effect",
      "Optimism Bias",
      "IKEA Effect",
      "Spotlight Effect"
    ],
    correctAnswer: 0,
    explanation: "This scenario illustrates the Bandwagon Effect - the tendency to adopt behaviors or beliefs because others are doing so, regardless of your own underlying evidence or beliefs. It's driven by the desire to conform and the assumption that if many people are doing something, it must be correct."
  },
  {
    id: 8,
    question: "Your coworker is late to a meeting, and you immediately think it's because they're lazy and disorganized. When you're late to a meeting, you attribute it to heavy traffic. What cognitive bias explains this discrepancy?",
    options: [
      "Self-serving Bias",
      "Hindsight Bias",
      "Fundamental Attribution Error",
      "Availability Heuristic"
    ],
    correctAnswer: 2,
    explanation: "This scenario demonstrates the Fundamental Attribution Error - the tendency to attribute others' behaviors to their character or personality while attributing your own behavior to external circumstances. We tend to underestimate situational factors when judging others."
  },
  {
    id: 9,
    question: "You're offered a 50/50 chance to either gain $100 or lose $100. The prospect of losing makes you decline the offer, even though mathematically it's a neutral bet. What cognitive bias is at work?",
    options: [
      "Framing Effect",
      "Loss Aversion",
      "Status Quo Bias",
      "Endowment Effect"
    ],
    correctAnswer: 1,
    explanation: "This scenario illustrates Loss Aversion - the tendency to prefer avoiding losses over acquiring equivalent gains. Studies suggest that losses are psychologically about twice as powerful as gains - losing $100 hurts more than gaining $100 feels good."
  },
  {
    id: 10,
    question: "You recently learned about a rare medical condition. Suddenly, you notice articles, references, and discussions about it everywhere. What cognitive phenomenon explains this experience?",
    options: [
      "Attentional Bias",
      "Frequency Illusion (Baader-Meinhof Phenomenon)",
      "Recency Bias",
      "Observer Effect"
    ],
    correctAnswer: 1,
    explanation: "This scenario demonstrates the Frequency Illusion, also known as the Baader-Meinhof Phenomenon - when something that has recently come to your attention suddenly seems to appear with improbable frequency. It's a combination of selective attention and confirmation bias."
  }
];
