import React from 'react'
import { useTranslations } from 'next-intl';
import Separator from '../ui/separator';

const Infrastructure: React.FC = () => {
  const t = useTranslations('infrastructure');
  const cloudItems = t.raw('cloud.items') as string[];
  const experienceItems = t.raw('experience.items') as string[];

  return (
    <section className="w-full">
      <Separator title={t('heading')} />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        <div className="card bg-base-200 shadow-sm">
          <div className="card-body">
            <h3 className="card-title text-lg">{t('homelab.title')}</h3>
            <p className="text-sm leading-relaxed whitespace-pre-line">{t('homelab.body')}</p>
          </div>
        </div>

        <div className="card bg-base-200 shadow-sm">
          <div className="card-body">
            <h3 className="card-title text-lg">{t('cloud.title')}</h3>
            <p className="text-sm leading-relaxed">{t('cloud.intro')}</p>
            <ul className="list-disc pl-5 text-sm leading-relaxed space-y-1">
              {cloudItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="card bg-base-200 shadow-sm">
          <div className="card-body">
            <h3 className="card-title text-lg">{t('experience.title')}</h3>
            <ul className="list-disc pl-5 text-sm leading-relaxed space-y-1">
              {experienceItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Infrastructure
