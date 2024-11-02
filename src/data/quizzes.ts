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
        explanation:
          "Sahih al-Bukhari is a collection of hadith compiled by Imam Muhammad al-Bukhari (d. 256 AH/870 AD) (rahimahullah). His collection is recognized by the overwhelming majority of the Muslim world to be the most authentic collection of reports of the Sunnah of the Prophet Muhammad (ﷺ). It contains over 7500 hadith (with repetitions) in 97 books. The translation provided here is by Dr. M. Muhsin Khan.",
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
  {
    id: 7,
    questions: [
      {
        question: "What is the name of the night journey of Prophet Muhammad (ﷺ)?",
        options: ["Hijra", "Isra and Mi'raj", "Laylat al-Qadr", "Ramadan"],
        correctAnswerIndex: 1,
        explanation:
          "Isra and Mi'raj refers to the miraculous night journey of Prophet Muhammad (ﷺ) from Mecca to Jerusalem and then his ascension through the heavens. This event is mentioned in the Quran and is considered one of the most significant events in Islamic history.",
      },
      {
        question: "Which angel was responsible for revealing the Quran to Prophet Muhammad (ﷺ)?",
        options: ["Israfil", "Mikail", "Jibreel", "Izrail"],
        correctAnswerIndex: 2,
        explanation:
          "Angel Jibreel (Gabriel) was responsible for delivering the divine revelation of the Quran to Prophet Muhammad (ﷺ) over a period of 23 years. This began in the Cave of Hira when the Prophet (ﷺ) received his first revelation.",
      },
      {
        question: "What is the name of the sacred well located in Mecca?",
        options: ["Zam Zam", "Safa", "Marwa", "Kawthar"],
        correctAnswerIndex: 0,
        explanation:
          "The Zam Zam well is a sacred well located within the Masjid al-Haram in Mecca. According to Islamic tradition, it was revealed to Hajar (wife of Prophet Ibrahim) when she was searching for water for her infant son Ismail.",
      },
    ],
  },
  {
    id: 8,
    questions: [
      {
        question: "What is the Islamic term for charity that is obligatory?",
        options: ["Sadaqah", "Zakat", "Infaq", "Waqf"],
        correctAnswerIndex: 1,
        explanation:
          "Zakat is the obligatory charity that is one of the five pillars of Islam. It requires Muslims who meet the criteria of wealth to give 2.5% of their qualifying wealth to specific categories of recipients.",
      },
      {
        question: "Which month in the Islamic calendar is known for fasting?",
        options: ["Sha'ban", "Rajab", "Ramadan", "Dhul Hijjah"],
        correctAnswerIndex: 2,
        explanation:
          "Ramadan is the ninth month of the Islamic calendar and is observed by Muslims worldwide as a month of fasting (sawm), prayer, reflection and community. It is one of the Five Pillars of Islam.",
      },
      {
        question: "What is the name of the farewell sermon delivered by Prophet Muhammad (ﷺ)?",
        options: ["Khutbatul Jumu'ah", "Khutbatul Wada", "Khutbatul Eid", "Khutbatul Hajj"],
        correctAnswerIndex: 1,
        explanation:
          "The Khutbatul Wada (Farewell Sermon) was delivered by Prophet Muhammad (ﷺ) during his last Hajj in 632 CE. It contained important principles of Islam including human rights, justice, and equality.",
      },
    ],
  },
  {
    id: 9,
    questions: [
      {
        question: "What is the term for breaking the fast during Ramadan?",
        options: ["Suhoor", "Iftar", "Taraweeh", "Tahajjud"],
        correctAnswerIndex: 1,
        explanation: "Iftar is the evening meal with which Muslims end their daily fast at sunset during Ramadan. It's often started with dates following the tradition of Prophet Muhammad (ﷺ).",
      },
      {
        question: "Which battle is known as the 'Victory of Victories' in Islamic history?",
        options: ["Battle of Badr", "Battle of Uhud", "Conquest of Mecca", "Battle of Khandaq"],
        correctAnswerIndex: 2,
        explanation:
          "The Conquest of Mecca (Fath Makkah) in 630 CE is often referred to as the 'Victory of Victories.' It was a largely peaceful conquest that led to the establishment of Islam in Mecca and marked a turning point in Islamic history.",
      },
      {
        question: "What is the name of the first mosque built in Islam?",
        options: ["Masjid al-Haram", "Masjid an-Nabawi", "Masjid Quba", "Masjid al-Aqsa"],
        correctAnswerIndex: 2,
        explanation: "Masjid Quba was the first mosque built in Islamic history. It was built by Prophet Muhammad (ﷺ) upon his arrival to Medina during the Hijra (migration from Mecca to Medina).",
      },
    ],
  },
];

export default quizzes;
