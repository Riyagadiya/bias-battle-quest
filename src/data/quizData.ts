
import { Question } from "../types/quiz";

// Quiz questions data
export const questionData: Question[] = [
  {
    id: 1,
    question: "Which cognitive bias leads people to search for, interpret, and recall information that confirms their existing beliefs?",
    options: [
      { text: "Confirmation Bias", isCorrect: true },
      { text: "Anchoring Bias", isCorrect: false },
      { text: "Availability Heuristic", isCorrect: false },
      { text: "Dunning-Kruger Effect", isCorrect: false }
    ],
    explanation: "Confirmation bias is the tendency to search for, interpret, and recall information in a way that confirms one's preexisting beliefs or hypotheses.",
    type: "bias"
  },
  {
    id: 2,
    question: "What cognitive bias causes people to overestimate their abilities in areas where they're incompetent?",
    options: [
      { text: "Bandwagon Effect", isCorrect: false },
      { text: "Dunning-Kruger Effect", isCorrect: true },
      { text: "Optimism Bias", isCorrect: false },
      { text: "Self-serving Bias", isCorrect: false }
    ],
    explanation: "The Dunning-Kruger effect is a cognitive bias whereby people with limited knowledge or competence in a given intellectual or social domain greatly overestimate their competence.",
    type: "bias"
  },
  {
    id: 3,
    question: "Which bias describes our tendency to rely too heavily on the first piece of information we receive?",
    options: [
      { text: "Framing Effect", isCorrect: false },
      { text: "Hindsight Bias", isCorrect: false },
      { text: "Anchoring Bias", isCorrect: true },
      { text: "Recency Bias", isCorrect: false }
    ],
    explanation: "Anchoring bias is the tendency to rely too heavily on the first piece of information encountered (the 'anchor') when making decisions.",
    type: "bias"
  },
  {
    id: 4,
    question: "Which bias describes our tendency to overestimate the likelihood of events with greater 'availability' in memory?",
    options: [
      { text: "Availability Heuristic", isCorrect: true },
      { text: "Hindsight Bias", isCorrect: false },
      { text: "Clustering Illusion", isCorrect: false },
      { text: "Selection Bias", isCorrect: false }
    ],
    explanation: "The availability heuristic is a mental shortcut that relies on immediate examples that come to mind when evaluating a specific topic, concept, method or decision.",
    type: "bias"
  },
  {
    id: 5,
    question: "Which cognitive bias leads us to see patterns in random events?",
    options: [
      { text: "Clustering Illusion", isCorrect: true },
      { text: "Gambler's Fallacy", isCorrect: false },
      { text: "Baader-Meinhof Phenomenon", isCorrect: false },
      { text: "Availability Heuristic", isCorrect: false }
    ],
    explanation: "The clustering illusion is the tendency to see patterns in random events. It's closely related to apophenia, which is the tendency to perceive connections between unrelated phenomena.",
    type: "bias"
  }
];
