import ConnectionsGameClient from '../../components/ConnectionsGameClient';
import SponsorshipCard from '../../components/SponsorshipCard';
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
        <div className="flex flex-col items-center">
            <div className="w-full flex justify-center">
                <ConnectionsGameClient />
            </div>
            <div className="w-full flex justify-center mt-1 mb-3">
                <SponsorshipCard
                    businessName="Gyro Guyz"
                    businessUrl="https://www.thegyroguyz.com/"
                    businessDescription="Gyroz Done Right. Serving fresh, flavorful, halal Gyro, Chicken and Falafel"
                    formUrl="https://forms.gle/JKBApc56YnaKyfyK6"
                    logoUrl="/images/sponsors/gyro-guyz-logo.jpg"
                />
            </div>
        </div>
    );
} 