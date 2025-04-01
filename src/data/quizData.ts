
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

// Create an array of questions for each bias type
const hindsightBiasQuestions: Question[] = [
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
    type: "optimism"
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
    type: "optimism"
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
    type: "optimism"
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
    type: "optimism"
  }
];

const backfireEffectQuestions: Question[] = [
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
  }
];

const barnumEffectQuestions: Question[] = [
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
  {
    id: 11,
    question: "Alex takes an online personality test and is surprised that the generic results fit him perfectly. What bias is influencing his judgment?",
    options: shuffleArray([
      { text: "Barnum Effect", isCorrect: true },
      { text: "Confirmation Bias", isCorrect: false },
      { text: "Self-Fulfilling Prophecy", isCorrect: false },
      { text: "Optimism Bias", isCorrect: false }
    ]),
    explanation: "The Barnum Effect causes people to accept vague descriptions as uniquely applicable to themselves. Alex believes generic personality test results describe him perfectly.",
    type: "barnum"
  },
  {
    id: 12,
    question: "A marketing survey describes customer preferences in a way that feels extremely personal but actually applies to most people. What bias is being used?",
    options: shuffleArray([
      { text: "Barnum Effect", isCorrect: true },
      { text: "Social Desirability Bias", isCorrect: false },
      { text: "Framing Effect", isCorrect: false },
      { text: "Anchoring Bias", isCorrect: false }
    ]),
    explanation: "The Barnum Effect is being used when marketers create statements that seem personally tailored but actually apply to most people. This makes customers feel uniquely understood.",
    type: "barnum"
  }
];

const sunkCostFallacyQuestions: Question[] = [
  {
    id: 13,
    question: "Mark continues investing in a failing business because he has already spent so much money on it. What bias is influencing his decision?",
    options: shuffleArray([
      { text: "Sunk Cost Fallacy", isCorrect: true },
      { text: "Commitment Bias", isCorrect: false },
      { text: "Status Quo Bias", isCorrect: false },
      { text: "Escalation of Commitment", isCorrect: false }
    ]),
    explanation: "The Sunk Cost Fallacy is our tendency to continue an endeavor due to previously invested resources that cannot be recovered. Mark keeps investing in a failing business because of his previous investments.",
    type: "anchoring"
  },
  {
    id: 14,
    question: "Despite a terrible movie, Anna refuses to leave the theater because she already paid for the ticket. What bias is at play?",
    options: shuffleArray([
      { text: "Sunk Cost Fallacy", isCorrect: true },
      { text: "Commitment Bias", isCorrect: false },
      { text: "Status Quo Bias", isCorrect: false },
      { text: "Loss Aversion", isCorrect: false }
    ]),
    explanation: "The Sunk Cost Fallacy is our tendency to continue an endeavor due to previously invested resources (time, money, effort) that cannot be recovered. Anna stays for the entire movie despite not enjoying it because she paid for the ticket.",
    type: "anchoring"
  },
  {
    id: 15,
    question: "Tom keeps playing a mobile game he dislikes because he spent money on in-app purchases. What bias is affecting him?",
    options: shuffleArray([
      { text: "Sunk Cost Fallacy", isCorrect: true },
      { text: "Gambler's Fallacy", isCorrect: false },
      { text: "Endowment Effect", isCorrect: false },
      { text: "Commitment Bias", isCorrect: false }
    ]),
    explanation: "The Sunk Cost Fallacy leads people to continue an activity because of resources already invested that cannot be recovered. Tom continues playing a game he doesn't enjoy because he's already spent money on it.",
    type: "anchoring"
  },
  {
    id: 16,
    question: "A company refuses to abandon a failing project because of the millions already spent on it. What bias is influencing them?",
    options: shuffleArray([
      { text: "Sunk Cost Fallacy", isCorrect: true },
      { text: "Escalation of Commitment", isCorrect: false },
      { text: "Status Quo Bias", isCorrect: false },
      { text: "Groupthink", isCorrect: false }
    ]),
    explanation: "The Sunk Cost Fallacy occurs when an organization continues a project because of resources already invested, rather than based on future outcomes. The company keeps pursuing a failing project due to previous expenditures.",
    type: "anchoring"
  }
];

