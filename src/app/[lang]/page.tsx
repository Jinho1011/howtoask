import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';

export default function Page() {
  const { t, lang } = useTranslation('home');

  return (
    <main className="flex flex-col">
      <div>
        <h1>{t('title')}</h1>
        {lang}
      </div>
      <div>
        <Link href="/?lang=ko" as="/ko">
          ko
        </Link>
      </div>
    </main>
  );
}
