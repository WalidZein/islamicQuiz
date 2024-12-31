import Header from '@/app/components/Header';
import { Metadata } from 'next';
import { Suspense } from 'react';
import "../../globals.css"

export const metadata: Metadata = {
    title: 'Quiz - Islamic Quiz',
    description: 'Take an Islamic quiz and test your knowledge',
};

export default function QuizLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <head>
                {/* <Script
            src="https://www.googletagmanager.com/gtag/js?id=G-S3WE9N5R25"
            strategy="afterInteractive"
          /> */}
                {/* <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
    
              gtag('config', 'G-S3WE9N5R25');
            `}
          </Script> */}
            </head>
            <body
                className="bg-gradient-to-r from-blue-600 to-indigo-700 dark:from-blue-700 dark:to-indigo-800 text-white"
            >
                <Suspense>
                    {/* <GoogleAnalytics /> */}
                </Suspense>
                <Header />
                <main className="container mx-auto">{children}</main>
                <footer className="container mx-auto px-4 py-6 text-center mt-8 text-xs">
                    © {new Date().getFullYear()} Islamic Quiz. All rights reserved.
                </footer>
            </body>
        </html>
    );
}