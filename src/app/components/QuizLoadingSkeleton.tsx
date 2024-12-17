/**
 * A loading skeleton component that mimics the layout of a quiz question
 * Used to provide a smooth loading experience that matches the final UI
 */
export default function QuizLoadingSkeleton() {
    return (
        <div className="flex flex-col items-center py-10">
            <div className="w-full max-w-2xl mb-4">
                {/* Back button skeleton */}
                <div className="flex items-center text-white hover:text-gray-200 font-medium opacity-50">
                    <span className="mr-1 text-lg">&#8592;</span> Back to Home
                </div>
            </div>

            <div className="w-full max-w-2xl bg-white dark:bg-gray-800 dark:bg-opacity-90 rounded-lg shadow-md p-6">
                {/* Question number skeleton */}
                <div className="flex items-center mb-4">
                    <div className="h-9 bg-gray-200 dark:bg-gray-700 rounded w-48"></div>
                </div>

                {/* Progress bar skeleton */}
                <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded mb-6"></div>

                {/* Question text skeleton */}
                <div className="mb-6">
                    <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-2"></div>
                    <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-1/2"></div>
                </div>

                {/* Options skeleton */}
                <ul className="space-y-4">
                    {[1, 2, 3, 4].map((index) => (
                        <li
                            key={index}
                            className="p-4 rounded-md border border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-gray-900 animate-pulse"
                        >
                            <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-2/3"></div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
} 