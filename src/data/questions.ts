
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
    question: "What is the Anchoring Bias?",
    options: [
      "The tendency to rely too heavily on the first piece of information encountered",
      "The tendency to see patterns where none exist",
      "The tendency to follow what others are doing",
      "The tendency to favor information that confirms existing beliefs"
    ],
    correctAnswer: 0,
    explanation: "Anchoring Bias is our tendency to rely too heavily on the first piece of information we encounter (the 'anchor') when making decisions. This initial piece of information has a disproportionate effect on subsequent judgments."
  },
  {
    id: 2,
    question: "Which of the following best describes the Availability Heuristic?",
    options: [
      "Making decisions based on past similar experiences",
      "Judging the likelihood of events based on how easily examples come to mind",
      "Believing you have control over random events",
      "Preferring the status quo over any changes"
    ],
    correctAnswer: 1,
    explanation: "The Availability Heuristic is our tendency to judge the likelihood or frequency of events based on how easily examples come to mind. Vivid or recent examples often seem more common than they actually are."
  },
  {
    id: 3,
    question: "What is Confirmation Bias?",
    options: [
      "The tendency to overestimate one's knowledge or abilities",
      "The preference for immediate smaller rewards over delayed larger rewards",
      "The tendency to search for information that confirms our existing beliefs",
      "The tendency to remember interrupted tasks better than completed ones"
    ],
    correctAnswer: 2,
    explanation: "Confirmation Bias is our tendency to search for, interpret, favor, and recall information that confirms our pre-existing beliefs or hypotheses while giving less consideration to alternative possibilities."
  },
  {
    id: 4,
    question: "The Dunning-Kruger Effect refers to:",
    options: [
      "The tendency to place too much confidence in technology",
      "A cognitive bias where people with low ability overestimate their skills",
      "The preference for familiar things over novel ones",
      "The tendency to believe events are more predictable than they actually are"
    ],
    correctAnswer: 1,
    explanation: "The Dunning-Kruger Effect is a cognitive bias where people with low ability at a task overestimate their ability. It involves a lack of self-awareness preventing them from accurately assessing their own skills."
  },
  {
    id: 5,
    question: "What is the Halo Effect?",
    options: [
      "The tendency to make decisions based on gut feelings",
      "The tendency to remember the beginning and end of something, but not the middle",
      "The tendency to overestimate the influence of personality on behavior",
      "The tendency to let positive impressions of one trait influence opinion of other traits"
    ],
    correctAnswer: 3,
    explanation: "The Halo Effect is a cognitive bias where our overall impression of a person influences how we feel and think about their character. This especially applies to first impressions where one positive quality dominates how that person is viewed."
  },
  {
    id: 6,
    question: "The Sunk Cost Fallacy describes:",
    options: [
      "The tendency to continue an endeavor due to previously invested resources",
      "The tendency to underestimate how long tasks will take",
      "The tendency to fear missing out on something",
      "The tendency to compare ourselves to others"
    ],
    correctAnswer: 0,
    explanation: "The Sunk Cost Fallacy is our tendency to continue an endeavor due to previously invested resources (time, money, effort) despite new evidence suggesting that the cost of continuing outweighs the benefits."
  },
  {
    id: 7,
    question: "What is the Bandwagon Effect?",
    options: [
      "The tendency to do something because everyone else is doing it",
      "The tendency to favor the first option presented",
      "The tendency to overestimate the chances of positive outcomes",
      "The tendency to remember interrupted tasks better than completed ones"
    ],
    correctAnswer: 0,
    explanation: "The Bandwagon Effect is the tendency to adopt beliefs, ideas, or behaviors because they are popular or others are adopting them, regardless of their underlying evidence."
  },
  {
    id: 8,
    question: "The Fundamental Attribution Error refers to:",
    options: [
      "Overestimating the impact of situational factors on others' behavior",
      "The tendency to remember only information that confirms our beliefs",
      "Overestimating the impact of personal characteristics on others' behavior",
      "The preference for simple rather than complex explanations"
    ],
    correctAnswer: 2,
    explanation: "The Fundamental Attribution Error is our tendency to overemphasize personal characteristics and underemphasize situational factors when judging others' behavior. Essentially, we attribute others' actions to their character rather than their circumstances."
  },
  {
    id: 9,
    question: "What is Loss Aversion?",
    options: [
      "The tendency to avoid doing anything when faced with uncertainty",
      "The tendency to prefer avoiding losses over acquiring equivalent gains",
      "The preference for spending money now rather than saving it",
      "The tendency to become less sensitive to stimuli over time"
    ],
    correctAnswer: 1,
    explanation: "Loss Aversion is our tendency to prefer avoiding losses over acquiring equivalent gains. Studies suggest that losses are psychologically about twice as powerful as gains - losing $100 hurts more than gaining $100 feels good."
  },
  {
    id: 10,
    question: "Which bias describes our tendency to notice things after they've been pointed out to us?",
    options: [
      "Attentional Bias",
      "Frequency Illusion (Baader-Meinhof Phenomenon)",
      "Recency Bias",
      "Observer Effect"
    ],
    correctAnswer: 1,
    explanation: "The Frequency Illusion, also known as the Baader-Meinhof Phenomenon, is when something that has recently come to your attention suddenly seems to appear with improbable frequency. It's a combination of selective attention and confirmation bias."
  },
  {
    id: 11,
    question: "The Optimism Bias leads people to:",
    options: [
      "Overestimate their abilities compared to others",
      "Remember positive events more easily than negative ones",
      "Believe they are less likely to experience negative events than others",
      "Make decisions based on emotions rather than facts"
    ],
    correctAnswer: 2,
    explanation: "The Optimism Bias is our tendency to believe we are less likely to experience negative events and more likely to experience positive events than others. This can lead to underestimation of risks and poor planning."
  },
  {
    id: 12,
    question: "What is the IKEA Effect?",
    options: [
      "The tendency to value things we helped create more highly",
      "The tendency to prefer products from certain countries",
      "The tendency to purchase unnecessary items when shopping",
      "The tendency to follow instruction manuals incorrectly"
    ],
    correctAnswer: 0,
    explanation: "The IKEA Effect is a cognitive bias where people place a disproportionately high value on products they partially created themselves, regardless of the quality of the end result."
  },
  {
    id: 13,
    question: "Which cognitive bias describes our tendency to see ourselves as less biased than others?",
    options: [
      "Superiority Bias",
      "Blind Spot Bias",
      "Illusion of Transparency",
      "Self-Serving Bias"
    ],
    correctAnswer: 1,
    explanation: "Blind Spot Bias is the tendency to recognize the impact of biases on the judgment of others, while failing to see the impact of biases on one's own judgment. Essentially, it's the bias of thinking we are less biased than others."
  },
  {
    id: 14,
    question: "What is the Illusory Truth Effect?",
    options: [
      "The tendency to believe statements that seem logical must be true",
      "The tendency to believe something is true because an authority figure says it is",
      "The tendency to believe repeated statements are more likely to be true",
      "The tendency to confuse familiarity with truth"
    ],
    correctAnswer: 2,
    explanation: "The Illusory Truth Effect is the tendency to believe information is correct after repeated exposure. This is why repetition is a common element of propaganda - statements seem more true when we've heard them multiple times."
  },
  {
    id: 15,
    question: "The Spotlight Effect refers to:",
    options: [
      "The tendency to overestimate how much others notice our appearance or behavior",
      "The tendency to remember the most impressive person in a group",
      "The tendency to focus only on the positive aspects of a situation",
      "The tendency to pay more attention to people with authority"
    ],
    correctAnswer: 0,
    explanation: "The Spotlight Effect is our tendency to overestimate how much others notice our appearance or behavior. We feel like we're in the spotlight, but in reality, others are typically far less aware of our actions than we believe."
  }
];
