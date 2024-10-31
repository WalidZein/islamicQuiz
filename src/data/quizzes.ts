export interface Question {
  question: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
}

export interface Quiz {
  id: number;
  questions: Question[];
}

const quizzes: Quiz[] = [
  {
    id: 1,
    questions: [
      {
        question: "What is the first pillar of Islam?",
        options: ["Prayer", "Fasting", "Faith (Shahada)", "Charity"],
        correctAnswerIndex: 2,
        explanation: "The first pillar of Islam is the declaration of faith, known as the Shahada.",
      },
      {
        question: "How many times are Muslims required to pray each day?",
        options: ["Three", "Five", "Seven", "Nine"],
        correctAnswerIndex: 1,
        explanation: "Muslims are required to pray five times a day.",
      },
      // Add more questions as needed
    ],
  },
  {
    id: 2,
    questions: [
      {
        question: "What is the first pillar of Islam?",
        options: ["Prayer", "Fasting", "Faith (Shahada)", "Charity"],
        correctAnswerIndex: 2,
        explanation: "The first pillar of Islam is the declaration of faith, known as the Shahada.",
      },
      {
        question: "How many times are Muslims required to pray each day?",
        options: ["Three", "Five", "Seven", "Nine"],
        correctAnswerIndex: 1,
        explanation: "Muslims are required to pray five times a day.",
      },
      // Add more questions as needed
    ],
  },
  {
    id: 3,
    questions: [
      {
        question: "What is the first pillar of Islam?",
        options: ["Prayer", "Fasting", "Faith (Shahada)", "Charity"],
        correctAnswerIndex: 2,
        explanation: "The first pillar of Islam is the declaration of faith, known as the Shahada.",
      },
      {
        question: "How many times are Muslims required to pray each day?",
        options: ["Three", "Five", "Seven", "Nine"],
        correctAnswerIndex: 1,
        explanation: "Muslims are required to pray five times a day.",
      },
      // Add more questions as needed
    ],
  },
  {
    id: 4,
    questions: [
      {
        question: "What is the first pillar of Islam?",
        options: ["Prayer", "Fasting", "Faith (Shahada)", "Charity"],
        correctAnswerIndex: 2,
        explanation: "The first pillar of Islam is the declaration of faith, known as the Shahada.",
      },
      {
        question: "How many times are Muslims required to pray each day?",
        options: ["Three", "Five", "Seven", "Nine"],
        correctAnswerIndex: 1,
        explanation: "Muslims are required to pray five times a day.",
      },
      // Add more questions as needed
    ],
  },
  {
    id: 5,
    questions: [
      {
        question: "What is the first pillar of Islam?",
        options: ["Prayer", "Fasting", "Faith (Shahada)", "Charity"],
        correctAnswerIndex: 2,
        explanation: "The first pillar of Islam is the declaration of faith, known as the Shahada.",
      },
      {
        question: "How many times are Muslims required to pray each day?",
        options: ["Three", "Five", "Seven", "Nine"],
        correctAnswerIndex: 1,
        explanation: "Muslims are required to pray five times a day.",
      },
      // Add more questions as needed
    ],
  },
  {
    id: 6,
    questions: [
      {
        question: "What is the first pillar of Islam?",
        options: ["Prayer", "Fasting", "Faith (Shahada)", "Charity"],
        correctAnswerIndex: 2,
        explanation: "The first pillar of Islam is the declaration of faith, known as the Shahada.",
      },
      {
        question: "How many times are Muslims required to pray each day?",
        options: ["Three", "Five", "Seven", "Nine"],
        correctAnswerIndex: 1,
        explanation: "Muslims are required to pray five times a day.",
      },
      // Add more questions as needed
    ],
  },
  // Add more quizzes as needed
];

export default quizzes;
