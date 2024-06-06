export type Lessons = Lesson[];

interface Lesson {
  number: string;
  title: string;
  exercises: Exercise[];
}

interface Exercise {
  id: number;
  question: string;
  answer: string;
}