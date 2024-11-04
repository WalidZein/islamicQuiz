import { Quiz } from "@/types/quiz";

export interface Question {
  question: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
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
        question: "Who was the first woman to accept islam?",
        options: ["Aisha", "Fatimah", "Zeinab", "Khadijah"],
        correctAnswerIndex: 3,
        explanation:
          "Khadijah (may Allah be pleased with her) was the first woman to believe in the Prophet (peace be upon him). She was also the first person to hear revealed verses from the mouth of the Messenger of Allah.",
      },
      {
        question: "Which surah will intercede for it's companion on the day of judgement?",
        options: ["Surah Yasin", "Surah Mulk", "Surah Baqarah", "Surah Fajr"],
        correctAnswerIndex: 1,
        explanation:
          'Jābir ibn Abdullāh reports that the Messenger of Allah ﷺ would not sleep until He had recited Sūrah as-Sajdah (32) and Sūrah al-Mulk (67).\n\n It was narrated from Abu Hurairah that the Prophet (ﷺ) said:\n "There is a surah in the Qur\'an, with thirty verses, which will intercede for its companion (the one who recites it) until he is forgiven: Tabarakal-ladhi bi yadihil mulk (Blessed is He in Whose Hand is the Dominion)."',
      },
      {
        question: "What is the name of the first mosque built in Islam?",
        options: ["Masjid al-Haram", "Masjid an-Nabawi", "Masjid Quba", "Masjid al-Aqsa"],
        correctAnswerIndex: 2,
        explanation: "Masjid Quba was the first mosque built in Islamic history. It was built by Prophet Muhammad (ﷺ) upon his arrival to Medina during the Hijra (migration from Mecca to Medina).",
      },
      {
        question: "Which angel was responsible for revealing the Quran to Prophet Muhammad (ﷺ)?",
        options: ["Israfil", "Mikail", "Jibreel", "Izrail"],
        correctAnswerIndex: 2,
        explanation:
          "Angel Jibreel (Gabriel) was responsible for delivering the divine revelation of the Quran to Prophet Muhammad (ﷺ) over a period of 23 years. This began in the Cave of Hira when the Prophet (ﷺ) received his first revelation.",
      },
    ],
  },
  {
    id: 2,
    questions: [
      {
        question: "Who ordered the first complete compilation of the Qur'an?",
        options: ["Abu Bakr (RA)", "Umar (RA)", "Uthman (RA)", "Ali (RA)"],
        correctAnswerIndex: 0,
        explanation:
          "The Quran continued to be preserved in the hearts of the Sahabah who had memorized it, and on the skins and other materials until the time of the caliph Abu Bakr al-Siddeeq (may Allah be pleased with him).\n\n During the Riddah wars, many of the Sahabah who had memorized the Quran were killed, and Abu Bakr (may Allah be pleased with him) was afraid that the Quran would be lost. So he consulted the senior Sahabah about compiling the Quran in a single book so that it would remain preserved and would not be lost. He entrusted this mission to the chief of memorizers, Zayd ibn Thabit (may Allah be pleased with him).",
      },
      {
        question: "The Prophet ﷺ said “the best of you is he who ___”",
        options: ["gives the most charity", "is best to his family", "is the strongest", "is the most humble"],
        correctAnswerIndex: 1,
        explanation: "Aisha reported:\n The Messenger of Allah, peace and blessings be upon him, said, “The best of you are the best to their families, and I am the best to my family.”",
      },
      {
        question: "Where did the 1st group of Muslims migrate to before Madinah?",
        options: ["Iraq", "Syria", "Palestine", "Abyssinia"],
        correctAnswerIndex: 3,
        explanation:
          "Muslims faced persecution and oppression in early Islam, prompting their migration to Abyssinia (modern day Ethiopia). This was a just land ruled by King An-Najaashi, who welcomed them and ensured their peace and security.\n\n The first migration consisted of twelve men and four women led by 'Uthmaan ibn 'Affaan, followed by eighty-three men and ten or nine women in the second migration. Allah's knowledge encompasses these events.",
      },
      {
        question: "What is the reward for a Muslim who recites Ayat al-Kursi after every obligatory prayer?",
        options: ["Protection from poverty", "Ten good deeds", "Entrance to Paradise", "Forgiveness of sins"],
        correctAnswerIndex: 2,
        explanation:
          "Abu Umamah reported: The Messenger of Allah, peace and blessings be upon him, said, “Whoever recites the ‘verse of the Throne’ after every prescribed prayer, there will be nothing standing between him and entry into Paradise but his death.”",
      },
      {
        question: "How many years did the People of the Cave sleep for?",
        options: ["509 years", "1 year", "309 years", "8 hours"],
        correctAnswerIndex: 2,
        explanation:
          "In Surah Kahf, Allah says, “They had remained in their cave for three hundred years, adding nine.” (18:25)\n\nThe story of the People of the Cave is about young men who believed in Allah and invoked Him even though they were among a tribe ruled by an unjust king who did not believe in Allah.\n\n These young men introduced Allah’s religion to the tribe but were rejected. They continued to call people to Allah without success, so Allah inspired them to seek refuge in the cave.\n\n Allah protected them through miracles and put them to sleep in the cave. They awoke after 309 years to discover that the people of the tribe had become believers, making them new to a society now filled with faith.",
      },
    ],
  },
];

export default quizzes;
