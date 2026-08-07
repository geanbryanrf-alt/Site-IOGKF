'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/i18n/LanguageContext';

export default function BotaoInscricaoFixo() {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > window.innerHeight);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-6 right-6 z-40 lg:hidden"
        >
          <a
            href="#inscricao"
            className="bg-dojo-red text-white shadow-lg shadow-black/50 px-6 py-3 text-xs font-medium tracking-widest uppercase border border-dojo-darkred/50 block"
          >
            {t.botaoInscricaoFixo.cta}
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
