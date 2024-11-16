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
    timeOfRelease: "2024-03-21T00:00:00Z",
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
    timeOfRelease: "2024-03-21T00:00:00Z",
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
    timeOfRelease: "2024-03-22T00:00:00Z",
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
    timeOfRelease: "2024-03-23T00:00:00Z",
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
    timeOfRelease: "2024-03-24T00:00:00Z",
    questions: [
      {
        question: "Why do we need to know and understand Allah’s beautiful names and attributes? (please don't skip the explanation)",
        options: ["To truly know Him", "To pray to Him by His names", "To gain the reward of Jannah", "All of the above"],
        correctAnswerIndex: 3,
        explanation:
          "Calling upon Allah by His names is a powerful way to fulfill our purpose of worshiping and knowing Him, as He says, 'I did not create jinn and humans except to worship Me' (51:56).\n\nEach name reflects an attribute that guides our connection to Him. The Quran urges us, 'Allah has the Most Beautiful Names. So call upon Him by them' (7:180), meaning we should use the name that fits our need. Imagine the power of seeking forgiveness from *Al-Ghaffar* (The Forgiving), or finding comfort in times of difficulty by calling upon *Al-Wadud* (The Loving).\n\nThe Prophet ﷺ also taught, 'Allah has ninety-nine names. Whoever memorizes them will enter Paradise,' inspiring us to know, understand, and live by these names. This deepens our connection to Allah, inviting His mercy, guidance, and blessings into our lives.",
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
    timeOfRelease: "2024-03-25T00:00:00Z",
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
    timeOfRelease: "2024-03-26T00:00:00Z",
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
          "When viewed through the narrow lens of worldly rules, giving in charity might seem like it reduces your wealth. But as Muslims, we are given the full perspective of how the world works.\n\nThe Prophet ﷺ said: 'The wealth of a man will not diminish by Sadaqah (charity).’\n\nAllah reminds us: 'Say: Truly, my Lord enlarges the provision for whom He wills of His slaves, and (also) restricts (it) for him. And whatsoever you spend of anything (in Allah’s Cause), He will replace it. And He is the Best of providers.'\n\n*[Saba’ 34:39]",
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
    questions: [
      {
        question: "Which prayer if prayed in the masjid earns you the reward of praying the whole night?",
        options: ["Fajr", "Duhr", "Asr", "Maghrib", "Isha"],
        correctAnswerIndex: 0,
        explanation:
          "Uthman bin Affan narrated that:\nAllah's Messenger (ﷺ) said: 'Whoever attends Isha (prayer) in congregation, then he has (the reward as if he had) stood half of the night. And whoever prays Isha and Fajr in congregation, then he has (the reward as if he had) spent the entire night standing (in prayer).'",
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
          'Uthman bin Affan narrated that:\nAllah\'s Messenger (ﷺ) said: "Whoever attends Isha (prayer) in congregation, then he has (the reward as if he had) stood half of the night. And whoever prays Isha and Fajr in congregation, then he has (the reward as if he had) spent the entire night standing (in prayer)."',
      },
    ],
  },
  {
    id: 14,
    released: true,
    timeOfRelease: "2024-11-16T13:00:00Z",
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
];

export default quizzes;
