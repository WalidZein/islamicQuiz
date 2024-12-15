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
    released: true,
    timeOfRelease: "2024-11-03T13:00:00Z",
    seasonId: 1,
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
        question: "Which surah will intercede for it's companion on the day of judgement?(Correction: Surah Baqarah is one of them. What is the other one?)",
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
    released: true,
    timeOfRelease: "2024-11-04T13:00:00Z",
    seasonId: 1,
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
    released: true,
    timeOfRelease: "2024-11-05T13:00:00Z",
    seasonId: 1,
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
    released: true,
    timeOfRelease: "2024-11-06T13:00:00Z",
    seasonId: 1,
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
  {
    id: 5,
    released: true,
    timeOfRelease: "2024-11-07T13:00:00Z",
    seasonId: 1,
    questions: [
      {
        question: "Why do we need to know and understand Allah’s beautiful names and attributes? (please don't skip the explanation)",
        options: ["To truly know Him", "To pray to Him by His names", "To gain the reward of Jannah", "All of the above"],
        correctAnswerIndex: 3,
        explanation:
          "Calling upon Allah by His names is a powerful way to fulfill our purpose of worshiping and knowing Him, as He says, 'I did not create jinn and humans except to worship Me' (51:56).\n\nEach name reflects an attribute that guides our connection to Him. The Quran urges us, 'Allah has the Most Beautiful Names. So call upon Him by them' (7:180), meaning we should use the name that fits our need. Imagine the power of seeking forgiveness from Al-Ghaffar (The Forgiving), or finding comfort in times of difficulty by calling upon Al-Wadud (The Loving).\n\nThe Prophet ﷺ also taught, 'Allah has ninety-nine names. Whoever memorizes them will enter Paradise,' inspiring us to know, understand, and live by these names. This deepens our connection to Allah, inviting His mercy, guidance, and blessings into our lives.",
      },
      {
        question: "Which name of Allah means The Most or Entirely Merciful?",
        options: ["Ar-Rahmaan", "Al-Malik", "Al-Mutakabbir", "Al-Khaaliq"],
        correctAnswerIndex: 0,
        explanation:
          "This name emphasizes Allah's mercy and kindness towards His creation. It signifies that Allah is full of love, compassion, and grace, and He bestows His blessings and forgiveness upon His believers.",
      },
      {
        question: "What attribute of Allah does the name As-Salaam represent?",
        options: ["The Majestic", "The Creator", "The Source of Peace", "The Great Forgiver"],
        correctAnswerIndex: 2,
        explanation:
          "The name As-Salaam represents the attribute of Allah (SWT) as the Source of Peace. This means that Allah is the ultimate provider of peace and tranquility. He is the source from which all peace originates and He grants peace to His creation. This attribute highlights Allah's ability to bring about inner peace, harmony, and serenity in the lives of believers. It signifies His role as the ultimate source of all peace and the one who can grant peace to those who seek it.",
      },
      {
        question: "What attribute of Allah does the name Al-Fattaah represent?",
        options: ["The Expander", "The Opener", "The All-Hearing", "The Most Appreciative"],
        correctAnswerIndex: 1,
        explanation:
          "The name 'Al-Fattaah' represents the attribute of Allah as 'The Opener.' This name signifies that Allah is the one who opens doors, grants success, and brings forth solutions to problems. It highlights Allah's ability to remove obstacles and provide opportunities. By understanding Allah as 'The Opener,' believers can seek His guidance and rely on His power to open paths for them in life. This name emphasizes the belief in Allah's ability to bring about positive change and blessings.",
      },
      {
        question: "What attribute of Allah does the name Al-Lateef represent?",
        options: ["The Most Gentle", "The Kind", "The Mighty", "The Most Merciful"],
        correctAnswerIndex: 0,
        explanation:
          "The name Al-Lateef of Allah represents the attribute of 'The Subtle One' or 'The Most Gentle.' This name embodies Allah's gentle, kind, and subtle dealings with His creation. Al-Lateef is aware of and attentive to the delicate matters, fine details, and hidden intricacies of the affairs of all creatures, guiding and aiding them in ways they often do not perceive. This name also conveys His graciousness and kindness in managing the affairs of His servants, providing for them in the gentlest way, which may go unnoticed but is most effective and beneficent.",
      },
    ],
  },
  {
    id: 6,
    released: true,
    timeOfRelease: "2024-11-08T13:00:00Z",
    seasonId: 1,
    questions: [
      {
        question: "What attribute of Allah does the name Ar-Razzaaq represent?",
        options: ["The Knowledgeable", "The Provider", "The Expander", "The All-Knowing"],
        correctAnswerIndex: 1,
        explanation:
          "Allah is Ar-Razzaq (ٱلرَّزَّاقُ), The Ultimate Provider, the Source of all nourishment and sustenance. He doesn’t just supply what we need—He knows and delivers exactly what’s best for us, down to the smallest detail, fulfilling our physical, mental, and spiritual needs.\n\nAs Ar-Razzaq, Allah opens doors we never imagined and brings forth provisions from places we least expect. He nurtures and supports every part of our existence, guiding our growth, and enriching our souls. Through His divine provision, we find not only sustenance but purpose, strength, and fulfillment.",
      },
      {
        question: "Which name of Allah (SWT) means Ash-Shakoor?",
        options: ["The Most High", "The Grateful and The Appreciative", "The Preserver and The Protector", "The Feeder"],
        correctAnswerIndex: 1,
        explanation:
          "Allah (SWT) is described as Ash-Shakoor to emphasize His gratitude and appreciation towards His creation. This name highlights Allah's attribute of recognizing and rewarding even the smallest acts of goodness and gratitude shown by His servants. It reminds believers to be grateful to Allah for His countless blessings and to express gratitude in their actions and words.",
      },
      {
        question: "What attribute of Allah does the name Al-Jabbaar represent?",
        options: ["The Just", "The Reliever", "The Judge", "The Compeller"],
        correctAnswerIndex: 3,
        explanation:
          "The name Al-Jabbaar refers to the attribute of Allah as 'The Compeller.' This means that Allah has the power and authority to compel and enforce His will upon creation. It signifies His ability to overcome any resistance or opposition and to establish His dominance and control over all things. This attribute highlights Allah's strength, authority, and ability to enforce justice and righteousness in the universe.",
      },
      {
        question: "What attribute of Allah does the name Al-Mujeeb represent?",
        options: ["The All Just", "The Most Appreciative", "The Responsive One", "The Absolute Truth"],
        correctAnswerIndex: 2,
        explanation:
          "Allah, Al-Mujeeb, is the One who responds to every call and fulfills the needs of those who turn to Him, even knowing their needs before they are expressed. He reassures us in the Qur’an of His nearness: “When My servants ask you concerning Me, then surely I am very near; I answer the prayer of the supplicant when he calls on Me.”(Qur’an, 2:186).\n\n Unlike human relationships, Allah’s generosity is boundless; He loves to be asked and never tires of our pleas. In times of ease or hardship, whether we whisper our needs or cry out in desperation, Al-Mujeeb is close, answering in the best way and at the best time. Through His responses, we find a profound, comforting connection, knowing that each plea strengthens our bond with Him and draws us nearer.",
      },
      {
        question: "Which name of Allah means The Hidden One?",
        options: ["Al-Baasit", "Al-Baatin", "Al-Baari’", "Al-Muhsin"],
        correctAnswerIndex: 1,
        explanation:
          "Allah is Al-Baatin (Arabic: ٱلْبَاطِنُ), meaning 'The Hidden One' or 'The Concealed.' This name reflects Allah's unseen nature; while we cannot see Him directly, we recognize His presence through the signs around us. Al-Baatin also signifies that Allah is intimately close, present within all of creation, acting as a hidden companion in our innermost selves.",
      },
    ],
  },
  {
    id: 7,
    released: true,
    timeOfRelease: "2024-11-09T13:00:00Z",
    seasonId: 1,
    questions: [
      {
        question: "The Prophet ﷺ said “the best of you is he who ___”",
        options: ["gives the most charity", "is best to his family", "is the strongest", "is the most humble"],
        correctAnswerIndex: 1,
        explanation: "Aisha reported:\n The Messenger of Allah, peace and blessings be upon him, said, “The best of you are the best to their families, and I am the best to my family.”",
      },
      {
        question: "What is the reward for a Muslim who recites Ayat al-Kursi after every obligatory prayer?",
        options: ["Protection from poverty", "Ten good deeds", "Entrance to Paradise", "Forgiveness of sins"],
        correctAnswerIndex: 2,
        explanation:
          "Abu Umamah reported: The Messenger of Allah, peace and blessings be upon him, said, “Whoever recites the ‘verse of the Throne’ after every prescribed prayer, there will be nothing standing between him and entry into Paradise but his death.”",
      },
      {
        question: "What attribute of Allah does the name Al-Mujeeb represent?",
        options: ["The All Just", "The Most Appreciative", "The Responsive One", "The Absolute Truth"],
        correctAnswerIndex: 2,
        explanation:
          "Allah, Al-Mujeeb, is the One who responds to every call and fulfills the needs of those who turn to Him, even knowing their needs before they are expressed. He reassures us in the Qur’an of His nearness: “When My servants ask you concerning Me, then surely I am very near; I answer the prayer of the supplicant when he calls on Me.”(Qur’an, 2:186).\n\n Unlike human relationships, Allah’s generosity is boundless; He loves to be asked and never tires of our pleas. In times of ease or hardship, whether we whisper our needs or cry out in desperation, Al-Mujeeb is close, answering in the best way and at the best time. Through His responses, we find a profound, comforting connection, knowing that each plea strengthens our bond with Him and draws us nearer.",
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
  {
    id: 8,
    released: true,
    timeOfRelease: "2024-11-10T13:00:00Z",
    seasonId: 1,
    questions: [
      {
        question: "How much more rewardable is a prayer offered in congregation compared to one offered individually?",
        options: ["7 times", "10 times", "27 times", "30 times"],
        correctAnswerIndex: 2,
        explanation:
          "Narrated 'Abdullah bin 'Umar (RA): Allah's Messenger (ﷺ) said: 'The prayer offered in congregation is twenty-seven degrees more rewardable than a prayer offered by a single person.'",
      },
      {
        question: "What are you not allowed to do in Sujood?",
        options: ["Make dua in Arabic", "Make dua in another language", "Recite Quran", "Recite adhkar"],
        correctAnswerIndex: 2,
        explanation:
          "The Prophet ﷺ said: 'I have been forbidden to recite the Quran in the state of bowing and prostration. So whilst bowing, extol the Lord in it, and while you are in prostration strive your hardest supplicating, as it is most likely that you will be responded to.' [Muslim]",
      },

      {
        question: "Who is considered the most noble in the sight of Allah?",
        options: ["The most knowledgeable among people", "The most generous among people", "The most God conscious (fearing) among people", "The people who pray the most"],
        correctAnswerIndex: 2,
        explanation: "Allah says: 'Surely the most noble of you in the sight of Allah is the most righteous among you. Allah is truly All-Knowing, All-Aware.' (Quran 49:13)",
      },

      {
        question: "Who is the Prophet who is famous for his patience? \n(By: Musaab)",
        options: ["Prophet Nuh", "Prophet Muhammad", "Prophet Ibrahim", "Prophet Ayub"],
        correctAnswerIndex: 3,
        explanation:
          "Prophet Ayub was a great prophet and servant of God who became the epitome of patience. Everything that he had was taken away from him in order for him to be tested by God. He passed the test, and God gave back all that was taken away from him, including his property, children, and wealth. Prophet Ayub is indeed a very good example for us to follow in terms of his patience.",
      },

      {
        question: "For which group of people are bad deeds not recorded?",
        options: ["Children who have not reached puberty", "Adults who have reached puberty", "A sick person", "Non-Muslims"],
        correctAnswerIndex: 0,
        explanation:
          "The Messenger of Allah ﷺ said, 'The pen is lifted from three people: a sleeping person until he awakens, a child until he becomes an adult, and an insane person until he regains his sanity.'\n\nIn another narration, the Prophet ﷺ said, 'A young boy until he reaches puberty.'",
      },
    ],
  },
  {
    id: 9,
    released: true,
    timeOfRelease: "2024-11-11T13:00:00Z",
    seasonId: 1,
    questions: [
      {
        question: "In sujood, which body part should not be touching the ground?",
        options: ["Forearms", "Nose", "Feet", "Hands"],
        correctAnswerIndex: 0,
        explanation: "The Prophet, peace and blessings be upon him, said, 'Be straight in prostration and let none of you put his forearms on the ground like a dog.'",
      },
      {
        question: "Which side did Prophet Muhammad ﷺ encourage us not to sleep on?",
        options: ["Back side", "Left side", "Stomach side", "Right side"],
        correctAnswerIndex: 2,
        explanation:
          "Ya’eesh ibn Tihfah al-Ghifaari reported that his father said:\n\n“I stayed as a guest with the Messenger of Allah (ﷺ) with those of the poor whom he hosted. The Messenger of Allah (ﷺ) came out in the night to check up on his guests, and saw me lying on my stomach.\n\nHe prodded me with his foot and said, ‘Do not lie in this manner, for it is a way of lying that Allah hates.’”\n\nAccording to another report, the Prophet (ﷺ) prodded him with his foot and woke him up, and said, “Do not lie like this, for this is how the people of Hell lie.”",
      },
      {
        question: "What is the hidden Shirk?",
        options: ["Drinking alcohol & gambling", "Gossiping & lying", "Showing off your good deeds", "Keeping your good deeds secret"],
        correctAnswerIndex: 2,
        explanation:
          "The Prophet ﷺ said: 'Shall I not tell you about that which I fear more for you than the Dajjaal?' We said: 'Yes.' He said: 'Hidden Shirk; which is when a man stands to pray and makes it look good because he sees a man looking at him.'",
      },
      {
        question: "What should you do if you forget to say Bismillah before eating?",
        options: [
          "Say “أَسْتَغْفِرُ اللهَ”\n- “I seek forgiveness from Allah”",
          "Say “بِسْمِ اللهِ”\n- “In the name of Allah”",
          "Say “بِسْمِ اللهِ أَوَّلَهُ وَآخِرَهُ”\n- “In the name of Allah, at the beginning and at the end”",
          "It’s ok, keep eating",
        ],
        correctAnswerIndex: 2,
        explanation:
          "Arabic: بِسْمِ اللهِ أَوَّلَهُ وَآخِرَهُ\nTransliteration: Bismillah Awwalahu wa Aakhiruhu\nTranslation: In the name of Allah, at the beginning and at the end\n\nProphet Muhammad ﷺ said: “When one of you eats, let him mention the name of Allah. If he forgets to mention the name of Allah at the beginning, let him say: In the name of Allah at the beginning and at the end (Bismillahi awwalahu wa aakhirahu).”",
      },
      {
        question: "Who narrated the most number of ahadeeth?",
        options: ["Abu Hurayrah (r)", "Abdullah ibn Umar (r)", "Anas ibn Maalik (r)", "Aisha bint Abu Bakr (r)"],
        correctAnswerIndex: 0,
        explanation: "Abu Hurayrah (Abdur-Rahman) narrated 5,374 Ahadith. He passed away in 59 AH at the age of 78. The number of his students reaches 800.",
      },
    ],
  },
  {
    id: 10,
    released: true,
    timeOfRelease: "2024-11-12T13:00:00Z",
    seasonId: 1,
    questions: [
      {
        question: "In which of these places is it not allowed to pray?",
        options: ["On grass", "At the graveyard", "At home", "On snow"],
        correctAnswerIndex: 1,
        explanation: "It was narrated that Abu Sa'eed Khudri said:\n'The Messenger of Allah said: All the earth is a mosque, except for graveyards and bathrooms '",
      },
      {
        question: "What is the reward for reciting Surah Ikhlas 10 times?",
        options: ["A palace in Paradise", "A huge tree in Paradise", "A special river in Paradise", "A delicious meal in Paradise"],
        correctAnswerIndex: 0,
        explanation:
          " The Prophet (ﷺ) said:\n 'Whoever recites ten times, ‘Say: He is Allah, the One,’(Surah Ikhlas) a palace will be built for him in Paradise. Whoever recites it twenty times, two palaces will be built for him. Whoever recites it thirty times, three palaces will be built for him.'",
      },
      {
        question: "How many verses (ayat) are there in the shortest Surah of the Quran?",
        options: ["3", "4", "5", "6"],
        correctAnswerIndex: 0,
        explanation:
          "The shortest Surah in the Quran is Surah Al-Kawthar (Chapter 108), which has 3 verses (ayat):\n\n108:1\nإِنَّآ أَعْطَيْنَـٰكَ ٱلْكَوْثَرَ ١\nIndeed, We have granted you ˹O Prophet˺ abundant goodness.\n\n108:2\nفَصَلِّ لِرَبِّكَ وَٱنْحَرْ ٢\nSo pray and sacrifice to your Lord ˹alone˺.\n\n108:3\nإِنَّ شَانِئَكَ هُوَ ٱلْأَبْتَرُ ٣\nOnly the one who hates you is truly cut off ˹from any goodness˺.",
      },
      {
        question: "Which is the only Surah in the Quran that does not start with 'Bismillah'?\n (By: Rachid Uncle)",
        options: ["Surah Al-Baqarah", "Surah At-Tawbah", "Surah Al-Anfal", "Surah Al-Fatiha"],
        correctAnswerIndex: 1,
        explanation:
          "Surah At-Tawbah does not start with 'Bismillah' because the Companions, following the example of Caliph Uthman, did not include it. This was due to uncertainty about whether At-Tawbah was a continuation of the previous Surah, Al-Anfal, as their content was similar, and the Prophet Muhammad (peace be upon him) did not clarify this before his passing. Therefore, they placed At-Tawbah directly after Al-Anfal without the Basmalah to indicate a possible connection while keeping them separate.",
      },
      {
        question: "How many Takbeers (Allahu Akbar) are in Salat al-Janazah (Prayer for the dead)?",
        options: ["1", "2", "3", "4"],
        correctAnswerIndex: 3,
        explanation:
          "- You say the first Takbir ('Allahu Akbar'), then you seek [refuge with Allah from the accursed Shaytan]. Then you say Bismillah ir-Rahman ir-Rahim and [recite Al-Fatihah].\n- Then you say the second Takbir and send blessings upon the Prophet (peace and blessings of Allah be upon him) as one does at the end of the prayer.\n- Then you say the third Takbir and make du’a for the deceased.\n- Then you say the fourth Takbirand make duaa for all muslims,\n - Then say one Taslim to the right, saying 'Assalamu ‘alaykum wa rahmatullah.' (or two taslims depending on the mazhab)",
      },
    ],
  },
  {
    id: 11,
    released: true,
    timeOfRelease: "2024-11-13T13:00:00Z",
    seasonId: 1,
    questions: [
      {
        question: "What practice is recommended immediately after a child is born?",
        options: [
          "Reciting Surah Al-Fatiha over the baby",
          "Saying the Adhan in the baby's right ear",
          "Performing a full prayer (Salat) with the baby",
          "Sacrificing an animal as a form of gratitude",
        ],
        correctAnswerIndex: 1,
        explanation:
          "Narrated Abu Rafi':\n\nI saw the Messenger of Allah (ﷺ) uttering the call to prayer (Adhan) in the ear of al-Hasan ibn Ali when Fatimah gave birth to him.\n\n 'There is a scholarly difference of opinion regarding the authenticity of this hadith, with some classifying it as ḥasan (sound) and others as ḍaʻīf (weak). However, the righteous predecessors (Salaf al-Ṣāliḥ) were known to act upon it.'",
      },
      {
        question: "‘Aqiqah is performed on the 7th day after birth. What is 'Aqiqah?",
        options: ["Sacrificing a sheep", "Communal feast", "Special prayer", "Donating gold"],
        correctAnswerIndex: 0,
        explanation:
          "'Aqiqah refers to the sacrifice that is offered on behalf of the newborn on the seventh day after birth.\n\nThe Prophet (ﷺ) said: 'Every child is held in pledge for their 'Aqiqah (sacrifice), which is to be slaughtered on their seventh day, their head is to be shaved, and they are to be named.'",
      },
      {
        question: "On the day of the 'Aqiqah, what charitable act is recommended after shaving a newborn's head?",
        options: [
          "Donating gold equal to the weight of the child's hair",
          "Donating silver equal to the weight of the child's hair",
          "Donating dates equal to the weight of the child's hair",
          "Donating money equal to the child's birth weight",
        ],
        correctAnswerIndex: 1,
        explanation:
          "The Messenger of Allah (ﷺ) performed the ‘Aqiqah for Al-Hasan with a sheep and said: 'O Fatimah, shave his head and give in charity the equivalent of its weight in silver.' So she weighed it, and its weight was a dirham or part of a dirham.",
      },
      {
        question: "What is the practice of Tahneek?",
        options: [
          "Reciting the Adhan in the newborn's ears",
          "Chewing a date and rubbing it on the baby's palate",
          "Shaving the baby's head on the seventh day after birth",
          "Performing a prayer (Salat) with the newborn",
        ],
        correctAnswerIndex: 1,
        explanation:
          "Tahneek is the Sunnah of chewing a date and applying a portion of it to a newborn baby's palate.\n\nAnas said, 'On the day he was born, I took 'Abdullah ibn Abi Talha to the Prophet, may Allah bless him and grant him peace. I found him wearing a woollen robe while he was marking one of his camels with tar. The Prophet said, 'Do you have any dates with you?' 'Yes,' I replied. I gave him some dates. He chewed the dates and opened the child's mouth and put some chewed dates into the child's mouth. The child licked his lips. The Prophet, may Allah bless him and grant him peace, said, 'The Ansar love dates,' and gave him the name 'Abdullah.'",
      },
      {
        question: "It’s Sunnah that the child should be given a name by the __ day after birth?",
        options: ["5th", "6th", "7th", "8th"],
        correctAnswerIndex: 2,
        explanation:
          "The Prophet (ﷺ) said: 'Every child is held in pledge for their 'Aqiqah (sacrifice), which is to be slaughtered on their seventh day, their head is to be shaved, and they are to be named.'",
      },
    ],
  },
  {
    id: 12,
    released: true,
    timeOfRelease: "2024-11-14T13:00:00Z",
    seasonId: 1,
    questions: [
      {
        question: "Does Isteghfar (praying for forgiveness) increase rizk (provisions)?",
        options: ["Yes", "No"],
        correctAnswerIndex: 0,
        explanation:
          "Allah says in the Quran: 'I said (to them): Ask forgiveness from your Lord; Verily, He is Oft-Forgiving; He will send rain to you in abundance; And give you increase in wealth and children, and bestow on you gardens and bestow on you rivers.' [Nuh 71:10-12]",
      },
      {
        question: "Does Sadaqah (Charity) decrease wealth?",
        options: ["Yes", "No"],
        correctAnswerIndex: 1,
        explanation:
          "When viewed through the narrow lens of worldly rules, giving in charity might seem like it reduces your wealth. But as Muslims, we are given the full perspective of how the world works.\n\nThe Prophet ﷺ said: 'The wealth of a man will not diminish by Sadaqah (charity).’\n\nAllah reminds us: 'Say: Truly, my Lord enlarges the provision for whom He wills of His slaves, and (also) restricts (it) for him. And whatsoever you spend of anything (in Allah’s Cause), He will replace it. And He is the Best of providers.'\n\n[Saba’ 34:39]",
      },
      {
        question: "Does Sila Al-Rahim (maintaining ties of kinship) increase rizk (provisions)?",
        options: ["Yes", "No"],
        correctAnswerIndex: 0,
        explanation:
          "The Messenger of Allah (blessings and peace of Allah be upon him) said: 'Whoever would like his provision to be increased and [his life to be extended], should uphold the ties of kinship.'",
      },
      {
        question: "Does the Rizk prayer (Salat al Rizk) increase rizk (provisions)?",
        options: ["Yes", "No"],
        correctAnswerIndex: 1,
        explanation: "Trick question! There is nothing known as Salat al-Rizk. In the authentic Sunnah, there is no known prayer specifically for asking for increased provision.",
      },
      {
        question: "Does Hajj and Umrah increase rizk? (Avg. cost of Hajj from the US is $9000)",
        options: ["Yes", "No"],
        correctAnswerIndex: 0,
        explanation:
          "The Prophet of Allah ﷺ said: 'Continuously perform Hajj and 'Umrah, as they both eradicate poverty and sins, just as a furnace removes impurities from iron, gold, and silver. And a Hajj that is accepted has a reward no less than Paradise.'",
      },
      {
        question: "Does marriage increase rizk (provision)?",
        options: ["Yes", "No"],
        correctAnswerIndex: 0,
        explanation:
          "Allah says in the Qur'an: 'And marry the unmarried among you and the righteous among your male slaves and female slaves. If they should be poor, Allah will enrich them from His bounty, and Allah is all-Encompassing and Knowing.'[Qur’an 24:32]\n\nIn this verse from Surah An-Nur, Allah SWT encourages unmarried individuals not to allow fear of poverty to be a reason why they don’t try to get married, reassuring them that He will enrich them from His abundant blessings and provisions.",
      },
      {
        question: "Does supporting a student of knowledge increase rizk?",
        options: ["Yes", "No"],
        correctAnswerIndex: 0,
        explanation:
          "There were two brothers in the time of the Prophet ﷺ, one of whom would attend the lessons of the Prophet ﷺ and the other would engage in business. The businessman complained to the Prophet ﷺ about his brother, and the Prophet said, 'Perhaps you are granted provision because of him.' [Tirmidhi]",
      },
    ],
  },
  {
    id: 13,
    released: true,
    timeOfRelease: "2024-11-15T13:00:00Z",
    seasonId: 1,
    questions: [
      {
        question: "Which prayer if prayed in the masjid earns you the reward of praying the whole night?",
        options: ["Fajr", "Duhr", "Asr", "Maghrib", "Isha"],
        correctAnswerIndex: 0,
        explanation:
          "Allah's Messenger (ﷺ) said: 'Whoever prays the Isha prayer in congregation, it is as if they have stood in prayer for half the night. And whoever prays the Fajr prayer in congregation, it is as if they have stood in prayer for the entire night.'",
      },
      {
        question: "Which two rak'ah (unit of prayer) are better than the whole world?",
        options: ["Two rak’ah before Fajr", "Two rak’ah after Duhr", "Two rak’ah after Maghrib", "Two rak’ah after Isha"],
        correctAnswerIndex: 0,
        explanation: "Aishah (rA) reported:\nThe Prophet (ﷺ) said, 'The two Rak'ah before the dawn (Fajr) prayer are better than this world and all it contains.'",
      },
      {
        question: "In the morning every single joint of yours must pay a sadaqah (charity). What 2 rak’ah will pay that off?",
        options: ["Fajr Prayer", "Duha Prayer", "Sunnah of Fajr", "Sunnah of Isha"],
        correctAnswerIndex: 1,
        explanation:
          "Duha prayer is a simple 2 rak'ahs that’s prayed any time after the sun rises until just before Dhuhr prayer. It’s highly rewarding and a great habit to incorporate into your daily life.\n\nThe Prophet (ﷺ) said: 'In the morning every single joint of yours must pay a sadaqah (charity). Every SubhanAllah is a sadaqah, every Alhamdulillah is a sadaqah, every La Ilaha Illa Allah is a sadaqah, every Allahu Akbar is a sadaqah, every commanding good is a sadaqah, and every forbidding evil is a sadaqah, and all this is accomplished through two rak’ahs one can pray in Duha.' [Muslim]\n\nAbu Hurayrah (RA) reported that the Messenger of Allah (ﷺ) said: 'No one persists in offering Duha prayer except one who often turns to Allah, for it is the prayer of those who often turn to Allah (SWT).'",
      },
      {
        question: "Which Sunnah prayer did the Prophet never abandon even when traveling?",
        options: ["Duha Prayer", "Sunnah of Duhr", "Sunnah of Isha", "Witr Prayer"],
        correctAnswerIndex: 3,
        explanation:
          "Ibn al-Qayyim said:\n'It was the practice of the Prophet (ﷺ) when travelling to pray only the obligatory prayers, and it was not narrated that he used to pray the regular Sunnah prayers either before or after the fard prayers, apart from Witr and the Sunnah of Fajr, which he never omitted whether he was travelling or not.'",
      },
      {
        question: "Which prayer if prayed in the masjid earns you the reward of praying half the night?",
        options: ["Fajr", "Duhr", "Asr", "Maghrib", "Isha"],
        correctAnswerIndex: 4,
        explanation:
          "Allah's Messenger (ﷺ) said: 'Whoever prays the Isha prayer in congregation, it is as if they have stood in prayer for half the night. And whoever prays the Fajr prayer in congregation, it is as if they have stood in prayer for the entire night.'",
      },
    ],
  },
  {
    id: 14,
    released: true,
    timeOfRelease: "2024-11-16T13:00:00Z",
    seasonId: 1,
    questions: [
      {
        question: "What are you not allowed to do in Sujood?",
        options: ["Make dua in Arabic", "Make dua in another language", "Recite Quran", "Recite adhkar"],
        correctAnswerIndex: 2,
        explanation:
          "The Prophet ﷺ said: 'I have been forbidden to recite the Quran in the state of bowing and prostration. So whilst bowing, extol the Lord in it, and while you are in prostration strive your hardest supplicating, as it is most likely that you will be responded to.' [Muslim]",
      },
      {
        question: "What is the hidden Shirk?",
        options: ["Drinking alcohol & gambling", "Gossiping & lying", "Showing off your good deeds", "Keeping your good deeds secret"],
        correctAnswerIndex: 2,
        explanation:
          "The Prophet ﷺ said: 'Shall I not tell you about that which I fear more for you than the Dajjaal?' We said: 'Yes.' He said: 'Hidden Shirk; which is when a man stands to pray and makes it look good because he sees a man looking at him.'",
      },
      {
        question: "How many Takbeers (Allahu Akbar) are in Salat al-Janazah (Prayer for the dead)?",
        options: ["1", "2", "3", "4"],
        correctAnswerIndex: 3,
        explanation:
          "- You say the first Takbir ('Allahu Akbar'), then you seek [refuge with Allah from the accursed Shaytan]. Then you say Bismillah ir-Rahman ir-Rahim and [recite Al-Fatihah].\n- Then you say the second Takbir and send blessings upon the Prophet (peace and blessings of Allah be upon him) as one does at the end of the prayer.\n- Then you say the third Takbir and make du’a for the deceased.\n- Then you say the fourth Takbirand make duaa for all muslims,\n - Then say one Taslim to the right, saying 'Assalamu ‘alaykum wa rahmatullah.' (or two taslims depending on the mazhab)",
      },
      {
        question: "‘Aqiqah is performed on the 7th day after birth. What is 'Aqiqah?",
        options: ["Sacrificing a sheep", "Communal feast", "Special prayer", "Donating gold"],
        correctAnswerIndex: 0,
        explanation:
          "'Aqiqah refers to the sacrifice that is offered on behalf of the newborn on the seventh day after birth.\n\nThe Prophet (ﷺ) said: 'Every child is held in pledge for their 'Aqiqah (sacrifice), which is to be slaughtered on their seventh day, their head is to be shaved, and they are to be named.'",
      },
      {
        question: "Does Isteghfar (praying for forgiveness) increase rizk (provisions)?",
        options: ["Yes", "No"],
        correctAnswerIndex: 0,
        explanation:
          "Allah says in the Quran: 'I said (to them): Ask forgiveness from your Lord; Verily, He is Oft-Forgiving; He will send rain to you in abundance; And give you increase in wealth and children, and bestow on you gardens and bestow on you rivers.' [Nuh 71:10-12]",
      },
      {
        question: "Which Sunnah prayer did the Prophet never abandon even when traveling?",
        options: ["Duha Prayer", "Sunnah of Duhr", "Sunnah of Isha", "Witr Prayer"],
        correctAnswerIndex: 3,
        explanation:
          "Ibn al-Qayyim said:\n'It was the practice of the Prophet (ﷺ) when travelling to pray only the obligatory prayers, and it was not narrated that he used to pray the regular Sunnah prayers either before or after the fard prayers, apart from Witr and the Sunnah of Fajr, which he never omitted whether he was travelling or not.'",
      },
      {
        question: "What should you do if you forget to say Bismillah before eating?",
        options: [
          "Say “أَسْتَغْفِرُ اللهَ”\n- “I seek forgiveness from Allah”",
          "Say “بِسْمِ اللهِ”\n- “In the name of Allah”",
          "Say “بِسْمِ اللهِ أَوَّلَهُ وَآخِرَهُ”\n- “In the name of Allah, at the beginning and at the end”",
          "It’s ok, keep eating",
        ],
        correctAnswerIndex: 2,
        explanation:
          "Arabic: بِسْمِ اللهِ أَوَّلَهُ وَآخِرَهُ\nTransliteration: Bismillah Awwalahu wa Aakhiruhu\nTranslation: In the name of Allah, at the beginning and at the end\n\nProphet Muhammad ﷺ said: “When one of you eats, let him mention the name of Allah. If he forgets to mention the name of Allah at the beginning, let him say: In the name of Allah at the beginning and at the end (Bismillahi awwalahu wa aakhirahu).”",
      },
    ],
  },
  {
    id: 15,
    released: true,
    timeOfRelease: "2024-11-17T13:00:00Z",
    seasonId: 1,
    questions: [
      {
        question: "Can you make duaa for anything? (By: Mohib)",
        options: ["Yes", "No"],
        correctAnswerIndex: 1,
        explanation:
          "You can make du’a for anything permissible, but not for what is sinful, impossible, or inappropriate. Allah says: 'Call upon your Lord in humility and privately; indeed, He does not like transgressors.'[Surah Al-A'raf: 55]\n\nThis means avoiding excessive, disrespectful, or impermissible requests. Du’a should reflect humility and align with Allah’s laws.",
      },
      {
        question: "Which part of the night is duaa not rejected?",
        options: ["The first third of the night", "The second third of the night", "The last third of the night", "None of the above"],
        correctAnswerIndex: 2,
        explanation:
          "According to the hadith of Abu Umamah: It was said, 'O Messenger of Allah, which du`a is heard?' He said: 'In the last third of the night, and following the prescribed prayers.'\n\nThe Messenger of Allah (blessings and peace of Allah be upon him) said: 'Our Lord, may He be blessed and exalted, comes down to the lowest heaven every night when the last third of the night is left, and He says: ‘Who will call upon Me, that I may answer him? Who will ask of Me, that I may give him? Who will ask Me for forgiveness, that I may forgive him?’'",
      },
      {
        question: "Duaa is not rejected during which time?",
        options: ["Before Athan", "During Athan", "Between Athan and Iqama", "After Iqama"],
        correctAnswerIndex: 2,
        explanation: "The Prophet (ﷺ) said: “A du`a offered between the adhan and iqamah is not rejected.”",
      },
      {
        question: "What are the possible responses from Allah to a person's Duaa (supplication) according to Islamic teachings?",
        options: [
          "Allah will immediately fulfill the person's desire.",
          "Allah will ward off some evil from the person because of the Du'a.",
          "Allah will provide something better than what was asked for.",
          "Allah will save the reward for the person for the Day of Resurrection.",
          "All of the above",
        ],
        correctAnswerIndex: 4,
        explanation:
          "The response to the Du`a may take different forms:\n\n- Allah may respond and fulfill the desire of the person who made the Du`a.\n- He may ward off some evil from the person because of the Du`a.\n- He may facilitate something better than what was asked for.\n- He may save it with Him for the person on the Day of Resurrection when they will be most in need of it.",
      },
      {
        question: "Which day has an hour when duaa is not rejected?",
        options: ["Friday", "Eid al-Adha", "Eid al-Fitr", "16th of Shawwal"],
        correctAnswerIndex: 0,
        explanation: 'Messenger of Allah (ﷺ) said: "On Friday, there is an hour when, if a Muslim happens to pray at that time and ask Allah for something good, He will give it to him."',
      },
    ],
  },
  {
    id: 16,
    released: true,
    timeOfRelease: "2024-11-18T13:00:00Z",
    seasonId: 1,
    questions: [
      {
        question: "Who was the most beloved person to Prophet Muhammad?",
        options: ["Aminah (his mom)", "Aisha (his wife)", "Abu Bakr (his closest friend)", "Khadijah (his first wife)"],
        correctAnswerIndex: 1,
        explanation:
          "‘Amr ibn al-‘As reported: I said, “Which person is most beloved to you?” The Prophet, peace and blessings be upon him, said, “Aisha.” I said, “I mean among men.” The Prophet said, “Her father (Abu Bakr)” I said, “Then who?” The Prophet said, “Umar ibn al-Khattab,” and the Prophet mentioned other men.\n\nSource: Ṣaḥīḥ al-Bukhārī 3662, Ṣaḥīḥ Muslim 2384",
      },
      {
        question: "Who was the most beloved man to Prophet Muhammad?",
        options: ["Abu Bakr (RA)", "Umar (RA)", "Uthman (RA)", "Ali (RA)"],
        correctAnswerIndex: 0,
        explanation:
          "‘Amr ibn al-‘As reported: I said, “Which person is most beloved to you?” The Prophet, peace and blessings be upon him, said, “Aisha.” I said, “I mean among men.” The Prophet said, “Her father (Abu Bakr)” I said, “Then who?” The Prophet said, “Umar ibn al-Khattab,” and the Prophet mentioned other men.\n\nSource: Ṣaḥīḥ al-Bukhārī 3662, Ṣaḥīḥ Muslim 2384",
      },
      {
        question: "Which three surahs, if recited three times in the morning and the evening, will suffice you for everything? (By: Teacher Hashim)",
        options: ["Surah Ikhlas, Surah Falaq, Surah Nas", "Surah Kahf, Surah Falaq, Surah Nas", "Surah Kahf, Surah Baqara, Surah Yasin", "None of the above"],
        correctAnswerIndex: 0,
        explanation:
          "The Prophet (peace and blessings be upon him) said: 'Recite Sūrah al-Ikhlās and al-Mu’awwidhatayn (Sūrah al-Falaq and Sūrah al-Nās) three times in the morning and the evening. It will suffice you in all respects.' (Tirmidhī 3575)",
      },
      {
        question: "Which duaa, if said after eating, will lead to all your past sins being forgiven?",
        options: [
          "اَلْحَمْدُ لِلَّهِ الَّذِي أَطْعَمَنِي هَذَا، وَرَزَقَنِيهِ مِنْ غَيْرِ حَوْلٍ مِنِّي وَلَا قُوَّةٍ\n- “All praise is due to Allah Who has given me food to eat and provided it without any endeavour on my part or any power.”",
          "الْحَمْدُ لِلَّهِ\n- “All praise is due to Allah”",
          "سُبْـحَانَ اللهِ وَبِحَمْدِهِ سُبْـحَانَ اللهِ العَظِيمِ\n- “Glorified is Allah and praised is He. Glorified is Allah the most great.”",
          "الحَمْدُ لِلَّهِ حَمْدًا كَثِيرًا طَيِّبًا مُبَارَكًا عَلَى مَا رَزَقَنِي مِنْ طَعَامٍ وَشَرَابٍ\n- “All praise is due to Allah - an abundant, pure and blessed praise, for the food and drinks he has given me”",
        ],
        correctAnswerIndex: 0,
        explanation:
          "The Prophet (ﷺ) said: 'He who has taken food and says at the end: (Al-hamdu lillahi-llazi at'amani haza, wa razaqaniihi min ghairi haulin minni wa la quwwah), all his past sins will be forgiven.'",
      },
      {
        question: "‘Aqiqah is performed on the 7th day after birth. What is 'Aqiqah?",
        options: ["Sacrificing a sheep", "Communal feast", "Special prayer", "Donating gold"],
        correctAnswerIndex: 0,
        explanation:
          "'Aqiqah refers to the sacrifice that is offered on behalf of the newborn on the seventh day after birth.\n\nThe Prophet (ﷺ) said: 'Every child is held in pledge for their 'Aqiqah (sacrifice), which is to be slaughtered on their seventh day, their head is to be shaved, and they are to be named.'",
      },
    ],
  },
  {
    id: 17,
    released: true,
    timeOfRelease: "2024-11-19T13:00:00Z",
    seasonId: 1,
    questions: [
      {
        question: "What did the Prophet Muhammad ﷺ say about removing something harmful from the road?",
        options: ["It counts as a form of charity", "It is a minor sin", "It is obligatory for all Muslims", "It guarantees Jannah"],
        correctAnswerIndex: 0,
        explanation: "The Prophet Muhammad ﷺ said: 'Removing harmful objects from a path is a form of charity.'",
      },
      {
        question: "Which charity has the greatest reward? The charity you give ___",
        options: ["During the day", "After completing Salah", "While you are healthy and fearing poverty", "Before starting a business venture"],
        correctAnswerIndex: 2,
        explanation:
          "A man came to the Prophet, peace and blessings be upon him, and he said, “O Messenger of Allah, which charity has the greatest reward?” The Prophet said, 'That you give charity while you are healthy, stingy, fearing poverty, and hoping to be rich. Do not delay giving until you are on your deathbed, then say it is for such a person. It already belongs to that person.'",
      },

      {
        question: "How should Muslims give charity according to the Quran to maximize their rewards?",
        options: ["Openly, so others are encouraged to do the same", "Secretly, without seeking recognition", "With conditions attached", "Only during Ramadan"],
        correctAnswerIndex: 1,
        explanation:
          "Allah says in the Quran: 'If you disclose your charitable donations, they are good; but if you conceal them and give them to the poor, it is better for you, and it will remove some of your misdeeds. And Allah is [fully] Acquainted with what you do.' (Surah Al-Baqarah, 2:271)",
      },
      {
        question: "Which action can extinguish sins as water extinguishes fire?",
        options: ["Giving charity", "Fasting", "Reciting the Quran", "Performing Wudu (ablution)"],
        correctAnswerIndex: 0,
        explanation:
          "The Prophet Muhammad (ﷺ) said:\n 'Shall I not tell you of the means of goodness? Fasting is a shield, and charity extinguishes sin as water extinguishes fire, and a man’s prayer in the middle of the night.'",
      },
      {
        question: "You will never achieve righteousness until you donate some of what you cherish.",
        options: ["True", "False"],
        correctAnswerIndex: 0,
        explanation: "Allah says: 'You will never achieve righteousness until you donate some of what you cherish. And whatever you give is certainly well known to Allah.'(Surah Aal-e-Imran, 3:92)",
      },
    ],
  },
  {
    id: 18,
    released: true,
    timeOfRelease: "2024-11-20T13:00:00Z",
    seasonId: 1,
    questions: [
      {
        question: "Which sin will Allah (SWT) not forgive?\n (By Teacher Hashim)",
        options: ["Drinking Alcohol", "Lying", "Zina (Adultery)", "Shirk (associating with Allah)"],
        correctAnswerIndex: 3,
        explanation:
          "Allah says in the Quran: 'Indeed, Allah does not forgive associating others with Him ˹in worship˺, but forgives anything else of whoever He wills. And whoever associates others with Allah has indeed committed a grave sin.' (Surah An-Nisa, 4:48)",
      },
      {
        question: "Which sin, if committed, will cause Allah to declare war on the sinner?",
        options: ["Riba (Usury | Dealing with interest)", "Zina (Adultery)", "Consistent lying", "Drinking alcohol"],
        correctAnswerIndex: 0,
        explanation:
          "Allah says in the Quran:\n\n[2:278] O believers! Fear Allah, and give up outstanding interest if you are ˹true˺ believers.\n\n[2:279] If you do not, then beware of a war with Allah and His Messenger! But if you repent, you may retain your principal—neither inflicting nor suffering harm.",
      },
      {
        question: "The struggles you go through remove from your sins.",
        options: ["True", "False"],
        correctAnswerIndex: 0,
        explanation:
          'The Prophet (ﷺ) said, "No fatigue, nor disease, nor sorrow, nor sadness, nor hurt, nor distress befalls a Muslim, even if it were the prick he receives from a thorn, but that Allah expiates some of his sins for that."',
      },
      {
        question: "Who were described as brothers to the devils?\n (By Mohib)",
        options: ["Liars", "Cheaters", "Wasteful people", "Killers"],
        correctAnswerIndex: 2,
        explanation: "[17:27] 'Surely the wasteful are ˹like˺ brothers to the devils. And the Devil is ever ungrateful to his Lord.'",
      },
      {
        question: "Which Duaa (supplication) if said in the morning and the evening with firm belief will guarantee Jannah (Paradise)? \n (By Mohib)",
        options: ["Duaa after prayer", "Duaa al Haja (prayer of need)", "Duaa al Istekhara (prayer of guidance)", "Duaa Sayed al Istekhfar (The Master of Seeking Forgiveness)"],
        correctAnswerIndex: 3,
        explanation:
          "The Prophet (ﷺ) said, \"The best supplication for seeking forgiveness (Sayed-ul-Istighfar) is to say:\n\n'Allahumma Anta Rabbi, la ilaha illa Anta, khalaqtani wa ana 'abduka, wa ana 'ala 'ahdika wa wa'dika mastata'tu, a'udhu bika min sharri ma sana'tu, abu'u laka bini'matika 'alayya, wa abu'u bidhanbi faghfir li, fa innahu la yaghfirudh-dhunuba illa Anta.'\n\n(O Allah! You are my Lord. There is no true god except You. You have created me, and I am Your slave, and I hold to Your Covenant as far as I can. I seek refuge in You from the evil of what I have done. I acknowledge the favors that You have bestowed upon me, and I confess my sins. Pardon me, for none but You has the power to pardon.)\n\nHe who supplicates in these terms during the day with firm belief in it and dies on the same day (before the evening), he will be one of the dwellers of Jannah; and if anyone supplicates in these terms during the night with firm belief in it and dies before the morning, he will be one of the dwellers of Jannah.\"",
      },
    ],
  },
  {
    id: 19,
    released: true,
    timeOfRelease: "2024-11-21T13:00:00Z",
    seasonId: 1,
    questions: [
      {
        question: "Which day of the week will the Day of Judgment happen?",
        options: ["Friday", "Saturday", "Sunday", "Monday"],
        correctAnswerIndex: 0,
        explanation:
          'The Prophet ﷺ said: "The sun has not shone in a day better than Friday. It is the day in which Adam, may Allah exalt his mention, was created, descended (to earth), was forgiven, and died. It is the day in which The Hour (Day of Judgment) will take place."',
      },
      {
        question: "Which one of these is NOT considered a martyr after they die?",
        options: [
          "The one who passes away due to drowning",
          "The one who passes away due to being crushed under something",
          "The one who passes away due to plague",
          "The one who dies while reading quran",
        ],
        correctAnswerIndex: 3,
        explanation:
          "The Prophet ﷺ mentioned that martyrs include those who die due to drowning, being crushed, or from a plague. However, those who die while committing a major sin are not considered martyrs.",
      },
      {
        question: "Memorizing the first 10 verses of which Surah will protect you from the false Al-Masih Al-Dajjal (the false Messiah)?",
        options: ["Surah Baqara", "Surah Kahf", "Surah Ikhlas", "Surah Kawthar"],
        correctAnswerIndex: 1,
        explanation: 'The Prophet, peace and blessings be upon him, said, "Whoever memorizes ten verses from the beginning of Surat al-Kahf will be immune to the False Messiah."',
      },
      {
        question: "How many Surahs are in the Quran?",
        options: ["114", "113", "120", "50"],
        correctAnswerIndex: 0,
        explanation: "Locate the nearest Quran",
      },
      {
        question: "What does Allah build for the person who helps build a Masjid?",
        options: ["A tree in Jannah", "A car in Jannah", "A house in Jannah", "A masjid in Jannah"],
        correctAnswerIndex: 2,
        explanation:
          "It was narrated from Jabir bin 'Abdullah that:\nThe Messenger of Allah said: \"Whoever builds a mosque for the sake of Allah, like a sparrow's nest for Allah or even smaller, Allah will build for him a house in Paradise.\"\n\nThis hadith emphasizes the immense reward for building a mosque, no matter how small the contribution might be. Even if a person contribution is as small as a sparrow’s nest, or even smaller, with the sincere intention of seeking Allah's pleasure, Allah will reward them by building a house for them in Paradise.",
      },
    ],
  },
  {
    id: 20,
    released: true,
    timeOfRelease: "2024-11-22T13:00:00Z",
    seasonId: 1,
    questions: [
      {
        question: "What is the reward for reciting Surah Al-Kahf on Friday?",
        options: ["Protection from the Hellfire", "Guidance for the entire week", "Illumination with light between two Fridays", "Forgiveness of all past sins"],
        correctAnswerIndex: 2,
        explanation: "The Prophet Muhammad ﷺ said: 'Whoever reads Surat al-Kahf on Friday, he will be illuminated with light between the two Fridays.'",
      },
      {
        question: "Which prayer is one of the best prayers before Allah?",
        options: ["Isha prayer on Thursday in congregation", "Fajr prayer on Friday in congregation", "Maghrib prayer on Friday individually", "Isha prayer on Friday in congregation"],
        correctAnswerIndex: 1,
        explanation: "The Prophet Muhammad ﷺ said: 'The best prayer before Allah is Fajr prayer on Friday in congregation.'",
      },
      {
        question: "What is the reward for bathing on Friday, walking to the masjid, sitting near the Imam, and listening attentively without engaging in idle talk?",
        options: [
          "Forgiveness of sins for a year",
          "The reward of fasting and praying at night for a year for every step taken to the masjid",
          "Double the reward of a regular prayer",
          "Entrance into Paradise directly",
        ],
        correctAnswerIndex: 1,
        explanation:
          "The Prophet Muhammad ﷺ said: 'Whoever takes a bath on Friday, bathes completely, goes early, arrives early, walks and does not ride (to the mosque), sits close to the Imam, and listens to him, and does not engage in idle talk; for every step he takes, he will have the reward of one year, the reward of a year’s fasting and praying (at night).'",
      },
      {
        question: "Which day has an hour when duaa is not rejected? (By Mohib)",
        options: ["Friday", "Eid al-Adha", "Eid al-Fitr", "16th of Shawwal"],
        correctAnswerIndex: 0,
        explanation: 'Messenger of Allah (ﷺ) said: "On Friday, there is an hour when, if a Muslim happens to pray at that time and ask Allah for something good, He will give it to him."',
      },
      {
        question: "What is the special blessing for a Muslim who passes away on Friday or the night of Friday?",
        options: ["Immediate entrance into Paradise", "Protection from the trial of the grave", "Forgiveness of all sins", "Reward of performing Hajj"],
        correctAnswerIndex: 1,
        explanation: "The Prophet Muhammad ﷺ said: 'There is no Muslim who dies during the day of Friday or the night of Friday but Allah will protect him from the trial of the grave.'",
      },
    ],
  },
  {
    id: 21,
    released: true,
    timeOfRelease: "2024-11-23T13:00:00Z",
    seasonId: 1,
    questions: [
      {
        question: "Which sin, if committed, will cause Allah to declare war on the sinner?",
        options: ["Riba (Usury | Dealing with interest)", "Zina (Adultery)", "Consistent lying", "Drinking alcohol"],
        correctAnswerIndex: 0,
        explanation:
          "Allah says in the Quran:\n\n[2:278] O believers! Fear Allah, and give up outstanding interest if you are ˹true˺ believers.\n\n[2:279] If you do not, then beware of a war with Allah and His Messenger! But if you repent, you may retain your principal—neither inflicting nor suffering harm.",
      },
      {
        question: "Which charity has the greatest reward? The charity you give ___",
        options: ["During the day", "After completing Salah", "While you are healthy and fearing poverty", "Before starting a business venture"],
        correctAnswerIndex: 2,
        explanation:
          "A man came to the Prophet, peace and blessings be upon him, and he said, “O Messenger of Allah, which charity has the greatest reward?” The Prophet said, 'That you give charity while you are healthy, stingy, fearing poverty, and hoping to be rich. Do not delay giving until you are on your deathbed, then say it is for such a person. It already belongs to that person.'",
      },
      {
        question: "Which duaa, if said after eating, will lead to all your past sins being forgiven?",
        options: [
          "اَلْحَمْدُ لِلَّهِ الَّذِي أَطْعَمَنِي هَذَا، وَرَزَقَنِيهِ مِنْ غَيْرِ حَوْلٍ مِنِّي وَلَا قُوَّةٍ\n- “All praise is due to Allah Who has given me food to eat and provided it without any endeavour on my part or any power.”",
          "الْحَمْدُ لِلَّهِ\n- “All praise is due to Allah”",
          "سُبْـحَانَ اللهِ وَبِحَمْدِهِ سُبْـحَانَ اللهِ العَظِيمِ\n- “Glorified is Allah and praised is He. Glorified is Allah the most great.”",
          "الحَمْدُ لِلَّهِ حَمْدًا كَثِيرًا طَيِّبًا مُبَارَكًا عَلَى مَا رَزَقَنِي مِنْ طَعَامٍ وَشَرَابٍ\n- “All praise is due to Allah - an abundant, pure and blessed praise, for the food and drinks he has given me”",
        ],
        correctAnswerIndex: 0,
        explanation:
          "The Prophet (ﷺ) said: 'He who has taken food and says at the end: (Al-hamdu lillahi-llazi at'amani haza, wa razaqaniihi min ghairi haulin minni wa la quwwah), all his past sins will be forgiven.'",
      },
      {
        question: "Which three surahs, if recited three times in the morning and the evening, will suffice you for everything? (By: Teacher Hashim)",
        options: ["Surah Ikhlas, Surah Falaq, Surah Nas", "Surah Kahf, Surah Falaq, Surah Nas", "Surah Kahf, Surah Baqara, Surah Yasin", "None of the above"],
        correctAnswerIndex: 0,
        explanation:
          "The Prophet (peace and blessings be upon him) said: 'Recite Sūrah al-Ikhlās and al-Mu’awwidhatayn (Sūrah al-Falaq and Sūrah al-Nās) three times in the morning and the evening. It will suffice you in all respects.' (Tirmidhī 3575)",
      },
      {
        question: "Duaa is not rejected during which time?",
        options: ["Before Athan", "During Athan", "Between Athan and Iqama", "After Iqama"],
        correctAnswerIndex: 2,
        explanation: "The Prophet (ﷺ) said: “A du`a offered between the adhan and iqamah is not rejected.”",
      },
    ],
  },
  {
    id: 22,
    released: true,
    timeOfRelease: "2024-11-24T13:00:00Z",
    seasonId: 1,
    questions: [
      {
        question: "Who did the Prophet Muhammad (ﷺ) say is most deserving of a your kindness? (By Yousuf)",
        options: ["Your father", "Your wife", "Your mother", "Your children"],
        correctAnswerIndex: 2,
        explanation:
          "A person came to Messenger of Allah (ﷺ) and asked, 'Who among people is most deserving of my fine treatment?' He (ﷺ) said, 'Your mother.' He again asked, 'Who next?' 'Your mother,' the Prophet (ﷺ) replied again. He asked, 'Who next?' He (the Prophet (ﷺ)) said again, 'Your mother.' He again asked, 'Then who?' Thereupon he (ﷺ) said, 'Then your father.'",
      },
      {
        question: "Who of these will be guaranteed  Paradise? (By Yousuf)",
        options: [
          "Someone who provides financial support to their daughters",
          "Someone who provides for their daughters, and treats them with mercy",
          "Someone who prays regularly for their daughters",
          "Someone who has two daughters",
        ],
        correctAnswerIndex: 1,
        explanation:
          "“Whoever has three daughters, shelters them, shows them mercy, and provides for them, Paradise will surely be guaranteed for him.” It was said, “O Messenger of Allah, what if they are only two?” He said, “Even if they are two.” Some of them thought, “If we had asked about one, he would have said, ‘Even one.’”",
      },
      {
        question: "When comparing spending the same amount of money, which of the following brings the greatest reward? (By Yousuf)",
        options: ["Spending on your family", "Spending to free a slave", "Spending in charity to the poor", "Spending in the path of Allah"],
        correctAnswerIndex: 0,
        explanation:
          "God’s Messenger (ﷺ) as saying: 'Of a dinar you spend as a contribution in God’s path, or to set free a slave, or as sadaqa given to a poor man, or in support of your family, the one spent in support of your family produces the greatest reward.'",
      },
      {
        question: "One of the best way to be good to your dad after he dies is?",
        options: ["Visiting his grave", "Telling your kids about him", "Maintaining relationships with his friends", "All of the above"],
        correctAnswerIndex: 2,
        explanation: "the Prophet said: 'Among the most dutiful of deeds is that a man nurture relations with the people his father was friends with.'",
      },
      {
        question: "The Prophet Muhammad (ﷺ) made duaa against the person who doesn't enter Jannah (Paradise) even though ___ . (By Yousuf)",
        options: ["He had wealth to give to continuously charity", "He had parents of old age to be good to", "He had wealth to go to Umrah", "All the above"],
        correctAnswerIndex: 1,
        explanation:
          "The Prophet Muhammad (ﷺ) said: 'May he be disgraced! May he be disgraced! May he be disgraced! The person whose parents, one or both of them, reach old age during his lifetime, yet he does not enter Paradise (by serving them).'\n\nIf your parents have lived to old age and you’ve had countless opportunities to be good to them, entering Jannah should be easy for you. If you fail to achieve that, it means you’ve truly missed out on an incredible chance to earn Allah's pleasure and have seriously messed up. ",
      },
    ],
  },
  {
    id: 23,
    released: true,
    timeOfRelease: "2024-11-25T13:00:00Z",
    seasonId: 1,
    questions: [
      {
        question: "Which prophet has been mentioned in the Quran as a friend of Allah?",
        options: ["Prophet Muhammad", "Prophet Musa (Moses)", "Prophet Isa (Jesus)", "Prophet Ibrahim (Abraham)"],
        correctAnswerIndex: 3,
        explanation:
          "Allah (SWT) says: 'And who is better in faith than those who ˹fully˺ submit themselves to Allah, do good, and follow the Way of Abraham, the upright? Allah chose Abraham as a close friend.' (Quran 4:125)",
      },
      {
        question: "To which prophet did Allah order to build an ark?",
        options: ["Prophet Dawood (David)", "Prophet Musa (Moses)", "Prophet Nooh (Noah)", "Prophet Ibrahim (Abraham)"],
        correctAnswerIndex: 2,
        explanation:
          "Allah says in the Quran: 'And construct the ship under Our Eyes and with Our Inspiration and address Me not on behalf of those who did wrong; they are surely to be drowned.' (Quran 11:37)\n\nProphet Noah chose a place outside the city, far from the sea, to build his ark. The disbelievers mocked him for building a ship on a hill, far from water, not understanding Allah's wisdom and power. Once the ark was complete, Allah commanded Noah to load the ark with pairs of animals and the believers. Allah says: 'Until when Our Command came and the lowlands gushed forth, overflowing, We said: Load it with two of each kind of animal (male and female), and embark your family, except against whom the Word has already gone forth, and those who believe. And none believed him except a few.' (Quran 11:40)",
      },
      {
        question: "Who was the father of Prophet Yusuf?",
        options: ["Iliyas (Elijah)", "Ayub (Job)", "Yakub (Jacob)", "Benjamin"],
        correctAnswerIndex: 2,
        explanation:
          "[12:4] When Joseph said to his father, 'O my father, indeed I have seen [in a dream] eleven stars and the sun and the moon; I saw them prostrating to me.'\n\n[12:5] He said, 'O my son, do not relate your vision to your brothers or they will contrive against you a plan. Indeed Satan, to man, is a manifest enemy.'\n\n[12:6] And thus will your Lord choose you and teach you the interpretation of narratives and complete His favor upon you and upon the family of Jacob, as He completed it upon your fathers, Abraham and Isaac. Indeed, your Lord is Knowing and Wise.",
      },
      {
        question: "Which Prophet was gifted with the ability to communicate with animals?",
        options: ["Al-Khidr", "Suleiman (Solomon)", "Musa (Moses)", "Uzair"],
        correctAnswerIndex: 1,
        explanation:
          "[27:16] And David was succeeded by Solomon, who said, 'O people! We have been taught the language of birds, and been given everything ˹we need˺. This is indeed a great privilege.'\n\n[27:17] Solomon’s forces of jinn, humans, and birds were rallied for him, perfectly organized.",
      },
      {
        question: "Which prophet's father, grandfather, and great-grandfather were also prophets?",
        options: ["Prophet Isa (Jesus)", "Prophet Ibrahim (Abraham)", "Prophet Yusuf (Joseph)", "Prophet Muhammad (ﷺ)"],
        correctAnswerIndex: 2,
        explanation:
          "Allah says in the Quran: 'And so will your Lord choose you ˹O Joseph˺, and teach you the interpretation of dreams, and perfect His favour upon you and the descendants of Jacob—˹just˺ as He once perfected it upon your forefathers, Abraham and Isaac. Surely your Lord is All-Knowing, All-Wise.' (Quran 12:6)\n\nProphet Yusuf (Joseph) was the son of Prophet Yakub (Jacob), who was the son of Prophet Ishaq (Isaac), who was the son of Prophet Ibrahim (Abraham).",
      },
    ],
  },
  {
    id: 24,
    released: true,
    timeOfRelease: "2024-11-26T13:00:00Z",
    seasonId: 1,
    questions: [
      {
        question: "Who will be thrown into the lowest depth of hellfire?",
        options: ["Liars", "Hypocrites", "Cheaters", "Tyrants"],
        correctAnswerIndex: 1,
        explanation: "Allah says in the Quran: 'Surely the hypocrites will be in the lowest depths of the Fire—and you will never find for them any helper.' (Quran 4:145)",
      },
      {
        question: "How many gates does Jahanam (hellfire) have?",
        options: ["1", "6", "7", "8"],
        correctAnswerIndex: 2,
        explanation: "[15:43] and surely Hell is their destined place, all together.\n [15:44] It has seven gates, to each a group of them is designated.",
      },
      {
        question: "Who are the first three to enter hellfire?",
        options: ["A Martyr (Shaheed), A Scholar, A wealthy man", "A Liar, A Thief, A Tyrant", "A Liar, An Adulterer (Zany), A Killer", "A Gambler, A Slanderer, An Unjust Judge"],
        correctAnswerIndex: 0,
        explanation:
          "Messenger of Allah (ﷺ) said:\n\n\"The first to be judged on the Day of Resurrection will be a man who had died as a martyr. He will be brought forward. Allah will remind him of the favours He had bestowed upon him and the man will acknowledge them.\n\nThen He will ask him: 'What did you do to express gratitude for it?'\n\nThe man will reply: 'I fought for Your Cause till I was martyred.'\n\nAllah will say: 'You have lied. You fought so that people might call you courageous; and they have done so.'\n\nCommand will then be issued about him and he will be dragged on his face and thrown into Hell.\n\nNext a man who had acquired and imparted knowledge and read the Qur'an will be brought forward. Allah will remind him of the favours He had bestowed upon him and the man will acknowledge them.\n\nThen He will ask him: 'What did you do to express gratitude for it?'\n\nThe man will reply: 'I acquired knowledge and taught it, and read the Qur'an for Your sake.'\n\nAllah will say to him: 'You have lied. You acquired knowledge so that people might call you a learned (man), and you read the Qur'an so that they might call you a reciter, and they have done so.'\n\nCommand will then be issued about him, and he will be dragged on his face and thrown into Hell.\n\nNext a man whom Allah had made affluent and to whom Allah had given plenty of wealth will be brought forward. Allah will remind him of the favours He had bestowed upon him and the man will acknowledge them.\n\nHe will ask him: 'What did you do to express gratitude for it?'\n\nThe man will reply: 'I did not neglect any of the ways You liked wealth to be spent liberally for Your sake.'\n\nAllah will say to him: 'You have lied. You did it so that people might call you generous, and they have done so.'\n\nCommand will then be issued about him and he will be dragged on his face and thrown into Hell.\"\n\n(Source: Sahih Muslim)",
      },
      {
        question: "Which Angel is Hellfire’s gatekeeper?",
        options: ["Malik", "Mikaeel", "Jibraeel", "Israfeel"],
        correctAnswerIndex: 0,
        explanation:
          "The Prophet (ﷺ) said: 'Last night I saw (in a dream) two men coming to me. One of them said, \"The person who kindles the fire is Malik, the gate-keeper of the (Hell) Fire, and I am Gabriel, and this is Michael.\"'",
      },
      {
        question: "All Muslims who enter Jahanam (Hellfire) will be there forever.",
        options: ["True", "False"],
        correctAnswerIndex: 1,
        explanation:
          "The Messenger of Allah (ﷺ) said: 'When the inhabitants of Paradise enter Paradise and the inhabitants of Hell enter Hell, God Most High will say, \"Bring forth those in whose hearts there is as much faith as a grain of mustard-seed.\" They will then be brought forth, burned and turned to charcoal, and be cast into the river of life, and they will sprout as does a seed in the rubbish carried away by a flood. Have you not seen that it comes out yellow and twisted?'",
      },
    ],
  },
  {
    id: 25,
    released: true,
    timeOfRelease: "2024-11-27T13:00:00Z",
    seasonId: 1,
    questions: [
      {
        question: "Is it okay to lie when reconciling between people?",
        options: ["Yes", "No"],
        correctAnswerIndex: 0,
        explanation: "The Prophet (ﷺ) said: 'He is not a liar who reconciles between people, conveying good messages and saying good things.'",
      },
      {
        question: "There are certain situations where lying is okay. Is joking one of them?",
        options: ["Yes", "No"],
        correctAnswerIndex: 1,
        explanation: "The Messenger of Allah (ﷺ) said: 'Woe to the one who speaks and tells lies in order to make the people laugh; woe to him, woe to him.'",
      },
      {
        question: "What is promised to a person who refrains from lying even when they are joking?",
        options: ["A palace on the outskirts of Paradise", "A house in the middle of Paradise", "A house in the highest part of Paradise", "Forgiveness of all past sins"],
        correctAnswerIndex: 1,
        explanation:
          "The Prophet Muhammad (ﷺ) said: 'I guarantee a palace on the outskirts of Paradise for one who refrains from arguing even if he is in the right, a house in the middle of Paradise for one who refrains from lying even when joking, and a house in the highest part of Paradise for one who makes his character excellent.'",
      },
      {
        question: "The Prophet Muhammad (ﷺ) described four characteristics; whoever possesses them all is a pure hypocrite. Which of the following is NOT one of these characteristics?",
        options: ["When entrusted with something, he betrays that trust", "When he speaks, he speaks a lot", "When he argues, he resorts to foul speech", "When he speaks, he lies"],
        correctAnswerIndex: 1,
        explanation:
          "The Prophet (ﷺ) said: 'There are four characteristics, whoever has them all is a pure hypocrite, and whoever has one of them has one of the characteristics of hypocrisy, until he gives it up: \n\n1. When he is entrusted with something, he betrays that trust.\n2. When he speaks, he lies.\n3. When he makes a covenant, he breaks it.\n4. When he disputes, he resorts to foul speech.'",
      },
      {
        question: "Does truthfulness lead to Paradise?",
        options: ["Yes", "No"],
        correctAnswerIndex: 0,
        explanation:
          "The Prophet Muhammad (ﷺ) said: 'Truthfulness leads to righteousness, and righteousness leads to Paradise. A man may continue to speak the truth until he is recorded with Allah as a speaker of truth. Lying leads to wickedness and wickedness leads to Hell. A man may continue to tell lies until he is recorded with Allah as a liar.'",
      },
    ],
  },
  {
    id: 26,
    released: true,
    timeOfRelease: "2024-11-28T13:00:00Z",
    seasonId: 1,
    questions: [
      {
        question: "What attribute of Allah does the name Al-Aleem represent?",
        options: ["The All-knowing", "The All-Seeing", "The All-Hearing", "The Humiliator"],
        correctAnswerIndex: 0,
        explanation:
          "The name 'Al-Aleem' represents the attribute of Allah being All-knowing. This means that Allah has complete knowledge and understanding of everything, including the past, present, and future. He is aware of all things, both seen and unseen, and possesses infinite wisdom and knowledge. This attribute highlights Allah's omniscience and His ability to comprehend and perceive all things.",
      },
      {
        question: "Which name of Allah means The All-Hearing?",
        options: ["Al-Baseer", "As-Samee", "Al-Hakam", "Al-Raheem"],
        correctAnswerIndex: 1,
        explanation:
          "As-Samee means 'The All-Hearing' in Arabic. This beautiful name of Allah reminds us that He hears every sound, every whisper, and every prayer—no matter how soft or far away it may seem. Allah’s hearing is perfect and limitless; nothing escapes His awareness.\n\nThis name is a powerful reminder for us to turn to Allah with our hopes, fears, and dreams, knowing He is always listening. It encourages us to speak to Him from our hearts, no matter where we are or what we’re going through. It also teaches us to trust in His attentiveness and seek His mercy and guidance in every moment.\n\nRemember: even when you feel unheard by the world, Allah hears you completely.",
      },
      {
        question: "Which name of Allah means Al-Ghaffaar?",
        options: ["The All-Hearing", "The Giver of Gifts", "The Absolutely Pure", "The Forgiver"],
        correctAnswerIndex: 3,
        explanation:
          "Al-Ghaffaar means 'The Forgiver' in Arabic. This name of Allah signifies His attribute of constantly forgiving and pardoning His creation. It emphasizes His mercy and compassion towards those who seek His forgiveness for their sins and shortcomings. By forgiving His servants, Allah demonstrates His infinite love and kindness, allowing them to repent and seek redemption. This name reminds believers of Allah's willingness to forgive and encourages them to seek His forgiveness and strive for spiritual growth.",
      },
      {
        question: "Some attributes of Allah can apply to humans.",
        options: ["True", "False"],
        correctAnswerIndex: 0,
        explanation:
          "Some attributes and names of Allah can apply to humans in a limited and appropriate way, while others cannot. Attributes like 'The Creator' (Al-Khaliq), 'The Provider' (Ar-Razzaq), and 'The God' (Al-Ilah) are unique to Allah and cannot be shared or claimed by humans, as they pertain to Allah's essence and actions that are beyond human capacity.\n\nHowever, there are attributes that Allah loves for His servants to embody in a way suitable for them. For example:\n\n- Knowledge: Allah is All-Knowing, and He loves those who seek and apply knowledge.\n- Generosity: Allah is the Most Generous and loves those who are generous.\n- Mercy: Allah is the Most Merciful and loves those who show mercy to others.\n- Forgiveness: Allah is the Most Forgiving and loves those who forgive within the limits of justice.\n\nWhile humans can reflect these qualities, their application is finite and subject to limitations. For instance, excessive mercy could lead to neglecting justice, and excessive generosity could result in wastefulness.\n\nAllah’s attributes are perfect and incomparable, and He encourages believers to adopt these characteristics in a balanced manner that aligns with Islamic teachings.",
      },
      {
        question: "Which name of Allah(SWT) means The Loving?",
        options: ["Ar-Raqeeb", "Al-Mujeeb", "Allah", "Al-Wadood"],
        correctAnswerIndex: 3,
        explanation:
          "Al-Wadood means 'The Most Loving' in Arabic. This beautiful name of Allah (SWT) shows His endless love and care for all of His creation. It reminds us that Allah’s love is unconditional, always present, and unmatched. Knowing this, we are encouraged to turn to Him in every moment, seeking His love and mercy in our lives.",
      },
    ],
  },
  {
    id: 27,
    released: true,
    timeOfRelease: "2024-11-29T13:00:00Z",
    seasonId: 1,
    questions: [
      {
        question: "Which of these fruits is mentioned in the Quran?",
        options: ["Grapes", "Apples", "Mangoes", "Oranges"],
        correctAnswerIndex: 0,
        explanation: "Allah says in the Quran: 'By means of it We produce gardens of dates and grapes for you, in which there are many fruits for you and from which you eat.' (Quran 23:19)",
      },
      {
        question: "How many times did the Prophet perform Umrah?",
        options: ["1", "2", "3", "4"],
        correctAnswerIndex: 3,
        explanation:
          "Qatadah narrated that Anas (may Allah be pleased with him) told him that the Messenger of Allah (ﷺ) performed ‘Umrah four times, all of them in Dhu’l-Qi’dah apart from the ‘Umrah which he performed with his Hajj.",
      },
      {
        question: "When a person dies all their good deeds come to an end except?",
        options: ["Ongoing charity", "Righteous child who will pray for him", "Beneficial knowledge", "All the above"],
        correctAnswerIndex: 3,
        explanation: "The Prophet (ﷺ) said: 'When a person dies, all his good deeds come to an end except three: ongoing charity, beneficial knowledge, or a righteous child who will pray for him.'",
      },
      {
        question: "On which of these days is fasting NOT prohibited?",
        options: ["The day of Eid al-Fitr", "The day after Eid al-Fitr", "The day of Eid al-Adha", "The day after Eid al-Adha"],
        correctAnswerIndex: 1,
        explanation:
          "The Prophet (ﷺ) forbade fasting on the day of Al-Fitr and An-Nahr (Eid al-Adha). He also said: 'The days of al-Tashreeq are days of eating, drinking and remembering Allah.' The days of al-Tashreeq are the three days after Eid al-Adha, during which fasting is prohibited. However, fasting is not prohibited on the day after Eid al-Fitr.",
      },
      {
        question: "How many times did the Prophet (ﷺ) perform Hajj?",
        options: ["1", "2", "3", "4"],
        correctAnswerIndex: 0,
        explanation:
          "Qatadah narrated that Anas (may Allah be pleased with him) told him that the Messenger of Allah (ﷺ) performed ‘Umrah four times, all of them in Dhu’l-Qi’dah apart from the ‘Umrah which he performed with his Hajj. The Prophet (peace be upon him) performed Hajj only once, which was his Farewell Pilgrimage.",
      },
    ],
  },
  {
    id: 28,
    released: true,
    timeOfRelease: "2024-11-30T13:00:00Z",
    seasonId: 1,
    questions: [
      {
        question: "Who will be thrown into the lowest depth of hellfire?",
        options: ["Liars", "Hypocrites", "Cheaters", "Tyrants"],
        correctAnswerIndex: 1,
        explanation: "Allah says in the Quran: 'Surely the hypocrites will be in the lowest depths of the Fire—and you will never find for them any helper.' (Quran 4:145)",
      },
      {
        question: "The Prophet Muhammad (ﷺ) described four characteristics; whoever possesses them all is a pure hypocrite. Which of the following is NOT one of these characteristics?",
        options: ["When entrusted with something, he betrays that trust", "When he speaks, he speaks a lot", "When he argues, he resorts to foul speech", "When he speaks, he lies"],
        correctAnswerIndex: 1,
        explanation:
          "The Prophet (ﷺ) said: 'There are four characteristics, whoever has them all is a pure hypocrite, and whoever has one of them has one of the characteristics of hypocrisy, until he gives it up: \n\n1. When he is entrusted with something, he betrays that trust.\n2. When he speaks, he lies.\n3. When he makes a covenant, he breaks it.\n4. When he disputes, he resorts to foul speech.'",
      },
      {
        question: "To which prophet did Allah order to build an ark?",
        options: ["Prophet Dawood (David)", "Prophet Musa (Moses)", "Prophet Nooh (Noah)", "Prophet Ibrahim (Abraham)"],
        correctAnswerIndex: 2,
        explanation:
          "Allah says in the Quran: 'And construct the ship under Our Eyes and with Our Inspiration and address Me not on behalf of those who did wrong; they are surely to be drowned.' (Quran 11:37)\n\nProphet Noah chose a place outside the city, far from the sea, to build his ark. The disbelievers mocked him for building a ship on a hill, far from water, not understanding Allah's wisdom and power. Once the ark was complete, Allah commanded Noah to load the ark with pairs of animals and the believers. Allah says: 'Until when Our Command came and the lowlands gushed forth, overflowing, We said: Load it with two of each kind of animal (male and female), and embark your family, except against whom the Word has already gone forth, and those who believe. And none believed him except a few.' (Quran 11:40)",
      },
      {
        question: "When comparing spending the same amount of money, which of the following brings the greatest reward? (By Yousuf)",
        options: ["Spending on your family", "Spending to free a slave", "Spending in charity to the poor", "Spending in the path of Allah"],
        correctAnswerIndex: 0,
        explanation:
          "God’s Messenger (ﷺ) as saying: 'Of a dinar you spend as a contribution in God’s path, or to set free a slave, or as sadaqa given to a poor man, or in support of your family, the one spent in support of your family produces the greatest reward.'",
      },
      {
        question: "Duaa is not rejected during which time?",
        options: ["Before Athan", "During Athan", "Between Athan and Iqama", "After Iqama"],
        correctAnswerIndex: 2,
        explanation: "The Prophet (ﷺ) said: “A du`a offered between the adhan and iqamah is not rejected.”",
      },
      {
        question: "What is the reward for bathing on Friday, walking to the masjid, sitting near the Imam, and listening attentively without engaging in idle talk?",
        options: [
          "Forgiveness of sins for a year",
          "The reward of fasting and praying at night for a year for every step taken to the masjid",
          "Double the reward of a regular prayer",
          "Entrance into Paradise directly",
        ],
        correctAnswerIndex: 1,
        explanation:
          "The Prophet Muhammad ﷺ said: 'Whoever takes a bath on Friday, bathes completely, goes early, arrives early, walks and does not ride (to the mosque), sits close to the Imam, and listens to him, and does not engage in idle talk; for every step he takes, he will have the reward of one year, the reward of a year’s fasting and praying (at night).'",
      },
      {
        question: "Which name of Allah(SWT) means The Loving?",
        options: ["Ar-Raqeeb", "Al-Mujeeb", "Allah", "Al-Wadood"],
        correctAnswerIndex: 3,
        explanation:
          "Al-Wadood means 'The Most Loving' in Arabic. This beautiful name of Allah (SWT) shows His endless love and care for all of His creation. It reminds us that Allah’s love is unconditional, always present, and unmatched. Knowing this, we are encouraged to turn to Him in every moment, seeking His love and mercy in our lives.",
      },
    ],
  },
  {
    id: 29,
    released: true,
    timeOfRelease: "2024-12-01T13:00:00Z",
    seasonId: 1,
    questions: [
      {
        question: "Who was the father of Prophet Yusuf?",
        options: ["Iliyas (Elijah)", "Ayub (Job)", "Yakub (Jacob)", "Benjamin"],
        correctAnswerIndex: 2,
        explanation:
          "[12:4] When Joseph said to his father, 'O my father, indeed I have seen [in a dream] eleven stars and the sun and the moon; I saw them prostrating to me.'\n[12:5] He said, 'O my son, do not relate your vision to your brothers or they will contrive against you a plan. Indeed Satan, to man, is a manifest enemy.'\n[12:6] And thus will your Lord choose you and teach you the interpretation of narratives and complete His favor upon you and upon the family of Jacob, as He completed it upon your fathers, Abraham and Isaac. Indeed, your Lord is Knowing and Wise.",
      },
      {
        question: "What did Prophet Yusuf (AS) see in his dream as a child?",
        options: ["Seven thin cows eating seven big cows", "Eleven planets, the sun, and the moon prostrating to him", "A wolf attacking him", "A bright light shining over his house"],
        correctAnswerIndex: 1,
        explanation:
          "[12:4] ˹Remember˺ when Joseph said to his father, 'O my dear father! Indeed I dreamt of eleven stars, and the sun, and the moon—I saw them prostrating to me!'\n[12:5] He replied, 'O my dear son! Do not relate your vision to your brothers, or they will devise a plot against you. Surely Satan is a sworn enemy to humankind.'",
      },
      {
        question: "Which of these was one of the miracles of Prophet Yusuf (AS)?",
        options: ["Speak to animals", "Interpret dreams", "Interpret data", "All the above"],
        correctAnswerIndex: 1,
        explanation:
          "[12:21] The man from Egypt who bought him said to his wife, 'Take good care of him, perhaps he may be useful to us or we may adopt him as a son.' This is how We established Joseph in the land, so that We might teach him the interpretation of dreams. Allah’s Will always prevails, but most people do not know.",
      },
      {
        question: "What did Prophet Yusuf’s brothers claim to their father after throwing him in the well?",
        options: ["They found Yusuf injured in the desert", "A wolf ate him", "Yusuf ran away", "Yusuf was captured by travelers"],
        correctAnswerIndex: 1,
        explanation:
          "The brothers of Yusuf aimed to take him away from their father and get rid of him. They knew Prophet Yaqub (PBUH) wouldn’t let him leave easily. They claimed they wanted to take him for a trip in the desert where they would take care of him. However, they threw him into a deep well and left him behind, claiming to their father that a wolf ate him.\n[12:17] They cried, 'Our father! We went racing and left Joseph with our belongings, and a wolf devoured him! But you will not believe us, no matter how truthful we are.'",
      },
      {
        question: "Why was Prophet Yusuf (AS) imprisoned?",
        options: ["For stealing", "For disobeying the governor", "Due to a false accusation by the chief minister’s wife", "For refusing to interpret dreams"],
        correctAnswerIndex: 2,
        explanation:
          "After being sold as a slave to Egypt’s chief minister, Yusuf (PBUH) grew up in his household. When Yusuf matured, the chief minister’s wife attempted to seduce him, but Yusuf refused and tried to escape. When her husband appeared at the door, she falsely accused Yusuf of wrongdoing. A family member suggested examining Yusuf’s clothes, and it was found that his shirt was torn from the back, proving his innocence. Despite this, Yusuf was imprisoned unjustly due to the false accusation and societal pressure.\n\nThis story highlights Yusuf’s righteousness and patience in the face of false accusations and injustice.",
      },
      {
        question: "When news of the chief minister’s wife’s actions spread, how did she attempt to justify her actions regarding Prophet Yusuf (AS)?",
        options: [
          "She confessed her mistake and apologized publicly",
          "She invited women to her residence to demonstrate Yusuf’s extraordinary beauty",
          "She accused Yusuf of misleading her",
          "She denied the accusations made against her",
        ],
        correctAnswerIndex: 1,
        explanation:
          "When the story of the chief minister’s wife’s pursuit of Yusuf (PBUH) spread, other women began ridiculing her character. To defend herself, she invited these women to a banquet at her residence and gave them fruit along with knives. As they were slicing fruits, she summoned Yusuf (PBUH). When the women saw him, they were so astonished by his extraordinary beauty that they cut their hands without realizing it. She seized this moment to announce that this was the man for whom she was being criticized.\n\n[12:30] Some women of the city gossiped, 'The Chief Minister’s wife is trying to seduce her slave-boy. Love for him has plagued her heart. Indeed, we see that she is clearly mistaken.'\n[12:31] When she heard about their gossip, she invited them and set a banquet for them. She gave each one a knife, then said ˹to Joseph˺, 'Come out before them.' When they saw him, they were so stunned ˹by his beauty˺ that they cut their hands, and exclaimed, 'Good God! This cannot be human; this must be a noble angel!'\n [12:32] She said, 'This is the one for whose love you criticized me! I did try to seduce him but he ˹firmly˺ refused. And if he does not do what I order him to, he will certainly be imprisoned and ˹fully˺ disgraced.'",
      },
      {
        question:
          "The king of Egypt dreamt of seven thin cows eating seven big cows and seven green wheat stalks as well as seven dry ones. What was Prophet Yusuf’s (AS) interpretation of the dream?",
        options: ["A plague would spread in Egypt", "There would be years of abundance followed by years of famine", "The kingdom would be destroyed", "The king would lose his throne"],
        correctAnswerIndex: 1,
        explanation:
          "The king of Egypt had a strange dream: seven skinny cows eating seven fat cows, and seven dry stalks of wheat and seven green ones. None of his advisors could interpret it. Yusuf (PBUH) was brought from prison, and he explained the dream.\n\nYusuf said there would be seven years of plenty, where crops would grow abundantly, and advised saving most of the harvest during these years. This would be followed by seven years of famine, during which the stored grain would be used. Finally, there would be a year of relief with abundant rain and prosperity.\n\n[12:47] Joseph replied, 'You will plant ˹grain˺ for seven consecutive years, leaving in the ear whatever you will harvest, except for the little you will eat.'\n[12:48] 'Then after that will come seven years of great hardship which will consume whatever you have saved, except the little you will store ˹for seed˺.'\n\n[12:49]'Then after that will come a year in which people will receive abundant rain and they will press ˹oil and wine˺.'",
      },
    ],
  },
  {
    id: 30,
    released: true,
    timeOfRelease: "2024-12-02T13:00:00Z",
    seasonId: 1,
    questions: [
      {
        question: "What is the reward for a Muslim who recites Ayat al-Kursi after every obligatory prayer?",
        options: ["Protection from poverty", "Ten good deeds", "Entrance to Paradise", "Forgiveness of sins"],
        correctAnswerIndex: 2,
        explanation:
          "Abu Umamah reported: The Messenger of Allah, peace and blessings be upon him, said, “Whoever recites the ‘verse of the Throne’ after every prescribed prayer, there will be nothing standing between him and entry into Paradise but his death.”",
      },
      {
        question: "Which prayer if prayed in the masjid earns you the reward of praying the whole night?",
        options: ["Fajr", "Duhr", "Asr", "Maghrib", "Isha"],
        correctAnswerIndex: 0,
        explanation:
          "Allah's Messenger (ﷺ) said: 'Whoever prays the Isha prayer in congregation, it is as if they have stood in prayer for half the night. And whoever prays the Fajr prayer in congregation, it is as if they have stood in prayer for the entire night.'",
      },
      {
        question: "In the morning every single joint of yours must pay a sadaqah (charity). What 2 rak’ah will pay that off?",
        options: ["Fajr Prayer", "Duha Prayer", "Sunnah of Fajr", "Sunnah of Isha"],
        correctAnswerIndex: 1,
        explanation:
          "Duha prayer is a simple 2 rak'ahs that’s prayed any time after the sun rises until just before Dhuhr prayer. It’s highly rewarding and a great habit to incorporate into your daily life.\n\nThe Prophet (ﷺ) said: 'In the morning every single joint of yours must pay a sadaqah (charity). Every SubhanAllah is a sadaqah, every Alhamdulillah is a sadaqah, every La Ilaha Illa Allah is a sadaqah, every Allahu Akbar is a sadaqah, every commanding good is a sadaqah, and every forbidding evil is a sadaqah, and all this is accomplished through two rak’ahs one can pray in Duha.' [Muslim]\n\nAbu Hurayrah (RA) reported that the Messenger of Allah (ﷺ) said: 'No one persists in offering Duha prayer except one who often turns to Allah, for it is the prayer of those who often turn to Allah (SWT).'",
      },
      {
        question: "Which Sunnah prayer did the Prophet never abandon even when traveling?",
        options: ["Duha Prayer", "Sunnah of Duhr", "Sunnah of Isha", "Witr Prayer"],
        correctAnswerIndex: 3,
        explanation:
          "Ibn al-Qayyim said:\n'It was the practice of the Prophet (ﷺ) when travelling to pray only the obligatory prayers, and it was not narrated that he used to pray the regular Sunnah prayers either before or after the fard prayers, apart from Witr and the Sunnah of Fajr, which he never omitted whether he was travelling or not.'",
      },
      {
        question: "Which duaa, if said after eating, will lead to all your past sins being forgiven?",
        options: [
          "اَلْحَمْدُ لِلَّهِ الَّذِي أَطْعَمَنِي هَذَا، وَرَزَقَنِيهِ مِنْ غَيْرِ حَوْلٍ مِنِّي وَلَا قُوَّةٍ\n- “All praise is due to Allah Who has given me food to eat and provided it without any endeavour on my part or any power.”",
          "الْحَمْدُ لِلَّهِ\n- “All praise is due to Allah”",
          "سُبْـحَانَ اللهِ وَبِحَمْدِهِ سُبْـحَانَ اللهِ العَظِيمِ\n- “Glorified is Allah and praised is He. Glorified is Allah the most great.”",
          "الحَمْدُ لِلَّهِ حَمْدًا كَثِيرًا طَيِّبًا مُبَارَكًا عَلَى مَا رَزَقَنِي مِنْ طَعَامٍ وَشَرَابٍ\n- “All praise is due to Allah - an abundant, pure and blessed praise, for the food and drinks he has given me”",
        ],
        correctAnswerIndex: 0,
        explanation:
          "The Prophet (ﷺ) said: 'He who has taken food and says at the end: (Al-hamdu lillahi-llazi at'amani haza, wa razaqaniihi min ghairi haulin minni wa la quwwah), all his past sins will be forgiven.'",
      },
      {
        question: "Which charity has the greatest reward? The charity you give ___",
        options: ["During the day", "After completing Salah", "While you are healthy and fearing poverty", "Before starting a business venture"],
        correctAnswerIndex: 2,
        explanation:
          "A man came to the Prophet, peace and blessings be upon him, and he said, “O Messenger of Allah, which charity has the greatest reward?” The Prophet said, 'That you give charity while you are healthy, stingy, fearing poverty, and hoping to be rich. Do not delay giving until you are on your deathbed, then say it is for such a person. It already belongs to that person.'",
      },
      {
        question: "When comparing spending the same amount of money, which of the following brings the greatest reward? (By Yousuf)",
        options: ["Spending on your family", "Spending to free a slave", "Spending in charity to the poor", "Spending in the path of Allah"],
        correctAnswerIndex: 0,
        explanation:
          "God’s Messenger (ﷺ) as saying: 'Of a dinar you spend as a contribution in God’s path, or to set free a slave, or as sadaqa given to a poor man, or in support of your family, the one spent in support of your family produces the greatest reward.'",
      },
      {
        question: "The Prophet Muhammad (ﷺ) described four characteristics; whoever possesses them all is a pure hypocrite. Which of the following is NOT one of these characteristics?",
        options: ["When entrusted with something, he betrays that trust", "When he speaks, he speaks a lot", "When he argues, he resorts to foul speech", "When he speaks, he lies"],
        correctAnswerIndex: 1,
        explanation:
          "The Prophet (ﷺ) said: 'There are four characteristics, whoever has them all is a pure hypocrite, and whoever has one of them has one of the characteristics of hypocrisy, until he gives it up: \n\n1. When he is entrusted with something, he betrays that trust.\n2. When he speaks, he lies.\n3. When he makes a covenant, he breaks it.\n4. When he disputes, he resorts to foul speech.'",
      },
      {
        question: "What are you not allowed to do in Sujood?",
        options: ["Make dua in Arabic", "Make dua in another language", "Recite Quran", "Recite adhkar"],
        correctAnswerIndex: 2,
        explanation:
          "The Prophet ﷺ said: 'I have been forbidden to recite the Quran in the state of bowing and prostration. So whilst bowing, extol the Lord in it, and while you are in prostration strive your hardest supplicating, as it is most likely that you will be responded to.' [Muslim]",
      },
    ],
  },
  {
    id: 31,
    released: true,
    timeOfRelease: "2024-12-14T13:00:00Z",
    seasonId: 2,
    questions: [
      {
        question: "Is it Haram (forbidden) to talk while eating?",
        options: ["Yes", "No"],
        correctAnswerIndex: 1,
        explanation:
          "There is nothing in the Prophet’s Sunnah to indicate that it is not allowed to speak whilst eating. The popular saying among some, that there is 'no greeting and no talking over food' has no basis in sharee‘ah.\n\nIt is proven that the Prophet (blessings and peace of Allah be upon him) talked whilst eating. In Sahih al-Bukhari (3340) and Sahih Muslim (194), it is narrated that Abu Hurayrah said: One day some meat was brought to the Messenger of Allah (ﷺ) and the foreleg, which he used to like, was offered to him. He took a bite, then he said: \"I will be the leader of mankind on the Day of Resurrection. Do you know why that is?\" Then he quoted the lengthy hadeeth about intercession.",
      },
      {
        question: "How much did the Prophet recommend we eat?",
        options: ["One third for food, one third for water, and one third for air", "Enough to keep you going", "As much as you can", "As much as you can in the morning and a little at night"],
        correctAnswerIndex: 1,
        explanation:
          "The Prophet ﷺ said: 'A human being fills no worse vessel than his stomach. It is sufficient for a human being to eat a few mouthfuls to keep his spine straight. But if he must (fill it), then one third of food, one third for drink, and one third for air.'",
      },
      {
        question: "Why are we commanded not to eat with our left hand?",
        options: ["Shaytan (the devil) eats with his left hand", "Your right hand is cleaner", "Jinn (demons) eat with their left hands", "Animals eat with their left hand"],
        correctAnswerIndex: 0,
        explanation: "The Prophet ﷺ said: 'The Shaytaan eats with his left hand and drinks with his left hand.'",
      },
      {
        question: "How can one increase the blessings of the food he eats?",
        options: ["Eating outdoors", "Eating with people", "Eating in the Masjid", "Eating from the middle of the plate"],
        correctAnswerIndex: 1,
        explanation:
          "Some Companions came to the Prophet ﷺ and complained, 'We eat but are not satisfied.' He ﷺ said, 'Perhaps you eat separately?' The Companions replied in the affirmative. He ﷺ then advised, 'Eat together and mention the Name of Allah over your food. It will be blessed for you.'\n\nThe Prophet ﷺ also said, 'Eat together and not separately, for the blessing is associated with the company.'\n\nAdditionally, the Prophet said, 'Blessing descends in the middle of the food, so eat from the sides and do not eat from the middle.'",
      },
      {
        question: "The Prophet said a non-believer eats __ times more than a believer",
        options: ["3", "5", "7", "9"],
        correctAnswerIndex: 2,
        explanation:
          "The Prophet (peace and blessings of Allah be upon him) said: 'The believer eats in one stomach whilst the kaafir (non-believer) eats in seven.'\n\nThis means that a believer is satisfied with little food, whereas a non-believer eats a lot.",
      },
      {
        question: "If you are drinking a cup of tea that is too hot, which of these is not a permissible way to cool it down?",
        options: ["Waiting for it to cool down", "Blowing on it", "Pouring it in another cup", "Pouring cold water on it"],
        correctAnswerIndex: 1,
        explanation:
          "It was narrated from Abu Qataadah (may Allah be pleased with him) that the Prophet (peace and blessings of Allah be upon him) forbade breathing into the vessel. (Narrated by al-Bukhari 5630 and Muslim 267).\n\nShaykh Ibn ‘Uthaymeen explained: 'The wisdom behind that is that breathing into the vessel is off-putting to the one who is going to drink from it after him. Some diseases from the stomach, lungs, or mouth may be expelled with the breath and stick to the vessel, or he may choke if he breathes into the vessel. Hence the Prophet (peace and blessings of Allah be upon him) forbade breathing into vessels; rather, one should take three breaths, holding the vessel away from the mouth each time.'",
      },
      {
        question: "What should you do if you forget to say Bismillah before eating?",
        options: [
          "Say “أَسْتَغْفِرُ اللهَ”\n- “I seek forgiveness from Allah”",
          "Say “بِسْمِ اللهِ”\n- “In the name of Allah”",
          "Say “بِسْمِ اللهِ أَوَّلَهُ وَآخِرَهُ”\n- “In the name of Allah, at the beginning and at the end”",
          "It’s ok, keep eating",
        ],
        correctAnswerIndex: 2,
        explanation:
          "Arabic: بِسْمِ اللهِ أَوَّلَهُ وَآخِرَهُ\nTransliteration: Bismillah Awwalahu wa Aakhiruhu\nTranslation: In the name of Allah, at the beginning and at the end\n\nProphet Muhammad ﷺ said: “When one of you eats, let him mention the name of Allah. If he forgets to mention the name of Allah at the beginning, let him say: In the name of Allah at the beginning and at the end (Bismillahi awwalahu wa aakhirahu).”",
      },
    ],
  },
  {
    id: 32,
    released: true,
    timeOfRelease: "2024-12-15T13:00:00Z",
    seasonId: 2,
    questions: [
      {
        question: "Which of the following best describes the meaning of 'Shaytaan'?",
        options: ["Any being created from fire", "Any creature that distances you from goodness", "A specific type of Jin that tempts humans", "Another name for Iblees"],
        correctAnswerIndex: 1,
        explanation:
          "The term 'Shaytaan' originates from the Arabic word meaning 'distant' or 'far away,' signifying a separation from God. The concept of Shaytaan can extend to rebellious beings from various realms, including humans and animals, that distance a person from goodness.",
      },
      {
        question: "There are human Shayateen (devils).",
        options: ["True", "False"],
        correctAnswerIndex: 0,
        explanation:
          "Allah says in the Quran: 'And thus We have made for every prophet an enemy - devils from mankind and jinn, inspiring to one another decorative speech in delusion. But if your Lord had willed, they would not have done it, so leave them and that which they invent.' (Quran 6:112)\n\nThis verse indicates that there are Shayateen (devils) among both humans and jinn who mislead others.",
      },
      {
        question: "What is the name of the devil that distracts you while praying?",
        options: ["Iblees", "Khinzab", "Shaytan", "Khinsar"],
        correctAnswerIndex: 1,
        explanation:
          "Uthman came complaining to the Prophet (peace and blessings be upon him), and said: 'The Shaytan comes between me and my prayer and causes me problems with my recitation.' So the Messenger of Allah (peace and blessings be upon him) said: 'That is a Shaytan called Khinzab. So if you feel his presence, seek refuge in Allah and blow a mist to your left three times.' He said: 'I applied this advice and Allah has rid me of him.'\n\n(Sahih Muslim, 2203)",
      },
      {
        question: "How do you protect yourself from the devil that distracts you while you pray?",
        options: [
          "Seek refuge in Allah (أَعُوذُ بِاللَّهِ مِنَ الشَّيطَانِ الرَّجِيمِ)",
          "Seek refuge in Allah and blow to your left three times",
          "Read Surah Ikhlas",
          "Try to ignore the thoughts put in your head",
        ],
        correctAnswerIndex: 1,
        explanation:
          "Uthman came complaining to the Prophet (peace and blessings be upon him), and said: 'The Shaytan comes between me and my prayer and causes me problems with my recitation.' So the Messenger of Allah (peace and blessings be upon him) said: 'That is a Shaytan called Khanzab. So if you feel his presence, seek refuge in Allah and blow a mist to your left three times.' He said: 'I applied this advice and Allah has rid me of him.'\n\n(Sahih Muslim, 2203)",
      },
      {
        question: "At what time during the night is it recommended to keep children indoors due to the emergence of devils?",
        options: ["The first hour", "The last hour", "The whole night", "None of the above"],
        correctAnswerIndex: 0,
        explanation:
          "Allah's Messenger (ﷺ) said: 'When night falls (or it is evening), keep your children close to you for the devils spread out at that time. But when an hour of the night elapses, you can let them free. Close the doors and mention the Name of Allah, for Satan does not open a closed door.'\n\nA Night starts at sunset",
      },
    ],
  },
];

export default quizzes;
