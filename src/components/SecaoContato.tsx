'use client';

import { motion } from 'framer-motion';
import { eventoData } from '@/data/evento';
import { useLanguage } from '@/i18n/LanguageContext';

export default function SecaoContato() {
  const { t } = useLanguage();
  const whatsappUrl = `https://wa.me/${eventoData.contato.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(t.secaoContato.whatsappMessage)}`;

  return (
    <section className="py-12 md:py-24 bg-dojo-black text-dojo-white border-y border-dojo-gray/20">
      <div className="container mx-auto px-6 lg:px-12 text-center max-w-2xl">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-2xl md:text-3xl font-heading font-light tracking-widest uppercase mb-8"
        >
          {t.secaoContato.title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-base text-dojo-white/80 font-light leading-relaxed mb-12"
        >
          {t.secaoContato.lead}
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-stretch justify-center gap-4 sm:gap-6"
        >
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group w-full sm:w-auto bg-transparent border border-dojo-white/30 text-dojo-white px-10 py-5 hover:bg-white hover:text-dojo-black transition-colors duration-300 block text-center"
          >
            <span className="block text-xs tracking-widest uppercase">{t.secaoContato.whatsapp}</span>
            <span className="block mt-2 text-sm font-light text-dojo-lightgray group-hover:text-dojo-black transition-colors">
              {eventoData.contato.whatsappExibicao}
            </span>
          </a>
          <a
            href={`mailto:${eventoData.contato.email}`}
            className="group w-full sm:w-auto bg-transparent border border-dojo-white/30 text-dojo-white px-10 py-5 hover:bg-white hover:text-dojo-black transition-colors duration-300 block text-center"
          >
            <span className="block text-xs tracking-widest uppercase">{t.secaoContato.email}</span>
            <span className="block mt-2 text-sm font-light text-dojo-lightgray group-hover:text-dojo-black transition-colors break-all">
              {eventoData.contato.email}
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
