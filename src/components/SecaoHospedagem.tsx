'use client';

import { motion } from 'framer-motion';
import { eventoData } from '@/data/evento';
import { useLanguage } from '@/i18n/LanguageContext';
import { renderRichText } from '@/i18n/RichText';

const hospedagemImagens: Record<string, string> = eventoData.imagens.hospedagem;

export default function SecaoHospedagem() {
  const { t } = useLanguage();
  return (
    <section id="hospedagem" className="py-16 md:py-32 bg-dojo-ivory text-dojo-black">
      <div className="container mx-auto px-6 lg:px-12">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-heading font-light tracking-widest uppercase mb-6 sm:mb-8 text-dojo-red">
              {t.secaoHospedagem.title} <br className="hidden md:block"/>{t.secaoHospedagem.titleHighlight}
            </h2>
            <div className="space-y-4 sm:space-y-6 text-base sm:text-lg md:text-xl font-light text-dojo-gray leading-relaxed">
              {t.secaoHospedagem.body.map((linha) => (
                <p key={linha}>{renderRichText(linha, 'font-medium text-dojo-black')}</p>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white/50 p-6 sm:p-8 md:p-12 border border-dojo-gray/10"
          >
            <h4 className="text-sm tracking-widest uppercase font-medium text-dojo-black mb-8 border-b border-dojo-red/30 pb-4">
              {t.secaoHospedagem.detailsTitle}
            </h4>

            <ul className="space-y-6">
              {t.secaoHospedagem.details.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-dojo-red mr-4 mt-1">●</span>
                  <span className="text-base text-dojo-gray font-light">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Quarto, cozinha, refeições e trabalho comunitário — o dia a dia da estadia. */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mt-12 sm:mt-16">
          {t.secaoHospedagem.photos.map((foto, index) => (
            <motion.div
              key={foto.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 * index }}
              className="aspect-square relative overflow-hidden group"
            >
              <div
                className="absolute inset-0 bg-cover bg-center select-none transition-transform duration-1000 group-hover:scale-105"
                style={{ backgroundImage: `url('${hospedagemImagens[foto.key]}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 text-white font-medium tracking-widest uppercase text-[10px] sm:text-xs md:text-sm leading-tight">
                {foto.label}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
