export interface Question {
  text: string;
  options: {
    id: string;
    text: string;
  }[];
}

export interface Answer {
  question: string;
  answer: string;
}

export interface PersonalityResult {
  personalityType: string;
  strengths: string[];
  weaknesses: string[];
  compatibility: {
    title: string;
    description: string;
  };
}

export enum GameState {
  Welcome,
  Quiz,
  Loading,
  Results,
}

export type Language = 'ja' | 'en' | 'ko' | 'zh';