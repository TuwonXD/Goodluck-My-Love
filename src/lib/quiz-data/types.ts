export type Question = {
  id: string;
  question: string;
  choices: string[];
  answer: number;
  rationale?: string;
};

export type TestBank = {
  id: string;
  title: string;
  description: string;
  questions: Question[];
};

export type Subject = {
  id: string;
  name: string;
  short: string;
  description: string;
  banks: TestBank[];
};
