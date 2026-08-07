'use client';

import { motion } from 'framer-motion';
import { eventoData } from '@/data/evento';
import { useLanguage } from '@/i18n/LanguageContext';
import { renderRichText } from '@/i18n/RichText';

export default function SecaoExtras() {
  const { t } = useLanguage();
  return (
    <section className="py-16 md:py-32 bg-dojo-ivory text-dojo-black border-y border-dojo-gray/10">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-2xl sm:text-3xl md:text-5xl font-heading font-light tracking-widest uppercase mb-10 sm:mb-20 text-center"
        >
          {t.secaoExtras.title}
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 lg:gap-24">
          
          {/* Camiseta Oficial */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col space-y-8"
          >
            <h3 className="text-xl md:text-2xl font-heading tracking-widest uppercase text-dojo-red border-b border-dojo-gray/20 pb-4">
              {t.secaoExtras.shirt.title}
            </h3>

            <div
              className="w-full aspect-square bg-cover bg-center"
              style={{ backgroundImage: `url('${eventoData.imagens.camisetaOficial}')` }}
            />

            <div className="text-base md:text-lg text-dojo-gray font-light leading-relaxed space-y-4">
              {t.secaoExtras.shirt.body.map((linha) => (
                <p key={linha}>{renderRichText(linha, 'font-medium text-dojo-black')}</p>
              ))}
            </div>
          </motion.div>

          {/* Sayonara Party */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col space-y-8"
          >
            <h3 className="text-xl md:text-2xl font-heading tracking-widest uppercase text-dojo-red border-b border-dojo-gray/20 pb-4">
              {t.secaoExtras.sayonara.title}
            </h3>

            <div
              className="w-full aspect-square bg-cover bg-center grayscale"
              style={{ backgroundImage: `url('${eventoData.imagens.sayonaraParty1}')` }}
            />

            <div className="text-base md:text-lg text-dojo-gray font-light leading-relaxed space-y-4">
              <p>{t.secaoExtras.sayonara.body}</p>
              <ul className="space-y-2 mt-4 text-sm font-medium tracking-widest uppercase text-dojo-black">
                {t.secaoExtras.sayonara.list.map((item) => (
                  <li key={item}>● {item}</li>
                ))}
              </ul>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
