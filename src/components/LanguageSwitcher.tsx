'use client';

import { useLanguage } from '@/i18n/LanguageContext';

function FlagUK() {
  return (
    <svg viewBox="0 0 60 30" className="w-full h-full">
      <clipPath id="uk-flag-t">
        <path d="M0,0 v30 h60 v-30 z" />
      </clipPath>
      <g clipPath="url(#uk-flag-t)">
        <path d="M0,0 v30 h60 v-30 z" fill="#00247d" />
        <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6" />
        <path d="M0,0 L60,30 M60,0 L0,30" stroke="#cf142b" strokeWidth="2" />
        <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10" />
        <path d="M30,0 v30 M0,15 h60" stroke="#cf142b" strokeWidth="6" />
      </g>
    </svg>
  );
}

function FlagBrazil() {
  return (
    <svg viewBox="0 0 60 30" className="w-full h-full">
      <rect width="60" height="30" fill="#009739" />
      <polygon points="30,4 56,15 30,26 4,15" fill="#fedd00" />
      <circle cx="30" cy="15" r="8" fill="#012169" />
    </svg>
  );
}

export default function LanguageSwitcher() {
  const { language, setLanguage, t } = useLanguage();

  return (
    <div className="flex items-center gap-2" role="group" aria-label="Language selector">
      <button
        type="button"
        onClick={() => setLanguage('en')}
        aria-label={t.languageSwitcher.labelEn}
        aria-pressed={language === 'en'}
        className={`w-7 h-5 sm:w-8 sm:h-[22px] overflow-hidden rounded-[2px] transition-all duration-300 ${
          language === 'en' ? 'ring-2 ring-dojo-red ring-offset-2 ring-offset-dojo-black' : 'opacity-50 hover:opacity-80'
        }`}
      >
        <FlagUK />
      </button>
      <button
        type="button"
        onClick={() => setLanguage('pt')}
        aria-label={t.languageSwitcher.labelPt}
        aria-pressed={language === 'pt'}
        className={`w-7 h-5 sm:w-8 sm:h-[22px] overflow-hidden rounded-[2px] transition-all duration-300 ${
          language === 'pt' ? 'ring-2 ring-dojo-red ring-offset-2 ring-offset-dojo-black' : 'opacity-50 hover:opacity-80'
        }`}
      >
        <FlagBrazil />
      </button>
    </div>
  );
}
