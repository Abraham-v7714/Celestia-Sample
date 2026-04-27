import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });
import Navbar from '@/components/Navbar';

export const metadata: Metadata = {
  title: 'Celestia Events | Premium Event Management',
  description: 'Experience majestic weddings, opulent birthdays, and cinematic events meticulously planned by Celestia Events. Luxury and legacy intertwined.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} antialiased bg-brand-dark text-white font-sans selection:bg-brand-gold selection:text-brand-dark`}>
        {children}
      </body>
    </html>
  );
}
