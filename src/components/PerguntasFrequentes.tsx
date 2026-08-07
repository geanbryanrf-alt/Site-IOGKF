'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';

export default function PerguntasFrequentes() {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleOpen = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="duvidas" className="py-16 md:py-32 bg-dojo-white text-dojo-black">
      <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-2xl sm:text-3xl md:text-5xl font-heading font-light tracking-widest uppercase mb-6"
          >
            {t.perguntasFrequentes.title}
          </motion.h2>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="space-y-4"
        >
          {t.faq.map((faq, index) => (
            <div 
              key={index}
              className="border border-dojo-gray/20 bg-white hover:border-dojo-red/50 transition-colors duration-300"
            >
              <button
                onClick={() => toggleOpen(index)}
                className="w-full flex items-center justify-between p-4 sm:p-6 text-left focus:outline-none"
                aria-expanded={openIndex === index}
              >
                <span className="text-xs sm:text-sm md:text-base font-medium tracking-widest uppercase text-dojo-black pr-3 sm:pr-4">
                  {faq.question}
                </span>
                <ChevronDown 
                  className={`flex-shrink-0 text-dojo-red transition-transform duration-500 ${openIndex === index ? 'rotate-180' : ''}`} 
                  size={20} 
                />
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pt-2 text-sm md:text-base font-light text-dojo-gray leading-relaxed border-t border-dojo-gray/10 mx-6">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
