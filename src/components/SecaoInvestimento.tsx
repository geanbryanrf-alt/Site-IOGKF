'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/i18n/LanguageContext';
import { renderRichText } from '@/i18n/RichText';

export default function SecaoInvestimento() {
  const { t } = useLanguage();

  return (
    <section id="investimento" className="py-16 md:py-32 bg-dojo-ivory text-dojo-black border-y border-dojo-gray/10">
      <div className="container mx-auto px-6 lg:px-12">

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-2xl sm:text-3xl md:text-5xl font-heading font-light tracking-widest uppercase mb-10 sm:mb-20 text-center"
        >
          {t.investimento.title}
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 max-w-5xl mx-auto items-start">

          {/* Gasshuku — valor principal */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col border border-dojo-red/40 bg-white/50 p-8 sm:p-10 md:p-12 h-full"
          >
            <h3 className="text-lg md:text-xl font-heading tracking-widest uppercase text-dojo-black">
              {t.investimento.gasshuku.title}
            </h3>

            <div className="mt-6 pb-8 border-b border-dojo-gray/20">
              <p className="text-4xl md:text-5xl font-heading font-light tracking-wider text-dojo-red">
                {t.investimento.gasshuku.price}
              </p>
              <p className="mt-2 text-xs tracking-[0.2em] uppercase text-dojo-gray">
                {t.investimento.perParticipant}
              </p>
            </div>

            <h4 className="mt-8 mb-5 text-xs font-medium tracking-[0.2em] uppercase text-dojo-gray">
              {t.investimento.includesTitle}
            </h4>
            <ul className="space-y-4">
              {t.investimento.gasshuku.includes.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm md:text-base text-dojo-black font-light leading-relaxed">
                  <span className="mt-2 h-1 w-1 rounded-full bg-dojo-red shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Sayonara Party — opcional */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col border border-dojo-gray/20 p-8 sm:p-10 md:p-12 h-full"
          >
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
              <h3 className="text-lg md:text-xl font-heading tracking-widest uppercase text-dojo-black">
                {t.investimento.sayonara.title}
              </h3>
              <span className="px-3 py-1 border border-dojo-gray/30 text-[10px] tracking-[0.2em] uppercase text-dojo-gray">
                {t.investimento.sayonara.optional}
              </span>
            </div>

            <div className="mt-6 pb-8 border-b border-dojo-gray/20">
              <p className="text-4xl md:text-5xl font-heading font-light tracking-wider text-dojo-black">
                {t.investimento.sayonara.price}
              </p>
              <p className="mt-2 text-xs tracking-[0.2em] uppercase text-dojo-gray">
                {t.investimento.perParticipant}
              </p>
            </div>

            <p className="mt-8 text-sm md:text-base text-dojo-gray font-light leading-relaxed">
              {t.investimento.sayonara.note}
            </p>
          </motion.div>

        </div>

        {/* Nota: nenhum pagamento nesta fase */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="max-w-3xl mx-auto mt-12 sm:mt-16 text-center text-sm md:text-base text-dojo-gray font-light leading-relaxed"
        >
          {renderRichText(t.investimento.note, 'font-medium text-dojo-black')}
        </motion.p>

      </div>
    </section>
  );
}
