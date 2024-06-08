export type Lessons = Lesson[];

export interface Lesson {
  number: string;
  title: string;
  exercises: Exercise[];
  theory: Exercise[];
}

export interface Exercise {
  id: number;
  question: string;
  answer: string;
}