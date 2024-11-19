import Leaderboard from '../components/Leaderboard';

// Generate metadata for SEO
export function generateMetadata() {

    return {
        title: 'Islamic Quiz: Leaderboard',
    };
}

export default function LeaderboardPage() {
    return (
        <div className="container mx-auto">
            <Leaderboard />
        </div>
    );
} 