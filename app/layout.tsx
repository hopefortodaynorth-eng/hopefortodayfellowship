import type { Metadata } from 'next';
import { Suspense } from 'react';
import './globals.css';
import Navbar from '@/components/Navbar';
import SiteBackground from '@/components/SiteBackground';
import MainWrapper from '@/components/MainWrapper';
import Footer from '@/components/Footer';
import JoinCommunityButton from '@/components/JoinCommunityButton';

export const metadata: Metadata = {
  title: 'Hope For Today Fellowship Sutton | Sutton, ON',
  description: 'Hope For Today Fellowship Sutton in Sutton, Ontario. The Cross • The Empty Tomb • Our Hope. Join us Sundays at 5:00 PM.',
  icons: {
    icon: '/HFTFNlogo.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased bg-transparent text-neutral-900">
        <SiteBackground />
        <Navbar />
        <Suspense fallback={null}>
          <JoinCommunityButton />
        </Suspense>
        <MainWrapper>{children}</MainWrapper>
        <Footer />
      </body>
    </html>
  );
}
