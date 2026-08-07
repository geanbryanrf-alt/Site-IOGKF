'use client';

import { motion } from 'framer-motion';
import { eventoData } from '@/data/evento';
import { useLanguage } from '@/i18n/LanguageContext';
import { renderRichText } from '@/i18n/RichText';

export default function SecaoHotel() {
  const { t } = useLanguage();
  return (
    <section className="py-12 md:py-24 bg-dojo-black text-dojo-white">
      <div className="container mx-auto px-6 lg:px-12 text-center max-w-3xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-xl sm:text-2xl md:text-3xl font-heading font-light tracking-widest uppercase mb-6 sm:mb-8"
        >
          {t.secaoHotel.title}
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-base md:text-lg text-dojo-white/80 font-light leading-relaxed mb-10"
        >
          <p>{renderRichText(t.secaoHotel.lead, 'text-dojo-white font-medium')}</p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="container mx-auto px-6 lg:px-12 max-w-5xl"
      >
        <div className="relative w-full h-[45vh] sm:h-[55vh] lg:h-[65vh] overflow-hidden rounded-sm">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${eventoData.imagens.hotel}')` }}
          />
        </div>
      </motion.div>

      <div className="container mx-auto px-6 lg:px-12 text-center max-w-3xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-10 sm:mt-12 text-base md:text-lg text-dojo-white/80 font-light leading-relaxed"
        >
          {t.secaoHotel.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <a
            href={eventoData.links.hotel}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-8 border-b border-dojo-red text-dojo-red pb-1 tracking-widest uppercase text-sm hover:text-white hover:border-white transition-colors duration-300"
          >
            {t.secaoHotel.cta}
          </a>
          <p className="mt-6 text-xs text-dojo-lightgray uppercase tracking-widest">
            {t.secaoHotel.footnote}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
