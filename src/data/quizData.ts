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

// Array of cognitive bias types
const cognitiveBiasTypes = [
  "Hindsight Bias", 
  "Backfire Effect", 
  "Barnum Effect", 
  "Sunk Cost Fallacy", 
  "Ingroup Bias", 
  "Belief Bias", 
  "Groupthink Bias", 
  "Recall Bias", 
  "Framing Bias", 
  "Bandwagon Effect", 
  "Optimism Bias", 
  "Pessimism Bias", 
  "Diversification Bias", 
  "Salience Bias", 
  "Projection Bias", 
  "Distinction Bias", 
  "Action Bias", 
  "Bundling Bias", 
  "Omission Bias", 
  "First Impression Bias", 
  "Response Bias", 
  "Survivorship Bias", 
  "Restraint Bias", 
  "Recency Bias", 
  "Social Desirability Bias", 
  "Prestige Bias", 
  "Current Mood Bias", 
  "Anchoring Bias", 
  "Spotlight Effect", 
  "Confirmation Bias", 
  "Decoy Option Effect", 
  "Dunning Kruger Bias", 
  "The IKEA Effect", 
  "Sisyphus Effect", 
  "The Cheating Bias", 
  "Gratification Bias", 
  "Scarcity Bias"
];

// Array of cognitive bias types
const allQuizQuestions: Question[] = [
  {
    id: 1,
    question: "After a sports match, Jake claims he knew his team would win all along, even though he expressed doubts before the game. What bias is he displaying?",
    options: shuffleArray([
      { text: "Hindsight Bias", isCorrect: true },
      { text: "Optimism Bias", isCorrect: false },
      { text: "Confirmation Bias", isCorrect: false },
      { text: "Bandwagon Effect", isCorrect: false }
    ]),
    explanation: "Hindsight Bias refers to the tendency to believe we 'knew it all along' after an event has occurred, despite having different views beforehand. Jake exhibits this by claiming he knew the outcome despite initially doubting it.",
    type: "hindsight"
  },
  {
    id: 2,
    question: "After a stock market crash, Linda insists she \"saw it coming,\" despite having invested heavily beforehand. What bias is at play?",
    options: shuffleArray([
      { text: "Hindsight Bias", isCorrect: true },
      { text: "Optimism Bias", isCorrect: false },
      { text: "Recency Bias", isCorrect: false },
      { text: "Anchoring Bias", isCorrect: false }
    ]),
    explanation: "Hindsight Bias causes individuals to think they predicted an event after it happens, even if they were unsure beforehand. Linda displays this bias by claiming she foresaw the crash, even though she had made risky investments.",
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
    explanation: "Hindsight Bias makes people believe they knew the outcome all along. The doctor is displaying this bias by retroactively thinking they predicted the diagnosis correctly, even though their first guess was wrong.",
    type: "hindsight"
  },
  {
    id: 4,
    question: "Mark confidently tells his friend that he \"always knew\" a movie would be a hit, even though he originally doubted it. What bias is at work?",
    options: shuffleArray([
      { text: "Hindsight Bias", isCorrect: true },
      { text: "Self-Serving Bias", isCorrect: false },
      { text: "Confirmation Bias", isCorrect: false },
      { text: "Spotlight Effect", isCorrect: false }
    ]),
    explanation: "Hindsight Bias is demonstrated when someone claims they knew the outcome of an event after it happens, despite initially doubting it. Mark's claim about the movie is an example of this bias.",
    type: "hindsight"
  },
  {
    id: 5,
    question: "Sarah reads an article that contradicts her beliefs about climate change, but instead of reconsidering, she doubles down on her stance. What bias is at play?",
    options: shuffleArray([
      { text: "Backfire Effect", isCorrect: true },
      { text: "Belief Bias", isCorrect: false },
      { text: "Confirmation Bias", isCorrect: false },
      { text: "Response Bias", isCorrect: false }
    ]),
    explanation: "The Backfire Effect occurs when someone strengthens their original beliefs after being presented with contradicting evidence. Sarah exemplifies this by becoming even more convinced of her views despite the contradictory article.",
    type: "backfire"
  },
  {
    id: 6,
    question: "John is shown evidence that a politician he supports was dishonest, but he defends them even more strongly. What bias is influencing him?",
    options: shuffleArray([
      { text: "Backfire Effect", isCorrect: true },
      { text: "Ingroup Bias", isCorrect: false },
      { text: "Prestige Bias", isCorrect: false },
      { text: "Social Desirability Bias", isCorrect: false }
    ]),
    explanation: "The Backfire Effect leads people to hold onto their beliefs more strongly after being confronted with evidence that challenges them. John is displaying this bias by defending the politician despite the dishonest evidence.",
    type: "backfire"
  },
  {
    id: 7,
    question: "Despite clear data showing the Earth is round, Greg becomes even more convinced in his flat-Earth belief after debating online. What bias is this?",
    options: shuffleArray([
      { text: "Backfire Effect", isCorrect: true },
      { text: "Dunning Kruger Bias", isCorrect: false },
      { text: "Current Mood Bias", isCorrect: false },
      { text: "Projection Bias", isCorrect: false }
    ]),
    explanation: "The Backfire Effect occurs when new evidence strengthens rather than weakens a person's beliefs. Greg's belief in flat-Earth becomes stronger even after being presented with contradictory evidence.",
    type: "backfire"
  },
  {
    id: 8,
    question: "A study disproves a medical myth Emily believes in, but instead of accepting the findings, she trusts the myth more. What bias is affecting her?",
    options: shuffleArray([
      { text: "Backfire Effect", isCorrect: true },
      { text: "Anchoring Bias", isCorrect: false },
      { text: "Recall Bias", isCorrect: false },
      { text: "Salience Bias", isCorrect: false }
    ]),
    explanation: "The Backfire Effect causes individuals to reject disconfirming evidence and cling to their original beliefs even more. Emily is exhibiting this bias by trusting the disproven medical myth.",
    type: "backfire"
  },
  {
    id: 9,
    question: "Lisa reads her horoscope and is amazed at how accurately it describes her personality, despite it being vague. What bias is affecting her?",
    options: shuffleArray([
      { text: "Barnum Effect", isCorrect: true },
      { text: "Projection Bias", isCorrect: false },
      { text: "Belief Bias", isCorrect: false },
      { text: "First Impression Bias", isCorrect: false }
    ]),
    explanation: "The Barnum Effect refers to the tendency for people to believe vague, general statements about themselves are highly accurate. Lisa's reaction to the horoscope is an example of this bias.",
    type: "barnum"
  },
  {
    id: 10,
    question: "A fortune teller gives vague statements that feel highly personal to Tim. What bias is at work?",
    options: shuffleArray([
      { text: "Barnum Effect", isCorrect: true },
      { text: "Current Mood Bias", isCorrect: false },
      { text: "Optimism Bias", isCorrect: false },
      { text: "Framing Bias", isCorrect: false }
    ]),
    explanation: "The Barnum Effect causes people to perceive vague, general statements as personally meaningful. Tim's belief in the fortune teller's vague predictions is influenced by this bias.",
    type: "barnum"
  },
  {
    id: 11,
    question: "Alex takes an online personality test and is surprised that the generic results fit him perfectly. What bias is influencing his judgment?",
    options: shuffleArray([
      { text: "Barnum Effect", isCorrect: true },
      { text: "Anchoring Bias", isCorrect: false },
      { text: "Recency Bias", isCorrect: false },
      { text: "Spotlight Effect", isCorrect: false }
    ]),
    explanation: "The Barnum Effect makes people feel that general, ambiguous personality descriptions are specifically about them. Alex's surprise at the test results is an example of this bias at work.",
    type: "barnum"
  },
  {
    id: 12,
    question: "A marketing survey describes customer preferences in a way that feels extremely personal but actually applies to most people. What bias is being used?",
    options: shuffleArray([
      { text: "Barnum Effect", isCorrect: true },
      { text: "Response Bias", isCorrect: false },
      { text: "Distinction Bias", isCorrect: false },
      { text: "Social Desirability Bias", isCorrect: false }
    ]),
    explanation: "The Barnum Effect is used when a broad, vague statement is made to appear personally tailored. The marketing survey relies on this bias by crafting general descriptions that feel personal to most people.",
    type: "barnum"
  },
  {
    id: 13,
    question: "Mark continues investing in a failing business because he has already spent so much money on it. What bias is influencing his decision?",
    options: shuffleArray([
      { text: "Sunk Cost Fallacy", isCorrect: true },
      { text: "Optimism Bias", isCorrect: false },
      { text: "Confirmation Bias", isCorrect: false },
      { text: "Action Bias", isCorrect: false }
    ]),
    explanation: "The Sunk Cost Fallacy occurs when someone continues an endeavor because they've already invested time or money, even though it's no longer viable. Mark is influenced by this bias in his decision to keep investing in the failing business.",
    type: "sunk_cost"
  },
  {
    id: 14,
    question: "Despite a terrible movie, Anna refuses to leave the theater because she already paid for the ticket. What bias is at play?",
    options: shuffleArray([
      { text: "Sunk Cost Fallacy", isCorrect: true },
      { text: "Restraint Bias", isCorrect: false },
      { text: "Current Mood Bias", isCorrect: false },
      { text: "Projection Bias", isCorrect: false }
    ]),
    explanation: "The Sunk Cost Fallacy leads people to continue an activity because of past investments, even if it no longer makes sense. Anna is refusing to leave the movie because she doesn't want to \"waste\" the ticket cost.",
    type: "sunk_cost"
  },
  {
    id: 15,
    question: "Tom keeps playing a mobile game he dislikes because he spent money on in-app purchases. What bias is affecting him?",
    options: shuffleArray([
      { text: "Sunk Cost Fallacy", isCorrect: true },
      { text: "Gratification Bias", isCorrect: false },
      { text: "The IKEA Effect", isCorrect: false },
      { text: "Bundling Bias", isCorrect: false }
    ]),
    explanation: "Tom is demonstrating the Sunk Cost Fallacy by continuing to play a game he dislikes, driven by the money he has already spent, even though it no longer brings him enjoyment.",
    type: "sunk_cost"
  },
  {
    id: 16,
    question: "A company refuses to abandon a failing project because of the millions already spent on it. What bias is influencing them?",
    options: shuffleArray([
      { text: "Sunk Cost Fallacy", isCorrect: true },
      { text: "Groupthink Bias", isCorrect: false },
      { text: "Scarcity Bias", isCorrect: false },
      { text: "Prestige Bias", isCorrect: false }
    ]),
    explanation: "The Sunk Cost Fallacy leads people or organizations to continue investing in a project because of previous investments. The company's decision to stick with the failing project is influenced by this bias.",
    type: "sunk_cost"
  },
  {
    id: 17,
    question: "During a work project, Susan favors ideas from her team members even when the suggestions from another department are better. What bias is she displaying?",
    options: shuffleArray([
      { text: "Ingroup Bias", isCorrect: true },
      { text: "The IKEA Effect", isCorrect: false },
      { text: "Distinction Bias", isCorrect: false },
      { text: "Spotlight Effect", isCorrect: false }
    ]),
    explanation: "This is Ingroup Bias. Susan is favoring ideas from her own team, believing they are superior simply because they belong to the same group.",
    type: "ingroup"
  },
  {
    id: 18,
    question: "A college student believes their university is the best and dismisses all other institutions, even when they have no personal experience with them. What bias is at play?",
    options: shuffleArray([
      { text: "Ingroup Bias", isCorrect: true },
      { text: "Prestige Bias", isCorrect: false },
      { text: "Confirmation Bias", isCorrect: false },
      { text: "Response Bias", isCorrect: false }
    ]),
    explanation: "This is Ingroup Bias. The student is assuming that their university is better, simply because they are part of that group.",
    type: "ingroup"
  },
  {
    id: 19,
    question: "Tom, a lifelong New Yorker, assumes that everyone from New York is more capable than people from other states. What bias is influencing his belief?",
    options: shuffleArray([
      { text: "Ingroup Bias", isCorrect: true },
      { text: "Current Mood Bias", isCorrect: false },
      { text: "Framing Bias", isCorrect: false },
      { text: "Restraint Bias", isCorrect: false }
    ]),
    explanation: "Ingroup Bias is at work here. Tom has a preference for people from his group (New York) over others.",
    type: "ingroup"
  },
  {
    id: 20,
    question: "A manager praises a candidate from their previous company during interviews, even though other applicants have better qualifications. What bias is influencing their decision?",
    options: shuffleArray([
      { text: "Ingroup Bias", isCorrect: true },
      { text: "Belief Bias", isCorrect: false },
      { text: "Optimism Bias", isCorrect: false },
      { text: "Recall Bias", isCorrect: false }
    ]),
    explanation: "This is an example of Ingroup Bias. The manager shows favoritism towards someone from their own past work group, regardless of merit.",
    type: "ingroup"
  },
  {
    id: 21,
    question: "Sarah dismisses a scientific study proving climate change, simply because it contradicts her pre-existing beliefs about the environment. What bias is at play?",
    options: shuffleArray([
      { text: "Belief Bias", isCorrect: true },
      { text: "Confirmation Bias", isCorrect: false },
      { text: "Response Bias", isCorrect: false },
      { text: "The Cheating Bias", isCorrect: false }
    ]),
    explanation: "This is Belief Bias. Sarah is rejecting logical evidence because it challenges her existing beliefs about climate change.",
    type: "belief"
  },
  {
    id: 22,
    question: "Kevin believes a conspiracy theory is true because it supports his political views, even though the evidence against it is strong. What bias is influencing him?",
    options: shuffleArray([
      { text: "Belief Bias", isCorrect: true },
      { text: "Projection Bias", isCorrect: false },
      { text: "Anchoring Bias", isCorrect: false },
      { text: "Decoy Option Effect", isCorrect: false }
    ]),
    explanation: "This is Belief Bias. Kevin is accepting the theory because it aligns with his beliefs, despite lacking rational evidence.",
    type: "belief"
  },
  {
    id: 23,
    question: "A jury member believes the defendant is guilty because they have a criminal history, even though the current case has no solid evidence. What bias is influencing their judgment?",
    options: shuffleArray([
      { text: "Belief Bias", isCorrect: true },
      { text: "First Impression Bias", isCorrect: false },
      { text: "Survivorship Bias", isCorrect: false },
      { text: "Social Desirability Bias", isCorrect: false }
    ]),
    explanation: "This is Belief Bias. The jury member is letting their pre-existing belief about the defendant's character influence their judgment, disregarding the actual evidence.",
    type: "belief"
  },
  {
    id: 24,
    question: "Lily insists that a new health supplement must be effective because it was recommended by a popular influencer, even though the scientific backing is minimal. What bias is at play?",
    options: shuffleArray([
      { text: "Belief Bias", isCorrect: true },
      { text: "Prestige Bias", isCorrect: false },
      { text: "Scarcity Bias", isCorrect: false },
      { text: "Bandwagon Effect", isCorrect: false }
    ]),
    explanation: "Belief Bias is at work here. Lily is more likely to believe the influencer's recommendation because it aligns with her belief in quick health fixes, ignoring the lack of credible evidence.",
    type: "belief"
  },
  {
    id: 25,
    question: "In a corporate meeting, everyone agrees to launch a new product without fully considering the risks, because no one wants to disagree with the CEO. What bias is at play?",
    options: shuffleArray([
      { text: "Groupthink Bias", isCorrect: true },
      { text: "Projection Bias", isCorrect: false },
      { text: "Current Mood Bias", isCorrect: false },
      { text: "Prestige Bias", isCorrect: false }
    ]),
    explanation: "This is Groupthink Bias. The team agrees without dissent to avoid conflict and maintain harmony, disregarding potential risks.",
    type: "groupthink"
  },
  {
    id: 26,
    question: "A team of designers decides on a project idea unanimously, even though a few members have concerns, because they don't want to be the ones to challenge the group. What bias is influencing their decision?",
    options: shuffleArray([
      { text: "Groupthink Bias", isCorrect: true },
      { text: "Omission Bias", isCorrect: false },
      { text: "Anchoring Bias", isCorrect: false },
      { text: "Scarcity Bias", isCorrect: false }
    ]),
    explanation: "Groupthink Bias is influencing them. The members avoid voicing their concerns to maintain group unity, despite their reservations.",
    type: "groupthink"
  },
  {
    id: 27,
    question: "A board of directors rushes to approve a controversial policy without discussing opposing viewpoints, simply to maintain unity. What bias is at work?",
    options: shuffleArray([
      { text: "Groupthink Bias", isCorrect: true },
      { text: "Action Bias", isCorrect: false },
      { text: "Restraint Bias", isCorrect: false },
      { text: "Bundling Bias", isCorrect: false }
    ]),
    explanation: "This is Groupthink Bias. The board is prioritizing consensus over careful deliberation of all perspectives.",
    type: "groupthink"
  },
  {
    id: 28,
    question: "A political party unanimously supports a policy, even though internal reports suggest it may not be effective, because no one wants to appear disloyal. What bias is influencing them?",
    options: shuffleArray([
      { text: "Groupthink Bias", isCorrect: true },
      { text: "Social Desirability Bias", isCorrect: false },
      { text: "The IKEA Effect", isCorrect: false },
      { text: "Distinction Bias", isCorrect: false }
    ]),
    explanation: "Groupthink Bias is at play. The party members are suppressing dissent to preserve group cohesion, ignoring potential flaws in the policy.",
    type: "groupthink"
  },
  {
    id: 29,
    question: "A person recalls only the times they were complimented for their work and forgets all the instances they received constructive criticism. What bias is influencing their memory?",
    options: shuffleArray([
      { text: "Recall Bias", isCorrect: true },
      { text: "Hindsight Bias", isCorrect: false },
      { text: "First Impression Bias", isCorrect: false },
      { text: "Current Mood Bias", isCorrect: false }
    ]),
    explanation: "This is Recall Bias. The person is more likely to remember positive experiences while ignoring or forgetting negative ones.",
    type: "recall"
  },
  {
    id: 30,
    question: "After a heated argument, Mike only remembers the hurtful things his friend said, forgetting the positive things they had previously discussed. What bias is affecting his perception?",
    options: shuffleArray([
      { text: "Recall Bias", isCorrect: true },
      { text: "Projection Bias", isCorrect: false },
      { text: "Response Bias", isCorrect: false },
      { text: "Distinction Bias", isCorrect: false }
    ]),
    explanation: "This is Recall Bias. Mike's memory is skewed toward remembering the negative aspects of the conversation and overlooking the positive ones.",
    type: "recall"
  },
  {
    id: 31,
    question: "A doctor only remembers the successful outcomes of a certain treatment and overlooks cases where the treatment failed. What bias is influencing their recall?",
    options: shuffleArray([
      { text: "Recall Bias", isCorrect: true },
      { text: "Confirmation Bias", isCorrect: false },
      { text: "Anchoring Bias", isCorrect: false },
      { text: "Optimism Bias", isCorrect: false }
    ]),
    explanation: "Recall Bias is affecting the doctor. They are remembering the positive cases more vividly and ignoring the unsuccessful ones.",
    type: "recall"
  },
  {
    id: 32,
    question: "Sarah is convinced she always picks the best restaurants because she only remembers the great dining experiences, forgetting the times she had bad meals. What bias is at play?",
    options: shuffleArray([
      { text: "Recall Bias", isCorrect: true },
      { text: "Survivorship Bias", isCorrect: false },
      { text: "Salience Bias", isCorrect: false },
      { text: "Decoy Option Effect", isCorrect: false }
    ]),
    explanation: "This is Recall Bias. Sarah's memory is distorted by her tendency to focus on the positive experiences and ignore the negative ones.",
    type: "recall"
  },
  {
    id: 33,
    question: "A politician presents a health care bill as \"providing affordable coverage for all\" rather than \"raising taxes to fund health care.\" What bias is at play?",
    options: shuffleArray([
      { text: "Framing Bias", isCorrect: true },
      { text: "Projection Bias", isCorrect: false },
      { text: "Confirmation Bias", isCorrect: false },
      { text: "Response Bias", isCorrect: false }
    ]),
    explanation: "This is Framing Bias, where the way information is presented affects how it is perceived. The politician is framing the bill in a way that emphasizes the positive outcome rather than the cost, influencing how people view it.",
    type: "framing"
  },
  {
    id: 34,
    question: "A company advertises a product as \"95% effective\" rather than \"5% ineffective.\" What bias is influencing the consumer's perception?",
    options: shuffleArray([
      { text: "Framing Bias", isCorrect: true },
      { text: "Anchoring Bias", isCorrect: false },
      { text: "Decoy Option Effect", isCorrect: false },
      { text: "Salience Bias", isCorrect: false }
    ]),
    explanation: "This is Framing Bias. The positive framing of \"95% effective\" makes the product appear more appealing, while the negative framing of \"5% ineffective\" would have made it seem less favorable, even though both phrases convey the same information.",
    type: "framing"
  },
  {
    id: 35,
    question: "A doctor says a surgery has a \"90% survival rate\" instead of \"10% mortality rate.\" What bias is influencing the patient's decision?",
    options: shuffleArray([
      { text: "Framing Bias", isCorrect: true },
      { text: "Optimism Bias", isCorrect: false },
      { text: "Current Mood Bias", isCorrect: false },
      { text: "Belief Bias", isCorrect: false }
    ]),
    explanation: "This is Framing Bias. The survival rate framing sounds more positive and reassuring, even though both statements describe the same risk, leading the patient to feel more comfortable about the surgery.",
    type: "framing"
  },
  {
    id: 36,
    question: "A real estate agent describes a house as \"charming and well-loved\" instead of \"small and outdated.\" What bias is at work?",
    options: shuffleArray([
      { text: "Framing Bias", isCorrect: true },
      { text: "The IKEA Effect", isCorrect: false },
      { text: "Prestige Bias", isCorrect: false },
      { text: "First Impression Bias", isCorrect: false }
    ]),
    explanation: "This is Framing Bias. The real estate agent is framing the house in a more positive light, emphasizing the charm rather than the negative aspects, which can influence how potential buyers view the property.",
    type: "framing"
  },
  {
    id: 37,
    question: "John starts buying stock in a popular tech company just because everyone else is doing it, despite not understanding the market. What bias is influencing him?",
    options: shuffleArray([
      { text: "Bandwagon Effect", isCorrect: true },
      { text: "Framing Bias", isCorrect: false },
      { text: "Anchoring Bias", isCorrect: false },
      { text: "Scarcity Bias", isCorrect: false }
    ]),
    explanation: "This is the Bandwagon Effect. John is making his investment decision based on the actions of others rather than independent research or analysis, a classic example of following the crowd.",
    type: "bandwagon"
  },
  {
    id: 38,
    question: "A person begins wearing a trendy fashion item, even though they initially thought it was ridiculous, simply because everyone else is wearing it. What bias is at play?",
    options: shuffleArray([
      { text: "Bandwagon Effect", isCorrect: true },
      { text: "First Impression Bias", isCorrect: false },
      { text: "Salience Bias", isCorrect: false },
      { text: "The IKEA Effect", isCorrect: false }
    ]),
    explanation: "This is the Bandwagon Effect. The person's change in behavior is influenced by the popularity of the fashion trend rather than their original opinion.",
    type: "bandwagon"
  },
  {
    id: 39,
    question: "Voters support a candidate simply because they see others in their social circle doing the same, even though they haven't fully researched the candidate. What bias is affecting their choice?",
    options: shuffleArray([
      { text: "Bandwagon Effect", isCorrect: true },
      { text: "Social Desirability Bias", isCorrect: false },
      { text: "Projection Bias", isCorrect: false },
      { text: "Belief Bias", isCorrect: false }
    ]),
    explanation: "This is the Bandwagon Effect. The voter is influenced by the collective behavior of others, which leads them to follow the majority view without independent assessment.",
    type: "bandwagon"
  },
  {
    id: 40,
    question: "A person starts using a new smartphone brand because it's becoming more popular, despite being loyal to a different brand for years. What bias is influencing their decision?",
    options: shuffleArray([
      { text: "Bandwagon Effect", isCorrect: true },
      { text: "Current Mood Bias", isCorrect: false },
      { text: "Prestige Bias", isCorrect: false },
      { text: "Distinction Bias", isCorrect: false }
    ]),
    explanation: "This is the Bandwagon Effect. The person is adopting a popular trend, influenced by the increasing popularity of the brand, rather than staying loyal to their previous choice.",
    type: "bandwagon"
  },
  {
    id: 41,
    question: "Tom refuses to buy car insurance because he believes he is highly unlikely to get into an accident. What bias is influencing his decision?",
    options: shuffleArray([
      { text: "Optimism Bias", isCorrect: true },
      { text: "Action Bias", isCorrect: false },
      { text: "Response Bias", isCorrect: false },
      { text: "Anchoring Bias", isCorrect: false }
    ]),
    explanation: "This is Optimism Bias. Tom is overly optimistic about his own safety, underestimating the likelihood of an accident occurring, which leads him to forgo insurance.",
    type: "optimism"
  },
  {
    id: 42,
    question: "A gambler keeps betting despite a losing streak, thinking they are \"due for a win\" in the next round. What bias is at play?",
    options: shuffleArray([
      { text: "Optimism Bias", isCorrect: true },
      { text: "Recall Bias", isCorrect: false },
      { text: "Bundling Bias", isCorrect: false },
      { text: "Framing Bias", isCorrect: false }
    ]),
    explanation: "This is Optimism Bias. The gambler is overly hopeful about the future outcome, believing that the odds are somehow in their favor, even though the likelihood of winning remains the same.",
    type: "optimism"
  },
  {
    id: 43,
    question: "A startup founder is overly confident that their new business will succeed, even though statistics show most startups fail. What bias is influencing them?",
    options: shuffleArray([
      { text: "Optimism Bias", isCorrect: true },
      { text: "Prestige Bias", isCorrect: false },
      { text: "The IKEA Effect", isCorrect: false },
      { text: "Groupthink Bias", isCorrect: false }
    ]),
    explanation: "This is Optimism Bias. The founder is underestimating the risks and overestimating the chances of success, which is common in optimistic entrepreneurs.",
    type: "optimism"
  },
  {
    id: 44,
    question: "An athlete believes they will perform well in a tournament despite not having trained enough. What bias is at work?",
    options: shuffleArray([
      { text: "Optimism Bias", isCorrect: true },
      { text: "Distinction Bias", isCorrect: false },
      { text: "Survivorship Bias", isCorrect: false },
      { text: "First Impression Bias", isCorrect: false }
    ]),
    explanation: "This is Optimism Bias. The athlete is overly confident in their abilities and expects a good outcome despite insufficient preparation, which is a typical example of optimism bias.",
    type: "optimism"
  },
  {
    id: 45,
    question: "Despite strong economic indicators, Linda believes that the stock market will crash soon and refuses to invest. What bias is influencing her decision?",
    options: shuffleArray([
      { text: "Pessimism Bias", isCorrect: true },
      { text: "Recall Bias", isCorrect: false },
      { text: "Framing Bias", isCorrect: false },
      { text: "Anchoring Bias", isCorrect: false }
    ]),
    explanation: "This is Pessimism Bias. Linda is overly focused on negative outcomes and underestimates the positive trends, which leads her to avoid making investments.",
    type: "pessimism"
  },
  {
    id: 46,
    question: "A person avoids flying because they believe a plane crash is more likely, even though flying is statistically safer than driving. What bias is affecting them?",
    options: shuffleArray([
      { text: "Pessimism Bias", isCorrect: true },
      { text: "Action Bias", isCorrect: false },
      { text: "Response Bias", isCorrect: false },
      { text: "The IKEA Effect", isCorrect: false }
    ]),
    explanation: "This is Pessimism Bias. The person is overestimating the likelihood of a negative event (a crash) and is more focused on it than on the actual low probability of such an event.",
    type: "pessimism"
  },
  {
    id: 47,
    question: "After a single bad experience at a restaurant, Mike assumes all their food must be terrible. What bias is at play?",
    options: shuffleArray([
      { text: "Pessimism Bias", isCorrect: true },
      { text: "Scarcity Bias", isCorrect: false },
      { text: "First Impression Bias", isCorrect: false },
      { text: "Projection Bias", isCorrect: false }
    ]),
    explanation: "This is Pessimism Bias. Mike is allowing one negative experience to cloud his judgment and assumes all future experiences will be similarly bad.",
    type: "pessimism"
  },
  {
    id: 48,
    question: "A student assumes they will fail an exam, even though they studied hard and know the material. What bias is influencing their confidence?",
    options: shuffleArray([
      { text: "Pessimism Bias", isCorrect: true },
      { text: "Current Mood Bias", isCorrect: false }
    ]),
    explanation: "This is Pessimism Bias. The student is overly focused on the possibility of failure and underestimates their own abilities, leading to low confidence.",
    type: "pessimism"
  },
  {
    id: 57,
    question: "Jane assumes that everyone loves her favorite TV show as much as she does. What bias is she exhibiting?",
    options: shuffleArray([
      { text: "Projection Bias", isCorrect: true },
      { text: "Belief Bias", isCorrect: false },
      { text: "Confirmation Bias", isCorrect: false },
      { text: "Anchoring Bias", isCorrect: false }
    ]),
    explanation: "Projection Bias occurs when someone assumes others have the same feelings, preferences, or thoughts as they do. Jane is projecting her own enjoyment of the TV show onto others, believing they will share her enthusiasm.",
    type: "projection"
  },
  {
    id: 58,
    question: "A manager believes all employees are motivated by the same rewards they are. What bias is at work?",
    options: shuffleArray([
      { text: "Projection Bias", isCorrect: true },
      { text: "Ingroup Bias", isCorrect: false },
      { text: "Prestige Bias", isCorrect: false },
      { text: "Social Desirability Bias", isCorrect: false }
    ]),
    explanation: "Projection Bias leads people to assume others think and feel the same way they do. The manager is projecting their own motivational triggers onto their employees, failing to recognize individual differences.",
    type: "projection"
  },
  {
    id: 59,
    question: "A parent assumes their child enjoys the same hobbies they did as a kid. What bias is influencing them?",
    options: shuffleArray([
      { text: "Projection Bias", isCorrect: true },
      { text: "Recall Bias", isCorrect: false },
      { text: "First Impression Bias", isCorrect: false },
      { text: "Optimism Bias", isCorrect: false }
    ]),
    explanation: "Projection Bias causes people to project their own experiences and preferences onto others. The parent is assuming their child will have the same interests they had in childhood.",
    type: "projection"
  },
  {
    id: 60,
    question: "A person planning a party assumes everyone will enjoy the same type of music they like. What bias is at play?",
    options: shuffleArray([
      { text: "Projection Bias", isCorrect: true },
      { text: "Current Mood Bias", isCorrect: false },
      { text: "Bandwagon Effect", isCorrect: false },
      { text: "Distinction Bias", isCorrect: false }
    ]),
    explanation: "Projection Bias occurs when someone assumes others share their personal preferences. The party planner is projecting their own musical tastes onto the guests without considering individual differences.",
    type: "projection"
  },
  {
    id: 61,
    question: "While shopping, Maria compares two phones side by side and fixates on minor differences. What bias is influencing her?",
    options: shuffleArray([
      { text: "Distinction Bias", isCorrect: true },
      { text: "Anchoring Bias", isCorrect: false },
      { text: "Salience Bias", isCorrect: false },
      { text: "Framing Bias", isCorrect: false }
    ]),
    explanation: "Distinction Bias occurs when someone focuses on small differences between options while comparing them side by side, overemphasizing these differences while ignoring their overall similarities.",
    type: "distinction"
  },
  {
    id: 62,
    question: "A tourist picks a slightly larger hotel room, even though they wouldn't notice the difference in real life. What bias is at play?",
    options: shuffleArray([
      { text: "Distinction Bias", isCorrect: true },
      { text: "Optimism Bias", isCorrect: false },
      { text: "The IKEA Effect", isCorrect: false },
      { text: "Scarcity Bias", isCorrect: false }
    ]),
    explanation: "This is Distinction Bias. The tourist fixates on the perceived difference in room size, even though the actual difference wouldn't have a significant impact on their experience.",
    type: "distinction"
  },
  {
    id: 63,
    question: "A job applicant chooses a slightly higher-paying offer, even though they would be happier at the lower-paying job. What bias is affecting their decision?",
    options: shuffleArray([
      { text: "Distinction Bias", isCorrect: true },
      { text: "Current Mood Bias", isCorrect: false },
      { text: "Response Bias", isCorrect: false },
      { text: "Projection Bias", isCorrect: false }
    ]),
    explanation: "This demonstrates Distinction Bias. The applicant focuses on the higher salary, ignoring the fact that their overall happiness and satisfaction would be greater in the lower-paying job.",
    type: "distinction"
  },
  {
    id: 64,
    question: "A consumer agonizes over tiny differences between two products, ignoring their overall similarity. What bias is at work?",
    options: shuffleArray([
      { text: "Distinction Bias", isCorrect: true },
      { text: "Belief Bias", isCorrect: false },
      { text: "First Impression Bias", isCorrect: false },
      { text: "Recall Bias", isCorrect: false }
    ]),
    explanation: "This is Distinction Bias. The consumer fixates on insignificant differences, making a decision based on those rather than considering the overall similarity and value of both products.",
    type: "distinction"
  },
  {
    id: 65,
    question: "A soccer coach substitutes a player during a losing match just to \"do something,\" even though the strategy was fine. What bias is driving his behavior?",
    options: shuffleArray([
      { text: "Action Bias", isCorrect: true },
      { text: "Optimism Bias", isCorrect: false },
      { text: "Framing Bias", isCorrect: false },
      { text: "Recall Bias", isCorrect: false }
    ]),
    explanation: "Action Bias leads people to take action even when doing nothing would be more appropriate. The coach makes a substitution just to feel like they're responding to the situation, even though the current strategy is working.",
    type: "action"
  },
  {
    id: 66,
    question: "A driver honks repeatedly in traffic, believing it will make cars move faster. What bias is influencing their action?",
    options: shuffleArray([
      { text: "Action Bias", isCorrect: true },
      { text: "Current Mood Bias", isCorrect: false },
      { text: "Response Bias", isCorrect: false },
      { text: "Projection Bias", isCorrect: false }
    ]),
    explanation: "This demonstrates Action Bias where the driver feels compelled to do something (honking) even though it won't improve the situation. The need to take action overrides logical thinking.",
    type: "action"
  },
  {
    id: 67,
    question: "A business leader launches unnecessary new initiatives to appear proactive. What bias is at work?",
    options: shuffleArray([
      { text: "Action Bias", isCorrect: true },
      { text: "Prestige Bias", isCorrect: false },
      { text: "The IKEA Effect", isCorrect: false },
      { text: "Groupthink Bias", isCorrect: false }
    ]),
    explanation: "Action Bias is evident when the leader initiates new projects just to appear active, even when such actions aren't necessary or beneficial for the organization.",
    type: "action"
  },
  {
    id: 68,
    question: "A patient demands antibiotics for a viral infection, assuming any treatment is better than none. What bias is influencing them?",
    options: shuffleArray([
      { text: "Action Bias", isCorrect: true },
      { text: "Belief Bias", isCorrect: false },
      { text: "Scarcity Bias", isCorrect: false },
      { text: "Distinction Bias", isCorrect: false }
    ]),
    explanation: "This shows Action Bias where the patient feels the need to take some action (demanding antibiotics) even though inaction would be more appropriate for a viral infection.",
    type: "action"
  }
];

// Export the current set of questions as questionData for backward compatibility
export const questionData = allQuizQuestions;

// Function to get random questions for the quiz
export const getRandomQuestions = (count: number = 10): Question[] => {
  // Shuffle the questions and return the requested number
  return shuffleArray(allQuizQuestions).slice(0, count);
};

export { allQuizQuestions, shuffleArray, cognitiveBiasTypes };
