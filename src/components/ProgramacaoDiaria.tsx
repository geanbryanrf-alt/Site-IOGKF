'use client';

import { motion } from 'framer-motion';
import { eventoData } from '@/data/evento';
import { useLanguage } from '@/i18n/LanguageContext';

export default function ProgramacaoDiaria() {
  const { t } = useLanguage();
  const a = t.programacaoDiaria.activities;

  const programacao = [
    {
      periodo: t.programacaoDiaria.periods.morning,
      itens: [
        { horario: '04h20', atividade: a.wake },
        { horario: '04h30', atividade: a.zazen },
        { horario: '05h10', atividade: a.choka },
        { horario: '05h40', atividade: a.zazen },
        { horario: '06h00', atividade: a.kinhin },
        { horario: '06h10', atividade: a.breakfast },
        { horario: '07h00', atividade: a.samu },
        { horario: '08h00', atividade: a.karateTraining },
      ],
    },
    {
      periodo: t.programacaoDiaria.periods.midday,
      itens: [
        { horario: '10h30', atividade: a.bath },
        { horario: '11h30', atividade: a.lunch },
        { horario: '12h30', atividade: a.rest },
      ],
    },
    {
      periodo: t.programacaoDiaria.periods.afternoon,
      itens: [
        { horario: '14h00', atividade: a.zazen },
        { horario: '14h20', atividade: a.mondo },
        { horario: '15h00', atividade: a.karateTraining },
        { horario: '16h30', atividade: a.lightMeal },
        { horario: '17h00', atividade: a.bath },
      ],
    },
    {
      periodo: t.programacaoDiaria.periods.evening,
      itens: [
        { horario: '18h30', atividade: a.dinner },
        { horario: '19h30', atividade: a.dharma },
        { horario: '20h20', atividade: a.zazen },
        { horario: '21h00', atividade: a.silence },
      ],
    },
  ];

  return (
    <section id="programacao" className="py-16 md:py-32 bg-dojo-black text-dojo-white relative">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">

        {/* Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-16 mb-12 md:mb-24 items-end">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-heading font-light tracking-widest uppercase mb-4 sm:mb-8">
              {t.programacaoDiaria.title} <span className="text-dojo-red block mt-2">{t.programacaoDiaria.titleHighlight}</span>
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-sm sm:text-base md:text-lg font-light text-dojo-white/70 leading-relaxed border-l border-dojo-red pl-4 sm:pl-6"
          >
            <p>{t.programacaoDiaria.lead[0]}</p>
            <p className="mt-2 text-dojo-white font-medium">{t.programacaoDiaria.lead[1]}</p>
            <p className="mt-2">{t.programacaoDiaria.lead[2]}</p>
          </motion.div>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto border-t border-dojo-gray/30 pt-10 sm:pt-16">
          {programacao.map((bloco, bIndex) => (
            <motion.div
              key={bloco.periodo}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: bIndex * 0.1 }}
              className="mb-10 sm:mb-16"
            >
              <h4 className="text-dojo-red text-xs sm:text-sm tracking-[0.3em] font-medium uppercase mb-5 sm:mb-8 text-center">
                {bloco.periodo}
              </h4>
              <div className="space-y-0">
                {bloco.itens.map((item, iIndex) => (
                  <div
                    key={iIndex}
                    className="flex items-stretch border-b border-dojo-gray/20 group hover:border-dojo-red/50 transition-colors duration-300"
                  >
                    {/* Horário — coluna fixa */}
                    <div className="w-16 sm:w-28 shrink-0 py-3 sm:py-4 pr-3 sm:pr-8 flex items-center justify-end sm:text-right">
                      <span className="text-xs sm:text-sm tracking-widest text-dojo-red/80 group-hover:text-dojo-red transition-colors duration-300 font-medium">
                        {item.horario}
                      </span>
                    </div>
                    {/* Separador vertical */}
                    <div className="w-[1px] bg-dojo-gray/20 group-hover:bg-dojo-red/30 transition-colors duration-300 my-2" />
                    {/* Atividade */}
                    <div className="py-3 sm:py-4 pl-3 sm:pl-8 flex items-center">
                      <span className="text-sm sm:text-base md:text-lg font-light text-dojo-white group-hover:text-dojo-red transition-colors duration-300">
                        {item.atividade}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mt-12 sm:mt-24 text-center"
        >
          {eventoData.links.programacaoPDF !== '#' && (
            <a
              href={eventoData.links.programacaoPDF}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-dojo-white/30 text-dojo-white px-8 sm:px-10 py-4 text-xs tracking-widest uppercase hover:bg-white/10 transition-colors duration-300 mb-6"
            >
              {t.programacaoDiaria.downloadCta}
            </a>
          )}
          <p className="text-xs tracking-widest uppercase text-dojo-lightgray">
            {t.programacaoDiaria.disclaimer}
          </p>
        </motion.div>

      </div>
    </section>
  );
}
