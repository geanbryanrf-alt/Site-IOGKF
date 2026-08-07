'use client';

import { motion } from 'framer-motion';
import { eventoData } from '@/data/evento';
import { useLanguage } from '@/i18n/LanguageContext';
import { renderRichText } from '@/i18n/RichText';

export default function SecaoInscricaoAntecipada() {
  const { t } = useLanguage();
  const min = String(eventoData.inscricao.minimoParticipantes);
  const date = t.evento.interestDeadline;
  const threshold = t.secaoInscricaoAntecipada.threshold.replace('{min}', min).replace('{date}', date);

  return (
    <section id="inscricao" className="py-16 md:py-32 bg-dojo-black text-dojo-white border-b border-dojo-gray/30">
      <div className="container mx-auto px-6 lg:px-12">

        <div className="text-center max-w-4xl mx-auto mb-12 md:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-2xl sm:text-3xl md:text-5xl font-heading font-light tracking-widest uppercase mb-6 sm:mb-8 text-dojo-red"
          >
            {t.secaoInscricaoAntecipada.title}
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-sm sm:text-lg md:text-xl font-light text-dojo-white/80 leading-relaxed space-y-4 sm:space-y-6"
          >
            {t.secaoInscricaoAntecipada.intro.map((linha) => (
              <p key={linha}>{renderRichText(linha, 'text-dojo-white font-medium')}</p>
            ))}
            <p className="text-dojo-white font-medium">{t.secaoInscricaoAntecipada.noPayment}</p>
            <p>{threshold}</p>
            <p>{t.secaoInscricaoAntecipada.invitation}</p>
          </motion.div>
        </div>

        {/* Passos */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 md:gap-12 max-w-5xl mx-auto mb-12 md:mb-20">
          {t.secaoInscricaoAntecipada.steps.map((passo, index) => (
            <motion.div
              key={passo.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="flex flex-col items-center text-center p-6 sm:p-8 border border-dojo-gray/30 relative mt-4"
            >
              {/* Badge "Passo X" — corrigido o overflow */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-dojo-black px-3 py-1 text-xs font-medium tracking-[0.2em] text-dojo-red uppercase border border-dojo-gray/30 whitespace-nowrap">
                {passo.step}
              </div>
              <h4 className="text-sm sm:text-base lg:text-lg tracking-widest font-heading uppercase text-dojo-white mt-4 mb-3 sm:mb-4">{passo.title}</h4>
              <p className="text-xs sm:text-sm text-dojo-white/60 font-light leading-relaxed">{passo.desc.replace('{date}', date)}</p>
            </motion.div>
          ))}
        </div>

        {/* Por que uma Manifestação de Interesse */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-3xl mx-auto text-center border-t border-dojo-gray/30 pt-10 sm:pt-16 mb-10 sm:mb-16"
        >
          <h5 className="text-xs tracking-widest text-dojo-lightgray uppercase mb-6">{t.secaoInscricaoAntecipada.whyTitle}</h5>
          <div className="text-sm sm:text-base text-dojo-white/70 font-light leading-relaxed space-y-4">
            {t.secaoInscricaoAntecipada.why.map((linha) => (
              <p key={linha}>{renderRichText(linha, 'text-dojo-white font-medium')}</p>
            ))}
          </div>
        </motion.div>

        {/* Garantia & Métodos */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6 }}
          className="max-w-3xl mx-auto text-center border-t border-dojo-gray/30 pt-10 sm:pt-16 space-y-6 sm:space-y-8"
        >
          <div className="pt-4 sm:pt-8">
            <h5 className="text-xs tracking-widest text-dojo-lightgray uppercase mb-4">{t.secaoInscricaoAntecipada.paymentMethodsTitle}</h5>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
              {t.evento.paymentMethods.map(metodo => (
                <span key={metodo} className="px-3 sm:px-4 py-2 border border-dojo-gray/30 text-[10px] sm:text-xs tracking-widest uppercase text-dojo-white/80">
                  {metodo}
                </span>
              ))}
            </div>
            <p className="mt-4 text-xs text-dojo-lightgray italic">{t.secaoInscricaoAntecipada.paymentNote}</p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
