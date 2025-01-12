// app/quiz/[id]/page.tsx

import { Metadata } from 'next';
import quizzes from '../../../../data/quizzes';
import QuizPageClient from '../../../components/QuizPageClient';
import { isQuizAvailable } from '@/utils/quizUtils';
import { notFound } from 'next/navigation';

interface QuizPageProps {
    params: Promise<{
        id: string;
    }>;
}

// Generate metadata for SEO
export async function generateMetadata({ params }: QuizPageProps): Promise<Metadata> {
    const quizId = parseInt((await params).id, 10);
    const quiz = quizzes.find((q) => q.id === quizId);

    if (quiz) {
        return {
            title: `Islamic Quiz: Quiz ${quiz.id}`,
        };
    } else {
        return {
            title: 'Islamic Quiz: Quiz Not Found',
        };
    }
}

export default async function QuizPage({ params }: QuizPageProps) {
    const quizId = parseInt((await params).id, 10);

    // Check if quiz is available
    if (!isQuizAvailable(quizId)) {
        notFound();
    }

    const quiz = quizzes.find((q) => q.id === quizId);

    if (!quiz) {
        return (
            <div className="flex flex-col items-center py-10">
                <h1 className="text-3xl font-bold mb-4 text-white">Quiz Not Found</h1>
                <p className="text-white">The quiz you're looking for does not exist.</p>
                <button
                    className="mt-6 bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300"
                    onClick={() => {
                        // Since this is a Server Component, we cannot use useRouter.
                        // Instead, we can provide a link.
                        window.location.href = '/';
                    }}
                >
                    Go back to Home
                </button>
            </div>
        );
    }

    return (
        <QuizPageClient quiz={quiz} />
    );
}
