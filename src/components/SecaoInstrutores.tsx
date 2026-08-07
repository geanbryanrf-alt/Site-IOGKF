'use client';

import { motion } from 'framer-motion';
import { eventoData } from '@/data/evento';
import { useLanguage } from '@/i18n/LanguageContext';
import InstrutorCarrossel from './InstrutorCarrossel';

export default function SecaoInstrutores() {
  const { t } = useLanguage();

  return (
    <section id="instrutores" className="py-16 md:py-32 bg-dojo-ivory text-dojo-black overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">

        <div className="text-center mb-12 md:mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-2xl sm:text-3xl md:text-5xl font-heading font-light tracking-widest uppercase text-dojo-red"
          >
            {t.secaoInstrutores.title}
          </motion.h2>
        </div>

        <div className="flex flex-col space-y-16 sm:space-y-24 md:space-y-32">

          {/* Instrutor 1 - Paolo Taigō Spongia */}
          <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-12 lg:gap-24">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/2"
            >
              <InstrutorCarrossel imagens={eventoData.imagens.instrutorPaoloCarrossel} />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              className="w-full lg:w-1/2 flex flex-col justify-center space-y-6 sm:space-y-8"
            >
              <div>
                <h3 className="text-xl sm:text-2xl md:text-4xl font-heading tracking-widest uppercase text-dojo-black mb-3 sm:mb-4">
                  {t.secaoInstrutores.paolo.name}
                </h3>
                <div className="space-y-1 sm:space-y-2 text-xs sm:text-sm tracking-widest uppercase font-medium text-dojo-gray border-l border-dojo-red pl-4">
                  {t.secaoInstrutores.paolo.credentials.map((linha) => (
                    <p key={linha}>{linha}</p>
                  ))}
                </div>
              </div>

              <div className="space-y-3 sm:space-y-4 text-dojo-gray/90 font-light leading-relaxed text-sm sm:text-base md:text-lg">
                {t.secaoInstrutores.paolo.body.map((linha) => (
                  <p key={linha}>{linha}</p>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Instrutor 2 - Kendo Bitti */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-8 sm:gap-12 lg:gap-24">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/2"
            >
              <InstrutorCarrossel imagens={eventoData.imagens.instrutorKendoCarrossel} />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              className="w-full lg:w-1/2 flex flex-col justify-center space-y-6 sm:space-y-8 lg:text-right"
            >
              <div>
                <h3 className="text-xl sm:text-2xl md:text-4xl font-heading tracking-widest uppercase text-dojo-black mb-3 sm:mb-4">
                  {t.secaoInstrutores.kendo.name}
                </h3>
                {/* border-l em mobile, border-r apenas em lg */}
                <div className="space-y-1 sm:space-y-2 text-xs sm:text-sm tracking-widest uppercase font-medium text-dojo-gray border-l lg:border-l-0 lg:border-r border-dojo-red pl-4 lg:pl-0 lg:pr-4">
                  {t.secaoInstrutores.kendo.credentials.map((linha) => (
                    <p key={linha}>{linha}</p>
                  ))}
                </div>
              </div>

              <div className="space-y-3 sm:space-y-4 text-dojo-gray/90 font-light leading-relaxed text-sm sm:text-base md:text-lg">
                {t.secaoInstrutores.kendo.body.map((linha) => (
                  <p key={linha}>{linha}</p>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Instrutor 3 - Zé Mário */}
          <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-12 lg:gap-24">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/2"
            >
              <InstrutorCarrossel imagens={eventoData.imagens.instrutorZeMarioCarrossel} />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              className="w-full lg:w-1/2 flex flex-col justify-center space-y-6 sm:space-y-8"
            >
              <div>
                <h3 className="text-xl sm:text-2xl md:text-4xl font-heading tracking-widest uppercase text-dojo-black mb-3 sm:mb-4">
                  {t.secaoInstrutores.zeMario.name}
                </h3>
                <div className="space-y-1 sm:space-y-2 text-xs sm:text-sm tracking-widest uppercase font-medium text-dojo-gray border-l border-dojo-red pl-4">
                  {t.secaoInstrutores.zeMario.credentials.map((linha) => (
                    <p key={linha}>{linha}</p>
                  ))}
                </div>
              </div>

              <div className="space-y-3 sm:space-y-4 text-dojo-gray/90 font-light leading-relaxed text-sm sm:text-base md:text-lg">
                {t.secaoInstrutores.zeMario.body.map((linha) => (
                  <p key={linha}>{linha}</p>
                ))}
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
