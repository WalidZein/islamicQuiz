import { motion, AnimatePresence } from 'framer-motion';
import { DIFFICULTY_COLORS } from './ConnectionsGameClient';

interface HelpModalProps {
    isOpen: boolean;
    onClose: () => void;
}


export default function HelpModal({ isOpen, onClose }: HelpModalProps) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-lg w-full max-h-[90vh] overflow-y-auto"
            >
                <div className="p-6">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">How to Play</h2>
                        <button
                            onClick={onClose}
                            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                        >
                            ✕
                        </button>
                    </div>

                    <div className="space-y-6 text-gray-600 dark:text-gray-300">
                        <div>
                            <h3 className="font-bold mb-2 text-gray-800 dark:text-gray-100">Objective:</h3>
                            <p>
                                Group the given Islamic-themed words into four sets. Each set must contain exactly four words that share a common, specific Islamic theme.
                            </p>
                        </div>

                        <div>
                            <h3 className="font-bold mb-2 text-gray-800 dark:text-gray-100">Gameplay Overview:</h3>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>You will see a board filled with words.</li>
                                <li>Your goal is to find the four correct groups (each with four words) that form a complete solution.</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="font-bold mb-2 text-gray-800 dark:text-gray-100">Making a Guess:</h3>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>Select Four Words: Tap on four words that you believe belong together based on a common theme.</li>
                                <li>Submit Your Guess: Tap the "Submit" button to check if your selection is correct.</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="font-bold mb-2 text-gray-800 dark:text-gray-100">Feedback and Mistakes:</h3>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>If your guess is correct, that group is removed from the board and revealed to you.</li>
                                <li>If your guess is incorrect, you incur a mistake.</li>
                                <li>You are allowed four mistakes. On your fourth mistake, the game is over.</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="font-bold mb-2 text-gray-800 dark:text-gray-100">Categories Explained:</h3>
                            <p className="mb-2">Specific Islamic Themes: Each correct group is based on a clearly defined Islamic theme.</p>
                            <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-lg">
                                <p className="font-semibold mb-1">Examples:</p>
                                <p>PROPHETS: Musa, Ibrahim, Isa, Nuh</p>
                                <p>PILLARS OF ISLAM: Faith, Prayer, Zakat, Fasting</p>
                            </div>
                            <p className="mt-2 italic">
                                Note: The categories will never be vague or general (like "NAMES" or "ARABIC WORDS"). They are always precise Islamic concepts.
                            </p>
                        </div>

                        <div>
                            <h3 className="font-bold mb-2 text-gray-800 dark:text-gray-100">Important Tips:</h3>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>Each puzzle has exactly one solution, so think carefully about which words belong together.</li>
                                <li>Some words might seem like they could fit into more than one category. Use the specific themes and your knowledge of Islamic history and concepts to decide the best match.</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="font-bold mb-2 text-gray-800 dark:text-gray-100">Difficulty Levels:</h3>
                            <div className="space-y-2">
                                {Object.entries(DIFFICULTY_COLORS).map(([difficulty, colorClass]) => (
                                    <div
                                        key={difficulty}
                                        className={`text-sm md:text-base p-2 rounded-lg ${colorClass}`}
                                    >
                                        {difficulty}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
} 