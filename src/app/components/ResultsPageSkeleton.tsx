export default function ResultsPageSkeleton() {
    return (
        <div className="min-h-screen py-10 px-4">
            <div className="w-full max-w-xl mx-auto mb-4">
                {/* Back button skeleton */}
                <div className="w-32 h-6 bg-gray-600 rounded animate-pulse" />
            </div>

            <div className="w-full max-w-xl mx-auto bg-white/95 dark:bg-gray-900/95 border border-gray-200 dark:border-gray-800 rounded-lg shadow-md">
                <div className="border-b border-gray-200 dark:border-gray-800 p-4">
                    {/* Title skeleton */}
                    <div className="w-48 h-8 bg-gray-200 dark:bg-gray-700 rounded mx-auto animate-pulse" />
                </div>
                <div className="p-6">
                    <div className="flex">
                        {/* Vertical label skeleton */}
                        <div className="flex items-center mr-2">
                            <div className="w-4 h-16 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
                        </div>

                        {/* Chart bars skeleton */}
                        <div className="flex-1 space-y-4">
                            {Array.from({ length: 5 }).map((_, index) => (
                                <div key={index} className="flex items-center gap-4">
                                    {/* Number skeleton */}
                                    <div className="w-6 h-4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />

                                    {/* Bar skeleton */}
                                    <div className="flex-1 h-8 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />

                                    {/* Percentage skeleton */}
                                    <div className="w-12 h-4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
} 