'use client';
import { usePathname } from 'next/navigation';
import { useLocale } from 'next-intl';
import { Link } from '@/i18n/navigation';

const LanguageSwitcher: React.FC = () => {
  const locale = useLocale();
  const pathname = usePathname();

  // Get the path without locale prefix
  const path = pathname.replace(/^\/(en|ja)/, '') || '/';

  // The locale to switch to
  const nextLocale = locale === 'en' ? 'ja' : 'en';

  return (
    <Link
      href={path}
      locale={nextLocale}
      className="btn btn-ghost btn-circle"
    >
      {locale === 'en' ? '🇯🇵' : '🇬🇧'}
    </Link>
  );
};

export default LanguageSwitcher;

