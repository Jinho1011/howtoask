import './globals.css';
import { Inter } from 'next/font/google';
import i18n from '../../../i18n';
import { redirect } from 'next/navigation';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
  params: { lang },
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  if (!i18n.locales.includes(lang)) redirect(`/${i18n.defaultLocale}/${lang}`);
  return (
    <html lang={lang}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
