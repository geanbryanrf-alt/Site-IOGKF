'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/i18n/LanguageContext';
import { renderRichText } from '@/i18n/RichText';

export default function SecaoTransporte() {
  const { t } = useLanguage();
  return (
    <section className="py-12 md:py-24 bg-dojo-black text-dojo-white border-b border-dojo-gray/30">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-xl sm:text-2xl md:text-3xl font-heading font-light tracking-widest uppercase mb-8 sm:mb-12"
          >
            {t.secaoTransporte.title}
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base md:text-lg text-dojo-white/80 font-light leading-relaxed mb-16"
          >
            <p className="mb-4">{renderRichText(t.secaoTransporte.lead[0], 'text-dojo-white font-medium')}</p>
            <p>{t.secaoTransporte.lead[1]}</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 text-center max-w-3xl mx-auto">
            {t.secaoTransporte.options.map((opcao, index) => (
              <motion.div
                key={opcao.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 + (index * 0.1) }}
                className="flex flex-col items-center p-6 border border-dojo-gray/30 hover:border-dojo-red/50 transition-colors duration-300"
              >
                <h4 className="text-sm tracking-widest uppercase font-medium text-dojo-red mb-4">{opcao.label}</h4>
                <p className="text-xs text-dojo-white/60 font-light">{opcao.desc}</p>
              </motion.div>
            ))}
          </div>
          
          {/* TODO: Futura integração com Google Maps e orientações detalhadas de rota podem ser adicionadas aqui */}
          <motion.div 
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 1, delay: 0.8 }}
             className="mt-16 text-xs tracking-widest uppercase text-dojo-lightgray"
          >
            {t.secaoTransporte.footnote}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
