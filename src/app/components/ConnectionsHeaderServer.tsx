import { Card } from "./ui/card";

export default function ConnectionsHeaderServer() {
    return (<div className="flex flex-col items-center">
        <div className="w-full max-w-2xl text-center mb-8">
            <h1 className="text-4xl font-extrabold">Islamic Connections</h1>
            <p className="mt-2 text-sm md:text-lg text-gray-300">
                Group words that share a common thread.
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
                        href="https://forms.gle/B8V5k1ykDLPG5pvd9"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 hover:text-gray-100 p-3"
                    >
                        ✍️  Submit a Game
                    </a>
                </Card>
            </div>
        </div>

    </div>)
}