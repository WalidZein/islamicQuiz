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
                        <p>
                            Find groups of four Islamic-themed items that share something in common.
                        </p>

                        <p>
                            Select four items and tap 'Submit' to check if your guess is correct.
                            Find all groups without making 4 mistakes!
                        </p>

                        <div>
                            <h3 className="font-bold mb-2 text-gray-800 dark:text-gray-100">Category Examples:</h3>
                            <div className="space-y-2">
                                <p className="text-sm md:text-base"><span className="font-semibold">PROPHETS:</span> Musa, Ibrahim, Isa, Nuh</p>
                                <p className="text-sm md:text-base"><span className="font-semibold">PILLARS OF ISLAM:</span> Shahada, Salah, Zakat, Sawm</p>
                            </div>
                        </div>

                        <p className="italic text-sm md:text-base">
                            Categories will always be specific and Islamic-themed. They won't be general categories like "NAMES" or "ARABIC WORDS."
                        </p>

                        <p>
                            Each puzzle has exactly one solution. Watch out for words that might seem to belong to multiple categories!
                        </p>

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