import '../globals.css';
import Script from 'next/script';
import GoogleAnalytics from '../components/GoogleAnalytics';
import { Metadata } from 'next';
import { Suspense } from 'react';
import Header from '../components/Header';
import SocialLinks from '../components/SocialLinks';

export const metadata: Metadata = {
  title: 'The Muslim Box',
  description: 'Daily Islamic Games',
  keywords: ["Islam", "Quiz", "Islamic", "Muslims", "Games", "Connections"],
  openGraph: {
    images: process.env.WEB_URL + "/ogImage.png",
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_ANALYTICS_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
  
            gtag('config', '${process.env.GOOGLE_ANALYTICS_ID}');
          `}
        </Script>
        <meta name="facebook-domain-verification" content="gso5i3ovhnzfb8cf0zg37xusbrs949" />
      </head>
      <body
        className="bg-gradient-to-r from-blue-600 to-indigo-700 dark:from-blue-700 dark:to-indigo-800 text-white"
      >
        <Suspense>
          <GoogleAnalytics />
        </Suspense>
        <Header showStats={false} />
        <main className="container mx-auto px-4">{children}</main>
        <footer className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col items-center gap-8 mb-8 pb-8 border-b border-white/10">
              {/* Community Section */}
              <div className="text-center">
                <SocialLinks />
              </div>
            </div>

            {/* Copyright Section */}
            <div className="text-center text-sm text-white/80">
              <p>© {new Date().getFullYear()} Islamic Quiz. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
