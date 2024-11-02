import './globals.css';
import Link from 'next/link';
import Script from 'next/script';
import GoogleAnalytics from './components/GoogleAnalytics';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Islamic Quiz',
  description: 'Daily quizzes on Islam',
  keywords: ["Islam", "Quiz", "Islamic", "Muslims"],
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
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-S3WE9N5R25"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
  
            gtag('config', 'G-S3WE9N5R25');
          `}
        </Script>
      </head>
      <body
        className="bg-gradient-to-r from-blue-600 to-indigo-700 dark:from-blue-700 dark:to-indigo-800 text-white"
      >
        <GoogleAnalytics />
        {/* Header (Optional) */}
        <header className="container mx-auto px-4 py-4">
          <Link href="/" className="flex items-center">
            {/* Logo or Icon */}
            <img
              src="/icon.png"
              alt="Islamic Quiz Logo"
              className="h-8 w-8 mr-2"
            />

            <span className="text-2xl font-bold">The Muslim Box</span>
          </Link>
        </header>
        {/* Main Content */}
        <main className="container mx-auto px-4">{children}</main>
        {/* Footer */}
        <footer className="container mx-auto px-4 py-6 text-center mt-10">
          © {new Date().getFullYear()} Islamic Quiz. All rights reserved.
        </footer>
      </body>
    </html >
  );
}
