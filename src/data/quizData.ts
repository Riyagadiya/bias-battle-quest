import { Question } from "../types/quiz";

// List of cognitive biases
export const cognitiveBiasTypes = [
  "Anchoring Bias",
  "Availability Heuristic",
  "Confirmation Bias",
  "Halo Effect",
  "Bandwagon Effect",
  "Loss Aversion",
  "Framing Effect",
  "Sunk Cost Fallacy",
  "Optimism Bias",
  "Pessimism Bias",
  "Status Quo Bias",
  "Authority Bias",
  "In-Group Bias",
  "Out-Group Homogeneity Bias",
  "Blind Spot Bias",
  "Negativity Bias",
  "Self-Serving Bias",
  "Curse of Knowledge",
  "Hindsight Bias",
  "Actor-Observer Bias",
  "Fundamental Attribution Error",
  "Placebo Effect",
  "Dunning-Kruger Effect",
  "Imposter Syndrome",
  "Reactance",
  "Scarcity Bias",
  "Gratification Bias",
];

// Function to shuffle array (Fisher-Yates shuffle)
function shuffleArray<T>(array: T[]): T[] {
  let currentIndex = array.length, randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

// Function to get random questions
export function getRandomQuestions(count: number): Question[] {
  const shuffledQuestions = shuffleArray([...questionData]);
  return shuffledQuestions.slice(0, count);
}

export const questionData: Question[] = [
  {
    id: 1,
    question: "What is the 'Anchoring Bias'?",
    options: shuffleArray([
      { text: "Relying too heavily on the first piece of information you receive.", isCorrect: true },
      { text: "The tendency to seek out information that confirms your existing beliefs.", isCorrect: false },
      { text: "The fear of missing out on something others are experiencing.", isCorrect: false },
      { text: "The belief that you are more likely to experience positive outcomes than others.", isCorrect: false }
    ]),
    explanation: "Anchoring Bias is a cognitive bias that describes the common human tendency to rely too heavily on the first piece of information offered (the 'anchor') when making decisions.",
    type: "cognitive"
  },
  {
    id: 2,
    question: "Which bias leads people to overestimate the importance of information that is available to them?",
    options: shuffleArray([
      { text: "Availability Heuristic", isCorrect: true },
      { text: "Confirmation Bias", isCorrect: false },
      { text: "Halo Effect", isCorrect: false },
      { text: "Bandwagon Effect", isCorrect: false }
    ]),
    explanation: "The Availability Heuristic is a mental shortcut that relies on immediate examples that come to a person's mind when evaluating a specific topic, concept, method or decision.",
    type: "cognitive"
  },
  {
    id: 3,
    question: "What is 'Confirmation Bias'?",
    options: shuffleArray([
      { text: "The tendency to favor information that confirms existing beliefs.", isCorrect: true },
      { text: "The tendency to avoid information that contradicts existing beliefs.", isCorrect: false },
      { text: "The tendency to interpret new evidence as confirmation of one's existing beliefs or theories.", isCorrect: true },
      { text: "All of the above", isCorrect: true }
    ]),
    explanation: "Confirmation Bias is the tendency to search for, interpret, favor, and recall information in a way that confirms one's preexisting beliefs or hypotheses.",
    type: "cognitive"
  },
  {
    id: 4,
    question: "What is the 'Halo Effect'?",
    options: shuffleArray([
      { text: "The tendency for a positive impression of a person, company, brand, or product in one area to positively influence one's opinion or feelings in other areas.", isCorrect: true },
      { text: "The tendency to make generalizations about people based on their appearance.", isCorrect: false },
      { text: "The tendency to believe that people get what they deserve.", isCorrect: false },
      { text: "The tendency to remember positive events more than negative ones.", isCorrect: false }
    ]),
    explanation: "The Halo Effect is a cognitive bias in which our overall impression of a person influences how we feel and think about their character.",
    type: "cognitive"
  },
  {
    id: 5,
    question: "Which bias describes the phenomenon where people do things primarily because other people are doing them?",
    options: shuffleArray([
      { text: "Bandwagon Effect", isCorrect: true },
      { text: "Loss Aversion", isCorrect: false },
      { text: "Framing Effect", isCorrect: false },
      { text: "Sunk Cost Fallacy", isCorrect: false }
    ]),
    explanation: "The Bandwagon Effect is a psychological phenomenon in which people do things primarily because other people are doing them, regardless of their own beliefs, which they may ignore or override.",
    type: "social"
  },
  {
    id: 6,
    question: "What is 'Loss Aversion'?",
    options: shuffleArray([
      { text: "The tendency to prefer avoiding losses to acquiring equivalent gains.", isCorrect: true },
      { text: "The tendency to take more risks when facing potential losses.", isCorrect: true },
      { text: "The tendency to be more upset by a loss than pleased by an equivalent gain.", isCorrect: true },
      { text: "All of the above", isCorrect: true }
    ]),
    explanation: "Loss Aversion is a cognitive bias that describes the tendency to prefer avoiding losses to acquiring equivalent gains: 'It is better to not lose $5 than to find $5.'",
    type: "cognitive"
  },
  {
    id: 7,
    question: "Which bias occurs when people react to a particular choice in different ways depending on how it is presented?",
    options: shuffleArray([
      { text: "Framing Effect", isCorrect: true },
      { text: "Sunk Cost Fallacy", isCorrect: false },
      { text: "Optimism Bias", isCorrect: false },
      { text: "Pessimism Bias", isCorrect: false }
    ]),
    explanation: "The Framing Effect is a cognitive bias where people decide on options based on whether the options are presented with positive or negative connotations; e.g. as a loss or as a gain.",
    type: "cognitive"
  },
  {
    id: 8,
    question: "What is the 'Sunk Cost Fallacy'?",
    options: shuffleArray([
      { text: "The justification of increased investment in a decision, based on the cumulative prior investment, despite new evidence suggesting that the cost of continuing the decision outweighs the expected benefit.", isCorrect: true },
      { text: "The tendency to continue an endeavor once an investment in money, effort, or time has been made.", isCorrect: true },
      { text: "The reluctance to abandon a strategy or course of action, even when it is failing.", isCorrect: true },
      { text: "All of the above", isCorrect: true }
    ]),
    explanation: "The Sunk Cost Fallacy is a cognitive bias where people justify increased investment in a decision, based on the cumulative prior investment, despite new evidence suggesting that the cost of continuing the decision outweighs the expected benefit.",
    type: "cognitive"
  },
  {
    id: 9,
    question: "Which bias causes someone to believe that they are less at risk of experiencing a negative event compared to others?",
    options: shuffleArray([
      { text: "Optimism Bias", isCorrect: true },
      { text: "Pessimism Bias", isCorrect: false },
      { text: "Status Quo Bias", isCorrect: false },
      { text: "Authority Bias", isCorrect: false }
    ]),
    explanation: "Optimism Bias is a cognitive bias that causes someone to believe that they themselves are less likely to experience a negative event. It is also known as unrealistic optimism or comparative optimism.",
    type: "cognitive"
  },
  {
    id: 10,
    question: "What is 'Pessimism Bias'?",
    options: shuffleArray([
      { text: "The tendency to overestimate the likelihood of negative outcomes.", isCorrect: true },
      { text: "The tendency to focus more on the negative aspects of a situation.", isCorrect: true },
      { text: "The tendency to expect the worst possible outcome.", isCorrect: true },
      { text: "All of the above", isCorrect: true }
    ]),
    explanation: "Pessimism Bias is a cognitive bias that involves the tendency to overestimate the likelihood of negative outcomes and focus more on the negative aspects of a situation.",
    type: "cognitive"
  },
  {
    id: 11,
    question: "Which bias leads people to prefer things to stay the same by undervaluing the benefits of change?",
    options: shuffleArray([
      { text: "Status Quo Bias", isCorrect: true },
      { text: "Authority Bias", isCorrect: false },
      { text: "In-Group Bias", isCorrect: false },
      { text: "Out-Group Homogeneity Bias", isCorrect: false }
    ]),
    explanation: "Status Quo Bias is a cognitive bias that leads people to prefer things to stay the same by undervaluing the benefits of change. This can result in resistance to new ideas, technologies, or policies.",
    type: "cognitive"
  },
  {
    id: 12,
    question: "What is 'Authority Bias'?",
    options: shuffleArray([
      { text: "The tendency to attribute greater accuracy to the opinion of an authority figure and be more influenced by that opinion.", isCorrect: true },
      { text: "The tendency to believe that authority figures are always right.", isCorrect: false },
      { text: "The tendency to blindly follow the instructions of authority figures.", isCorrect: false },
      { text: "The tendency to overestimate the knowledge and expertise of authority figures.", isCorrect: false }
    ]),
    explanation: "Authority Bias is a cognitive bias that describes the tendency to attribute greater accuracy to the opinion of an authority figure (unrelated to its content) and be more influenced by that opinion.",
    type: "social"
  },
  {
    id: 13,
    question: "Which bias involves favoring members of one's own group over out-group members?",
    options: shuffleArray([
      { text: "In-Group Bias", isCorrect: true },
      { text: "Out-Group Homogeneity Bias", isCorrect: false },
      { text: "Blind Spot Bias", isCorrect: false },
      { text: "Negativity Bias", isCorrect: false }
    ]),
    explanation: "In-Group Bias is a cognitive bias that involves favoring members of one's own group (the in-group) over out-group members. This can lead to discrimination and prejudice.",
    type: "social"
  },
  {
    id: 14,
    question: "What is 'Out-Group Homogeneity Bias'?",
    options: shuffleArray([
      { text: "The perception of out-group members as more similar to one another than are in-group members.", isCorrect: true },
      { text: "The tendency to view out-group members as less diverse than in-group members.", isCorrect: true },
      { text: "The tendency to stereotype out-group members.", isCorrect: true },
      { text: "All of the above", isCorrect: true }
    ]),
    explanation: "Out-Group Homogeneity Bias is a cognitive bias that involves the perception of out-group members as more similar to one another than are in-group members, e.g. 'they are alike; we are diverse'.",
    type: "social"
  },
  {
    id: 15,
    question: "Which bias describes the tendency to see oneself as less biased than other people?",
    options: shuffleArray([
      { text: "Blind Spot Bias", isCorrect: true },
      { text: "Negativity Bias", isCorrect: false },
      { text: "Self-Serving Bias", isCorrect: false },
      { text: "Curse of Knowledge", isCorrect: false }
    ]),
    explanation: "Blind Spot Bias is a cognitive bias that describes the tendency to see oneself as less biased than other people, or to be able to identify more cognitive biases in others than in oneself.",
    type: "cognitive"
  },
  {
    id: 16,
    question: "What is 'Negativity Bias'?",
    options: shuffleArray([
      { text: "The tendency to pay more attention to negative information than positive information.", isCorrect: true },
      { text: "The tendency to recall negative events more vividly than positive events.", isCorrect: true },
      { text: "The tendency to be more influenced by negative experiences than positive experiences.", isCorrect: true },
      { text: "All of the above", isCorrect: true }
    ]),
    explanation: "Negativity Bias is a cognitive bias that involves the tendency to pay more attention to negative information than positive information, and to recall negative events more vividly than positive events.",
    type: "cognitive"
  },
  {
    id: 17,
    question: "Which bias involves taking credit for successes while blaming outside factors for failures?",
    options: shuffleArray([
      { text: "Self-Serving Bias", isCorrect: true },
      { text: "Curse of Knowledge", isCorrect: false },
      { text: "Hindsight Bias", isCorrect: false },
      { text: "Actor-Observer Bias", isCorrect: false }
    ]),
    explanation: "Self-Serving Bias is a cognitive bias that involves taking credit for successes while blaming outside factors for failures. It is a way of protecting one's self-esteem.",
    type: "cognitive"
  },
  {
    id: 18,
    question: "What is the 'Curse of Knowledge'?",
    options: shuffleArray([
      { text: "The difficulty in imagining what it's like not to know something.", isCorrect: true },
      { text: "The tendency to assume that others have the same knowledge as oneself.", isCorrect: true },
      { text: "The difficulty in communicating effectively with those who have less knowledge.", isCorrect: true },
      { text: "All of the above", isCorrect: true }
    ]),
    explanation: "Curse of Knowledge is a cognitive bias that occurs when an individual, communicating with other individuals, unknowingly assumes that the others have the background to understand.",
    type: "cognitive"
  },
  {
    id: 19,
    question: "Which bias leads people to believe, after an event has occurred, that they predicted it all along?",
    options: shuffleArray([
      { text: "Hindsight Bias", isCorrect: true },
      { text: "Actor-Observer Bias", isCorrect: false },
      { text: "Fundamental Attribution Error", isCorrect: false },
      { text: "Placebo Effect", isCorrect: false }
    ]),
    explanation: "Hindsight Bias is a cognitive bias that leads people to believe, after an event has occurred, that they predicted it all along. It is also known as the 'I-knew-it-all-along' effect.",
    type: "cognitive"
  },
  {
    id: 20,
    question: "What is 'Actor-Observer Bias'?",
    options: shuffleArray([
      { text: "The tendency to attribute one's own actions to external causes while attributing other people's behaviors to internal causes.", isCorrect: true },
      { text: "The tendency to make different attributions depending on whether one is the actor or the observer in a situation.", isCorrect: true },
      { text: "The tendency to see one's own behavior as more justified than the behavior of others.", isCorrect: true },
      { text: "All of the above", isCorrect: true }
    ]),
    explanation: "Actor-Observer Bias is a cognitive bias that describes the tendency to attribute one's own actions to external causes while attributing other people's behaviors to internal causes.",
    type: "cognitive"
  },
  {
    id: 21,
    question: "Which bias involves overemphasizing personality traits and underemphasizing situational factors when explaining other people's behavior?",
    options: shuffleArray([
      { text: "Fundamental Attribution Error", isCorrect: true },
      { text: "Placebo Effect", isCorrect: false },
      { text: "Dunning-Kruger Effect", isCorrect: false },
      { text: "Imposter Syndrome", isCorrect: false }
    ]),
    explanation: "Fundamental Attribution Error is a cognitive bias that involves overemphasizing personality traits and underemphasizing situational factors when explaining other people's behavior.",
    type: "cognitive"
  },
  {
    id: 22,
    question: "What is the 'Placebo Effect'?",
    options: shuffleArray([
      { text: "A beneficial effect produced by a placebo drug or treatment, which cannot be attributed to the properties of the placebo itself, and must therefore be due to the patient's belief in that treatment.", isCorrect: true },
      { text: "A psychological effect that occurs when a person experiences a perceived improvement in their condition after receiving a fake treatment.", isCorrect: true },
      { text: "A phenomenon where a person's expectations can influence their physical or psychological well-being.", isCorrect: true },
      { text: "All of the above", isCorrect: true }
    ]),
    explanation: "Placebo Effect is a beneficial effect produced by a placebo drug or treatment, which cannot be attributed to the properties of the placebo itself, and must therefore be due to the patient's belief in that treatment.",
    type: "cognitive"
  },
  {
    id: 23,
    question: "Which bias leads people with low ability to overestimate their ability?",
    options: shuffleArray([
      { text: "Dunning-Kruger Effect", isCorrect: true },
      { text: "Imposter Syndrome", isCorrect: false },
      { text: "Reactance", isCorrect: false },
      { text: "Scarcity Heuristic", isCorrect: false }
    ]),
    explanation: "Dunning-Kruger Effect is a cognitive bias in which people with low ability at a task overestimate their ability. It is related to the cognitive bias of illusory superiority and comes from the inability of people to recognize their lack of ability.",
    type: "cognitive"
  },
  {
    id: 24,
    question: "What is 'Imposter Syndrome'?",
    options: shuffleArray([
      { text: "A psychological pattern in which an individual doubts their accomplishments and has a persistent internalized fear of being exposed as a 'fraud'.", isCorrect: true },
      { text: "The belief that one's success is due to luck or chance rather than skill or competence.", isCorrect: true },
      { text: "The fear of not meeting expectations or being seen as inadequate.", isCorrect: true },
      { text: "All of the above", isCorrect: true }
    ]),
    explanation: "Imposter Syndrome is a psychological pattern in which an individual doubts their accomplishments and has a persistent internalized fear of being exposed as a 'fraud'.",
    type: "cognitive"
  },
  {
    id: 25,
    question: "Which bias involves reacting against attempts to limit one's freedom or autonomy?",
    options: shuffleArray([
      { text: "Reactance", isCorrect: true },
      { text: "Scarcity Heuristic", isCorrect: false },
      { text: "Decoy Effect", isCorrect: false },
      { text: "Social Comparison Bias", isCorrect: false }
    ]),
    explanation: "Reactance is a motivational reaction to offers, persons, rules, or regulations that threaten or eliminate specific behavioral freedoms. Reactance occurs when a person feels that someone or something is taking away their choices or limiting their range of options.",
    type: "cognitive"
  },
  {
    id: 26,
    question: "What is the 'Scarcity Heuristic'?",
    options: shuffleArray([
      { text: "A mental shortcut that places a higher value on things that are perceived as rare or limited.", isCorrect: true },
      { text: "The tendency to believe that things that are scarce are more desirable.", isCorrect: true },
      { text: "The tendency to make decisions based on the perceived availability of something.", isCorrect: true },
      { text: "All of the above", isCorrect: true }
    ]),
    explanation: "Scarcity Heuristic is a mental shortcut that places a higher value on things that are perceived as rare or limited. This can influence people's decisions and behaviors.",
    type: "cognitive"
  },
  {
    id: 27,
    question: "Which bias occurs when the addition of an asymmetrically dominated option changes preferences between two original options?",
    options: shuffleArray([
      { text: "Decoy Effect", isCorrect: true },
      { text: "Social Comparison Bias", isCorrect: false },
      { text: "Contrast Effect", isCorrect: false },
      { text: "Relative Bias", isCorrect: false }
    ]),
    explanation: "Decoy Effect is a cognitive bias that occurs when the addition of an asymmetrically dominated option (the 'decoy') changes preferences between two original options. The decoy is inferior to one option but superior to the other, making the former seem more attractive.",
    type: "cognitive"
  },
  {
    id: 28,
    question: "What is 'Social Comparison Bias'?",
    options: shuffleArray([
      { text: "The tendency to evaluate oneself by comparing oneself to others.", isCorrect: true },
      { text: "The tendency to feel envy or resentment when others have more than oneself.", isCorrect: true },
      { text: "The tendency to feel superior or inferior to others based on social comparisons.", isCorrect: true },
      { text: "All of the above", isCorrect: true }
    ]),
    explanation: "Social Comparison Bias is a cognitive bias that involves the tendency to evaluate oneself by comparing oneself to others. This can lead to feelings of envy, resentment, or superiority.",
    type: "social"
  },
  {
    id: 29,
    question: "Which bias occurs when the perception of a stimulus is influenced by a preceding stimulus?",
    options: shuffleArray([
      { text: "Contrast Effect", isCorrect: true },
      { text: "Relative Bias", isCorrect: false },
      { text: "Confirmation Bias", isCorrect: false },
      { text: "Contrast Bias", isCorrect: false }
    ]),
    explanation: "Contrast Effect is a cognitive bias that occurs when the perception of a stimulus is influenced by a preceding stimulus. For example, a moderate stimulus may seem more extreme if it is preceded by a weak stimulus, and vice versa.",
    type: "cognitive"
  },
  {
    id: 30,
    question: "What is 'Relative Bias'?",
    options: shuffleArray([
      { text: "The tendency to make decisions based on relative comparisons rather than absolute values.", isCorrect: true },
      { text: "The tendency to focus on the differences between options rather than their individual merits.", isCorrect: true },
      { text: "The tendency to be more influenced by relative gains and losses than by absolute gains and losses.", isCorrect: true },
      { text: "All of the above", isCorrect: true }
    ]),
    explanation: "Relative Bias is a cognitive bias that involves the tendency to make decisions based on relative comparisons rather than absolute values. This can lead to irrational choices.",
    type: "cognitive"
  },
  {
    id: 31,
    question: "What is 'Confirmation Bias'?",
    options: shuffleArray([
      { text: "The tendency to favor information that confirms existing beliefs.", isCorrect: true },
      { text: "The tendency to search for, interpret, favor, and recall information in a way that confirms one's preexisting beliefs or hypotheses.", isCorrect: true },
      { text: "The tendency to give more weight to evidence that supports one's beliefs and less weight to evidence that contradicts them.", isCorrect: true },
      { text: "All of the above", isCorrect: true }
    ]),
    explanation: "Confirmation Bias is a cognitive bias that involves the tendency to favor information that confirms existing beliefs or hypotheses. This can lead to biased decision-making.",
    type: "cognitive"
  },
  {
    id: 32,
    question: "What is 'Contrast Bias'?",
    options: shuffleArray([
      { text: "The tendency to perceive things differently depending on what they are compared to.", isCorrect: true },
      { text: "The tendency to exaggerate the differences between things that are presented close together.", isCorrect: true },
      { text: "The tendency to make judgments based on relative comparisons rather than absolute values.", isCorrect: true },
      { text: "All of the above", isCorrect: true }
    ]),
    explanation: "Contrast Bias is a cognitive bias that involves the tendency to perceive things differently depending on what they are compared to. This can lead to biased judgments and decisions.",
    type: "cognitive"
  },
  {
    id: 33,
    question: "What is 'Price Bias'?",
    options: shuffleArray([
      { text: "The tendency to judge the quality or value of a product based on its price.", isCorrect: true },
      { text: "The assumption that higher-priced items are always better than lower-priced items.", isCorrect: true },
      { text: "The tendency to be more attracted to items with higher price tags.", isCorrect: true },
      { text: "All of the above", isCorrect: true }
    ]),
    explanation: "Price Bias is a cognitive bias that involves the tendency to judge the quality or value of a product based on its price. This can lead to irrational purchasing decisions.",
    type: "cognitive"
  },
  {
    id: 34,
    question: "What is 'Value Attribution Bias'?",
    options: shuffleArray([
      { text: "The tendency to attribute value to things based on subjective or emotional factors rather than objective criteria.", isCorrect: true },
      { text: "The tendency to overvalue things that are associated with positive emotions or experiences.", isCorrect: true },
      { text: "The tendency to undervalue things that are associated with negative emotions or experiences.", isCorrect: true },
      { text: "All of the above", isCorrect: true }
    ]),
    explanation: "Value Attribution Bias is a cognitive bias that involves the tendency to attribute value to things based on subjective or emotional factors rather than objective criteria. This can lead to irrational decision-making.",
    type: "cognitive"
  },
  {
    id: 109,
    question: "A person sees a shirt originally priced at $100 but is now on sale for $50, and they consider it a good deal. What bias is at play?",
    options: shuffleArray([
      { text: "Anchoring Bias", isCorrect: true },
      { text: "Framing Effect", isCorrect: false },
      { text: "Sunk Cost Fallacy", isCorrect: false },
      { text: "Loss Aversion", isCorrect: false }
    ]),
    explanation: "The initial price of $100 serves as an anchor, making the $50 sale price seem like a good deal, which is an example of anchoring bias.",
    type: "anchoring"
  },
  {
    id: 110,
    question: "During salary negotiations, Bob insists on a higher salary because he was offered a lower amount in his last job, even though the new company has a different pay scale. What bias is influencing his decision?",
    options: shuffleArray([
      { text: "Anchoring Bias", isCorrect: true },
      { text: "Status Quo Bias", isCorrect: false },
      { text: "Contrast Effect", isCorrect: false },
      { text: "Social Comparison Bias", isCorrect: false }
    ]),
    explanation: "Bob's previous salary offer is anchoring his expectations, affecting his judgment during negotiations, which is a classic example of anchoring bias.",
    type: "anchoring"
  },
  {
    id: 111,
    question: "A person believes a movie ticket is cheap because they saw a more expensive one earlier in the day. What bias is at work?",
    options: shuffleArray([
      { text: "Anchoring Bias", isCorrect: true },
      { text: "Relative Bias", isCorrect: false },
      { text: "Confirmation Bias", isCorrect: false },
      { text: "Contrast Bias", isCorrect: false }
    ]),
    explanation: "The earlier price serves as an anchor, making the second movie ticket seem cheaper than it is. This is an example of anchoring bias, where initial information influences decisions.",
    type: "anchoring"
  },
  {
    id: 112,
    question: "A shopper compares a $50 item to a $200 item, believing the $50 item is a good deal. What bias is influencing them?",
    options: shuffleArray([
      { text: "Anchoring Bias", isCorrect: true },
      { text: "Price Bias", isCorrect: false },
      { text: "Value Attribution Bias", isCorrect: false },
      { text: "Decoy Effect", isCorrect: false }
    ]),
    explanation: "The more expensive $200 item is acting as an anchor, making the $50 item seem more reasonable, which is a classic case of anchoring bias.",
    type: "anchoring"
  },
  {
    id: 113,
    question: "Emma feels like everyone is staring at her when she trips in the cafeteria, even though most people didn't notice. What bias is influencing her?",
    options: shuffleArray([
      { text: "Spotlight Effect", isCorrect: true },
      { text: "Social Comparison Bias", isCorrect: false },
      { text: "Self-Serving Bias", isCorrect: false },
      { text: "Status Quo Bias", isCorrect: false }
    ]),
    explanation: "Spotlight Effect refers to the tendency to overestimate how much others notice our actions or appearance. Emma believes she's the center of attention, though others are likely focused on their own activities.",
    type: "spotlight"
  },
  {
    id: 114,
    question: "A teenager refuses to wear an old shirt, assuming everyone will judge them for it. What bias is at play?",
    options: shuffleArray([
      { text: "Spotlight Effect", isCorrect: true },
      { text: "Bandwagon Effect", isCorrect: false },
      { text: "Conformity Bias", isCorrect: false },
      { text: "Halo Effect", isCorrect: false }
    ]),
    explanation: "Spotlight Effect causes individuals to think others are paying more attention to them than they actually are. The teenager overestimates others' interest in their attire.",
    type: "spotlight"
  },
  {
    id: 115,
    question: "A speaker believes the audience notices every small mistake in their presentation, even though most people don't. What bias is affecting them?",
    options: shuffleArray([
      { text: "Spotlight Effect", isCorrect: true },
      { text: "Imposter Syndrome", isCorrect: false },
      { text: "Performance Bias", isCorrect: false },
      { text: "Authority Bias", isCorrect: false }
    ]),
    explanation: "Spotlight Effect leads the speaker to assume that minor errors are highly noticeable, when in reality, the audience may not even register them.",
    type: "spotlight"
  },
  {
    id: 116,
    question: "A new employee thinks everyone is watching their every move at work, even though they aren't. What bias is at work?",
    options: shuffleArray([
      { text: "Spotlight Effect", isCorrect: true },
      { text: "Negativity Bias", isCorrect: false },
      { text: "Observer Bias", isCorrect: false },
      { text: "Performance Anxiety", isCorrect: false }
    ]),
    explanation: "Spotlight Effect makes the employee feel overly scrutinized, overestimating colleagues' attention to their actions.",
    type: "spotlight"
  },
  {
    id: 117,
    question: "After reading an article that supports his belief, John dismisses other articles that contradict it. What bias is influencing him?",
    options: shuffleArray([
      { text: "Confirmation Bias", isCorrect: true },
      { text: "Anchoring Bias", isCorrect: false },
      { text: "Spotlight Effect", isCorrect: false },
      { text: "Availability Heuristic", isCorrect: false }
    ]),
    explanation: "Confirmation Bias involves favoring information that confirms existing beliefs while disregarding contradictory evidence. John selectively acknowledges supportive articles.",
    type: "confirmation"
  },
  {
    id: 118,
    question: "Lisa believes a particular diet is effective and only reads success stories, ignoring studies that question its benefits. What bias is she exhibiting?",
    options: shuffleArray([
      { text: "Confirmation Bias", isCorrect: true },
      { text: "Self-Serving Bias", isCorrect: false },
      { text: "Bandwagon Effect", isCorrect: false },
      { text: "Authority Bias", isCorrect: false }
    ]),
    explanation: "Confirmation Bias leads Lisa to seek out information that aligns with her belief, neglecting opposing viewpoints.",
    type: "confirmation"
  },
  {
    id: 119,
    question: "A manager assumes a business strategy is good just because it aligns with their past experiences. What bias is affecting them?",
    options: shuffleArray([
      { text: "Confirmation Bias", isCorrect: true },
      { text: "Status Quo Bias", isCorrect: false },
      { text: "Hindsight Bias", isCorrect: false },
      { text: "Curse of Knowledge", isCorrect: false }
    ]),
    explanation: "Confirmation Bias causes the manager to favor strategies that fit their previous successes, potentially overlooking better alternatives.",
    type: "confirmation"
  },
  {
    id: 120,
    question: "Emma rejects a well-supported study simply because its findings conflict with her existing beliefs. What bias is at play?",
    options: shuffleArray([
      { text: "Confirmation Bias", isCorrect: true },
      { text: "Reactance", isCorrect: false },
      { text: "Value Attribution Bias", isCorrect: false },
      { text: "Dunning-Kruger Effect", isCorrect: false }
    ]),
    explanation: "Confirmation Bias leads Emma to dismiss credible research that challenges her preconceived notions.",
    type: "confirmation"
  },
  {
    id: 121,
    question: "A coffee shop offers a small for $2, medium for $4, and large for $4.50, making the large seem like a better deal. What bias is at play?",
    options: shuffleArray([
      { text: "Decoy Effect", isCorrect: true },
      { text: "Price Bias", isCorrect: false },
      { text: "Value Attribution Bias", isCorrect: false },
      { text: "Contrast Effect", isCorrect: false }
    ]),
    explanation: "Decoy Effect is a cognitive bias that occurs when the addition of an asymmetrically dominated option (the 'decoy') changes preferences between two original options. The decoy is inferior to one option but superior to the other, making the former seem more attractive.",
    type: "decoy"
  },
  {
    id: 122,
    question: "Mark values his homemade table more than a store-bought one, even though the latter is better made. What bias is at play?",
    options: shuffleArray([
      { text: "IKEA Effect", isCorrect: true },
      { text: "Self-Serving Bias", isCorrect: false },
      { text: "Value Attribution Bias", isCorrect: false },
      { text: "Status Quo Bias", isCorrect: false }
    ]),
    explanation: "The IKEA Effect refers to the tendency to overvalue products we have assembled ourselves, leading Mark to prefer his own creation.",
    type: "ikea"
  },
  {
    id: 123,
    question: "A chef prefers a dish they cooked themselves over a restaurant's version, despite it tasting the same. What bias is influencing their preference?",
    options: shuffleArray([
      { text: "IKEA Effect", isCorrect: true },
      { text: "Optimism Bias", isCorrect: false },
      { text: "Curse of Knowledge", isCorrect: false },
      { text: "Confirmation Bias", isCorrect: false }
    ]),
    explanation: "The IKEA Effect causes the chef to favor their own dish due to the effort invested in preparing it.",
    type: "ikea"
  },
  {
    id: 124,
    question: "A child prefers their own school project, believing it is better than professionally made ones. What bias is affecting them?",
    options: shuffleArray([
      { text: "IKEA Effect", isCorrect: true },
      { text: "Dunning-Kruger Effect", isCorrect: false },
      { text: "Halo Effect", isCorrect: false },
      { text: "Blind Spot Bias", isCorrect: false }
    ]),
    explanation: "The IKEA Effect leads the child to overvalue their project because of the personal effort involved in creating it.",
    type: "ikea"
  },
  {
    id: 125,
    question: "A tech user insists their custom-built computer is superior, even if a prebuilt option has better specs. What bias is at work?",
    options: shuffleArray([
      { text: "IKEA Effect", isCorrect: true },
      { text: "Authority Bias", isCorrect: false },
      { text: "Contrast Effect", isCorrect: false },
      { text: "Anchoring Bias", isCorrect: false }
    ]),
    explanation: "The IKEA Effect causes the user to overestimate the value of their custom-built computer due to the personal effort invested in assembling it.",
    type: "ikea"
  },
  {
    id: 126,
    question: "Raj works on a task, but every time he finishes it, his manager asks him to redo it with slight changes. Raj feels demotivated and stuck in a loop. What bias is at play?",
    options: shuffleArray([
      { text: "Sisyphus Effect", isCorrect: true },
      { text: "Reactance", isCorrect: false },
      { text: "Sunk Cost Fallacy", isCorrect: false },
      { text: "Decoy Effect", isCorrect: false }
    ]),
    explanation: "The Sisyphus Effect refers to the demoralizing feeling of performing repetitive tasks with no visible progress or reward. Raj feels like his efforts are endless and unproductive, like Sisyphus pushing a boulder uphill only for it to roll back down.",
    type: "sisyphus"
  },
  {
    id: 127,
    question: "Tara is assigned to clean the shared drive every week, but her coworkers keep messing it up daily, making her feel like her work never ends. What bias is being reflected?",
    options: shuffleArray([
      { text: "Sisyphus Effect", isCorrect: true },
      { text: "Blind Spot Bias", isCorrect: false },
      { text: "Status Quo Bias", isCorrect: false },
      { text: "Social Comparison Bias", isCorrect: false }
    ]),
    explanation: "This reflects the Sisyphus Effect, where tasks are constantly undone or rendered futile by others, leading to low motivation and burnout.",
    type: "sisyphus"
  },
  {
    id: 128,
    question: "Despite cleaning her inbox daily, Jenna finds it flooded every morning with auto-generated reports. What cognitive bias might Jenna be experiencing?",
    options: shuffleArray([
      { text: "Sisyphus Effect", isCorrect: true },
      { text: "Negativity Bias", isCorrect: false },
      { text: "Availability Heuristic", isCorrect: false },
      { text: "Value Attribution Bias", isCorrect: false }
    ]),
    explanation: "Jenna's work feels meaningless and never-ending, with no sense of accomplishment. This futility reflects the Sisyphus Effect.",
    type: "sisyphus"
  },
  {
    id: 129,
    question: "A game developer keeps reworking the same level design based on contradictory client feedback, feeling like nothing is ever 'good enough.' What bias is evident here?",
    options: shuffleArray([
      { text: "Sisyphus Effect", isCorrect: true },
      { text: "Imposter Syndrome", isCorrect: false },
      { text: "Curse of Knowledge", isCorrect: false },
      { text: "Actor-Observer Bias", isCorrect: false }
    ]),
    explanation: "Repeatedly doing work that gets undone or changed, without a sense of closure, leads to the Sisyphus Effect.",
    type: "sisyphus"
  },
  {
    id: 130,
    question: "Priya suspects her coworker is slacking off remotely and assumes they're cheating the system, even though there's no real evidence. What bias is she showing?",
    options: shuffleArray([
      { text: "The Cheating Bias", isCorrect: true },
      { text: "Fundamental Attribution Error", isCorrect: false },
      { text: "Spotlight Effect", isCorrect: false },
      { text: "Actor-Observer Bias", isCorrect: false }
    ]),
    explanation: "The Cheating Bias refers to the assumption that others are taking advantage or behaving unethically without sufficient proof. Priya jumps to conclusions based on suspicion.",
    type: "cheating"
  },
  {
    id: 131,
    question: "Alex believes his friend got a scholarship by manipulating the system rather than merit. What bias might Alex be influenced by?",
    options: shuffleArray([
      { text: "The Cheating Bias", isCorrect: true },
      { text: "Self-Serving Bias", isCorrect: false },
      { text: "Social Comparison Bias", isCorrect: false },
      { text: "Value Attribution Bias", isCorrect: false }
    ]),
    explanation: "The Cheating Bias causes individuals to assume others succeed through unfair means, especially when outcomes seem undeserved.",
    type: "cheating"
  },
  {
    id: 132,
    question: "In a team project, Sam believes only he is putting in effort and suspects others of contributing less intentionally. What bias is shaping Sam's thinking?",
    options: shuffleArray([
      { text: "The Cheating Bias", isCorrect: true },
      { text: "In-Group Bias", isCorrect: false },
      { text: "Blind Spot Bias", isCorrect: false },
      { text: "Dunning-Kruger Effect", isCorrect: false }
    ]),
    explanation: "Sam assumes others are slacking or 'cheating,' a key aspect of the Cheating Bias, even if their work isn't always visible.",
    type: "cheating"
  },
  {
    id: 133,
    question: "An employee questions a colleague's promotion, thinking they must have used office politics, despite HR's transparent process. What bias is this?",
    options: shuffleArray([
      { text: "The Cheating Bias", isCorrect: true },
      { text: "Authority Bias", isCorrect: false },
      { text: "Status Quo Bias", isCorrect: false },
      { text: "Halo Effect", isCorrect: false }
    ]),
    explanation: "The bias involves assuming deceitful behavior in others' success, especially when it feels unfair to the observer.",
    type: "cheating"
  },
  {
    id: 134,
    question: "Riya keeps checking for likes on her latest design post instead of focusing on a long-term client project. What bias is influencing her?",
    options: shuffleArray([
      { text: "Gratification Bias", isCorrect: true },
      { text: "Spotlight Effect", isCorrect: false },
      { text: "Status Quo Bias", isCorrect: false },
      { text: "Social Comparison Bias", isCorrect: false }
    ]),
    explanation: "Gratification Bias is the tendency to seek immediate rewards or feedback, even at the cost of long-term benefits. Riya prioritizes quick validation over delayed outcomes.",
    type: "gratification"
  },
  {
    id: 135,
    question: "Instead of preparing for an upcoming pitch, Jason watches short YouTube videos because they offer instant enjoyment. What bias is in action?",
    options: shuffleArray([
      { text: "Gratification Bias", isCorrect: true },
      { text: "Imposter Syndrome", isCorrect: false },
      { text: "Reactance", isCorrect: false },
      { text: "Value Attribution Bias", isCorrect: false }
    ]),
    explanation: "Jason is choosing instant pleasure over a more meaningful but delayed reward, a classic trait of Gratification Bias.",
    type: "gratification"
  },
  {
    id: 136,
    question: "A student chooses to scroll through Instagram after every 5 minutes of studying, finding it hard to stay focused. What bias is evident here?",
    options: shuffleArray([
      { text: "Gratification Bias", isCorrect: true },
      { text: "Sisyphus Effect", isCorrect: false },
      { text: "The Cheating Bias", isCorrect: false },
      { text: "Dunning-Kruger Effect", isCorrect: false }
    ]),
    explanation: "Seeking immediate small rewards disrupts focus and long-term progress. This is a clear sign of Gratification Bias.",
    type: "gratification"
  },
  {
    id: 137,
    question: "Despite knowing her long-term goals, Ananya buys new clothes every week to feel a short burst of happiness. What bias is she displaying?",
    options: shuffleArray([
      { text: "Gratification Bias", isCorrect: true },
      { text: "Loss Aversion", isCorrect: false },
      { text: "Framing Effect", isCorrect: false },
      { text: "Anchoring Bias", isCorrect: false }
    ]),
    explanation: "The behavior reflects Gratification Bias—prioritizing short-term pleasures that delay or harm long-term plans.",
    type: "gratification"
  },
  {
    id: 138,
    question: "When a product says 'Only 2 left in stock!', Rohan rushes to buy it, even though he doesn't really need it. What bias is influencing him?",
    options: shuffleArray([
      { text: "Scarcity Bias", isCorrect: true },
      { text: "Loss Aversion", isCorrect: false },
      { text: "Reactance", isCorrect: false },
      { text: "Value Attribution Bias", isCorrect: false }
    ]),
    explanation: "Scarcity Bias leads people to assign more value to items perceived as limited. Rohan acts impulsively due to fear of missing out.",
    type: "scarcity"
  },
  {
    id: 139,
    question: "Despite not liking the flavor, Nina orders a limited-edition coffee because it won't be available next week. What bias is at play?",
    options: shuffleArray([
      { text: "Scarcity Bias", isCorrect: true },
      { text: "Imposter Syndrome", isCorrect: false },
      { text: "Gratification Bias", isCorrect: false },
      { text: "Anchoring Bias", isCorrect: false }
    ]),
    explanation: "Nina values the coffee more due to its perceived scarcity, a core aspect of Scarcity Bias.",
    type: "scarcity"
  },
  {
    id: 140,
    question: "A brand increases prices and limits stock to appear exclusive. Consumers suddenly view the product as high value. What bias are they responding to?",
    options: shuffleArray([
      { text: "Scarcity Bias", isCorrect: true },
      { text: "The Cheating Bias", isCorrect: false },
      { text: "Price Bias", isCorrect: false },
      { text: "Status Quo Bias", isCorrect: false }
    ]),
    explanation: "Scarcity Bias makes people overvalue items that appear rare or exclusive, regardless of actual quality.",
    type: "scarcity"
  },
  {
    id: 141,
    question: "During an online sale, Ravi buys multiple items just because they had a countdown timer and 'low stock' warning. What bias drove his behavior?",
    options: shuffleArray([
      { text: "Scarcity Bias", isCorrect: true },
      { text: "Sisyphus Effect", isCorrect: false },
      { text: "Spotlight Effect", isCorrect: false },
      { text: "Social Comparison Bias", isCorrect: false }
    ]),
    explanation: "Ravi's decision is influenced by the illusion of urgency and limited availability—a common marketing tactic exploiting Scarcity Bias.",
    type: "scarcity"
  }
];
