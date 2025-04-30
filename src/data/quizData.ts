import { Question } from "../types/quiz";

// Array of cognitive bias types
export const cognitiveBiasTypes = [
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

// Array of cognitive bias types
const questionData: Question[] = [
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
  },
  {
    id: 69,
    question: "A consumer buys a bundle of products at a discount, even though they only wanted one item. What bias is influencing them?",
    options: shuffleArray([
      { text: "Bundling Bias", isCorrect: true },
      { text: "Action Bias", isCorrect: false },
      { text: "Scarcity Bias", isCorrect: false },
      { text: "Distinction Bias", isCorrect: false }
    ]),
    explanation: "The consumer is drawn to the perceived value of the bundle, making them purchase extra items they don't need just to get a deal.",
    type: "bundling"
  },
  {
    id: 70,
    question: "A person buys a subscription to a streaming service because it comes with several other services, even though they only wanted access to one. What bias is at play?",
    options: shuffleArray([
      { text: "Bundling Bias", isCorrect: true },
      { text: "The IKEA Effect", isCorrect: false },
      { text: "Framing Bias", isCorrect: false },
      { text: "Projection Bias", isCorrect: false }
    ]),
    explanation: "The allure of getting more services bundled together makes the person overlook their actual needs, leading to a purchase they wouldn't have made if the services were sold separately.",
    type: "bundling"
  },
  {
    id: 71,
    question: "A shopper picks up a deal where they get 3 items for the price of 2, even though they don't actually need the third item. What bias is affecting their decision?",
    options: shuffleArray([
      { text: "Bundling Bias", isCorrect: true },
      { text: "Anchoring Bias", isCorrect: false },
      { text: "Current Mood Bias", isCorrect: false },
      { text: "Response Bias", isCorrect: false }
    ]),
    explanation: "The shopper perceives the bundle as a good deal and is influenced to buy more than necessary because of the added perceived value.",
    type: "bundling"
  },
  {
    id: 72,
    question: "A person buys a fast-food meal combo even though they don't want the fries or drink, simply because it's cheaper than ordering individually. What bias is at work?",
    options: shuffleArray([
      { text: "Bundling Bias", isCorrect: true },
      { text: "Optimism Bias", isCorrect: false },
      { text: "Recall Bias", isCorrect: false },
      { text: "First Impression Bias", isCorrect: false }
    ]),
    explanation: "The person is influenced by the bundle's perceived value, making them purchase extra items they don't need just because it seems like a better deal.",
    type: "bundling"
  },
  {
    id: 73,
    question: "A doctor avoids recommending a risky but potentially life-saving surgery, fearing the side effects might harm the patient. What bias is at play?",
    options: shuffleArray([
      { text: "Omission Bias", isCorrect: true },
      { text: "Action Bias", isCorrect: false },
      { text: "Belief Bias", isCorrect: false },
      { text: "Restraint Bias", isCorrect: false }
    ]),
    explanation: "The doctor is showing Omission Bias, which is the tendency to prefer inaction over action because the negative consequences of taking action are more salient. The doctor is avoiding recommending the surgery because of the fear of potential side effects rather than the benefits.",
    type: "omission"
  },
  {
    id: 74,
    question: "A parent decides not to vaccinate their child due to concerns over the side effects, even though the disease could be far worse. What bias is influencing their decision?",
    options: shuffleArray([
      { text: "Omission Bias", isCorrect: true },
      { text: "Current Mood Bias", isCorrect: false },
      { text: "Projection Bias", isCorrect: false },
      { text: "Distinction Bias", isCorrect: false }
    ]),
    explanation: "This is Omission Bias because the parent is avoiding action (vaccination) due to the perceived harm from potential side effects, even though inaction might result in greater harm.",
    type: "omission"
  },
  {
    id: 75,
    question: "A judge hesitates to rule against a popular political figure, thinking it might negatively impact their career. What bias is influencing their decision?",
    options: shuffleArray([
      { text: "Omission Bias", isCorrect: true },
      { text: "Prestige Bias", isCorrect: false },
      { text: "Social Desirability Bias", isCorrect: false },
      { text: "Groupthink Bias", isCorrect: false }
    ]),
    explanation: "The judge is exhibiting Omission Bias by not taking action (ruling against the figure) out of concern for the possible repercussions of doing so, favoring inaction to avoid perceived consequences.",
    type: "omission"
  },
  {
    id: 76,
    question: "A manager refuses to make a decision about firing an employee, afraid of the backlash, even though the employee is underperforming. What bias is affecting the decision?",
    options: shuffleArray([
      { text: "Omission Bias", isCorrect: true },
      { text: "Anchoring Bias", isCorrect: false },
      { text: "The IKEA Effect", isCorrect: false },
      { text: "Framing Bias", isCorrect: false }
    ]),
    explanation: "This is Omission Bias because the manager avoids making a decision (firing) to prevent possible negative outcomes, even though inaction might result in continued poor performance.",
    type: "omission"
  },
  {
    id: 77,
    question: "During an interview, Sarah immediately assumes her candidate is unqualified because of their casual attire, even though they have a strong resume. What bias is at play?",
    options: shuffleArray([
      { text: "First Impression Bias", isCorrect: true },
      { text: "Response Bias", isCorrect: false },
      { text: "Projection Bias", isCorrect: false },
      { text: "Recall Bias", isCorrect: false }
    ]),
    explanation: "Sarah is exhibiting First Impression Bias, where her initial perception based on the candidate's attire influences her judgment, overriding objective qualifications.",
    type: "first_impression"
  },
  {
    id: 78,
    question: "David meets a new coworker and immediately thinks they are unfriendly because of their serious demeanor, despite no evidence to support this. What bias is at work?",
    options: shuffleArray([
      { text: "First Impression Bias", isCorrect: true },
      { text: "Current Mood Bias", isCorrect: false },
      { text: "Anchoring Bias", isCorrect: false },
      { text: "Distinction Bias", isCorrect: false }
    ]),
    explanation: "David is showing First Impression Bias, where his first perception of the coworker's demeanor influences his opinion of them, without considering future interactions or evidence.",
    type: "first_impression"
  },
  {
    id: 79,
    question: "At a party, Maria assumes someone is boring because they don't engage in lively conversations, even though they could have interesting ideas. What bias is influencing her?",
    options: shuffleArray([
      { text: "First Impression Bias", isCorrect: true },
      { text: "Belief Bias", isCorrect: false },
      { text: "The IKEA Effect", isCorrect: false },
      { text: "Scarcity Bias", isCorrect: false }
    ]),
    explanation: "This is First Impression Bias, where Maria's first interaction leads her to form a judgment about the person's character, ignoring the possibility of deeper qualities.",
    type: "first_impression"
  },
  {
    id: 80,
    question: "A hiring manager dismisses a candidate after an initial handshake felt awkward, despite their qualifications being excellent. What bias is affecting the decision?",
    options: shuffleArray([
      { text: "First Impression Bias", isCorrect: true },
      { text: "Prestige Bias", isCorrect: false },
      { text: "Groupthink Bias", isCorrect: false },
      { text: "Social Desirability Bias", isCorrect: false }
    ]),
    explanation: "The manager is influenced by First Impression Bias, where an initial, minor detail (awkward handshake) shapes the overall judgment, overshadowing the candidate's qualifications.",
    type: "first_impression"
  },
  {
    id: 81,
    question: "In a survey, a respondent marks \"strongly agree\" with every question, regardless of the topic, to please the researcher. What bias is at work?",
    options: shuffleArray([
      { text: "Response Bias", isCorrect: true },
      { text: "Social Desirability Bias", isCorrect: false },
      { text: "Current Mood Bias", isCorrect: false },
      { text: "Projection Bias", isCorrect: false }
    ]),
    explanation: "The respondent is showing Response Bias, where their answers are influenced by the desire to please the researcher, rather than providing genuine answers.",
    type: "response"
  },
  {
    id: 82,
    question: "A person exaggerates their voting tendencies in a survey because they want to appear more politically active. What bias is influencing their response?",
    options: shuffleArray([
      { text: "Response Bias", isCorrect: true },
      { text: "Framing Bias", isCorrect: false },
      { text: "First Impression Bias", isCorrect: false },
      { text: "The IKEA Effect", isCorrect: false }
    ]),
    explanation: "This is Response Bias, where the person's answers are influenced by a desire to appear more favorable or socially acceptable, rather than providing truthful responses.",
    type: "response"
  },
  {
    id: 83,
    question: "In a customer satisfaction survey, users only respond positively because they fear the consequences of giving negative feedback. What bias is at play?",
    options: shuffleArray([
      { text: "Response Bias", isCorrect: true },
      { text: "Optimism Bias", isCorrect: false },
      { text: "Recall Bias", isCorrect: false },
      { text: "Distinction Bias", isCorrect: false }
    ]),
    explanation: "The customers are exhibiting Response Bias, where their answers are affected by fear of repercussions, causing them to answer in a way they think is socially desirable.",
    type: "response"
  },
  {
    id: 84,
    question: "A person answers a health survey in a way that they believe will make them appear healthier, even though they don't follow the habits they claim. What bias is affecting their answers?",
    options: shuffleArray([
      { text: "Response Bias", isCorrect: true },
      { text: "Anchoring Bias", isCorrect: false },
      { text: "Prestige Bias", isCorrect: false },
      { text: "Scarcity Bias", isCorrect: false }
    ]),
    explanation: "This is Response Bias, where the person is giving responses that portray them in a more positive light, rather than providing truthful answers.",
    type: "response"
  },
  {
    id: 85,
    question: "A student looks at successful startup stories and assumes they can also succeed in business, ignoring the many failed startups. What bias is at play?",
    options: shuffleArray([
      { text: "Survivorship Bias", isCorrect: true },
      { text: "Optimism Bias", isCorrect: false },
      { text: "The IKEA Effect", isCorrect: false },
      { text: "Projection Bias", isCorrect: false }
    ]),
    explanation: "The student is showing Survivorship Bias, focusing only on the successful businesses and ignoring the many that failed, leading to an unrealistic assessment of the likelihood of success.",
    type: "survivorship"
  },
  {
    id: 86,
    question: "A researcher only studies companies that survived the pandemic, disregarding those that went bankrupt. What bias is influencing the research?",
    options: shuffleArray([
      { text: "Survivorship Bias", isCorrect: true },
      { text: "Current Mood Bias", isCorrect: false },
      { text: "Recall Bias", isCorrect: false },
      { text: "Distinction Bias", isCorrect: false }
    ]),
    explanation: "This is Survivorship Bias, where the researcher focuses only on surviving companies, creating a distorted picture by ignoring the failures that are just as relevant.",
    type: "survivorship"
  },
  {
    id: 87,
    question: "After reading only success stories of investors, Greg assumes investing in the stock market is always profitable, forgetting about those who lost money. What bias is influencing his thinking?",
    options: shuffleArray([
      { text: "Survivorship Bias", isCorrect: true },
      { text: "Framing Bias", isCorrect: false },
      { text: "Anchoring Bias", isCorrect: false },
      { text: "Scarcity Bias", isCorrect: false }
    ]),
    explanation: "Greg is experiencing Survivorship Bias, where he is only looking at the winners and neglecting to consider the losses and failures that are part of the reality.",
    type: "survivorship"
  },
  {
    id: 88,
    question: "During a study on military veterans, the researcher only interviews those who returned from combat and ignores the veterans who did not return. What bias is at work?",
    options: shuffleArray([
      { text: "Survivorship Bias", isCorrect: true },
      { text: "Response Bias", isCorrect: false },
      { text: "Omission Bias", isCorrect: false },
      { text: "First Impression Bias", isCorrect: false }
    ]),
    explanation: "The researcher is demonstrating Survivorship Bias, as they are excluding the non-survivors, which leads to a skewed perspective of the experience.",
    type: "survivorship"
  },
  {
    id: 89,
    question: "A person believes they are in better control of their eating habits than they actually are, simply because they restrict themselves from eating junk food during the week. What bias is at play?",
    options: shuffleArray([
      { text: "Restraint Bias", isCorrect: true },
      { text: "Action Bias", isCorrect: false },
      { text: "Current Mood Bias", isCorrect: false },
      { text: "Framing Bias", isCorrect: false }
    ]),
    explanation: "This is Restraint Bias, where the person overestimates their ability to control their behavior (eating) because they restrict themselves in certain situations, but might still indulge when given the opportunity.",
    type: "restraint"
  },
  {
    id: 90,
    question: "After sticking to a strict budget for a month, Emily believes she has excellent financial control, even though she has not faced challenging spending situations. What bias is influencing her?",
    options: shuffleArray([
      { text: "Restraint Bias", isCorrect: true },
      { text: "Optimism Bias", isCorrect: false },
      { text: "Bundling Bias", isCorrect: false },
      { text: "Projection Bias", isCorrect: false }
    ]),
    explanation: "Emily is displaying Restraint Bias, where she overestimates her ability to control her spending due to a period of self-imposed restraint, ignoring how she might act in less controlled situations.",
    type: "restraint"
  },
  {
    id: 91,
    question: "Mark feels confident he can quit smoking after going a few days without a cigarette, even though he hasn't yet encountered strong triggers. What bias is at play?",
    options: shuffleArray([
      { text: "Restraint Bias", isCorrect: true },
      { text: "Recall Bias", isCorrect: false },
      { text: "First Impression Bias", isCorrect: false },
      { text: "The IKEA Effect", isCorrect: false }
    ]),
    explanation: "This is Restraint Bias, where Mark is overestimating his self-control in quitting smoking due to his initial success, not accounting for future challenges.",
    type: "restraint"
  },
  {
    id: 92,
    question: "A driver who follows the speed limit for a week believes they are always a safe driver, even though they rarely drive in challenging conditions. What bias is influencing their self-assessment?",
    options: shuffleArray([
      { text: "Restraint Bias", isCorrect: true },
      { text: "Survivorship Bias", isCorrect: false },
      { text: "Distinction Bias", isCorrect: false },
      { text: "Salience Bias", isCorrect: false }
    ]),
    explanation: "This is Restraint Bias, where the driver assumes their self-control (driving safely) extends to all situations, even though they haven't been tested under more challenging conditions.",
    type: "restraint"
  },
  {
    id: 93,
    question: "A judge gives a harsher sentence because they just reviewed a particularly brutal case before this one. What bias is influencing their decision?",
    options: shuffleArray([
      { text: "Recency Bias", isCorrect: true },
      { text: "Belief Bias", isCorrect: false },
      { text: "Omission Bias", isCorrect: false },
      { text: "Response Bias", isCorrect: false }
    ]),
    explanation: "Recency bias refers to the tendency to give disproportionate weight to recent events or experiences. In this case, the judge's harsher decision is influenced by the recent brutal case they reviewed, overshadowing the facts of the current case.",
    type: "recency"
  },
  {
    id: 94,
    question: "A student assumes the last few questions on a test reflect the entire difficulty level. What bias is at play?",
    options: shuffleArray([
      { text: "Recency Bias", isCorrect: true },
      { text: "Framing Bias", isCorrect: false },
      { text: "Projection Bias", isCorrect: false },
      { text: "The Cheating Bias", isCorrect: false }
    ]),
    explanation: "The student is giving undue weight to the most recent questions, assuming they reflect the overall difficulty of the test, which is an example of recency bias.",
    type: "recency"
  },
  {
    id: 95,
    question: "An investor makes decisions based on the latest news rather than long-term trends. What bias is influencing them?",
    options: shuffleArray([
      { text: "Recency Bias", isCorrect: true },
      { text: "Action Bias", isCorrect: false },
      { text: "Anchoring Bias", isCorrect: false },
      { text: "Scarcity Bias", isCorrect: false }
    ]),
    explanation: "The investor is allowing recent news to cloud their judgment, prioritizing it over a broader, more balanced perspective. This is a classic case of recency bias.",
    type: "recency"
  },
  {
    id: 96,
    question: "A coach selects a player for a game based on their most recent performance, ignoring long-term consistency. What bias is at work?",
    options: shuffleArray([
      { text: "Recency Bias", isCorrect: true },
      { text: "First Impression Bias", isCorrect: false },
      { text: "The IKEA Effect", isCorrect: false },
      { text: "Survivorship Bias", isCorrect: false }
    ]),
    explanation: "The coach is focusing on the most recent performance of the player, disregarding their previous consistent performances. This demonstrates recency bias, where recent events overshadow the bigger picture.",
    type: "recency"
  },
  {
    id: 97,
    question: "During a job interview, Carla claims she volunteers every weekend, even though she rarely does. What bias is affecting her response?",
    options: shuffleArray([
      { text: "Social Desirability Bias", isCorrect: true },
      { text: "Response Bias", isCorrect: false },
      { text: "Projection Bias", isCorrect: false },
      { text: "First Impression Bias", isCorrect: false }
    ]),
    explanation: "Social desirability bias occurs when people present themselves in a manner that will be viewed favorably by others. Carla's exaggeration of her volunteer work reflects this bias.",
    type: "social_desirability"
  },
  {
    id: 98,
    question: "A survey respondent exaggerates how often they recycle to appear environmentally conscious. What bias is at play?",
    options: shuffleArray([
      { text: "Social Desirability Bias", isCorrect: true },
      { text: "Current Mood Bias", isCorrect: false },
      { text: "Recall Bias", isCorrect: false },
      { text: "Omission Bias", isCorrect: false }
    ]),
    explanation: "The respondent is giving an answer that aligns with socially accepted norms (recycling) to make themselves appear more environmentally conscious, a clear case of social desirability bias.",
    type: "social_desirability"
  },
  {
    id: 99,
    question: "A person inflates their exercise routine when discussing fitness with friends. What bias is influencing their statement?",
    options: shuffleArray([
      { text: "Social Desirability Bias", isCorrect: true },
      { text: "Optimism Bias", isCorrect: false },
      { text: "The IKEA Effect", isCorrect: false },
      { text: "Distinction Bias", isCorrect: false }
    ]),
    explanation: "The person wants to be seen in a positive light, so they exaggerate their fitness habits, demonstrating social desirability bias.",
    type: "social_desirability"
  },
  {
    id: 100,
    question: "A student lies about how much time they study to impress their teacher. What bias is affecting them?",
    options: shuffleArray([
      { text: "Social Desirability Bias", isCorrect: true },
      { text: "Anchoring Bias", isCorrect: false },
      { text: "Bundling Bias", isCorrect: false },
      { text: "Framing Bias", isCorrect: false }
    ]),
    explanation: "The student's desire to be perceived as hardworking is a manifestation of social desirability bias, where people distort their behavior to conform to social expectations.",
    type: "social_desirability"
  },
  {
    id: 101,
    question: "A person assumes a luxury-brand phone is better simply because of its high price and branding. What bias is at play?",
    options: shuffleArray([
      { text: "Prestige Bias", isCorrect: true },
      { text: "Anchoring Bias", isCorrect: false },
      { text: "The IKEA Effect", isCorrect: false },
      { text: "Distinction Bias", isCorrect: false }
    ]),
    explanation: "Prestige bias occurs when people assign higher value or quality to an item simply because it is associated with a prestigious brand or status. In this case, the person is assuming the luxury phone is better because of its brand.",
    type: "prestige"
  },
  {
    id: 102,
    question: "A company hires a consultant from a prestigious university over a more experienced candidate from a lesser-known school. What bias is influencing them?",
    options: shuffleArray([
      { text: "Prestige Bias", isCorrect: true },
      { text: "Social Desirability Bias", isCorrect: false },
      { text: "Groupthink Bias", isCorrect: false },
      { text: "First Impression Bias", isCorrect: false }
    ]),
    explanation: "The company is favoring the consultant from a prestigious university, likely assuming they are more qualified, which demonstrates prestige bias.",
    type: "prestige"
  },
  {
    id: 103,
    question: "A shopper chooses a designer bag over a generic one, assuming the designer bag is of higher quality. What bias is at work?",
    options: shuffleArray([
      { text: "Prestige Bias", isCorrect: true },
      { text: "Scarcity Bias", isCorrect: false },
      { text: "Projection Bias", isCorrect: false },
      { text: "Bundling Bias", isCorrect: false }
    ]),
    explanation: "The shopper is influenced by the brand and price, believing the designer bag is better simply because it carries prestige, which is an example of prestige bias.",
    type: "prestige"
  },
  {
    id: 104,
    question: "A student feels that a professor from a well-known university is more competent, despite no substantial evidence of their teaching skills. What bias is affecting their judgment?",
    options: shuffleArray([
      { text: "Prestige Bias", isCorrect: true },
      { text: "Belief Bias", isCorrect: false },
      { text: "Current Mood Bias", isCorrect: false },
      { text: "Response Bias", isCorrect: false }
    ]),
    explanation: "The student is assuming that the professor is better due to their prestigious background, which is a clear case of prestige bias.",
    type: "prestige"
  },
  {
    id: 105,
    question: "After a stressful day at work, Mark thinks he's always bad at handling tough situations. What bias is influencing his perception?",
    options: shuffleArray([
      { text: "Current Mood Bias", isCorrect: true },
      { text: "Restraint Bias", isCorrect: false },
      { text: "Confirmation Bias", isCorrect: false },
      { text: "Empathy Gap", isCorrect: false }
    ]),
    explanation: "Mark's current negative mood is affecting his view of his overall abilities, demonstrating current mood bias, where one's mood influences their evaluation of situations or self.",
    type: "current_mood"
  },
  {
    id: 106,
    question: "Sarah, feeling joyful after a great morning, assumes her day will continue to go well. What bias is at play?",
    options: shuffleArray([
      { text: "Current Mood Bias", isCorrect: true },
      { text: "Optimism Bias", isCorrect: false },
      { text: "Availability Bias", isCorrect: false },
      { text: "Positivity Effect", isCorrect: false }
    ]),
    explanation: "Sarah's positive mood is affecting her expectations for the rest of the day, which is an example of current mood bias, where mood impacts judgments and decisions.",
    type: "current_mood"
  },
  {
    id: 107,
    question: "Jenny, feeling depressed, views all her interactions negatively, even though they are neutral or positive. What bias is influencing her judgment?",
    options: shuffleArray([
      { text: "Current Mood Bias", isCorrect: true },
      { text: "Negativity Bias", isCorrect: false },
      { text: "Projection Bias", isCorrect: false },
      { text: "Selective Perception", isCorrect: false }
    ]),
    explanation: "Jenny's mood is coloring her perception of her interactions, demonstrating current mood bias, where mood affects how events are interpreted.",
    type: "current_mood"
  },
  {
    id: 108,
    question: "A customer, having just had a pleasant shopping experience, believes every item in the store is of high quality. What bias is affecting their perception?",
    options: shuffleArray([
      { text: "Current Mood Bias", isCorrect: true },
      { text: "Halo Effect", isCorrect: false },
      { text: "Prestige Bias", isCorrect: false },
      { text: "Overconfidence Effect", isCorrect: false }
    ]),
    explanation: "The customer's positive mood from the pleasant experience is causing them to overrate the quality of everything in the store, showing the influence of current mood bias.",
    type: "current_mood"
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