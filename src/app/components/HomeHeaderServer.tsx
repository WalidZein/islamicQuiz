import { seasons } from "@/data/seasons";
import { Card } from "./ui/card";
import SeasonBanner from "./SeasonBanner";

export default function HomeHeaderServer() {
    return (<div className="flex flex-col items-center">
        <div className="w-full max-w-2xl text-center mb-8">
            <h1 className="text-4xl font-extrabold">Islamic Quiz</h1>
            <p className="mt-2 text-sm md:text-lg text-gray-300">
                Test your knowledge with our daily quizzes on Islam.
            </p>

            {/* New Survey Links */}
            <div className="mt-2 flex justify-center gap-2 text-xs md:text-sm text-gray-300">
                <Card className="bg-opacity-20 backdrop-blur-sm bg-white/5 border-0 shadow-lg">
                    <a
                        href="https://locrian-gate-d75.notion.site/141a930e096c80dea710f6ac60ae6487?pvs=105"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 hover:text-gray-100 p-3 "
                    >
                        📝 Feedback & Ideas
                    </a>
                </Card>
                <Card className="bg-opacity-20 backdrop-blur-sm bg-white/5 border-0 shadow-lg">
                    <a
                        href="https://locrian-gate-d75.notion.site/141a930e096c80b1aa9ad1c466f4d4a5?pvs=105"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 hover:text-gray-100 p-3"
                    >
                        ✍️  Submit Questions
                    </a>
                </Card>
            </div>
            <div className=' pt-8'>
                <SeasonBanner
                    seasons={seasons}
                    currentQuizNumber={31}
                    totalQuizzes={60}
                    time={new Date().toISOString()}
                />
            </div>
        </div>

    </div>)
}