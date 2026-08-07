'use client';

import { createContext, useContext, useState, ReactNode } from 'react';
import { dictionary, type Dictionary } from './dictionary';

export type Language = 'en' | 'pt';

interface LanguageContextValue {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Dictionary;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  // O site é originalmente em inglês: cada nova visita/aba sempre carrega em EN,
  // independentemente da escolha feita em uma sessão anterior.
  const [language, setLanguage] = useState<Language>('en');

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: dictionary[language] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within a LanguageProvider');
  return ctx;
}
