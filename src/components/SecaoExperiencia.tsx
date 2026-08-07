'use client';

import { motion } from 'framer-motion';
import { eventoData } from '@/data/evento';
import { useLanguage } from '@/i18n/LanguageContext';
import PraticasCarrossel from './PraticasCarrossel';

// Foto de cada prática, indexada pela `key` definida no dicionário.
const praticaImagens: Record<string, string> = eventoData.imagens.praticas;

export default function SecaoExperiencia() {
  const { t } = useLanguage();
  return (
    <section className="py-16 md:py-32 bg-dojo-ivory text-dojo-black overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        
        {/* Título */}
        <div className="text-center mb-12 md:mb-24 max-w-3xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-2xl sm:text-3xl md:text-5xl font-heading font-light tracking-widest uppercase mb-8 sm:mb-12"
          >
            {t.secaoExperiencia.titleLine1} <br className="md:hidden" /><span className="text-dojo-red">{t.secaoExperiencia.titleLine2}</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl font-light leading-relaxed text-dojo-gray space-y-4 sm:space-y-6"
          >
            <p>{t.secaoExperiencia.lead[0]}</p>
            <p>{t.secaoExperiencia.lead[1]}</p>
            <p className="font-medium text-dojo-black">{t.secaoExperiencia.lead[2]}</p>
            <p>{t.secaoExperiencia.lead[3]}</p>
          </motion.div>
        </div>

        {/* Práticas — carrossel único: uma foto e um título de cada */}
        <PraticasCarrossel praticas={t.secaoExperiencia.practices} imagens={praticaImagens} />

        {/* Destaque */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-center max-w-2xl mx-auto"
        >
          <div className="text-lg sm:text-xl md:text-3xl font-light italic leading-loose text-dojo-black mb-6 sm:mb-8">
            <p className="mb-2">{t.secaoExperiencia.highlight[0]}</p>
            <p className="mb-6 sm:mb-8">{t.secaoExperiencia.highlight[1]}</p>
            <p className="text-dojo-red font-medium">{t.secaoExperiencia.highlight[2]}</p>
          </div>

          <p className="text-xs sm:text-sm text-dojo-gray tracking-widest uppercase mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-dojo-gray/20">
            {t.secaoExperiencia.footer[0]} <br/>
            {t.secaoExperiencia.footer[1]}
          </p>
        </motion.div>

      </div>
    </section>
  );
}
