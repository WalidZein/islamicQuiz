/**
 * Props for the LeaderboardTooltip component
 * @interface LeaderboardTooltipProps
 * @property {boolean} show - Whether to display the tooltip
 */
interface LeaderboardTooltipProps {
    show: boolean;
}

/**
 * A tooltip component that appears above the leaderboard button
 * Features a bouncing animation and arrow pointer
 * @param {LeaderboardTooltipProps} props - Component props
 * @returns {JSX.Element | null} The tooltip element or null if hidden
 */
export default function LeaderboardTooltip({ show }: LeaderboardTooltipProps) {
    // Don't render anything if tooltip shouldn't be shown
    if (!show) return null;

    return (
        <div
            // Positioning and styling classes:
            // - Absolute positioning with offset from parent
            // - Dark background with white text
            // - Blur effect and border
            // - Infinite bounce animation
            // - Arrow pointer using pseudo-element
            className="absolute top-[calc(100%+20px)] right-0
                bg-gray-800 text-white px-1 py-1 rounded-lg shadow-lg text-sm w-24 z-10
                border border-gray-700 backdrop-blur-sm
                animate-[bounce_1.5s_ease-in-out_infinite]
                before:content-[''] before:absolute before:-top-1 before:right-4
                before:w-4 before:h-4 before:bg-gray-800 before:rotate-45
                before:-z-10"
        >
            <p className="font-medium text-center h-full">Click me!</p>

        </div>
    );
}