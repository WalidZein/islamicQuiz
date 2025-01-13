import Link from 'next/link';
import { FaPuzzlePiece } from 'react-icons/fa6';
import { GiBookCover } from 'react-icons/gi';

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-4 md:py-12 flex flex-col items-center">
      {/* Hero Section */}
      <section className="mb-4 md:mb-16 text-center">

        <h1 className="text-xl sm:text-2xl md:text-4xl font-bold text-white mb-2 md:mb-6">
          Explore Islam Through Fun Games
        </h1>
        <p className="text-xs md:text-xl text-white/80 mb-4 md:mb-8 max-w-2xl mx-auto px-4">
          Enhance your Islamic knowledge and have a blast with our daily challenges
        </p>

      </section>

      {/* Games Grid */}
      <div className=" w-60 md:w-full grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-8 max-w-5xl mx-auto mb-6 md:mb-16">
        {/* Quiz Card */}
        <Link href="/quiz" className="block group">
          <div className="h-[220px] md:h-[400px] bg-white/95 dark:bg-gray-800/95 backdrop-blur border-0 shadow-lg p-4 md:p-8 rounded-xl md:rounded-2xl transition-all duration-150 ease-in-out hover:shadow-2xl hover:-translate-y-1 hover:rotate-1">
            <div className="flex flex-col items-center">
              <div className="w-12 md:w-20 h-12 md:h-20 mx-auto mb-2 md:mb-6 rounded-full bg-blue-100 dark:bg-blue-900 p-2.5 md:p-4 transition-transform duration-150 ease-in-out group-hover:scale-110 group-hover:rotate-6">
                <GiBookCover className="w-full h-full text-[#4052b5] dark:text-blue-300" />
              </div>
              <h2 className="text-lg md:text-3xl font-bold mb-1.5 md:mb-4 text-[#4052b5] dark:text-blue-300 tracking-tight">Daily Quiz</h2>
              <p className="text-xs md:text-lg text-gray-600 dark:text-gray-300 text-center mb-2.5 md:mb-6">
                Test your Islamic knowledge with fun daily challenges!
              </p>
              <button className="bg-[#4052b5] dark:bg-blue-600 hover:bg-[#4052b5]/90 dark:hover:bg-blue-700 text-white shadow-md px-4 md:px-8 py-1.5 md:py-3 rounded-lg md:rounded-xl text-sm md:text-lg font-semibold transition-all duration-150 ease-in-out hover:scale-102 hover:shadow-lg">
                Play Now
              </button>
            </div>
          </div>
        </Link>

        {/* Connections Card */}
        <Link href="/connections" className="block group">
          <div className="h-[220px] md:h-[400px] bg-white/95 dark:bg-gray-800/95 backdrop-blur border-0 shadow-lg p-4 md:p-8 rounded-xl md:rounded-2xl transition-all duration-150 ease-in-out hover:shadow-2xl hover:-translate-y-1 hover:rotate-1">
            <div className="flex flex-col items-center">
              <div className="w-12 md:w-20 h-12 md:h-20 mx-auto mb-2 md:mb-6 rounded-full bg-purple-100 dark:bg-purple-900 p-2.5 md:p-4 transition-transform duration-150 ease-in-out group-hover:scale-110 group-hover:rotate-6">
                <FaPuzzlePiece className="w-full h-full text-purple-600 dark:text-purple-300" />
              </div>
              <h2 className="text-lg md:text-3xl font-bold mb-1.5 md:mb-4 text-purple-600 dark:text-purple-300 tracking-tight">Connections</h2>
              <p className="text-xs md:text-lg text-gray-600 dark:text-gray-300 text-center mb-2.5 md:mb-6">
                Discover exciting connections between Islamic concepts!
              </p>
              <button className="bg-purple-600 dark:bg-purple-700 hover:bg-purple-700 dark:hover:bg-purple-800 text-white shadow-md px-4 md:px-8 py-1.5 md:py-3 rounded-lg md:rounded-xl text-sm md:text-lg font-semibold transition-all duration-150 ease-in-out hover:scale-102 hover:shadow-lg">
                Play Now
              </button>
            </div>
          </div>
        </Link>
      </div>
    </main>
  );
}
