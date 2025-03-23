import ConnectionsGrid from '../../components/ConnectionsGrid';
import ConnectionsHeaderServer from '../../components/ConnectionsHeaderServer';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Islamic Connections | Daily Islamic Word Groups',
    description: 'Test your Islamic knowledge with our daily word connection puzzles. Group Islamic terms, prophets, angels and more into meaningful categories.',
    keywords: 'Islamic game, word connections, Islamic terms, Islamic quiz, daily puzzle, Islamic knowledge test',
    openGraph: {
        title: 'Islamic Connections | Daily Islamic Word Groups',
        description: 'Test your Islamic knowledge with our daily word connection puzzles. Group Islamic terms, prophets, angels and more into meaningful categories.',
        type: 'website',
        siteName: 'Islamic Connections',
        locale: 'en_US',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Islamic Connections | Daily Islamic Word Groups',
        description: 'Test your Islamic knowledge with our daily word connection puzzles. Group Islamic terms, prophets, angels and more into meaningful categories.',
    },
    robots: {
        index: true,
        follow: true,
    },
    alternates: {
        canonical: '/connections'
    }
}

export default function ConnectionsPage() {
    return (
        <div className="flex flex-col items-center py-10">
            <ConnectionsHeaderServer />
            <div className="w-full max-w-2xl">
                <ConnectionsGrid mostRecentAtTop={true} />
            </div>
        </div>
    );
} 