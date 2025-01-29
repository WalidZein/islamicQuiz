import { ConnectionsGameConfig, ConnectionsGameData } from "@/types/connections";

/**
 * Sample connections games data
 * Each game is released at 13:00 UTC on its specified date
 */
export const CONNECTIONS_GAMES: ConnectionsGameConfig[] = [
  {
    id: "1",
    releaseTime: "2025-01-13T13:00:00Z",
    groups: [
      {
        category: "Prophets mentioned in Quran",
        words: ["Ibrahim", "Musa", "Isa", "Yusuf"],
        difficulty: "Easy" as const,
      },
      {
        category: "Islamic Months",
        words: ["Ramadan", "Shawwal", "Rajab", "Muharram"],
        difficulty: "Medium" as const,
      },
      {
        category: "Angels",
        words: ["Israfil", "Azrael", "Jibril", "Malik Al-Mawt"],
        difficulty: "Hard" as const,
      },
      {
        category: "Rivers in Paradise",
        words: ["Kawthar", "Kafur", "Tasnim", "Salsabil"],
        difficulty: "Very Hard" as const,
      },
    ],
  },
  {
    id: "2",
    releaseTime: "2025-01-14T13:00:00Z",
    groups: [
      {
        category: "Islamic Practices",
        words: ["Salah", "Zakat", "Hajj", "Sadaqah"],
        difficulty: "Easy" as const,
      },
      {
        category: "Islamic Months",
        words: ["Ramadan", "Shawwal", "Jumada", "Dhul-Hijjah"],
        difficulty: "Medium" as const,
      },
      {
        category: "Things you do in Ramadan",
        words: ["Sawm", "Suhoor", "Iftar", "Taraweeh"],
        difficulty: "Hard" as const,
      },
      {
        category: "Significant Islamic Days",
        words: ["Eid al-Fitr", "Eid al-Adha", "Laylat al-Qadr", "Ashura"],
        difficulty: "Very Hard" as const,
      },
    ],
  },
  {
    id: "3",
    releaseTime: "2025-01-15T13:00:00Z",
    groups: [
      {
        category: "Foods Mentioned in the Quran",
        words: ["Dates", "Olives", "Honey", "Grapes"],
        difficulty: "Easy" as const,
      },
      {
        category: "Names of the Prophet Muhammad",
        words: ["Muhammad", "Ahmad", "Mahmoud", "Mustafa"],
        difficulty: "Medium" as const,
      },
      {
        category: "Battles in Islam",
        words: ["Badr", "Uhud", "Khandaq", "Hunayn"],
        difficulty: "Hard" as const,
      },
      {
        category: "Islamic Scholars",
        words: ["Bukhari", "Abu Hanifa", "Al-Ghazali", "Ibn Taymiyyah"],
        difficulty: "Very Hard" as const,
      },
    ],
  },
  {
    id: "4",
    releaseTime: "2025-01-16T13:00:00Z",
    groups: [
      {
        category: "Forms of Charity",
        words: ["Zakat", "Kindness", "Smile", "Volunteer"],
        difficulty: "Easy" as const,
      },
      {
        category: "Prayers in the day",
        words: ["Jummah", "Asr", "Fajr", "Duhur"],
        difficulty: "Medium" as const,
      },
      {
        category: "Prayers in the Night",
        words: ["Taraweeh", "Qiam", "Tahjud", "Witr"],
        difficulty: "Hard" as const,
      },
      {
        category: "Surahs started with الحمد لله",
        words: ["Al Kahf", "Al fatiha", "Saba'", "Fatir"],
        difficulty: "Very Hard" as const,
      },
    ],
  },
  {
    id: "5",
    releaseTime: "2025-01-17T13:00:00Z",
    groups: [
      {
        category: "Colors Mentioned in the Quran",
        words: ["Yellow", "White", "Green", "Black"],
        difficulty: "Easy" as const,
      },
      {
        category: "Things Prophet Solomon Ruled Over",
        words: ["Wind", "Jinn", "Humans", "Animals"],
        difficulty: "Medium" as const,
      },
      {
        category: "The Best Women of Paradise",
        words: ["Khadija", "Asiyah", "Fatima", "Maryam"],
        difficulty: "Hard" as const,
      },
      {
        category: "Wives of the Prophet Muhammad",
        words: ["Umm Habibah", "Aisha", "Zaynab", "Umm Salamah"],
        difficulty: "Very Hard" as const,
      },
    ],
  },
  {
    id: "6",
    releaseTime: "2025-01-18T13:00:00Z",
    groups: [
      {
        category: "Elements from the Life of Prophet Yusuf",
        words: ["Dream", "Well", "Prison", "Brothers"],
        difficulty: "Easy" as const,
      },
      {
        category: "Elements from the Life of Prophet Musa",
        words: ["Sea", "Staff", "Egypt", "Pharaoh"],
        difficulty: "Medium" as const,
      },
      {
        category: "Elements from the Life of Prophet Muhammad",
        words: ["Isra", "Quran", "Madinah", "Mecca"],
        difficulty: "Hard" as const,
      },
      {
        category: "Elements from the life of Prophet Isa",
        words: ["Blindness", "Ascension", "Birds", "Return"],
        difficulty: "Very Hard" as const,
      },
    ],
  },
  {
    id: "7",
    releaseTime: "2025-01-19T13:00:00Z",
    groups: [
      {
        category: "The Rashidun Caliphs",
        words: ["Abu Bakr", "Umar", "Uthman", "Ali"],
        difficulty: "Easy" as const,
      },
      {
        category: "Pillars of Faith",
        words: ["Allah", "Angels", "Fate", "Prophets"],
        difficulty: "Medium" as const,
      },
      {
        category: "Uncles of the Prophet Muhammad",
        words: ["Abu Talib", "Hamza", "Al 'abas", "Abu Lahab"],
        difficulty: "Hard" as const,
      },
      {
        category: "Surahs Beginning With Disconnected Letters",
        words: ["Qalam", "Qaf", "Yasin", "Taha"],
        difficulty: "Very Hard" as const,
      },
    ],
  },
  {
    id: "8",
    releaseTime: "2025-01-20T13:00:00Z",
    groups: [
      {
        category: "Pillars of Wudu",
        words: ["Face", "Head", "Feet", "Hands"],
        difficulty: "Easy" as const,
      },
      {
        category: "Letter of Qalqalah (echoing)",
        words: ["Qaf", "Daal", "Baa", "Jeem"],
        difficulty: "Medium" as const,
      },
      {
        category: "Animals with Surahs Named After Them ",
        words: ["Cow", "Bee", "Spider", "Elephant"],
        difficulty: "Hard" as const,
      },
      {
        category: "Shapes Jinn Can Take",
        words: ["Snakes", "Scorpions", "Camel", "Horses"],
        difficulty: "Very Hard" as const,
      },
    ],
  },
  {
    id: "9",
    releaseTime: "2025-01-21T13:00:00Z",
    groups: [
      {
        category: "Names of Allah Related to Forgiveness",
        words: ["Rahman", "Rahim", "Ghafoor", "Tawab"],
        difficulty: "Easy" as const,
      },
      {
        category: "Masjids With Bonus Praying Rewards",
        words: ["Al Nabawi", "Al Haram", "Qiba'", "Aqsa"],
        difficulty: "Medium" as const,
      },
      {
        category: "Elements from Isra and Miraj",
        words: ["Mecca", "Jerusalem", "Buraq", "Ascension"],
        difficulty: "Hard" as const,
      },
      {
        category: "Umayyad Caliphate",
        words: ["Damascus", "Andalus", "Muawiyah", "Umayyad"],
        difficulty: "Very Hard" as const,
      },
    ],
  },
  {
    id: "10",
    releaseTime: "2025-01-22T13:00:00Z",
    groups: [
      {
        category: "Salah Elements",
        words: ["Fatiha", "Ruko'", "Sujood", "Tashahud"],
        difficulty: "Easy" as const,
      },
      {
        category: "Grades of Hadith",
        words: ["Sahih", "Hasan", "Da'eef", "Mawdu'"],
        difficulty: "Medium" as const,
      },
      {
        category: "Days that are Sunnah to Fast",
        words: ["Mondays", "Thursdays", "Arafah", "Ashura"],
        difficulty: "Hard" as const,
      },
      {
        category: "It's forbidden to fast on the day of __",
        words: ["Eid Adha", "Eid Al-Fitr", "Doubt", "Tashreeq"],
        difficulty: "Very Hard" as const,
      },
    ],
  },
  {
    id: "11",
    releaseTime: "2025-01-23T13:00:00Z",
    groups: [
      {
        category: "Major Sins",
        words: ["Intreset", "Alcohol", "Gambling", "Shirk"],
        difficulty: "Easy" as const,
      },
      {
        category: "Books of Revelation",
        words: ["Quran", "Torah", "Psalms", "Gospel"],
        difficulty: "Medium" as const,
      },
      {
        category: "Prophets Sent With Books",
        words: ["Muhammad", "Isa", "Musa", "Dawud"],
        difficulty: "Hard" as const,
      },
      {
        category: "Fathers of Prophets",
        words: ["Zakariya", "Yaqub", "Ibrahim", "Isaac"],
        difficulty: "Very Hard" as const,
      },
    ],
  },
  {
    id: "12",
    releaseTime: "2025-01-24T13:00:00Z",
    groups: [
      {
        category: "Food & Drink in Hell",
        words: ["Fire", "Thorns", "Flesh", "Pus"],
        difficulty: "Easy" as const,
      },
      {
        category: "Gates of Paradise. The gate of __",
        words: ["Salah", "Jihad", "Hajj", "Dhikr"],
        difficulty: "Medium" as const,
      },
      {
        category: "Names of Hell",
        words: ["Laza", "Saqar", "Sa'eer", "Hawiyah"],
        difficulty: "Hard" as const,
      },
      {
        category: "Names of Paradise",
        words: ["Husna", "Adn", "Na'eem", "Khuld"],
        difficulty: "Very Hard" as const,
      },
    ],
  },
  {
    id: "13",
    releaseTime: "2025-01-25T13:00:00Z",
    groups: [
      {
        category: "Fruits in Jannah",
        words: ["Banana", "Pomegranate", "Grapes", "Dates"],
        difficulty: "Easy" as const,
      },
      {
        category: "Miracles of Prophet Musa",
        words: ["Springs", "Snake", "Hand", "Sea"],
        difficulty: "Medium" as const,
      },
      {
        category: "Elements from the Story of the sons of Adam",
        words: ["Cain", "Abil", "Raven", "Sheep"],
        difficulty: "Hard" as const,
      },
      {
        category: "Muslim Scientists",
        words: ["Al Jabr", "Khawarzmi", "Ibn Khaldun", "Ibn al-Haytham"],
        difficulty: "Very Hard" as const,
      },
    ],
  },
  {
    id: "14",
    releaseTime: "2025-01-26T13:00:00Z",
    groups: [
      {
        category: "Rivers in Jannah",
        words: ["Wine", "Milk", "Honey", "Water"],
        difficulty: "Easy" as const,
      },
      {
        category: "Gradings of Actions",
        words: ["Haram", "Halal", "Sunnah", "Mubah"],
        difficulty: "Medium" as const,
      },
      {
        category: "Mountains with Islamic Significance",
        words: ["Nur", "Judi", "Uhud", "Arafat"],
        difficulty: "Hard" as const,
      },
      {
        category: "Prophetic Medicines",
        words: ["Fatiha", "Cupping", "ZamZam", "Black Seed"],
        difficulty: "Very Hard" as const,
      },
    ],
  },
  {
    id: "15",
    releaseTime: "2025-01-27T13:00:00Z",
    groups: [
      {
        category: "Tools of Punishment in Hell",
        words: ["Fire", "Whips", "Knives", "Coals"],
        difficulty: "Easy" as const,
      },
      {
        category: "Zakat is given to the  __",
        words: ["Traveler", "Poor", "Debt-Ridden", "Needy"],
        difficulty: "Medium" as const,
      },
      {
        category: "Traits of Humans mentioned in the Quran",
        words: ["Weak", "Selfish", "Arguementative", "Impatient"],
        difficulty: "Hard" as const,
      },
      {
        category: "Things that are not in Jannah",
        words: ["Grudges", "Sins", "Sadness", "Fear"],
        difficulty: "Very Hard" as const,
      },
    ],
  },
  {
    id: "16",
    releaseTime: "2025-01-28T13:00:00Z",
    groups: [
      {
        category: "Conditions of Prayer",
        words: ["Intention", "Qibla", "Purity", "Muslim"],
        difficulty: "Easy" as const,
      },
      {
        category: "Names of the Quran",
        words: ["Al-Furqan", "Al-Tanzeel", "Al-Ketab", "Al-Dhikr"],
        difficulty: "Medium" as const,
      },
      {
        category: "Conditions of Marriage",
        words: ["Consent", "Guardian", "Witness", "Mahr"],
        difficulty: "Hard" as const,
      },
      {
        category: "Lessons from Luqman to His Son",
        words: ["Prayer", "Humility", "Gratitude", "Patience"],
        difficulty: "Very Hard" as const,
      },
    ],
  },
  {
    id: "17",
    releaseTime: "2025-01-29T13:00:00Z",
    groups: [
      {
        category: "Children of Prophet Muhammed",
        words: ["Ruqayyah", "Zaynab", "Ibrahim", "Fatimah"],
        difficulty: "Easy" as const,
      },
      {
        category: "Forbidden Food",
        words: ["Blood", "Pig", "Road-Kill", "Intoxicants"],
        difficulty: "Medium" as const,
      },
      {
        category: "Traits of Prophet Ibrahim mentioned in the Quran",
        words: ["Empathetic", "Leader", "Patient", "Truthful"],
        difficulty: "Hard" as const,
      },

      {
        category: "Evil Animals that can be killed in the Haram",
        words: ["Rats", "Kites", "Scorpion", "Crows"],
        difficulty: "Very Hard" as const,
      },
    ],
  },
  // Add more games here...
];

/**
 * Returns the most recent game that has been released
 */
export function getCurrentGame(): ConnectionsGameConfig | null {
  const now = new Date();
  return CONNECTIONS_GAMES.filter((game) => new Date(game.releaseTime) <= now).sort((a, b) => new Date(b.releaseTime).getTime() - new Date(a.releaseTime).getTime())[0] || null;
}

/**
 * Returns a specific game by ID
 */
export function getGameById(id: string): ConnectionsGameConfig | null {
  return CONNECTIONS_GAMES.find((game) => game.id === id) || null;
}
