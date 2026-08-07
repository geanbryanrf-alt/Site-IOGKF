'use client';

import { motion } from 'framer-motion';
import { eventoData } from '@/data/evento';
import { useLanguage } from '@/i18n/LanguageContext';
import { renderRichText } from '@/i18n/RichText';

export default function SecaoLegado() {
  const { t } = useLanguage();
  return (
    <section id="legado" className="py-16 md:py-32 bg-dojo-black text-dojo-white">
      <div className="container mx-auto px-6 lg:px-12">
        
        {/* Título Principal */}
        <div className="text-center mb-12 md:mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-sm md:text-base font-light tracking-[0.3em] text-dojo-lightgray uppercase mb-4"
          >
            {t.secaoLegado.kicker}
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl sm:text-3xl md:text-5xl font-heading font-light tracking-widest uppercase"
          >
            {t.secaoLegado.title}{' '}
            <span className="block mt-3 sm:mt-4 text-dojo-red font-serif text-xl sm:text-2xl md:text-4xl tracking-normal">拳禅一如</span>
          </motion.h3>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
            className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl font-light text-dojo-white/80 uppercase tracking-widest"
          >
            {t.secaoLegado.subtitle}
          </motion.p>
        </div>

        {/* Fotos e História */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 lg:gap-24 items-center">
          
          <div className="flex flex-row sm:flex-row gap-4 sm:gap-6 relative">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="w-1/2"
            >
              <div 
                className="aspect-[3/4] bg-cover bg-center grayscale contrast-125 rounded-sm"
                style={{ backgroundImage: `url('${eventoData.imagens.sogenRoshiSanchin}')` }}
              />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
              className="w-1/2 sm:mt-12"
            >
              <div 
                className="aspect-[3/4] bg-cover bg-center grayscale contrast-125 rounded-sm"
                style={{ backgroundImage: `url('${eventoData.imagens.sogenRoshiZen}')` }}
              />
            </motion.div>

            {/* Legenda */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.6 }}
              className="absolute bottom-0 left-0 right-0 translate-y-full pt-4 sm:pt-6 flex flex-col space-y-1 text-[10px] sm:text-xs tracking-widest uppercase text-dojo-white/60"
            >
              <span className="text-dojo-white font-medium">{t.secaoLegado.captionName}</span>
              {t.secaoLegado.captionLines.map((linha) => (
                <span key={linha}>{linha}</span>
              ))}
            </motion.div>
          </div>

          {/* Texto — com margem superior em mobile para compensar a legenda */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-4 sm:space-y-6 text-sm sm:text-base md:text-lg text-dojo-white/80 font-light leading-relaxed mt-20 sm:mt-24 lg:mt-0"
          >
            {t.secaoLegado.body.map((linha) => (
              <p key={linha}>{renderRichText(linha, 'text-dojo-white font-medium')}</p>
            ))}
            <div className="pt-4 sm:pt-8 space-y-3 sm:space-y-4 text-dojo-white font-medium italic text-base sm:text-lg md:text-xl">
              <p>{t.secaoLegado.tribute[0]}</p>
              <p>{t.secaoLegado.tribute[1]}</p>
              <p className="text-dojo-red">{t.secaoLegado.tribute[2]}</p>
            </div>
          </motion.div>
        </div>

        {/* Citação Final */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-16 sm:mt-24 md:mt-32 text-center border-t border-dojo-gray/30 pt-10 sm:pt-16 max-w-2xl mx-auto"
        >
          <p className="text-xs md:text-sm text-dojo-lightgray tracking-widest font-light leading-loose uppercase">
            {t.secaoLegado.quote}
          </p>
        </motion.div>

      </div>
    </section>
  );
}
