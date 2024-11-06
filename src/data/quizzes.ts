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
  {
    id: 3,
    questions: [
      {
        question: "Who was the teenager who learned Hebrew in two weeks and became the Prophet’s translator?",
        options: ["Zayd ibn Thabit", "Mus`ab ibn `Umair", "Usamah ibn Zaid", "Al-Arqam ibn Abi Al-Arqam"],
        correctAnswerIndex: 0,
        explanation:
          "After seeing the talent and intelligence of this young companion, the Prophet (ﷺ) said to Zayd, “O Zayd! Learn the Hebrew language because I do not trust the Jewish translators in what they convey from me to others.” So Zayd stood up to the task and learned the Hebrew language in two weeks! After that, he began to write letters for the Prophet to the Jews whenever the need arose and would read and translate their letters to him.\n\n The young Zayd became the translator of the prophet (ﷺ).",
      },
      {
        question: "Who was the youngest military leader in Islam?",
        options: ["Zayd ibn Thabit", "Mus`ab ibn `Umair", "Usamah ibn Zaid", "Al-Arqam ibn Abi Al-Arqam"],
        correctAnswerIndex: 2,
        explanation:
          "After the Farewell Pilgrimage, a large army was organized and deployed to Syria. Abu Bakr and `Umar were involved in this campaign, but the Prophet appointed the young Usamah ibn Zayd to lead the army. Usamah was then a young man of hardly twenty years of age.",
      },
      {
        question: "In the early days of Islam, when it was kept secret, whose house did the Muslims gather in?",
        options: ["Zayd ibn Thabit", "Mus`ab ibn `Umair", "Usamah ibn Zaid", "Al-Arqam ibn Abi Al-Arqam"],
        correctAnswerIndex: 3,
        explanation:
          "In the early days of Islam, the Prophet (ﷺ) used to meet the Companions at Al-Arqam's house until they were forty in number with the conversion of ‘Umar ibn Al-Khattaab. When there were forty Muslims, they came out to declare their faith openly.\n\nThough very young, Al-Arqam ibn Abi Al-Arqam turned his home into the Prophet’s headquarters for 13 consecutive years. In doing so, he helped raise the first Muslim generation.",
      },
      {
        question: "Who was the first ambassador of Islam?",
        options: ["Zayd ibn Thabit", "Mus`ab ibn `Umair", "Usamah ibn Zaid", "Al-Arqam ibn Abi Al-Arqam"],
        correctAnswerIndex: 1,
        explanation:
          "The Prophet selected Mus`ab to carry out the task of teaching Islam to the people of Yathrib (Madinah), while many older and more experienced companions were present—the likes of Abu Bakr, Umar, Uthman, Ali, and others. He knew Mus`ab was fully capable and thus empowered him through this honorable post.",
      },
    ],
  },
  {
    id: 4,
    questions: [
      {
        question: "Which Islamic month did the Prophet ﷺ receive the first revelation of the Quran?",
        options: ["Muharram", "Rabi al-Awwal", "Ramadan", "Rajab"],
        correctAnswerIndex: 2,
        explanation: "Allah says: {Indeed, We sent the Quran down during the Night of Decree} [al-Qadr 97:1]. The first revelation of the Qur'an was sent down during the month of Ramadan.",
      },
      {
        question: "Which prophet is mentioned the most in the Quran?",
        options: ["Prophet Isa (Jesus)", "Prophet Musa (Moses)", "Prophet Ibrahim (Abraham)", "Prophet Yusuf (Joseph)"],
        correctAnswerIndex: 1,
        explanation:
          "Prophet Musa (Moses) is mentioned 136 times in the Quran.\n\n He received the book Tawraat (Torah) and was sent to the tyrant Pharaoh, who considered himself a god and expected his people to worship him along with other statues. Prophet Musa's story and the lessons within it transcend time, holding significant value in Islamic history.",
      },
      {
        question: "Who is considered both grateful and patient in the sight of Allah?",
        options: [
          "Someone who aspires to gain more in both religious and worldly matters by following those more successful than him",
          "Someone who feels content with his level of faith and strives to increase his worldly achievements by observing those above him",
          "Someone who looks up to those who surpass him in faith and appreciates his blessings by comparing his worldly state with those who have less",
          "Someone who compares himself with others only in religious matters, not concerning himself with worldly gains or losses",
        ],
        correctAnswerIndex: 2,
        explanation:
          "The Messenger of Allah (ﷺ) said:\n “There are two traits, whoever has them in him, Allah writes him down as grateful and patient. And whoever does not have them, Allah does not write him down as grateful, nor patient. Whoever looks to one above him for his religion, and follows him in it, and whoever looks to one who is below him in worldly matters, and praises Allah for the blessings He has favored the one who is above him with, then Allah writes him down as grateful and patient. And whoever looks to one who is below him for his religion, and looks to one who is above him for worldly matters, and grieves over what missed him of it, Allah does not write him down as grateful nor as patient.",
      },
      {
        question: "Which action can extinguish sins as water extinguishes fire?",
        options: ["Giving charity", "Fasting", "Reciting the Quran", "Performing Wudu (ablution)"],
        correctAnswerIndex: 0,
        explanation:
          "The Prophet Muhammad (ﷺ) said:\n 'Shall I not tell you of the means of goodness? Fasting is a shield, and charity extinguishes sin as water extinguishes fire, and a man’s prayer in the middle of the night.'",
      },
      {
        question: "What is the recommended supplication to say when entering a mosque?",
        options: [
          "اللَّهُمَّ افْتَحْ لِي أَبْوَابَ جَنَّتِكَ\nO Allah, open to me the gates of Your Paradise",
          "اللَّهُمَّ افْتَحْ لِي أَبْوَابَ رَحْمَتِكَ\nO Allah, open to me the gates of Your mercy",
          "اللَّهُمَّ أَعُوذُ بِكَ مِنَ الشَّيْطَانِ الرَّجِيمِ\nO Allah, I seek refuge with You from the accursed devil",
          "اللَّهُمَّ أَجِرْنِي مِنَ النَّارِ\nO Allah, protect me from the Fire",
        ],
        correctAnswerIndex: 1,
        explanation:
          " Arabic: اللَّهُمَّ افْتَحْ لِي أَبْوَابَ رَحْمَتِكَ\nTransliteration: Allahumma iftah li abwab rahmatika\nTranslation: O Allah, open to me the gates of Your mercy\n\n The Messenger of Allah (ﷺ) said: “When any one of you enters the mosque, let him say: Allahumma iftah li abwab rahmatika (O Allah, open to me the gates of Your mercy), and when he leaves let him say, Allahumma inni as’aluka min fadlika (O Allah, I ask You of Your bounty).”",
      },
    ],
  },
];

export default quizzes;
