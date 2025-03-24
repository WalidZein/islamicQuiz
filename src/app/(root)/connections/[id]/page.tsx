import ConnectionsGameClient from '../../../components/ConnectionsGameClient';
import SponsorshipCard from '../../../components/SponsorshipCard';
import { Metadata } from 'next';
import { getGameById } from '@/data/gameData';

type ConnectionsPageProps = {
    params: Promise<{
        id: string;
    }>
};

export async function generateMetadata({ params }: ConnectionsPageProps): Promise<Metadata> {
    const game = getGameById((await params).id);
    const title = game?.title || `Islamic Connections ${game?.id} | Daily Islamic Word Groups`;

    return {
        title,
        description: 'Test your Islamic knowledge with our daily word connection puzzles. Group Islamic terms into meaningful categories.',
        keywords: 'Islamic Connections, Islamic game, word connections, Islamic terms, Islamic quiz, daily puzzle, Islamic knowledge test',
        openGraph: {
            title,
            description: 'Test your Islamic knowledge with our daily word connection puzzles. Group Islamic terms into meaningful categories.',
            type: 'website',
            siteName: 'Islamic Connections',
            locale: 'en_US',
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description: 'Test your Islamic knowledge with our daily word connection puzzles. Group Islamic terms into meaningful categories.',
        },
        robots: {
            index: true,
            follow: true,
        },
        alternates: {
            canonical: `/connections/${game?.id}`
        }
    };
}

export default async function ConnectionsGamePage({ params }: ConnectionsPageProps) {
    const id = (await params).id;
    return (
        <div className="flex flex-col items-center">
            <div className="w-full flex justify-center">
                <ConnectionsGameClient gameId={id} />
            </div>
            {/* <div className="w-full flex justify-center mt-1 mb-3">
                <SponsorshipCard
                    businessName="Remote Accounting Hub"
                    businessUrl="https://remoteaccountantshub.com/"
                    businessDescription="Empowering Your Business with Expert Remote Accounting Solution"
                    formUrl="https://forms.gle/JKBApc56YnaKyfyK6"
                    logoUrl="/images/sponsors/remote_accounting_hub_logo.png"
                />
            </div> */}
        </div>
    );
} 