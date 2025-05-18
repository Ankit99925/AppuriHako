import { useTranslations } from 'next-intl';
import React from 'react'

const Footer: React.FC = () => {
  const t = useTranslations('common');
  return (
    <footer className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4">
      <aside>
        <p>{t('footer.text')}</p>
      </aside>
    </footer>
  )
}

export default Footer