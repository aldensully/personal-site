import './globals.css';
import { DM_Sans } from 'next/font/google';

const dm = DM_Sans({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});
export const metadata = {
  title: 'aldn.dev',
  description: 'Computers, art, music',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={dm.className}>{children}</body>
    </html>
  );
}