const ingroupBiasQuestions: Question[] = [
  {
    id: 17,
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
    id: 18,
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
  {
    id: 19,
    question: "Lisa trusts news sources that align with her political group and dismisses others as biased. What bias is she exhibiting?",
    options: shuffleArray([
      { text: "Ingroup Bias", isCorrect: true },
      { text: "Confirmation Bias", isCorrect: false },
      { text: "Selective Perception", isCorrect: false },
      { text: "Belief Bias", isCorrect: false }
    ]),
    explanation: "Ingroup Bias causes people to trust and favor information from sources associated with their own group. Lisa trusts news sources affiliated with her political group while dismissing others.",
    type: "ingroup"
  },
  {
    id: 20,
    question: "A group of coworkers believes their team is the hardest working, despite evidence to the contrary. What bias is affecting them?",
    options: shuffleArray([
      { text: "Ingroup Bias", isCorrect: true },
      { text: "Groupthink", isCorrect: false },
      { text: "Self-Serving Bias", isCorrect: false },
      { text: "Overconfidence Effect", isCorrect: false }
    ]),
    explanation: "Ingroup Bias leads people to attribute positive characteristics to their own group. The coworkers believe their team works harder than others despite contradictory evidence.",
    type: "ingroup"
  }
];

const beliefBiasQuestions: Question[] = [
  {
    id: 21,
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
    id: 22,
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
  {
    id: 23,
    question: "Emma rejects a well-supported study simply because its findings conflict with her existing beliefs. What bias is at play?",
    options: shuffleArray([
      { text: "Belief Bias", isCorrect: true },
      { text: "Confirmation Bias", isCorrect: false },
      { text: "Backfire Effect", isCorrect: false },
      { text: "Selective Perception", isCorrect: false }
    ]),
    explanation: "Belief Bias causes people to evaluate information based on whether it aligns with their existing beliefs. Emma rejects valid research because it contradicts what she already believes.",
    type: "belief"
  },
  {
    id: 24,
    question: "A manager assumes a business strategy is good just because it aligns with their past experiences. What bias is affecting them?",
    options: shuffleArray([
      { text: "Belief Bias", isCorrect: true },
      { text: "Availability Bias", isCorrect: false },
      { text: "Anchoring Bias", isCorrect: false },
      { text: "Authority Bias", isCorrect: false }
    ]),
    explanation: "Belief Bias leads people to evaluate the quality of arguments based on whether they align with existing beliefs. The manager assumes a strategy is effective simply because it matches their past experiences.",
    type: "belief"
  }
];

const groupthinkBiasQuestions: Question[] = [
  {
    id: 25,
    question: "A corporate team agrees on a risky strategy because no one wants to voice dissent. What bias is influencing their decision?",
    options: shuffleArray([
      { text: "Groupthink Bias", isCorrect: true },
      { text: "Bandwagon Effect", isCorrect: false },
      { text: "Consensus Bias", isCorrect: false },
      { text: "Conformity Bias", isCorrect: false }
    ]),
    explanation: "Groupthink occurs when a group makes irrational decisions because members conform to consensus rather than expressing dissenting opinions. The team is adopting a risky strategy because no one is willing to challenge the group's direction.",
    type: "bandwagon"
  },
  {
    id: 26,
    question: "A jury quickly reaches a verdict without considering all evidence, as no one wants to challenge the majority. What bias is this?",
    options: shuffleArray([
      { text: "Groupthink Bias", isCorrect: true },
      { text: "Conformity Bias", isCorrect: false },
      { text: "Bandwagon Effect", isCorrect: false },
      { text: "Authority Bias", isCorrect: false }
    ]),
    explanation: "Groupthink Bias occurs when group members prioritize consensus over critical evaluation. The jury is making a hasty decision because no one wants to challenge the developing consensus.",
    type: "bandwagon"
  },
  {
    id: 27,
    question: "A tech startup ignores valid criticism of their product because everyone in the company shares the same vision. What bias is at work?",
    options: shuffleArray([
      { text: "Groupthink Bias", isCorrect: true },
      { text: "Confirmation Bias", isCorrect: false },
      { text: "Shared Information Bias", isCorrect: false },
      { text: "Overconfidence Effect", isCorrect: false }
    ]),
    explanation: "Groupthink Bias leads groups to ignore contrary information and reach irrational decisions. The startup is disregarding important criticism because the team has developed a shared vision that prevents critical thinking.",
    type: "bandwagon"
  },
  {
    id: 28,
    question: "A government committee unanimously agrees on a policy without debate because they want to maintain harmony. What bias is influencing them?",
    options: shuffleArray([
      { text: "Groupthink Bias", isCorrect: true },
      { text: "Social Conformity", isCorrect: false },
      { text: "Consensus Bias", isCorrect: false },
      { text: "Authority Bias", isCorrect: false }
    ]),
    explanation: "Groupthink Bias occurs when maintaining group harmony becomes more important than critical evaluation. The committee is avoiding debate to maintain harmony, potentially leading to poor decision-making.",
    type: "bandwagon"
  }
];

const recallBiasQuestions: Question[] = [
  {
    id: 29,
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
    id: 30,
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
  {
    id: 31,
    question: "After a bad breakup, Mark remembers only the negative moments and ignores the happy ones. What bias is affecting his perception?",
    options: shuffleArray([
      { text: "Recall Bias", isCorrect: true },
      { text: "Negativity Bias", isCorrect: false },
      { text: "Rosy Retrospection", isCorrect: false },
      { text: "Availability Heuristic", isCorrect: false }
    ]),
    explanation: "Recall Bias involves remembering certain events more prominently than others. Mark is selectively recalling negative experiences from his relationship while ignoring positive ones.",
    type: "recall"
  },
  {
    id: 32,
    question: "A customer only remembers the one time a store had bad service and ignores all the good experiences. What bias is at play?",
    options: shuffleArray([
      { text: "Recall Bias", isCorrect: true },
      { text: "Negativity Bias", isCorrect: false },
      { text: "Availability Heuristic", isCorrect: false },
      { text: "Peak-End Rule", isCorrect: false }
    ]),
    explanation: "Recall Bias occurs when people disproportionately remember certain events over others. The customer primarily recalls one bad service experience while failing to remember multiple positive encounters.",
    type: "recall"
  }
];

const framingBiasQuestions: Question[] = [
  {
    id: 33,
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
    id: 34,
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
  {
    id: 35,
    question: "A company markets its product as '95% fat-free' instead of 'contains 5% fat.' What bias is influencing the consumer?",
    options: shuffleArray([
      { text: "Framing Bias", isCorrect: true },
      { text: "Marketing Bias", isCorrect: false },
      { text: "Cognitive Dissonance", isCorrect: false },
      { text: "Anchoring Bias", isCorrect: false }
    ]),
    explanation: "Framing Bias affects how people interpret information based on its presentation. The company presents the same information in a positive light (95% fat-free) rather than a negative one (5% fat) to influence consumer perception.",
    type: "framing"
  },
  {
    id: 36,
    question: "A real estate agent describes a house as 'cozy and full of character' rather than 'small and old.' What bias is being used?",
    options: shuffleArray([
      { text: "Framing Bias", isCorrect: true },
      { text: "Euphemism Bias", isCorrect: false },
      { text: "Linguistic Bias", isCorrect: false },
      { text: "Persuasion Bias", isCorrect: false }
    ]),
    explanation: "Framing Bias influences perception through word choice and presentation. The real estate agent is using positive framing to make small size and age sound like desirable qualities.",
    type: "framing"
  }
];

const bandwagonEffectQuestions: Question[] = [
  {
    id: 37,
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
    id: 38,
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
  {
    id: 39,
    question: "Voters support a political candidate simply because they see others doing so. What bias is at work?",
    options: shuffleArray([
      { text: "Bandwagon Effect", isCorrect: true },
      { text: "Social Proof", isCorrect: false },
      { text: "Conformity Bias", isCorrect: false },
      { text: "Authority Bias", isCorrect: false }
    ]),
    explanation: "The Bandwagon Effect influences people to adopt beliefs or behaviors because of their popularity. Voters are supporting a candidate based on their perceived popularity rather than policy positions.",
    type: "bandwagon"
  },
  {
    id: 40,
    question: "A person starts using a slang term because their friends use it, even though they originally found it silly. What bias is affecting them?",
    options: shuffleArray([
      { text: "Bandwagon Effect", isCorrect: true },
      { text: "Conformity Bias", isCorrect: false },
      { text: "Peer Influence", isCorrect: false },
      { text: "Social Mimicry", isCorrect: false }
    ]),
    explanation: "The Bandwagon Effect causes people to adopt behaviors because others are doing it. The person is using slang they once disliked simply because it's popular in their social group.",
    type: "bandwagon"
  }
];

const optimismBiasQuestions: Question[] = [
  {
    id: 41,
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
    id: 42,
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
  {
    id: 43,
    question: "A startup founder assumes their business will succeed, even though most startups fail. What bias is influencing them?",
    options: shuffleArray([
      { text: "Optimism Bias", isCorrect: true },
      { text: "Overconfidence Effect", isCorrect: false },
      { text: "Self-serving Bias", isCorrect: false },
      { text: "Planning Fallacy", isCorrect: false }
    ]),
    explanation: "Optimism Bias leads people to believe they are less likely to experience negative events and more likely to experience positive ones than others. The founder believes their startup is an exception to the high failure rate statistics.",
    type: "optimism"
  },
  {
    id: 44,
    question: "An athlete ignores the risk of injury because they believe they are immune to bad luck. What bias is at work?",
    options: shuffleArray([
      { text: "Optimism Bias", isCorrect: true },
      { text: "Invulnerability Bias", isCorrect: false },
      { text: "Overconfidence Effect", isCorrect: false },
      { text: "Self-Serving Bias", isCorrect: false }
    ]),
    explanation: "Optimism Bias leads people to underestimate personal risks. The athlete believes injuries happen to others but not to them, despite all athletes facing similar risks.",
    type: "optimism"
  }
];

const pessimismBiasQuestions: Question[] = [
  {
    id: 45,
    question: "Despite strong economic growth, Linda believes the stock market will crash soon and refuses to invest. What bias is she demonstrating?",
    options: shuffleArray([
      { text: "Pessimism Bias", isCorrect: true },
      { text: "Risk Aversion", isCorrect: false },
      { text: "Loss Aversion", isCorrect: false },
      { text: "Negativity Bias", isCorrect: false }
    ]),
    explanation: "Pessimism Bias is the tendency to overestimate the likelihood of negative events. Linda is exaggerating the probability of a market crash despite positive economic indicators.",
    type: "belief"
  },
  {
    id: 46,
    question: "After one bad experience at a restaurant, Mike assumes all their food must be terrible. What bias is at play?",
    options: shuffleArray([
      { text: "Pessimism Bias", isCorrect: true },
      { text: "Availability Heuristic", isCorrect: false },
      { text: "Negativity Bias", isCorrect: false },
      { text: "Hasty Generalization", isCorrect: false }
    ]),
    explanation: "Pessimism Bias leads people to expect negative outcomes based on limited information. Mike is assuming all food at the restaurant is bad based on a single experience.",
    type: "belief"
  },
  {
    id: 47,
    question: "A person avoids traveling because they believe the world is getting more dangerous, despite statistics showing otherwise. What bias is influencing them?",
    options: shuffleArray([
      { text: "Pessimism Bias", isCorrect: true },
      { text: "Availability Heuristic", isCorrect: false },
      { text: "Negativity Bias", isCorrect: false },
      { text: "Risk Aversion", isCorrect: false }
    ]),
    explanation: "Pessimism Bias causes people to overestimate dangers and negative outcomes. The person believes travel is becoming more dangerous despite statistical evidence to the contrary.",
    type: "belief"
  },
  {
    id: 48,
    question: "A student assumes they will fail a test, even though they studied well. What bias is affecting their confidence?",
    options: shuffleArray([
      { text: "Pessimism Bias", isCorrect: true },
      { text: "Impostor Syndrome", isCorrect: false },
      { text: "Self-Fulfilling Prophecy", isCorrect: false },
      { text: "Negativity Bias", isCorrect: false }
    ]),
    explanation: "Pessimism Bias leads people to anticipate negative outcomes despite positive indicators. The student expects failure despite adequate preparation and study.",
    type: "belief"
  }
];

const anchoringBiasQuestions: Question[] = [
  {
    id: 49,
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
    id: 50,
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
  {
    id: 51,
    question: "A judge gives a harsher sentence after hearing an unrelated extreme case beforehand. What bias is affecting their decision?",
    options: shuffleArray([
      { text: "Anchoring Bias", isCorrect: true },
      { text: "Recency Bias", isCorrect: false },
      { text: "Contrast Effect", isCorrect: false },
      { text: "Severity Bias", isCorrect: false }
    ]),
    explanation: "Anchoring Bias causes initial information to disproportionately influence subsequent judgments. The judge's sentencing decision is affected by the extreme case they heard earlier, which serves as an anchor point.",
    type: "anchoring"
  },
  {
    id: 52,
    question: "A real estate agent shows an expensive house first so that the next, slightly cheaper house seems like a bargain. What bias is being used?",
    options: shuffleArray([
      { text: "Anchoring Bias", isCorrect: true },
      { text: "Contrast Effect", isCorrect: false },
      { text: "Decoy Effect", isCorrect: false },
      { text: "Framing Bias", isCorrect: false }
    ]),
    explanation: "Anchoring Bias is strategically used when an initial reference point influences later judgments. The expensive house serves as an anchor that makes the slightly cheaper house seem like a better value.",
    type: "anchoring"
  }
];

const dunningKrugerEffectQuestions: Question[] = [
  {
    id: 53,
    question: "A novice investor believes they know more than experts after making one successful trade. What bias is influencing them?",
    options: shuffleArray([
      { text: "Dunning-Kruger Effect", isCorrect: true },
      { text: "Overconfidence Bias", isCorrect: false },
      { text: "Self-serving Bias", isCorrect: false },
      { text: "Superiority Bias", isCorrect: false }
    ]),
    explanation: "The Dunning-Kruger Effect is a cognitive bias where people with low ability at a task overestimate their ability. The novice investor lacks the knowledge to recognize their own limitations after one lucky success.",
    type: "spotlight"
  },
  {
    id: 54,
    question: "A student with little knowledge on a subject assumes they understand it better than the professor. What bias is at work?",
    options: shuffleArray([
      { text: "Dunning-Kruger Effect", isCorrect: true },
      { text: "Overconfidence Bias", isCorrect: false },
      { text: "Superiority Illusion", isCorrect: false },
      { text: "Authority Bias", isCorrect: false }
    ]),
    explanation: "The Dunning-Kruger Effect causes people with limited knowledge to overestimate their expertise. The student lacks sufficient knowledge to recognize the depth of the subject and their own limitations.",
    type: "spotlight"
  },
  {
    id: 55,
    question: "A new driver believes they are highly skilled after passing their driving test, despite a lack of experience. What bias is affecting them?",
    options: shuffleArray([
      { text: "Dunning-Kruger Effect", isCorrect: true },
      { text: "Overconfidence Effect", isCorrect: false },
      { text: "Illusory Superiority", isCorrect: false },
      { text: "Optimism Bias", isCorrect: false }
    ]),
    explanation: "The Dunning-Kruger Effect leads people with limited skills to overestimate their abilities. The new driver lacks the experience to recognize the complexity of driving and their own limitations.",
    type: "spotlight"
  },
  {
    id: 56,
    question: "A beginner chess player assumes they can easily beat experienced opponents. What bias is influencing their confidence?",
    options: shuffleArray([
      { text: "Dunning-Kruger Effect", isCorrect: true },
      { text: "Overconfidence Bias", isCorrect: false },
      { text: "Self-Assessment Bias", isCorrect: false },
      { text: "Illusory Superiority", isCorrect: false }
    ]),
    explanation: "The Dunning-Kruger Effect occurs when people with low ability overestimate their skill level. The beginner chess player lacks the knowledge to understand the game's complexity and their own limitations.",
    type: "spotlight"
  }
];

const ikeaEffectQuestions: Question[] = [
  {
    id: 57,
    question: "Mark values his homemade table more than a store-bought one, even though the latter is better made. What bias is at play?",
    options: shuffleArray([
      { text: "IKEA Effect", isCorrect: true },
      { text: "Endowment Effect", isCorrect: false },
      { text: "Effort Justification", isCorrect: false },
      { text: "Ownership Bias", isCorrect: false }
    ]),
    explanation: "The IKEA Effect is a cognitive bias where people place a disproportionately high value on products they partially created themselves. Mark values his homemade table more because he invested his own labor into making it.",
    type: "ingroup"
  },
  {
    id: 58,
    question: "A chef prefers a dish they cooked themselves over a restaurant's version, despite it tasting the same. What bias is influencing their preference?",
    options: shuffleArray([
      { text: "IKEA Effect", isCorrect: true },
      { text: "Effort Heuristic", isCorrect: false },
      { text: "Endowment Effect", isCorrect: false },
      { text: "Self-Enhancement Bias", isCorrect: false }
    ]),
    explanation: "The IKEA Effect leads people to value things they created more highly. The chef values their own dish more because they invested effort in creating it, regardless of objective quality.",
    type: "ingroup"
  },
  {
    id: 59,
    question: "A child prefers their own school project, believing it is better than professionally made ones. What bias is affecting them?",
    options: shuffleArray([
      { text: "IKEA Effect", isCorrect: true },
      { text: "Effort Justification", isCorrect: false },
      { text: "Self-Serving Bias", isCorrect: false },
      { text: "Overconfidence Effect", isCorrect: false }
    ]),
    explanation: "The IKEA Effect causes people to place higher value on things they created. The child values their school project more because they invested their own effort and creativity into making it.",
    type: "ingroup"
  },
  {
    id: 60,
    question: "A tech user insists their custom-built computer is superior, even if a prebuilt option has better specs. What bias is at work?",
    options: shuffleArray([
      { text: "IKEA Effect", isCorrect: true },
      { text: "Endowment Effect", isCorrect: false },
      { text: "Not-Invented-Here Bias", isCorrect: false },
      { text: "Effort Justification", isCorrect: false }
    ]),
    explanation: "The IKEA Effect leads people to value their own creations more highly than similar or even superior alternatives. The tech user values their custom-built computer more because they assembled it themselves.",
    type: "ingroup"
  }
];

const spotlightEffectQuestions: Question[] = [
  {
    id: 61,
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
    id: 62,
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
  {
    id: 63,
    question: "A speaker believes the audience notices every small mistake in their presentation, even though most people don't. What bias is affecting them?",
    options: shuffleArray([
      { text: "Spotlight Effect", isCorrect: true },
      { text: "Illusion of Transparency", isCorrect: false },
      { text: "Performance Anxiety", isCorrect: false },
      { text: "Egocentric Bias", isCorrect: false }
    ]),
    explanation: "The Spotlight Effect causes people to overestimate how much others notice their mistakes. The speaker is hyper-aware of their own errors, but the audience typically doesn't perceive or remember these small mistakes.",
    type: "spotlight"
  },
  {
    id: 64,
    question: "A new employee thinks everyone is watching their every move at work, even though they aren't. What bias is at work?",
    options: shuffleArray([
      { text: "Spotlight Effect", isCorrect: true },
      { text: "Self-Consciousness Bias", isCorrect: false },
      { text: "Social Anxiety Bias", isCorrect: false },
      { text: "Illusion of Transparency", isCorrect: false }
    ]),
    explanation: "The Spotlight Effect leads people to believe they are being observed more closely than they actually are. The new employee overestimates how much attention coworkers are paying to their actions and mistakes.",
    type: "spotlight"
  }
];

// Combine all bias question arrays into one array
const allQuestions = [
  ...hindsightBiasQuestions,
  ...backfireEffectQuestions,
  ...barnumEffectQuestions,
  ...sunkCostFallacyQuestions,
  ...ingroupBiasQuestions,
  ...beliefBiasQuestions,
  ...groupthinkBiasQuestions,
  ...recallBiasQuestions,
  ...framingBiasQuestions,
  ...bandwagonEffectQuestions,
  ...optimismBiasQuestions,
  ...pessimismBiasQuestions,
  ...anchoringBiasQuestions,
  ...dunningKrugerEffectQuestions,
  ...ikeaEffectQuestions,
  ...spotlightEffectQuestions
];

// Shuffle the questions to randomize the order
const shuffledQuestions = shuffleArray(allQuestions);

// Export the shuffled questions
export const questionData: Question[] = shuffledQuestions;
