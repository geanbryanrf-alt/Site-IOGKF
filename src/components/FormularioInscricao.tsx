'use client';

import { motion } from 'framer-motion';
import { eventoData } from '@/data/evento';
import { useLanguage } from '@/i18n/LanguageContext';

// Um link só vale como formulário no ar quando deixa de ser o "#" provisório
// de src/data/evento.ts. Enquanto for, o botão aparece desabilitado.
const estaNoAr = (url: string) => url !== '#' && url.trim() !== '';

export default function FormularioInscricao() {
  const { t } = useLanguage();

  const formularios = [
    {
      id: 'pt',
      url: eventoData.links.formularioPt,
      rotulo: t.formularioInscricao.ctaPt,
    },
    {
      id: 'en',
      url: eventoData.links.formularioEn,
      rotulo: t.formularioInscricao.ctaEn,
    },
  ];

  return (
    <section className="py-16 md:py-32 bg-dojo-ivory text-dojo-black">
      <div className="container mx-auto px-6 lg:px-12 max-w-3xl">

        <div className="text-center mb-12 md:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-2xl sm:text-3xl md:text-5xl font-heading font-light tracking-widest uppercase mb-6"
          >
            {t.formularioInscricao.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base text-dojo-gray font-light"
          >
            {t.formularioInscricao.lead}
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="border border-dojo-gray/20 bg-white/50 p-8 sm:p-10 md:p-12"
        >
          <p className="text-center text-xs md:text-sm text-dojo-gray tracking-widest uppercase mb-6">
            {t.formularioInscricao.escolhaIdioma}
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            {formularios.map((formulario) =>
              estaNoAr(formulario.url) ? (
                <a
                  key={formulario.id}
                  href={formulario.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center text-center bg-dojo-red text-white px-6 py-6 tracking-widest uppercase text-xs md:text-sm hover:bg-dojo-darkred transition-colors duration-300"
                >
                  {formulario.rotulo}
                </a>
              ) : (
                <div
                  key={formulario.id}
                  aria-disabled="true"
                  className="flex flex-col items-center justify-center text-center border border-dojo-gray/30 text-dojo-gray px-6 py-6 tracking-widest uppercase text-xs md:text-sm cursor-not-allowed"
                >
                  <span>{formulario.rotulo}</span>
                  <span className="mt-3 border border-dojo-gray/40 px-3 py-1 text-[10px] tracking-widest">
                    {t.formularioInscricao.emBreve}
                  </span>
                </div>
              )
            )}
          </div>

          <p className="mt-6 text-xs text-dojo-gray uppercase tracking-widest text-center">
            {t.formularioInscricao.footnote}
          </p>
        </motion.div>

      </div>
    </section>
  );
}
